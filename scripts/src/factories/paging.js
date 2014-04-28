/*
 * A paging service for traversing pages.
 */

feedly.factory('$paging', 
    function() {
        
        var _pageSize = 6,
            _items = null,
            
            /*
             * For settings items array for rendering
             */
            _setItems = function ($scope, startIndex, nextPage) {
            
                $scope.currentPage = nextPage;
                $scope.articles = _items.slice(startIndex);
            };

        return {

            /*
             * Initialising paging service
             */
            init: function ($scope, data, filterFilter) {
                
                _items = filterFilter(data, {isActive: true});

                $scope.articles = _items;
                $scope.currentPage = 1;
                $scope.pageSize = _pageSize;
                $scope.totalPages = Math.ceil(_items.length/_pageSize);
            },

            /*
             * For rendering next page and its items
             */
            nextPage: function ($scope) {

                var _currentPage = $scope.currentPage,
                    _totalPages = $scope.totalPages,
                    _nextPage = _currentPage + 1,
                    _startIndex = _currentPage * $scope.pageSize;

                if(_currentPage < _totalPages) {
                    _setItems($scope, _startIndex, _nextPage);
                }
            },

            /*
             * For rendering previous and its items
             */
            prevPage: function ($scope) {

                var _currentPage = $scope.currentPage,
                    _nextPage = _currentPage - 1,
                    _startIndex = (_nextPage - 1) * $scope.pageSize;

                if(_currentPage > 1) {
                    _setItems($scope, _startIndex, _nextPage);
                }
            }
        };
    }
);