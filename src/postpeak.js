runPostpeak()
setInterval(runPostpeak, 60000);

function runPostpeak() {
    console.log("[Postpeak]: sorting posts...");
    let thread = getThread();
    let posts = getPosts(thread);
    resetThreadPosts(thread, posts);
}

function getThread() {
    switch (window.location.hostname) {
        case '2ch.hk':
        case '2ch.pm':
        case '2ch.life':
            return document.getElementsByClassName("thread")[0];
        case 'boards.4channel.org':
            return document.getElementsByClassName("thread")[0];
        default:
            console.log(`[Postpeak]: unsupported domain: ${window.location.hostname}`);
    }
}

function getPosts(thread) {
    switch (window.location.hostname) {
        case '2ch.hk':
        case '2ch.pm':
        case '2ch.life':
            return [].slice.call(thread.children, 1); // skip OP (the first post)
        case 'boards.4channel.org':
            return [].slice.call(thread.children, 1); // skip OP (the first post)
        default:
            console.log(`[Postpeak]: unsupported domain: ${window.location.hostname}`);
    }
}

function resetThreadPosts(thread, posts) {
    posts.sort((post1, post2) => repliesCount(post2) - repliesCount(post1));
    posts.forEach(post => thread.appendChild(post));
}

function repliesCount(post) {
    switch (window.location.hostname) {
        case '2ch.hk':
        case '2ch.pm':
        case '2ch.life':
            return [].filter.call(
                post.children,
                element => [].includes.call(element.classList, 'post__refmap')
            )[0].children.length;
        case 'boards.4channel.org': {
            let repliesLinks = post.querySelector('.backlink');
            if (repliesLinks == null) {
                return 0;
            }
            return repliesLinks.children.length;
        }
        default:
            console.log(`[Postpeak]: unsupported domain: ${window.location.hostname}`);
    }
}
