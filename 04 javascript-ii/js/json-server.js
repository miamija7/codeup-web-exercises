console.log('============ JSON SERVER ============');

const getBooks = async()=>{
    try {
        const res = await fetch("https://grass-orchid-breath.glitch.me/books");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log("Error Occurred :(", e);
    }
};
getBooks();

const newBook = {
    "title": "Dune",
    "author": "Frank Herbert"
};

const postBook = (book)=>{
    try{
        fetch("https://grass-orchid-breath.glitch.me/books", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        }).then(getJSON);
    } catch (e) {
        console.log("Error Occurred :(", e);
    }
}

const deleteBook = (id) => {
    try{
        fetch(`https://grass-orchid-breath.glitch.me/books/${id}`, {
            method: 'DELETE',
        }).then(getBooks);
    } catch (e) {
        console.log("Error Occurred :(", e);
    }
}


const editedBook = {
    "title": "Dune Messiah",
    "author": "Frank Herbert"
};

const updateBook = (book, id) => {
    try{
        fetch(`https://grass-orchid-breath.glitch.me/books${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        }).then(getJSON);
    } catch (e) {
        console.log("Error Occurred :(", e);
    }
}



