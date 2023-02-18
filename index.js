console.log('The Scorpions will be Gold Cup XXXII Champs!');
const message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input');

    const movie = document.createElement('li');

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    const list = document.querySelector("ul");
    list.appendChild(movie);

    inputField.value = '';
}

function deleteMovie(event) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;
    event.target.parentNode.remove();
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage();
}

document.querySelector("form").addEventListener("submit", addMovie);

const revealMessage = () => {
    setTimeout(() => {
    message.classList.add('hide')
    }, 1000)
}
