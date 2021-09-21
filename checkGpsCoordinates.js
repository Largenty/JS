const checkGPSCoordinates = (latitude, longitude) => {
    const latitudeRegex = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
    const longitudeRegex = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;
    const validLatitude = latitudeRegex.test(latitude);
    const validLongitude = longitudeRegex.test(longitude);
    if (validLatitude && validLongitude) {
        return true;
    } else {
        return false;
    }
};