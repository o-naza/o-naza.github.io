const xhr = new XMLHttpRequest();
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://api.wisey.app/api/v1/core/preview-courses';
const token = 'your-access-token';

xhr.open('GET', corsAnywhere + url);
xhr.setRequestHeader('Authorization', `Bearer ${token}`);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();