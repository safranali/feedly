/*
 * A page service providing page utility services.
 */

feedly.factory('$page', 
    function() {

        var _title = "",
            _viewName = "";

        return {
            
            /*
             * For getting page title.
             */
            isActiveLink: function(viewName){
                return _viewName === viewName; 
            },

            /*
             * For getting page title.
             */
            setViewName: function(viewName){
                _viewName = viewName; 
            },

            /*
             * For getting page title.
             */
            getTitle: function(){
                return _title; 
            },

            /*
             * For setting page title.
             */
            setTitle: function(title) {

                _title = "feedly";
                if(title !==null && title.length > 0) {
                    _title = title + " - feedly";
                }
            }
        };
    }
);