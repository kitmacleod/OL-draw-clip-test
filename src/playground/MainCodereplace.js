// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import Draw from 'ol/interaction/Draw';
// import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
// import {Vector as VectorSource} from 'ol/source';
// import OSM from 'ol/source/OSM';
// import GeoJSON from 'ol/format/geojson';
// import intersect from '@turf/intersect';
// import MVT from 'ol/format/MVT';
// import VectorTileLayer from 'ol/layer/VectorTile';
// import VectorTileSource from 'ol/source/VectorTile';
// import {Fill, Icon, Stroke, Style, Text} from 'ol/style';
// import BingMaps from 'ol/source/BingMaps';


// // Code for adding MB VT, need style as well and ideally sat street layer, not streets
// // const key = ;

// // const MBsat = new VectorTileSource({
// //   source: new VectorTileSource({
// //     attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
// //     '© <a href="https://www.openstreetmap.org/copyright">' +
// //     'OpenStreetMap contributors</a>',
// //   format: new MVT(),
// //   url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
// //       '{z}/{x}/{y}.vector.pbf?access_token=' + key
// // }),
// // style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)
// // });

// // Simple Bing imagery example from book
// // const sourceBingMaps = new BingMaps({
// //   key: 'AgdfSiITbjOwmzHKzwutHUYonPY_D-OGbeJ-F89Hwncc22hFqeWBOFpxlK5jQdyU',
// //   imagerySet: 'ordanceSurvey'
// // });

// // const bingOS = new TileLayer({
// //   source: sourceBingMaps
// // });

// // const bingAerial = new TileLayer({
// //   source: new BingMaps({
// //     key: 'AgdfSiITbjOwmzHKzwutHUYonPY_D-OGbeJ-F89Hwncc22hFqeWBOFpxlK5jQdyU',
// //     style: ''
  
// //   })
// // })

// const bingOS = new TileLayer({
//   source: new BingMaps({
//     key: 'AgdfSiITbjOwmzHKzwutHUYonPY_D-OGbeJ-F89Hwncc22hFqeWBOFpxlK5jQdyU',
//     imagerySet: 'ordanceSurvey'
//   })
// });

// const bingAerial = new TileLayer({
//   source: new BingMaps({
//     key: 'AgdfSiITbjOwmzHKzwutHUYonPY_D-OGbeJ-F89Hwncc22hFqeWBOFpxlK5jQdyU',
//     imagerySet: 'ArialWithLabels'
//   })
// });

// const map = new Map({
//   target: 'map',
//   layers: [bingOS, bingAerial],
//   view: new View({
//     center: [-13553864, 5918250],
//           zoom: 11,
//           minZoom: 9,
//           maxZoom: 13
//   })
// });



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


//-----------------------------------

// Bing imagery code from OL examples
// const styles = [
//   'ArialWithLabels',
//   'ordanceSurvey'
// ];
// const layers = [];
// let i, ii;
// for (i = 0, ii = styles.length; i < ii; ++i) {
//   layers.push(new TileLayer({
//     visible: false,
//     preload: Infinity,
//     source: new BingMaps({
//       key: 'AgdfSiITbjOwmzHKzwutHUYonPY_D-OGbeJ-F89Hwncc22hFqeWBOFpxlK5jQdyU',
//       imagerySet: styles[i],
//       // Use maxZoom 19 to see streched tiles
//       maxZoom: 19
//     })
//   }));
// }
// const map = new Map({
//   layers: layers,
//   // Improve UX by loading by drag/zoom, zoom will be choppy on slow devices
//   loadTilesWhileInteracting: true,
//   target: 'map',
//   view: new View({
//     center: [-6655.5402445057125, 6709968.258934638],
//           zoom: 13
//   })
// });

// const select = document.getElementById('layer-select');
// function onChange() {
//   const style = select.value;
//   for (let i = 0, ii = layers.length; i < ii; ++i) {
//     layers[i].setVisible(styles[i] === style);
//   }
// }
// select.addEventListener('change', onChange);
// onChange();


// const raster = new TileLayer({
//   source: new OSM()
// });

// const source = new VectorSource({wrapX: false});

// const vector = new VectorLayer({
//   source: source
// });

// const map = new Map({
//   layers: [raster, vector],
//   target: 'map',
//   view: new View({
//     center: [-11000000, 4600000],
//     zoom: 4
//   })
// });

// const typeSelect = document.getElementById('type');

// let draw; // global so we can remove it later
// function addInteraction() {
//   const value = typeSelect.value;
//   if (value !== 'None') {
//     draw = new Draw({
//       source: source,
//       type: typeSelect.value
//     });
//     draw.on('drawend', (arg1) => {
//       let parser = new GeoJSON();
//      // let area = parser.writeFeatureObject(arg1.feature, {featureProjection: 'EPSG:3857'});
//      // Try writeFeatures N- use GeoJSON().write.....
//      //let area = parser.writeFeatures(arg1.feature, {featureProjection: map.getView().getProjection()});
//      // Try getProperties NOT SURE 
//      //var selected = select.e

//      // Try to writeFeature
//      let area = parser.writeFeature(arg1.feature, {featureProjection: map.getView().getProjection()});
//      // var geom = parser.readGeometry(area);
//      // Exploring JSON feature 
//      var areaObject = JSON.parse(area);

//      console.log(typeof area); 
//      console.log(area);
//     //  console.log(typeof geom); 
//     //  console.log(geom);


//      console.log(typeof areaObject); 
//      console.log(areaObject);


//     });

//     // From SO1 
//     // draw.on('drawend', function (evt) {
//     //   saveData();
//     //});
//     map.addInteraction(draw);
//   }
// }
// // From SO 1
// // function saveData() {
// //   const allFeatures = vector.getSource().getFeatures();
// //   const format = new GeoJSON();
// //   const data = format.writeFeatures(allFeatures);
// //       console.log(data);
 
// // };



// // console.log(source.geometry);
// // console.log(value.geometry);

// /**
//  * Handle change event.
//  */
// typeSelect.onchange = function() {
//   map.removeInteraction(draw);
//   addInteraction();
// };

// addInteraction();