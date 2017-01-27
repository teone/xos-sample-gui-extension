export default routesConfig;

function routesConfig($stateProvider: angular.ui.IStateProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('');

  $stateProvider
    .state('xos-sample-gui-extension', {
      url: '/xos-sample-gui-extension',
      abstract: true,
      template: '<div ui-view></div>'
    })
    .state('xos-sample-gui-extension.example-route', {
      url: '/example-route',
      parent: 'xos-sample-gui-extension',
      template: `Hey, sample extension is alive!`,
      controller: () => {
        console.log('ss');
      }
    });
}
