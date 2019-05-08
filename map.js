mapboxgl.accessToken = 'pk.eyJ1IjoibG9iZW5pY2hvdSIsImEiOiJjajdrb2czcDQwcHR5MnFycmhuZmo4eWwyIn0.nUf9dWGNVRnMApuhQ44VSw';

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v9',
	center: [-93.278171, 39.415936],
	zoom: 3.40
});

const disaster_toggle = (disaster) => {
	const layers = map.getStyle().layers.filter((o) => {
		return (o.id.indexOf("states-") > -1);
	});

	layers.forEach((layer) => {
		map.setLayoutProperty(layer.id, "visibility", "none");
	});

	if (disaster !== "state") {
		map.setLayoutProperty(`states-fill-${disaster}`, "visibility", "visible");
		map.setLayoutProperty(`states-line-${disaster}`, "visibility", "visible");
	} else {
		map.setLayoutProperty(`states-fill`, "visibility", "visible");
		map.setLayoutProperty(`states-line`, "visibility", "visible");
	}
};

map.on("load", () => {
	map.addSource("disasterData", {
		type: 'vector',
		url: 'mapbox://lobenichou.5xljw23n'
	});

	console.log(map);

	map.addLayer({
		"id": "states-fill",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates-8dm4f6",
		"paint": {
			"fill-color": "#b8b6b7",
			"fill-opacity": 0.5
		}
	});

	map.addLayer({
		"id": "states-line",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates-8dm4f6",
		"paint": {
			"line-color": "#3e3e3e",
		}
	});

	map.addLayer({
		"id": "states-fill-flood",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates-8dm4f6",
		"paint": {
			"fill-color": "#ff69b4",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Flood"]]
	});

	map.addLayer({
		"id": "states-fill-earthquakes",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates-8dm4f6",
		"paint": {
			"fill-color": "#539032",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Earthquake"]]
	});

	map.addLayer({
		"id": "states-fill-hurricane",
		"type": "fill",
		"source": "disasterData",
		"source-layer": "finalDataWithStates-8dm4f6",
		"paint": {
			"fill-color": "#1583c1",
			"fill-opacity": 0.5
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Hurricane"]]
	});

	map.addLayer({
		"id": "states-line-hurricane",
		"type": "line",
		"source": "disasterData",
		"source-layer": "finalDataWithStates-8dm4f6",
		"paint": {
			"line-color": "#12222b",
		},
		'layout': {
			'visibility': 'none'
		},
		filter: ['boolean', ["get", "Hurricane"]]
	});
});