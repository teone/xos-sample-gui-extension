class DemoComponent {
  static $inject = ['XosSidePanel'];

  constructor(
    private XosSidePanel: any
  ) {
  }

  togglePanel() {
    this.XosSidePanel.injectComponent('xosAlert', {config: {type: 'info'}, show: true}, 'This content is injected by my sample UI extension');
  }
}

export const xosDemoComponent: angular.IComponentOptions = {
  template: require('./demo.html'),
  controllerAs: 'vm',
  controller: DemoComponent
};
