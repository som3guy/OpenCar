  define(function(require) {
  'use strict';
  var Class       = require('common/Class'),
      ModuleView  = require('common/platform/ModuleView'),
      Control     = require('common/ui/Control');
  // As in the previous example, we'll use 'module' variables rather than 'this' variables.
  // In JavaScript, a 'module' (closure) variable like this is a scope-local static variable
  var txtView, timeText, timeBtn, controller;
  // Handle the action of the click here
  var onClick = function() {
      // Controller methods return a Promise (see SDK docs)
      // The Promise 'done' callback function is called with the
      // returned value from the asynchronous execution of the request.
      controller.getTimeStamp().done(function(dateString){
          timeText.model.set('text', dateString);
      });
  };
  return Class.create(
      ModuleView,
      {
          init: function() {
              // Get our control references from layout
              txtView = Control.getById("hello");
              timeText = Control.getById("time");
              timeBtn = Control.getById("timeBtn");
              // Set initial states
              txtView.model.set('text', "Time for OpenCar MVC!");
              timeBtn.model.set('text', "Press for Time");
              // Give the button our click listener
              timeBtn.addClickListener(onClick);
          },
          // The 'started' lifecycle is called AFTER the view / controller are wired together
          started: function() {
              // record our controller to module scope
              controller = this.getController();
          }
      }
  );
});