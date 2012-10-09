/**
 * @author Fabrice
 *
 * Function d'initialisation,
 * ecoute de l'evenement javascript
 * qui signifie que le DOM est chargé
 */

$(document).ready(function() {
    world = new b2World(
        new b2Vec2(0, 10),// GRAVITY
        true              // ALLOW TO SLEEP
    );
    
    // set up ground
    Ground.create();
    Debug.draw();
    // creation d'un carre'
    var box = new Box({
        width : 20 / SCALE,
        height : 20 / SCALE,
        x : 300 / SCALE,
        y : 100 / SCALE,
        type : b2Body.b2_dynamicBody
    });
    // creation d'un rond
    var circle = new Circle({
        radius : 20 / SCALE,
        x : 100 / SCALE,
        y : 50 / SCALE,
        type : b2Body.b2_dynamicBody
    });
    
    var arrElem = [box];
    
    function update ()
    {
        world.Step(FRAME_RATE, VELOCITY_ITERATIONS, POSITION_ITERATIONS);
        world.DrawDebugData();
        world.ClearForces();
        
        requestAnimFrame(update);
    }
    
    update();
}); 