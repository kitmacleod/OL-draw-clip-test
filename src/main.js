
import 'ol/ol.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Draw from 'ol/interaction/Draw.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {Vector as VectorSource} from 'ol/source.js';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/geojson';
import intersect from '@turf/intersect';
import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import {Fill, Icon, Stroke, Style, Text} from 'ol/style.js';

// Code for adding MB VT, need style as well and ideally sat street layer, not streets
// const key = ;

// const MBsat = new VectorTileSource({
//   source: new VectorTileSource({
//     attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
//     '© <a href="https://www.openstreetmap.org/copyright">' +
//     'OpenStreetMap contributors</a>',
//   format: new MVT(),
//   url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
//       '{z}/{x}/{y}.vector.pbf?access_token=' + key
// }),
// style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)
// });


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

     // Try to writeFeature
     let area = parser.writeFeature(arg1.feature, {featureProjection: map.getView().getProjection()});
     // var geom = parser.readGeometry(area);
     // Exploring JSON feature 
     var areaObject = JSON.parse(area);

     console.log(typeof area); 
     console.log(area);
    //  console.log(typeof geom); 
    //  console.log(geom);


     console.log(typeof areaObject); 
     console.log(areaObject);


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