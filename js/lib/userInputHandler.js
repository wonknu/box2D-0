/**
 * @author Fabrice
 *
 * pattern : Singleton
 * Objet d'instance unique dans un projet (pas de doublon possible)
 */

var UserInputHandler = (function() {
    // private var
    var _instance, // only instance of the Singleton object
    setting = {
        multiKey : true,
        eventDispatcher : true
    },
    key = {
        LEFT  : false,
        UP    : false,
        RIGHT : false,
        DOWN  : false
    };
    // can't be called outside of this object

    function init () // private methode
    {
        window.addEventListener('keydown', function (e)
        {
            if(setting.multiKey === false) {
                for (var attr in key)
                    if(key[attr] === true) return;
            }
            setKey(e, true);
        }, false);
        
        window.addEventListener('keyup', function (e)
        {
            setKey(e, false);
        }, false);
    }
    
    /**
     * Change la valeur active d'une touche
     */
    function setKey (e, value)
    {
        switch (e.keyCode) {
            case 37 : key.LEFT = value; break; // LEFT
            case 38 : key.UP = value; break; // UP
            case 39 : key.RIGHT = value; break; // RIGHT 
            case 40 : key.DOWN = value; break; // DOWN
        }
    }
    
    function Singleton (options)
    {
        options = options || {};
        setting = mergeObject(setting, options);
        
        /**
         * Singleton constructor
         */
        return {
            initKeyboardEvent : init,
            key : key
        };
    }

    var _static = {
        name : "SingletonTemplate",
        /**
         * Only way to get the only instance of the singleton object
         * @param {Object} options
         */
        getInstance : function(options) {
            if (_instance === undefined) {
                _instance = new Singleton(options);
            }
            return _instance;
        }
    };
    return _static;

})(); 