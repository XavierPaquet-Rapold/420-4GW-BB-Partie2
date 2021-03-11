let map: google.maps.Map;
const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
/*
function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8
  });
}
*/

function initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 },
      }
    );
    const geocoder = new google.maps.Geocoder();
  
    (document.getElementById("submit") as HTMLButtonElement).addEventListener(
      "click",
      () => {
        geocodeAddress(geocoder, map);
      }
    );
  }
  
  function geocodeAddress(
    geocoder: google.maps.Geocoder,
    resultsMap: google.maps.Map
  ) {
    const address = (document.getElementById("address") as HTMLInputElement)
      .value;
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  