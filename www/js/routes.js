angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('homeopathy.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('homeopathy.searchMedicines', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/searchMedicines.html',
        controller: 'searchMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.learnAboutHomeopathy', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/learnAboutHomeopathy.html',
        controller: 'learnAboutHomeopathyCtrl'
      }
    }
  })

  .state('homeopathy', {
    url: '/side-menu21',
    templateUrl: 'templates/homeopathy.html',
    controller: 'homeopathyCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});