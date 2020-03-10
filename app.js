document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExAPI);

// Get Local Text File Data
// function getText() {
//   fetch('test.txt')
//     .then(function(res) {
//       return res.text();
//     })

//     .then(function(data) {
//       //console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })

//     .catch(function(err) {
//       console.log(err);
//     });
// }

function getText() {
  fetch('test.txt')
    .then(res => res.text())

    .then(data => {
      //console.log(data);
      document.getElementById('output').innerHTML = data;
    })

    .catch(err => console.log(err));
}



// Get Local JSON File Data
// function getJson() {
//   fetch('post.json')
//     .then(function(res) {
//       return res.json();
//     })

//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(post) {
//         output += `<li>${post.title}</li>`;
//       });

//       document.getElementById('output').innerHTML = output;
//     })

//     .catch(function(err) {
//       console.log(err);
//     });
// }

function getJson() {
  fetch('post.json')
    .then(res => res.json())

    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      
      document.getElementById('output').innerHTML = output;
    })

    .catch(err => console.log(err));
}



// Get From External API
// function getExAPI() {
//   fetch('https://api.github.com/users')
//     .then(function(res) {
//       return res.json();
//     })

//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(user) {
//         output += `<li>${user.login}</li>`;
//       });

//       document.getElementById('output').innerHTML = output;
//     })

//     .catch(function(err) {
//       console.log(err);
//     });
// }

function getExAPI() {
  fetch('https://api.github.com/users')
    .then(res => res.json())

    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })

    .catch(err => console.log(err));
}