/*Node js


1-What is node js ?
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine

2- What is the difference between running the code into the browser and running directly into the Host ( PC ) ?
1- Can't access the file system
2- You can built whatever you want 

3- What is the advantage of node js
1- Single-threaded non-blocking
2- Scalable
3- Open-source
4- Very fast ( famous in streaming data )


4- What is node js used for ?
1- Web servers
2- Games
3- Mobile applications
4- Desktop
5- Internet of things ( IOT )
6- Database management


*/

const number = 5;

if (number > 3) {
  console.log('Number is more than 3');
} else {
  console.log('Number is less than 3');
}

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log(document);
// console.log(location);

const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const message = 'Hey from node';
hash.update(message);
console.log(hash.digest('hex'));

// const message = 'Hey from node';
// const hash = crypto.createHash('sha256');
// hash.update(message);
// const hashMessage = hash.digest('hex');
// console.log(hashMessage);
// console.log('Hey from javascript file');
