//-------------------------------
// OL simple example
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import BingMaps from 'ol/source/BingMaps.js';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new BingMaps({
        key: 'AgdfSiITbjOwmzHKzwutHUYonPY_D-OGbeJ-F89Hwncc22hFqeWBOFpxlK5jQdyU',
        imagerySet: 'Aerial'
      })
    })
  ],
  view: new View({
    center: [-13553864, 5918250],
    zoom: 11,
    minZoom: 9,
    maxZoom: 13
  })
});
