/**
 * @author Fabrice
 *
 * patterne : Module
 * 
 * Class de construction d'un sol pour canvas et box2D
 */

var Ground = ( function() {

    function init ()
    {
        initFixtureDefinition();
        initBodyDefinition();
        initShape();
        
        world.CreateBody(bodyDef).CreateFixture(fixDef);
    }
    
    /**
     * Fixture Definition defines the attributes of the object,
     * such as density, friction, and restitution 
     */
    function initFixtureDefinition ()
    {
        fixDef = new b2FixtureDef();
        fixDef.density = 1.0;
        fixDef.friction = 0.5;
        fixDef.restitution = 0.2;
    }
    
    /**
     * Body Definition defines where in the world
     * the object is, and if it is dynamic or static
     */
    function initBodyDefinition ()
    {
        bodyDef = new b2BodyDef();
        bodyDef.type = b2Body.b2_staticBody;
        // positions the center of the object (not upper left!)
        bodyDef.position.x = CANVAS_WIDTH / 2 / SCALE;
        bodyDef.position.y = CANVAS_HEIGHT / SCALE;
    }
    
    function initShape ()
    {
        fixDef.shape = new b2PolygonShape();
        // half width, half height.
        fixDef.shape.SetAsBox((600 / SCALE) / 2, (10 / SCALE) / 2);
    }
    
    return { // dans les accolade du return, sont placé les var et methode public accessible depuis l'exterieur

        create : init

    };
}());
