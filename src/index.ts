/// <reference path="../typings/index.d.ts" />
import * as angular from 'angular';

import 'angular-ui-router';
import 'angular-resource';
import 'angular-cookies';
import routesConfig from './routes';

angular.module('xos-sample-gui-extension', [
    'ui.router',
    'xosCore'
  ])
  .config(routesConfig)
  .run(function($log: ng.ILogService, $state: ng.ui.IStateService, NavigationService: any) {
    $log.info('[xos-sample-gui-extension] App is running');

    NavigationService.add({
      label: 'Example Extension',
      state: 'xos.xos-sample-gui-extension.example-route',
    });
  });
