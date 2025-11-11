/*
  =================================
  == YOUR BLOG "FACTORY" ENGINE ==
  =================================
  This code runs on your index.html page.
  It finds the 'allPosts' database and
  builds the HTML for each post.
*/

// Find the <div> on our index.html page
// that we want to put the posts into.
const postListContainer = document.getElementById('post-list-container');

// Now, loop through every post in our
// 'allPosts' database...
for (const post of allPosts) {

  // 1. Create the HTML string for this post
  //    (We use backticks ` ` for this)
  const postHtml = `
    <div class="post-preview">
      <h3>
        <a href="${post.url}">${post.title}</a>
      </h3>
      <small>Posted on ${post.date}</small>
      <p>
        ${post.preview}
      </p>
    </div>
  `;

  // 2. Add that new HTML to the container
  postListContainer.innerHTML += postHtml;
}