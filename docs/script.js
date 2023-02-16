const distanceSelector = document.querySelector("#distances");
const osuLat = 44.5638;
const osuLon = -123.2794;
let geoData;

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

fetch('https://s3-us-west-2.amazonaws.com/cdt-web-storage/cities.json')
  .then((response) => response.json())
  .then(
    (data) => {
        geoData = data;

        //add distance calculation to geoData for future use
        for(let i = 0; i < geoData.length; i++) {
            let lat = geoData[i].lat;
            let lng = geoData[i].lng;
            let dist = Math.round(distance(osuLat, osuLon, lat, lng, 'M'));
            geoData[i].distance = dist;
        }

        displayData(geoData);
    });


function displayData(data) {

    //if div with id location exists then delete
    let element = document.getElementById("location-list");
    if(element)
        element.remove();

    //create a list div that will hold all locations
    let listDiv = document.createElement("div");
    listDiv.setAttribute("id", "location-list");

    for(let i = 0; i < data.length; i++) {

        //create new div and new p elements with an id called location
        let locationDiv = document.createElement("div");
        locationDiv.setAttribute("id", "location");

        //create p elements with data key values
        let cityText = document.createElement("p")
        cityText.append(data[i].city);

        let latText = document.createElement("p");
        latText.append(document.createTextNode(data[i].lat));

        let lngText = document.createElement("p");
        lngText.append(document.createTextNode(data[i].lng));

        let distText = document.createElement("p");
        distText.append(document.createTextNode(data[i].distance + ' miles'));

        //append paragraphs to locationDiv
        locationDiv.append(cityText);
        locationDiv.append(latText);
        locationDiv.append(lngText);
        locationDiv.append(distText);
        
        //append locationDiv to listDiv
        listDiv.append(locationDiv);

    }

    //append listDiv to distanceSelector
    distanceSelector.append(listDiv);
}

function sortData() {

    //fetch value of selector
    var option = document.getElementById("sort").value;

    //clone geoData
    let sortedData = [
        ...geoData
    ]

    //conditional rendering
    if (option === 'asc') {
        sortedData.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        displayData(sortedData);
    } else if (option === 'desc') {
        sortedData.sort((a, b) => parseFloat(b.distance) - parseFloat(a.distance));
        displayData(sortedData);
    } else {
        displayData(sortedData);
    }
}