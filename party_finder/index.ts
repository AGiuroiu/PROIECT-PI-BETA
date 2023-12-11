// Initialize and add the maps
import {google} from 'googlemap';
let gmap;
async function initMap(): Promise<void> {
  // The location of Uluru
  const position = { lat: 44.319305, lng: 23.800678 };

  var myLatlng = new google.maps.LatLng(44.319305, 23.800678);

  // Request needed libraries.
  //@ts-ignore
  var gmap = new google.maps.Map(document.getElementById("map"), mapOptions);
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  // The map, centered at Uluru
  gmap = new gmap(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 4,
      center: myLatlng,
      mapId: 'map',
    }
  );

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: gmap,
    position: myLatlng,
    title: 'Uluru'
  });

  
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;