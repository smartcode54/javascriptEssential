function fetchData() {
  // import the Axios libary
  // const axios = require('axios'); // บรรทัดนี้ถูกใส่ comment เพราะเบราว์เซอร์ไม่รองรับ require

  // define the api url
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/2';

  // make a GET request to the API
  axios.get(apiUrl)
    .then(response => {
      // handle the response data
      console.log(response.data);
    })
    .catch(error => {
      // handle any errors
      console.error(error);
    });
}