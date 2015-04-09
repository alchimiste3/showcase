'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')

  .controller('AccueilCtrl', function ($scope,$http){

    $http.get('jsons/data.json').success(function(data){
      $scope.json = data;

    }).error(function(data, status, headers, config) {

    });

    $scope.nom = "quentin laborde";


  });
