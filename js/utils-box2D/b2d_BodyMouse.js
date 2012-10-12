/**
 * @author Fabrice
 *
 * patterne : Module
 * 
 * Permet de savoir si la souris
 * click sur un body du world
 */

var Mouse = ( function() {
    
    var isMouseDown = false, mouseX = 0, mouseY = 0, selectedBody, mousePVec;
    
    /* ------------------- */
    /* MOUSE EVENT HANDLER */
    function init ()
    {
        document.addEventListener("mousedown", onDocumentMouseDown, true);
        document.addEventListener("mouseup", onDocumentMouseUp, true);
    }
    
    function kill ()
    {
        document.removeEventListener("mousedown", onDocumentMouseDown, true);
        document.removeEventListener("mouseup", onDocumentMouseUp, true);
    }
    
    function onDocumentMouseDown (e)
    {
        isMouseDown = true;
        handleMouseMove(e);
        //document.addEventListener("mousemove", handleMouseMove, true);
    }
    
    function onDocumentMouseUp ()
    {
        //document.removeEventListener("mousemove", handleMouseMove, true);
        isMouseDown = false;
        mouseX = undefined;
        mouseY = undefined;
    }
    /* END MOUSE EVENT HANDLER */
    /* ----------------------- */
    
    function getBodyAtMouse ()
    {
        mousePVec = new b2Vec2(mouseX, mouseY);
        var aabb = new b2AABB();
        
        aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
        aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);
        
        // Query the world for overlapping shapes.
        selectedBody = null;
        world.QueryAABB(getBodyCB, aabb);
        return selectedBody;
    }
    
    function handleMouseMove (e)
    {
        mouseX = (e.clientX - CANVAS_POSITION.x) / SCALE;
        mouseY = (e.clientY - CANVAS_POSITION.y) / SCALE;
    }
    
    function getBodyCB(fixture) {
        if(fixture.GetBody().GetType() != b2Body.b2_staticBody) {
            if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
                selectedBody = fixture.GetBody();
                return false;
            }
        }
        return true;
    }
    
    return {
        
        // METHOD
        initClickListener : init,
        removeClickListener : kill,
        getBodyAtMouse : getBodyAtMouse,
        
        // GETTER
        hasMouseDown : function(){ return isMouseDown; },
        mousePosition : function(){ return {x : mouseX, y : mouseY}; }
        
    };
    
}());
