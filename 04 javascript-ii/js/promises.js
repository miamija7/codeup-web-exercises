"use strict";

(() => {
    console.log("============ Exercise: Promises ============");
    // fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

    //Todo: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.
    const handleApiPromise = async (username) => {
        try {
            let res = await fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_KEY}});
            let data = await res.json();
            // const { payload: { commits: [ { message: myCommit } ] } } = data[2];
            // // console.log(payload.commits[0].message);
            console.log("handleApiPromise Result:", data);
            return data[0];
        } catch (e) {
            console.log("ERROR: ", e);
        }
    };


    //Todo: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
    const wait = (ms) => {
        setTimeout(()=>{
            new Promise((resolve, reject) =>{
                if (typeof(ms) === "number") resolve();
                else reject();
            }).then(()=>{
                console.log('wait Results:');
                console.log(`You'll see this after ${ms/1000} seconds`);
            }).catch(error => console.error(error))
        }, ms)
    }
    wait(3000);
    wait(1000);

    // FUNCTION: updateCard;
    // PROTOTYPE: updateCard("username");
    const updateCard = async (username) => {
        const user = await handleApiPromise(username);
        console.log()

        document.querySelector(".column").innerHTML = `
            <div class="card-image">
                <figure class="image">
                    <img src="${user.actor.avatar_url}" alt="GitHub Profile Image" style="border-radius: 100%; width: 60%; margin: 0 auto;">
                    <p class="subtitle is-6" style="text-align: center"><a href="https://www.github.com/${user.actor.login}">@${user.actor.login}</a></p>
                </figure>
            </div>
            <div class="card-content">
                <p class="title" style="margin: 0">${user.payload.commits[0].author.name}'s Latest Commit</p>
                <p><b>Repository:</b><br>${user.repo.name}</p>
                <p><b>Message:</b><br>${user.payload.commits[0].message}</p>
                <p><b>Date/Time:</b><br><time dateTime="2016-1-1">${user.created_at}</time></p>   
            </div>
        `
    }

    // EVENT LISTENER: Submit Button
    document.querySelector("button").addEventListener('click', async (e)=>{
        e.preventDefault();
        const username = document.querySelector('input').value;
        if (!!username) await updateCard(username);
    })

    // EVENT LISTENER: Enter Key
    document.querySelector('input').addEventListener('keyup', async ({key})=>{
        if (key === 'Enter') await updateCard(document.querySelector('input').value);
    })

    // Initial Data
    updateCard("miamija7");

})();