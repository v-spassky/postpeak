sortPosts()
setInterval(sortPosts, 60000);

function sortPosts() {
    console.log("Sorting posts...");
    let thread = document.getElementsByClassName("thread")[0];
    let posts = [].slice.call(thread.children, 1); // skip OP (the first post)
    posts.sort((post1, post2) => repliesCount(post2) - repliesCount(post1));
    posts.forEach(post => thread.appendChild(post));
}

function repliesCount(post) {
    return [].filter.call(
        post.children,
        element => [].includes.call(element.classList, 'post__refmap')
    )[0].children.length;
}
