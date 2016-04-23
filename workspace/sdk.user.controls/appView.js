define(function(require) {
  'use strict';
  var Class       = require('common/Class'),
  ModuleView  = require('common/platform/ModuleView'),
  Control     = require('common/ui/Control');
  return Class.create(
    ModuleView,
    {
      started: function($super) {
        var str = "day"; // default value
        var iTOD = new Date().getHours();
        if ( iTOD >= 0 && iTOD < 12 ) {
          str = "morning";
        } else {
          if ( iTOD < 17 ) {
            str = "afternoon";
          } else {
            str = "night";
          }
        }
        var obj = Control.getById( 'example' );
        obj.model.set( "TOD", str );
        return $super();
        }.override()
      }
    );
  });