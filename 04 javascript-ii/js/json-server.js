console.log('============ JSON SERVER ============');

// FUNCTION: Displays My Movies
// PROTOTYPE: getMyMovies();
const getMyMovies = async()=>{
    try {
        const res = await fetch("https://grass-orchid-breath.glitch.me/movies");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log("Error Occurred :(", e);
    }
};
getMyMovies();

// FUNCTION: POSTs a movie to My Movies JSON (runs fetchMovieFromAPI() & getMyMovies())
// PROTOTYPE: postToMyMovies('tt0104431')
const postToMyMovies = async (id)=>{
    try{
        const movie = await fetchMovieFromAPI(id);
        fetch("https://grass-orchid-breath.glitch.me/movies", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        }).then(getMyMovies);
    } catch (e) {
        console.log("Error Occurred :(", e);
    }
}

// FUNCTION: FETCH FROM MOVIE API
// PROTOTYPE: fetchMovie('tt0104431');
const fetchMovieFromAPI = async (input)=>{
    try {
        const res = await fetch(`https://www.omdbapi.com?i=${input}&apikey=thewdb`);
        const data = await res.json();
        const {Title, Year, Rated, Genre, Plot, Director, Poster, imdbID} = await data
        return {Title, Year, Rated, Genre, Plot, Director, Poster, imdbID};
    } catch (e) {
        console.log("Error Occurred :(", e);
    }
}

const editedMovie = {
    "Title": "Dune",
    "id" : "4"
};

const updateMyMovie = (movie) => {
    try{
        fetch(`https://grass-orchid-breath.glitch.me/movies/${movie.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        }).then(getMyMovies);
    } catch (e) {
        console.log("Error Occurred :(", e);
    }
}











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
    "id" : "6"
};

const updateBook = (book) => {
    try{
        fetch(`https://grass-orchid-breath.glitch.me/books/${book.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        }).then(getBooks);
    } catch (e) {
        console.log("Error Occurred :(", e);
    }
}



