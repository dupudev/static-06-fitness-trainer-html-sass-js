function initMap() {
  new google.maps.Map(document.getElementById('map'), {
    mapId: '627076698dd17f9e',
    center: { lat: 45.2627968, lng: 19.8417379 },
    zoom: 12,
  });
}

window.initMap = initMap;
