app.config(function( $routeProvider, $locationProvider, $httpProvider) {
   
  $routeProvider
  .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'IndexController'
    
    })
  .when('/work',{
      templateUrl: 'partials/work.html',
      controller: "WorkController"
      
    })
  .otherwise( {redirectTo: '/'
    })
    $locationProvider.html5Mode(true)
       
})