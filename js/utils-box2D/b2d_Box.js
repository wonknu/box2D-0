/**
 * @author Fabrice
 * 
 * Creation d'objet box2D carre
 */

(function() {

  this.Box = (function() {
    
    /**
     * Constructor
     * @extends TemplateBox2D
     * 
     * @param {Object} options => width, height, x, y, type, density, friction, restitution
     */
    function Box (options)
    {
        TemplateBox2D.call(this, options);
        this.options.width = options.width || (10 / SCALE);
        this.options.height = options.height || (10 / SCALE);
        this.init();
    }
    
    /**
     * setting de la box
     */
    Box.prototype.init = function ()
    {
        this.fixDef.shape = new b2PolygonShape();
        this.fixDef.shape.SetAsBox(
            (this.options.width * .5), // half width
            (this.options.height * .5) // half height
        );
        
        this.createShape();
    };
    
    return Box;

  })();

}).call(this);
