// Get the post ID from the URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id"); // e.g., "first-post"

// Fetch the blog.json file
fetch('blog.json')
  .then(res => res.json())
  .then(posts => {
    // Find the post with the matching ID
    const post = posts.find(p => p.id === id);
    const container = document.getElementById('post-container');

    if (post) {
      // Insert the post content dynamically
      container.innerHTML = `
        <h1>${post.title}</h1>
        <p class="date">${post.date}</p>
        ${post.content}   <!-- full HTML content from JSON -->
        <a href="blog.html"><button>← Back to blog</button></a>
      `;
    } else {
      container.innerHTML = "<p>Post not found.</p>";
    }
  })
  .catch(err => console.error("Error loading posts:", err));
