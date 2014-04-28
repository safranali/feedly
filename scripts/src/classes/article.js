/*
 * Article class.
 */
feedly.article = function () {
	"use strict";

	var _ajax = feedly.ajax,
		_api = feedly.api,
		
		/*
		 * For getting all articles.
		 */
		_getArticles = function (model, params, callback) {

			var _url = _api.getArticles();
			_ajax.get(null, model, _url, null, callback);
		};

	return {
		getArticles: _getArticles
	};
}();