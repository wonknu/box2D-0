/**
 * @author Fabrice
 *
 * Function d'initialisation,
 * ecoute de l'evenement javascript
 * qui signifie que le DOM est chargé
 */

$(document).ready(function() {
    
    world = new b2World(
        new b2Vec2(0, 10), // GRAVITY
        true               // ALLOW TO SLEEP
    );
    
    //Debug.draw();
    Wall.create();
    Mouse.initClickListener();
    
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
    var arrElem = [];
    arrElem[circle.body.GetBody()] = new Actor(circle.body, 'img/rond.png', 57, 57);
    
    var userInput = UserInputHandler.getInstance();
    userInput.initKeyboardEvent();
    var key = userInput.key;
    
    function update ()
    {
        var userData, pos, b, bodyMouse;
        world.Step(FRAME_RATE, VELOCITY_ITERATIONS, POSITION_ITERATIONS);
        //world.DrawDebugData();
        world.ClearForces();
        
        requestAnimFrame(update);
        
        CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // clear canvas, pour ensuite le redessiner
        
        if(key.LEFT) console.log('LEFT : ' + key.LEFT);
        if(key.UP)console.log('UP : ' + key.UP);
        
        if(Mouse.hasMouseDown()) {
            bodyMouse = Mouse.getBodyAtMouse();
            if(notNull(bodyMouse)) {
                var bodyPosition = bodyMouse.GetWorldCenter(),
                mousePosition = Mouse.mousePosition();
                bodyMouse.ApplyImpulse(new b2Vec2((bodyPosition.x - mousePosition.x) * 10, (bodyPosition.y - mousePosition.y) * 10), bodyMouse.GetWorldCenter());
            }
        }
        
        // loop sur toute les occurence
        for (b = world.GetBodyList(); b; b = b.GetNext()) {
            if( (b.GetType() === b2Body.b2_dynamicBody || b.GetType() === b2Body.b2_kinematicBody) && // si c'est un body qui peut bouger
                notNull(b.GetFixtureList()) &&
                notNull(b.GetFixtureList().m_userData) &&                                             // si il a des données sur (image / taille ...)
                notNull(b.GetFixtureList().m_userData) ){
                arrElem[b].draw(); // on lui demande de ce dessiner
            }
        }
    }
    
    update();
}); 