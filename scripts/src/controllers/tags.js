/*
 * Tags Controller
 */
feedly.controller('Tags', 
	['$scope', 
		function ($scope) {
			$scope.displayAllTags = false;
			
			/*
			 * For showing more tags, if contains more than 2 tags
			 */
			$scope.showTags = function () {
				$scope.displayAllTags = true;
			};

			/*
			 * For hiding more tags, if contains more than 2 tags
			 */
			$scope.hideTags = function () {
				$scope.displayAllTags = false;
			};
		}
	]
);