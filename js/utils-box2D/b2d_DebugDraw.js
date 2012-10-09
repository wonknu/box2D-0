/**
 * @author Fabrice
 *
 * patterne : Module
 * 
 * Class de debug pour box2D a utiliser
 * pour le debut de projet sans graphiques
 * 
 */

var Debug = ( function() {
    
    var debugDraw;
    
    function init ()
    {
        // create debug draw
        debugDraw = new b2DebugDraw();
        setting();
    }
    
    /**
     * Setup debug draw 
     */
    function setting ()
    {
        debugDraw.SetSprite(CTX);
        debugDraw.SetDrawScale(SCALE);
        debugDraw.SetFillAlpha(0.3);
        debugDraw.SetLineThickness(1.0);
        debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
        world.SetDebugDraw(debugDraw);
    }
    
    return { // dans les accolade du return, sont placé les var et methode public accessible depuis l'exterieur

        draw : init

    };
}());
