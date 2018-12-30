export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).when('/title', {
      templateUrl: 'app/title/title.html',
      controller: 'TitleController',
      controllerAs: 'titleCtrl'
    }).when('/title/:id/detail', {
      templateUrl: 'app/title-details/title-detail.html',
      controller: 'TitleDetailController',
      controllerAs: 'titleDetailCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}
