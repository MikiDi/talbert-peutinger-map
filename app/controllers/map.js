import Controller from '@ember/controller';
import { action } from '@ember/object';
import fetch from 'fetch';
import { TrackedMap } from 'tracked-built-ins';
import { L } from 'ember-leaflet';

export default class MapController extends Controller {
  crs = L.CRS.Simple;
  activeOverlays = new TrackedMap();

  @action
  storeMap(event) {
    this.map = event.target;
  }

  async createSvgOverlay(overlay) {
    const response = await fetch(overlay.svgPath);
    const svgContent = await response.text();

    const svgElementBounds = [
      [-387.6, 0],
      [320, 766],
    ];

    // hack to get string html into dom
    var div = document.createElement('div');
    div.innerHTML = svgContent.trim();
    const svgElement = div.firstElementChild;

    svgElement.setAttribute('viewBox', '0 0 681.13281 60.163372');
    return L.svgOverlay(svgElement, svgElementBounds);
  }

  @action
  loadSvg(event) {
    const map = event.target;
    this.instantiateSvg(map);
  }

  @action
  async toggleOverlay(ol, event) {
    if (event.target.checked) {
      const leafletLayer = await this.createSvgOverlay(ol);
      leafletLayer.addTo(this.map);
      this.activeOverlays.set(ol, leafletLayer);
    } else {
      this.activeOverlays.get(ol).remove();
    }
  }
}
