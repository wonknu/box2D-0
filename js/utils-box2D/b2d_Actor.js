/**
 * @author Fabrice
 * 
 * Creation d'objet box2D carre
 */

(function() {

  this.Actor = (function() {
    
    /**
     * Constructor
     * @param {Object} body
     * @param {Object} imgUrl
     * @param {int} width
     * @param {int} height
     */
    function Actor (body, imgUrl, width, height)
    {
        this.body = body;
        this.bodyElem = this.body.GetBody();
        this.imgUrl = imgUrl;
        this.width = width;
        this.height = height;
        this.img = null;
        this.createImage();
    }
    
    /**
     * Setting de l'acteur
     */
    Actor.prototype.createImage = function ()
    {
        this.img = new Image();
        this.img.src = this.imgUrl;
        
        this.body.m_userData = {
            img : this.img,
            w : this.width,
            h : this.height
        };
    };
    
    /**
     * Draw image from box2d body element
     */
    Actor.prototype.draw = function ()
    {
        var pos = this.bodyElem.GetPosition();
        CTX.save();
        CTX.translate(pos.x * SCALE, pos.y * SCALE);
        CTX.rotate(this.bodyElem.GetAngle());
        CTX.drawImage(this.img, -(this.width) * .5, -(this.height) * .5);
        CTX.restore();
    };
    
    return Actor;

  })();

}).call(this);
