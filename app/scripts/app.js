'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) { //traite le chemin aprés les # dans url du site
    $routeProvider
      .when('/', {
        templateUrl: 'views/who_I_am.html',
        controller: 'WhoCtrl'
      })
      .when('/formation', {
        templateUrl: 'views/formation.html',
        controller: 'FormationCtrl'
      })
      .when('/projet', {
        templateUrl: 'views/projet.html',
        controller: 'ProjetCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact_Resources.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


