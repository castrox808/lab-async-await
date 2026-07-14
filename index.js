// Write your code here!
let result = fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'});
console.log(result);
result.then(response => response.json()).then(posts => displayPosts(posts));
function displayPosts(posts) {
    let ul = document.getElementById('post-list');
    for (let post of posts) {

        let li = document.createElement('li')
        let h1 = document.createElement('h1');
        let p = document.createElement('p');

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  }
    }
    displayPosts(posts);