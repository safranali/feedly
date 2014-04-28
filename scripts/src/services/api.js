/*
 * A service for getting RESTful api endpoints.
 */
feedly.api = function (){
	"using strict";

	var _baseUrl = window.location.origin + window.location.pathname;

	return {
		
		/*
		 * For reading json data form server
		 */
		getArticles: function () {
			return _baseUrl + "scripts/data.json";
		}
	};
}();