/**
 * @author Fabrice
 *
 * patterne : Module
 * 
 * Class de construction d'un sol pour canvas et box2D
 */

var Wall = ( function() {

    function init ()
    {
        new Box({ // BOTTOM
            width : (CANVAS_WIDTH / SCALE),
            height : (5 / SCALE),
            x : CANVAS_WIDTH / 2 / SCALE,
            y : CANVAS_HEIGHT / SCALE
        });
        
        new Box({ // TOP
            width : (CANVAS_WIDTH / SCALE),
            height : (5 / SCALE),
            x : CANVAS_WIDTH / 2 / SCALE,
            y : 0
        });
        
        new Box({ // LEFT
            width : (5 / SCALE),
            height : (CANVAS_HEIGHT / SCALE),
            x : 0,
            y : CANVAS_HEIGHT / 2 / SCALE
        });
        
        new Box({ // RIGHT
            width : (5 / SCALE),
            height : (CANVAS_HEIGHT / SCALE),
            x : CANVAS_WIDTH / SCALE,
            y : CANVAS_HEIGHT / 2 / SCALE
        });
    }
    
    return { // dans les accolade du return, sont placé les var et methode public accessible depuis l'exterieur

        create : init

    };
}());
