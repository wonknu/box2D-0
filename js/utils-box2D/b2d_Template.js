/**
 * @author Fabrice
 * 
 * Creation d'objet box2D par default
 */

(function() {

  this.TemplateBox2D = (function() {
    
    /**
     * Constructor
     * @param {Object} options
     */
    function TemplateBox2D(options) {
        this.body = null;
        this.fixDef = new b2FixtureDef();
        this.bodyDef = new b2BodyDef();
        this.options = {
            x : 0,
            y : 0,
            density : 1.0,
            friction : 0.5,
            restitution : 0.2,
            type : b2Body.b2_staticBody
        };
        
        // extends les params par default
        $.extend(this.options, options);
        
        /**
         * setting de la template
         */
        this.createShape = function() {
            this.fixDef.density = this.options.density;
            this.fixDef.friction = this.options.friction;
            this.fixDef.restitution = this.options.restitution;
            
            this.bodyDef.position.x = this.options.x;
            this.bodyDef.position.y = this.options.y;
            this.bodyDef.type = this.options.type;
            this.body = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
        };
    }
    
    return TemplateBox2D;

  })();

}).call(this);
