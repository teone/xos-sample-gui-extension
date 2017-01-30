export default routesConfig;

function routesConfig($stateProvider: angular.ui.IStateProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('');

  $stateProvider
    .state('xos.xos-sample-gui-extension', {
      url: 'xos-sample-gui-extension',
      abstract: true,
      template: '<div ui-view></div>'
    })
    .state('xos.xos-sample-gui-extension.example-route', {
      url: '/example-route',
      parent: 'xos.xos-sample-gui-extension',
      template: `
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12">
              <h1>Xos Sample GUI Extension</h1>
            </div>
            <div class="col-xs-12">
              <p>This page is loaded from an external container!</p>
            </div>
          </div>
        </div>
      </section>
      `,
      controller: () => {
        console.log('ss');
      }
    });
}
