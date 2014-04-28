/*
 * Root Controller
 */
feedly
  .controller('Root', ['$scope', '$page', '$location', 
    function ($scope, $page, $location) {
		$scope.$page = $page;

		/*
		 * Adding downstate class for active view.
		 */
		$scope.isActive = function (path) {
			
			var location = $location.path(),
				result = "";

			if (location.substr(0, path.length) === path &&
				location.length === path.length) {
				result = "active";
			}    
			return result;
		};
    }
  ]
);