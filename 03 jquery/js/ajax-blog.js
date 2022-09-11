"use strict";
const insertProducts = document.querySelector('#posts');
const postCount = document.querySelector('.postCount');

// FUNCTION: FETCH JSON (& CALL updateHTML())
// PROTOTYPE: loadJSON()
const loadJSON = async() => {
    try {
        const res = await fetch('../data/blog.json');
        const data = await res.json();
        updateHTML(data, []);
        postCount.textContent = count;
    } catch (e) {
        console.log(e);
    }
}

// ONLOAD
(async ()=>{
    await loadJSON();
})();

// FUNCTION: CREATE NEW BLOG POST
// PROTOTYPE: createItem(blogPost)
let count = 0;
const updateHTML = (array1, array2) => {
    // concat arrays
    array1 = array1.concat(array2);

    //clear old data
    insertProducts.innerHTML = "";
    count = 0;

    //add new data
    array1.forEach(post => {
        count++;
        insertProducts.innerHTML += `
                <article class="message has-background-grey-darker">
                    <div class="message-body">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img class="profile-image" src="https://fer-uig.glitch.me" alt="Post Picture">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4 has-text-light">Sam Smith</p>
                                <p class="subtitle is-6 has-text-light">@samsmith</p>
                            </div>
                        </div>
                        <br>
                        <b class="blogTitle">${post.title}</b>
                        <p class="blogContent">${post.content}</p>
                        <p class="blogTags">#${post.categories.join(' #')}</p>
                        <time class="blogDate">${post.date}</time>
                </article>`
    })
}

// SYNC DATA EVERY MINUTE
setInterval(loadJSON, 60000);

