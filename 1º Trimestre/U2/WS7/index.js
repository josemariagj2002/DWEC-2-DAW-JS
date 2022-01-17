/*The geolocation API allows the user to provide their location to web applications if they so desire. 
For privacy reasons, the user is asked for permission to report location information.
The geolocation API is published through the navigator.geolocation object. 
If the object exists, geolocation services are available.

1- Develop a web app in which:
    Test if geolocation is available.
    If it's available, show the current position (latitude and longitude)
    If it isn't available, show a message for each and everyone of the possible errors.
    Improve your code so you show the position continuously (
    although the user could be in moving, so it could change)*/

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
    var crd;
      
    function success(pos) {
        crd = pos.coords;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log('The distance traveled is:', crd - crd2);
        console.log(`More or less ${crd.altitude} meters.`);
      }
      
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
    navigator.geolocation.watchPosition(success, error, options);
    
    /*Find the way to meassure the distance traveled.*/






