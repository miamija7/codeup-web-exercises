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
    const emails = users.map(({email}) => email);
    console.log("TODO 2 check:\n", emails);


    //Todo: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    const avgYearsOfExperience = () => {
        const sumYears = users.reduce((accumulator, user) => {
            return Number(accumulator) + Number(user.yearsOfExperience)
        }, 0);
        return sumYears / users.length;
    }
    console.log("TODO 3 check:\n", avgYearsOfExperience());


    //Todo: Use .reduce to get the longest email from the list of users
    const longestEmail = users.reduce((prev, curr) => {
        return (prev.length < curr.email.length) ? curr.email : prev;
    }, users[0].email);
    console.log("TODO 4 check:\n", longestEmail);


    //Todo: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    const names = users.reduce((accumulator, curr) => {
        if (curr !== users[users.length - 1])
            return accumulator += curr.name + ", ";
        else
            return accumulator += curr.name + ".";

    }, 'Your instructors are: ');
    console.log("TODO 5 check:\n",names);

    //Todo: BONUS: Use .reduce to get the unique list of languages from the list of users.
    const languages =  users.reduce((previousValue, currentValue) => {
            return [...previousValue, ...currentValue.languages];
        },[]
    );

    const uniqueLanguages = languages.reduce((prev, curr) => {
            if (!prev.includes(curr)) return [...prev, curr];
            else return [...prev];
        },[]
    );
    console.log("TODO 6 check:\n", languages, uniqueLanguages)

})();
