define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ModuleView  = require('common/platform/ModuleView'),
        physics     = require('$MODULE_PATH/lib/physicsjs-0.6.0/physicsjs-full-0.6.0');

    /*

    This is a simple example of how a 3rd Party library might be used.

    The PhysicsJS library is included in this example.
    It is loaded as a RequiresJS module in full.

    Alternately, it could be loaded in the HTML via <script> tags included in the appLayout.html page.
    In that case, there may be issues with some libraries in knowing when all the content has been loaded.
    Relying upon the module "started" message may not be indicative of complete loading by the external scripts
    (use of the 'require' syntax, if applicable, avoids that concern).  Apps may need to test for script load
    ready state independently in such a case.

    Import of external libraries comes with caveats and should be used only when necessary.

    Also note that in the SDK external links for script and page loads (e.g. links) are functional
    but this is not supported within the vehicle.

    For experimental development purposes, such techniques may be helpful for
    a quick start, but external page links will not be allowed in a vehicle.

    The import of locally contained libraries is subject to certification acceptance review
    for appropriateness, utility, and size.
     */

    return Class.create(
        ModuleView,
        {
            /*
             View is transitioned in and elements are visible.
             */
            started: function($super) {
                doPhysics();
                return $super();
            }.override()

        }
    );

    // This function contains sample code from the PhysicsJS site.
    function doPhysics() {
        physics(function (world) {
            var viewWidth = window.innerWidth, 
                viewHeight = window.innerHeight, 
                viewportBounds = physics.aabb(0, 0, viewWidth, viewHeight),  // bounds of the window
                edgeBounce, 
                renderer;

            // create a renderer
            renderer = physics.renderer('canvas', {
                el: 'viewport', width: viewWidth, height: viewHeight
            });

            // add the renderer
            world.add(renderer);
            // render on each step
            world.on('step', function () {
                world.render();
            });

            // constrain objects to these bounds
            edgeBounce = physics.behavior('edge-collision-detection', {
                aabb: viewportBounds, restitution: 0.99, cof: 0.8
            });

            // resize events
            window.addEventListener('resize', function () {

                viewWidth = window.innerWidth;
                viewHeight = window.innerHeight;

                renderer.el.width = viewWidth;
                renderer.el.height = viewHeight;

                viewportBounds = physics.aabb(0, 0, viewWidth, viewHeight);
                // update the boundaries
                edgeBounce.setAABB(viewportBounds);

            }, true);

            // create some bodies
            world.add(physics.body('circle', {
                x: viewWidth / 2, y: viewHeight / 2 - 240, vx: -0.15, mass: 1, radius: 30, styles: {
                    fillStyle: '#cb4b16', angleIndicator: '#72240d'
                }
            }));

            world.add(physics.body('circle', {
                x: viewWidth / 2, y: viewHeight / 2, radius: 50, mass: 20, vx: 0.007, vy: 0, styles: {
                    fillStyle: '#6c71c4', angleIndicator: '#3b3e6b'
                }
            }));

            // add some fun interaction
            var attractor = physics.behavior('attractor', {
                order: 0,
                strength: 0.002
            });
            world.on({
                'interact:poke': function (pos) {
                    attractor.position(pos);
                    world.add(attractor);
                }, 'interact:move': function (pos) {
                    attractor.position(pos);
                }, 'interact:release': function () {
                    world.remove(attractor);
                }
            });

            // add things to the world
            world.add([
                physics.behavior('interactive', { el: renderer.el }), 
                physics.behavior('newtonian', { strength: 0.5 }), 
                physics.behavior('body-impulse-response'), 
                edgeBounce
            ]);

            // subscribe to ticker to advance the simulation
            physics.util.ticker.on(function (time) {
                world.step(time);
            });

            // start the ticker
            physics.util.ticker.start();
        });

    }
});
