///////////////////////////////////////
//
// Clock Face
//
// Uses the HTML elements defined in "appLayout.html" to create the face of the clock. 
// OpenCar controls are created from the HTML elements, allowing different profiles
// to be applied to the clock face. The HTML elements are positioned by this module 
// into a round clock face.
//
// Create with config object: 
//      {
//          border      : "round" | "square",
//          numerals    : "arabic" | "partial" | "timer" | "roman_upper" | "roman_lower"
//      }
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        Control     = require('common/ui/Control'),
        DOMHelper   = require('common/DOMHelper');

    // Options for numeral styling on the clock face.

    var numeralStyles = {
        arabic      : [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
        partial     : [ " "," ","3"," "," ","6"," "," ","9"," "," ","12" ],
        stopwatch   : ["5","10","15","20","25","30","35","40","45","50","55","60"],
        roman_upper : ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],
        roman_lower : ["i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii"]
    };
 
    var HtmlClockFace = Class.create(
        {
            initialize: function( container, config ) {

                this.container = container;
                
                // Collect the HTML elements and create the corresponding
                // OpenCar controls for the numbers.
                
                this.clockElements = container.getElementsByClassName( "clockNumeral" );
                this.clockNumerals = this._createControls( container.id );
                  
                // Set the numeral style and border (border set before positioning as
                // its width must be accounted for in the layout).
                
                this._setNumeralStyle( config.numerals );
                this.borderWidth = this.preferredBorderWidth();
                
                if( config.shape === "square" ) {
                    this._setSquareBorder();
                }
                else {
                    this._setRoundBorder();
                }
                            
                // Reference points in the parent container to position the clock
                // numerals. Radius uses the shortest of the height or width, if the
                // container is not square. Reference points must be established after
                // border is set.

                var width = container.offsetWidth - (this.borderWidth * 2),
                    height = container.offsetHeight - (this.borderWidth * 2);

                this.CENTER = { x : width/2, y : height/2 };
                this.RADIUS = width < height ? width/2 : height/2;

                // Adjust and position the HTML elements to create the round clock face.
                
                this._adjustElements( this.clockElements );
                this._positionElements( this.clockElements );
            },
 
            // This function returns an array of OpenCar controls corresponding to the
            // HTML elements representing the numbers on the clock face. Elements are
            // expected to have names of the form: "element1", "element2" through
            // "element12".
            //            
            _createControls: function( idPrefix ) {

                var i,
                    control,
                    controls = [];
    
                for( i = 1; i <= 12; i++ ) {
                    control = Control.getById( idPrefix + i );
                    controls.push( control );
                }
                    
                return controls;
            },

            // This function adjusts the HTML elements representing the numbers on the 
            // clock face. Font size and line height appear to vary with the OpenCar 
            // profile, which affects vertical alignment of the text element. If the 
            // HTML element height and line height are both set to the font size, the
            // text becomes centered vertically, allowing proper visual positioning of
            // the numeral.
            //
            _adjustElements: function( elements ) {

                var i,
                    fontSize = DOMHelper.getComputedStyle( elements[0], 'font-size' );

                for( i = 0; i < elements.length; i++ ) {
                
                    DOMHelper.setStyle( elements[i], { 'line-height' : fontSize } );
                    DOMHelper.setStyle( elements[i], { 'height' : fontSize } );
                    DOMHelper.setStyle( elements[i], { 'width' : "50px" } );
                }
            },
            
            // Positions the HTML elements corresponding to the OpenCar controls that 
            // represent the numbers on the clock to create a round clock face.
            //            
            _positionElements: function( elements ) {

                var hours = [1,2,3,4,5,6,7,8,9,10,11,12],
                    angle = 0,
                    x, y,
                    i = 0;
                
                for( i = 0; i < elements.length; i++ ) {

                    // Position on the clock face for the numeral.
                                        
                    angle = Math.PI/6 * (hours[i] - 3);
                    x = this.CENTER.x + Math.cos(angle) * this.RADIUS * 0.78;
                    y = this.CENTER.y + Math.sin(angle) * this.RADIUS * 0.78;

                    // Numeral is centered at desired position.
                    
                    DOMHelper.setStyle( elements[i], { 'top' : (y - elements[i].offsetHeight/2) + "px" } );
                    DOMHelper.setStyle( elements[i], { 'left' : (x - elements[i].offsetWidth/2) + "px" } );
                }
            },
       
            // Sets the specified numeral style on the clock face. If the style is
            // not valid, default to arabic numerals.
            //
            _setNumeralStyle: function( style ) {

                var i,
                    numerals = numeralStyles[style];
                
                if( !numerals ) {
                    numerals = numeralStyles.arabic;
                }
                
                for( i = 0; i < this.clockNumerals.length; i++ ) {
                    this.clockNumerals[i].model.set( 'text', numerals[i] );
                }
            },

            // Pair of functions to set the clock shape round or square. The weight and
            // color of the border are determined indirectly by the OpenCar profile that
            // has been applied. (Derived from the font weight and font color).
            //  
            _setRoundBorder: function() {
                DOMHelper.setStyle( this.container, { 'border-radius' : "50%" } );
                DOMHelper.setStyle( this.container, { 'border' : this.borderWidth + "px solid " + this.getColor() } );
            },
            
            _setSquareBorder: function() {
                DOMHelper.setStyle( this.container, { 'border-radius' : 0 } );
                DOMHelper.setStyle( this.container, { 'border' : this.borderWidth + "px solid " + this.getColor() } );
            },
     
            // Calculates the width of the clock border, based on the font weight. This
            // helps preserve the illusion of the OpenCar profile being applied.
            //
            preferredBorderWidth: function() {
                
                var fontWeight = DOMHelper.getComputedStyle( this.clockElements[0], 'font-weight' ),
                    borderWidth;
                
                // Normalize font weight to a numerical value if it was reported
                // otherwise.
                
                if( fontWeight === "bold" )         { fontWeight = 700; }
                else if( fontWeight === "normal" )  { fontWeight = 400; }
                else if( isNaN( fontWeight ) )      { fontWeight = 400; }
                
                // Font weights range from 100 to 900; establish border width as a
                // percentage of font weight (border width less than 3 renders as 
                // single line which doesn't look appealing).
 
                borderWidth = Math.round( fontWeight * 0.008 );
                if( borderWidth < 2 ) {
                   borderWidth = 2;
                }
                                   
                return borderWidth;
            },
 
            // Returns the color of clock numerals, based on the profile applied.
            // This allows "HTMLClock" to apply the same color to the clock hands.
            //
            getColor: function() {
                return DOMHelper.getComputedStyle( this.clockElements[0], 'color' );
            }
        }
    );

    return HtmlClockFace;
});
