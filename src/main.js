import 'ol/ol.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Draw from 'ol/interaction/Draw.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {Vector as VectorSource} from 'ol/source.js';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/geojson';

const raster = new TileLayer({
  source: new OSM()
});

const source = new VectorSource({wrapX: false});

const vector = new VectorLayer({
  source: source
});

const map = new Map({
  layers: [raster, vector],
  target: 'map',
  view: new View({
    center: [-11000000, 4600000],
    zoom: 4
  })
});

const typeSelect = document.getElementById('type');

let draw; // global so we can remove it later
function addInteraction() {
  const value = typeSelect.value;
  if (value !== 'None') {
    draw = new Draw({
      source: source,
      type: typeSelect.value
    });
    draw.on('drawend', (arg1) => {
      let parser = new GeoJSON();
     // let area = parser.writeFeatureObject(arg1.feature, {featureProjection: 'EPSG:3857'});
     // Try writeFeatures N- use GeoJSON().write.....
     //let area = parser.writeFeatures(arg1.feature, {featureProjection: map.getView().getProjection()});
     // Try getProperties NOT SURE 
     //var selected = select.e
      console.log(area);
    });

    // From SO1 
    // draw.on('drawend', function (evt) {
    //   saveData();
    //});
    map.addInteraction(draw);
  }
}
// From SO 1
// function saveData() {
//   const allFeatures = vector.getSource().getFeatures();
//   const format = new GeoJSON();
//   const data = format.writeFeatures(allFeatures);
//       console.log(data);
 
// };



// console.log(source.geometry);
// console.log(value.geometry);

/**
 * Handle change event.
 */
typeSelect.onchange = function() {
  map.removeInteraction(draw);
  addInteraction();
};

addInteraction();