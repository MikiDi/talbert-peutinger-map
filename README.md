# talbert-peutinger-map

An attempt at reviving the [Peutinger Map Viewer](https://peutinger.atlantides.org/map-a/), inspired by Tom Elliot's [Call to Help Update the Peutinger Map Viewer](http://awmc.unc.edu/wordpress/blog/2021/08/30/call-to-help-update-the-peutinger-map-viewer/).  
This repository contains the ember.js frontend web-app sources and assumes an IIIF backend for hosting of the actual high-resolution map-scan. The location of the IIIF-hosted file is hardcoded in `app/templates/map.hbs` for now. Uses an [ember-leaflet wrapper](https://github.com/MikiDi/ember-leaflet-iiif/commits/main) for [leaflet-iiif](https://github.com/mejackreed/Leaflet-IIIF).

SVG's in `public` are obtained from the original app sources at [tpeut_map_a](https://github.com/paregorios/tpeut_map_a) and remain under their original copyright.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd talbert-peutinger-map`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
