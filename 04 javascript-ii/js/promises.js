"use strict";

(() => {
    console.log("============ Exercise: Promises ============");
    // fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

    //Todo: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.
    const handleApiPromise = async (username) => {
        try{
            let res = await fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_KEY}});
            let data = await res.json();
            return data[0];
        } catch (e) {
            console.log("ERROR: ", e);
        }
    };
    console.log('Handle An API Promise Results:', handleApiPromise("miamija7"));


    //Todo: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
    const wait = (ms) => {
        setTimeout(()=>{
            new Promise((resolve, reject) =>{
                if (typeof(ms) === "number") resolve();
                else reject();
            }).then(()=>{
                console.log(`You'll see this after ${ms/1000} seconds`);
            }).catch(error => console.error(error))
        }, ms)
    }
    console.log('wait() Results:');
    wait(3000);
    wait(1000);

    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

})();