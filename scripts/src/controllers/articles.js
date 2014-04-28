/*
 * Articles Controller
 */
feedly.controller('Articles', 
	['$scope', '$page', '$paging', 'filterFilter', 
		function ($scope, $page, $paging, filterFilter) {

			// Setting page title
			$page.setTitle("Articles");
			
			/*
			NOTE: 
			The data is read from a file (services/data.json) and it is because there is no data 'Access-Control-Allow-Origin' header is present on the requested resource (http://pastebin.com/raw.php?i=bfUB0TPQ) else the below method would have been used to read the data from server.
			*/
			var _article = feedly.article,
				_callback = function (response) {
				
					$scope.posted = false;
					if(response.Success) {

						$scope.success = true;

						// initialising paging service
						$paging.init($scope, response.Data, filterFilter);
						
						/*
						 * assigning paging's next page method
						 */
						$scope.nextPage = function () {
							$paging.nextPage($scope);
						};
						
						/* 
						 * assigning paging's previous page method
						 */
						$scope.prevPage = function () {
							$paging.prevPage($scope);
						};
					} else {
						$scope.failure = true;
					}

					// explicitly calling $apply so it can change DOM closure to $scope
					$scope.$apply();
				};			

			// call user api for registration
			_article.getArticles($scope, null, _callback);
		}
	]
);