/**
 * @author Fabrice
 *
 * Function pour raccourcir
 * certain utilisation du javascript
 * qui doivent etre inclu en premier
 */

/**
 * To know if something is not null and not undefined
 * @param {Object} something
 */
function notNull (something)
{
    return (something !== undefined && something !== null);
}

/**
 * return position of an element 
 */
function getElementPosition (element)
{
    var elem = element, tagname = "", x = 0, y = 0;
    while((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
        y += elem.offsetTop;
        x += elem.offsetLeft;
        tagname = elem.tagName.toUpperCase();
        if(tagname == "BODY") elem = 0;
        if(typeof(elem) == "object" && typeof(elem.offsetParent) == "object") elem = elem.offsetParent;
    }
    return {x: x, y: y};
}

/**
 * Overwrites first object's values with
 * second object's and adds second object's
 * if non existent in first one
 * @param {Object} o1
 * @param {Object} o2
 * @returns {Object} o3 a new object based on o1 and o2
 */
function mergeObject(o1,o2){
    var o3 = {}, attrname;
    for (attrname in o1) { o3[attrname] = o1[attrname]; }
    for (attrname in o2) { o3[attrname] = o2[attrname]; }
    return o3;
}