/// <reference path="../typings/index.d.ts" />
import * as angular from 'angular';

import 'angular-ui-router';
import 'angular-resource';
import 'angular-cookies';
import routesConfig from './routes';

angular.module('xos-sample-gui-extension', [
    'ui.router'
  ])
  .config(routesConfig)
  .run(function($log: ng.ILogService, $state: ng.ui.IStateService) {
    $log.info('[xos-sample-gui-extension] App is running');
    $state.go('xos-sample-gui-extension.example-route');
  });
