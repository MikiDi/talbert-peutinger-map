import Route from '@ember/routing/route';

export default class MapRoute extends Route {
  basefolder = '/svg';
  svgs = [
    'gridlines.svg',
    'gridnumbers.svg',
    'islandnumbers.svg',
    'isolatedsymbols.svg',
    'isolated unnamed.svg',
    'lakenumbers.svg',
    'lakesoutline.svg',
    'mountainnumbers2.svg',
    'mountainnumbers copy.svg',
    'mountainnumbers.svg',
    'mountainsbrown.svg',
    'mountainsnofill.svg',
    'mountainspink.svg',
    'mountainsred.svg',
    'namesislandswater.svg',
    'names.svg',
    'nonamenumbers.svg',
    'riverflow.svg',
    'rivernumbers.svg',
    'riversdecorative.svg',
    'riversoutline.svg',
    'riverspartiallyerased.svg',
    'routesnodistance.svg',
    'routesnostart.svg',
    'routesoutline.svg',
    'routesrestoration.svg',
    'routestwoasone.svg',
    'shoreline.svg',
    'symbols.svg',
    'unnamedroutenumbers.svg',
    'unnamedroutesoutline.svg',
  ];

  model() {
    return this.svgs.map(
      function (fn) {
        return {
          name: fn.replace('.svg', ''),
          svgPath: this.basefolder + '/' + fn,
        };
      }.bind(this)
    );
  }
}
