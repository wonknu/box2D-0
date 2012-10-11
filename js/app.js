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
    
    Debug.draw();
    Wall.create();
    Mouse.initClickListener();
    /*
    // creation d'un carre'
    var box = new Box({
        width : 20 / SCALE,
        height : 20 / SCALE,
        x : 300 / SCALE,
        y : 100 / SCALE,
        type : b2Body.b2_dynamicBody
    });
    */
    // creation d'un rond
    var circle = new Circle({
        radius : 20 / SCALE,
        x : 100 / SCALE,
        y : 50 / SCALE,
        type : b2Body.b2_dynamicBody,
        density : 1.0,
        friction : 0.5,
        restitution : 0.2
    });
    
    var arrElem = [new Actor(circle.body, 'img/rond.png', 57, 57)];

    function update ()
    {
        var userData, pos, b, bodyMouse;
        world.Step(FRAME_RATE, VELOCITY_ITERATIONS, POSITION_ITERATIONS);
        world.DrawDebugData();
        world.ClearForces();
        
        requestAnimFrame(update);
        
        //CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // clear canvas, pour ensuite le redessiner
        
        if(Mouse.hasMouseDown()) {
            console.log('string');
            bodyMouse = Mouse.getBodyAtMouse();
        }
        
        // loop sur toute les occurence
        for (b = world.GetBodyList(); b; b = b.GetNext()) {
            if(b.GetType() === b2Body.b2_dynamicBody && notNull(b.GetFixtureList()) && notNull(b.GetFixtureList().m_userData)){
                userData = b.GetFixtureList().m_userData;
                if (notNull(userData.img)){
                    pos = b.GetPosition();
                    CTX.save();
                    CTX.translate(pos.x * SCALE, pos.y * SCALE);
                    CTX.rotate(b.GetAngle());
                    CTX.drawImage(userData.img, -(userData.w) * .5, -(userData.h) * .5);
                    CTX.restore();
                }
            }
        }
    }
    
    update();
}); 