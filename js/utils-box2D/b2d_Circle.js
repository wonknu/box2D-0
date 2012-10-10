/**
 * @author Fabrice
 * 
 * Creation d'objet box2D rond
 */

(function ()
{

  this.Circle = (function () 
  {
    
    /**
     * Constructor
     * @extends TemplateBox2D
     * 
     * @param {Object} options => radius, x, y, type, density, friction, restitution
     */
    function Circle (options)
    {
        TemplateBox2D.call(this, options);
        this.options.radius = options.radius || (10 / SCALE);
        this.init();
    }
    
    /**
     * setting de la box
     */
    Circle.prototype.init = function ()
    {
        this.fixDef.shape = new b2CircleShape(this.options.radius);
        
        this.createShape();
    };
    
    return Circle;

  })();

}).call(this);
