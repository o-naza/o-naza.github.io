// WARNING: For GET requests, body is set to null by browsers.

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://api.wisey.app/api/v1/core/preview-courses/352be3c6-848b-4c19-9e7d-54fe68fef183");

xhr.send();