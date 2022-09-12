"use strict";
const insertPosts = document.querySelector('#posts');
const postCount = document.querySelector('.postCount');

// FUNCTION: FETCH JSON (& CALL updateHTML())
// PROTOTYPE: loadJSON()
const loadJSON = async() => {
    try {
        const res = await fetch('../data/blog.json');
        const data = await res.json();
        updateHTML(localPosts.reverse(), data.reverse());
        postCount.textContent = count;
    } catch (e) {
        console.log(e);
    }
}

// ONLOAD
(()=>{
    loadJSON();
})();

// FUNCTION: POST BLOG POST
// PROTOTYPE: createItem(blogPost)
let count = 0;
const updateHTML = (array1, array2) => {
    // concat arrays
    array1 = array1.concat(array2);

    //clear old data
    insertPosts.innerHTML = "";
    count = 0;

    //add new data
    array1.forEach(post => {
        count++;
        insertPosts.innerHTML += `
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



//------------> EXTRAS (CREATE NEW POST) <---------------



// VARIABLES
const localPosts = [];

// FUNCTION: CREATE NEW BLOG POST
// PROTOTYPE: createItem(itemData)
const createItem = (itemData) => {
    if (isEmptyInput(itemData)) {
        itemData.forEach(item=>{
            (item.value === "") ? item.classList.add('is-danger') : item.classList.remove('is-danger');
        })
    }
    else {
        localPosts.push({
            title: itemData[0].value,
            content: itemData[1].value,
            categories: itemData[2].value.split(",").map(element => element.trim().toLowerCase()).filter(element => element !== ''),
            date: itemData[3].value
        })
        // CLEAR FORM INPUT FIELDS
        itemData.forEach(item=>{
            item.value = "";
            item.classList.remove('is-danger');
        })
        // UPDATE PAGE
        loadJSON();
        closeModal(document.querySelector('.modal'));
    }
}

// FUNCTION: CHECK FORM FOR EMPTY INPUTS
// PROTOTYPE: isEmptyInput(inputs)
const isEmptyInput = (inputs) => {
    return (inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "" || inputs[3].value === "")
}

// SELECTORS
const addItemBtn = document.querySelector('#add');
const itemData = document.querySelectorAll('input, textarea');

//EVENT LISTENERS
addItemBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await createItem(itemData);
})


// MODAL FORM
// Functions to open and close a modal
function openModal($el) {
    $el.classList.add('is-active');
}

function closeModal($el) {
    $el.classList.remove('is-active');
}

// Add a click event on buttons to open a specific modal
(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
        openModal($target);
    });
});

// Add a click event on various child elements to close the parent modal
(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot #cancel') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
        closeModal($target);
    });
});