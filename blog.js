// js/blog.js
fetch('blog.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('post-list');
    posts.forEach(post => {
      const li = document.createElement('li'); // you can use <div> too
      li.className = 'post-card';
      li.innerHTML = `
        <h2 style="color:white">${post.title}</h2>
        <p style="color:#ccc">${post.date}</p>
        <p style="color:#ddd">${post.content}</p>
        <a href="post.html?id=${post.id}">
          <button>Read full post</button>
        </a>
      `;
      container.appendChild(li);
    });
  })
  .catch(err => console.error("Error loading posts:", err));
