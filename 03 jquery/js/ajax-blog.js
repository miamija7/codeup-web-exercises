$(function(){
    const insertProducts = document.querySelector('#posts');

    $.get('../data/blog.json', (data)=>{
        console.log(data);
        updateHTML(data,[]);
    })

    const updateHTML = (array1, array2) => {
        // concat arrays
        array1 = array1.concat(array2);

        //clear old data
        insertProducts.innerHTML = "";

        //add new data
        array1.forEach(post => {
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
});