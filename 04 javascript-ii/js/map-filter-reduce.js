"use strict";

(() => {
    console.log("============ Exercise: Map, Filter, Reduce ============")
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    //Todo: Use .filter to create an array of user objects, each user object has at least 3 languages in the languages array.
    const experiencedUsers = users.filter(user => user.languages.length >= 3);
    console.log("TODO 1 check:\n", experiencedUsers);

    //Todo: Use .map to create an array of strings where each element is a user's email address
    const emails = users.map(({ email }) => email);
    console.log("TODO 2 check:\n", emails);

    //Todo: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    const totalYearsOfExperience = users.reduce((accumulator, user) => {
        return Number(accumulator) + Number(user.yearsOfExperience) }, 0);
    const avgYearsOfExperience = totalYearsOfExperience/users.length;
    console.log("TODO 3 check:\n", totalYearsOfExperience);
    console.log("TODO 3 check:\n", avgYearsOfExperience);

    //Todo: Use .reduce to get the longest email from the list of users
    const longestEmail = users.reduce((longest, user) => {
        return (longest.length < user.email.length) ? user.email : longest;
    }, users[0].email);
    console.log(longestEmail);

})();
