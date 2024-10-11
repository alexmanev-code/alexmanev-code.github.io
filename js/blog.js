
 const posts = document.querySelectorAll('.post-excerpt');

 const postCount = posts.length;

const numHolder = document.querySelector('h3');
numHolder.innerHTML+=postCount;
console.log(`Number of posts: ${postCount}`);