const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: NO POST FOUND");
            }
        }, 1000);
    });
}

createPost({ title: 'POST1' })
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTime);
        return deletePost();
    })
    .then(deletedPost => {
        console.log('Deleted Post:', deletedPost);
        console.log('New Posts:', posts);
    })
    .catch(error => console.error(error));