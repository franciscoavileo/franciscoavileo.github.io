function initialize() {
  var latlng = new google.maps.LatLng(38.989618,-3.9269869);

  var mapOptions = {
    position: latlng,
    addressControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  };
  
  var map = new google.maps.StreetViewPanorama(
    document.getElementById("map-container"),
    mapOptions);
};

google.maps.event.addDomListener(window, 'load', initialize);
