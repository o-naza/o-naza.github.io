const xhr = new XMLHttpRequest();
const url = 'https://cors-anywhere.herokuapp.com/https://api.wisey.app/api/v1/core/preview-courses';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YWMxYzc0ZC1iMDBmLTQxZmEtYjIwZS0wY2E2YmJkNzExOGQiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MzA5NzksImV4cCI6MTY3OTczMDk3OX0.z6nwwIJB65KG_8GPhbHLaUQc8gTsU73_JN8mbeiekI8';

xhr.open('GET', url);
xhr.setRequestHeader('Authorization', `Bearer ${token}`);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();