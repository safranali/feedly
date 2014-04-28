/*
 * Configuring views for application routes.
 */
feedly.config(
    ['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
      
            $routeProvider.
            when('/', {
                templateUrl: 'views/home.html'
            }).
            when('/articles', {
                templateUrl: 'views/articles.html'
            }).
            otherwise({
                redirectTo: '/'
            });
        }
    ]
);