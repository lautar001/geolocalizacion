let marker, map;

function initMap(){
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: posicion
    })
    const marker = new google.maps.marker({
        position: posicion,
        map,
        title: "Posicion inicial"
    })
    geoPosiciona()
}

function geoPosiciona(){
    if (navigator.geolocation){
        const geoloc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPos = geoloc.watchPosition(centraMapa, onError
        , options)
    } else{
        alert("Tu navegador no admite geolocalizacion")
    }
}

function centraMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}
