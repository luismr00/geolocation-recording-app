

# Position Application Exercises

There are two exercises we would like you to complete and submit as part of your application process.

## Restrictions

* Only use Javascript, CSS and HTML.
* No third-party libraries or frameworks (jQuery, Vue, React, Bootstrap, etc).

## Submission Instructions

Below are the steps required to submit the exercises. GitHub Pages will host your final submission.

1. Create a new repository on GitHub (do not fork or clone this one). 
2. Put all files for the submission in a docs/ folder.
3. Enable GitHub Pages for your repository: [Publishing GitHub Pages](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages)
5. Share the link back to your the OSU hiring contact for both submission exercises.

<br><br>

## Exercise A: Geolocation Report

An instructor has provided a list of cities and their geocoordinates (latitude and longitude) in JSON format. The instructor would like a web application which fetches the data and displays it to a user. The application should calculate the distance between Oregon State University and the city listed in the JSON. The instructor has provided a function for you to use for this purpose. Lastly, the rendered data should be sortable by ascending and descending calculated distance.

### Instructions

1. The web application should fetch the JSON at runtime from here: [cities.json](https://s3-us-west-2.amazonaws.com/cdt-web-storage/cities.json)

2. Calculate the distance between each city and OSU using this function:
[distance.js](https://github.com/osuecampus/geolocation-recording-application/blob/master/distance.js)

3. Display the name, latitude, longitude, and calculated distance for each city in the JSON file.

4. Allow the student to sort the data, ascending and descending, based on the distance.

<br><br><br><br>

## Exercise B: Custom Button

![alt text](https://github.com/osuecampus/geolocation-recording-application/blob/master/button.png "Logo Title Text 1")


### Instructions

1. Duplicate the button above as an HTML element using just CSS and HTML.
