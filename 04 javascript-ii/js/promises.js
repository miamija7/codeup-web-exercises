"use strict";

(() => {
    console.log("============ Exercise: Promises ============");
    // fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

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
})();