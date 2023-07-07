/*fetch('https://api.publicapis.org/entries').then((x) => {
  return x.json()
}).then((filtered) => {

for (elements in filtered){
  console.log(elements)
}

 
})*/

// fetch the movie data from db.json
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    // extract the films array from the data
    const films = data.films;
    const filmsList = document.querySelector('#films');

    // loop through the films array and create a list item for each movie title
    for (let i = 0; i < films.length; i++) {
      const movie = films[i];
      const listItem = document.createElement('li');
      listItem.textContent = movie.title;
      filmsList.appendChild(listItem);

      // add an event listener to display the movie details when the movie title is clicked
      listItem.addEventListener('click', () => {
        displayMovieDetails(movie);
      });
    }

    // display the details of the first movie by default
    displayMovieDetails(films[0]);
  })
  .catch(error => console.error(error));

// function to display the movie details
function displayMovieDetails(movie) {
  const poster = document.querySelector('#poster');
  const title = document.querySelector('#title');
  const runtime = document.querySelector('#runtime');
  const showtime = document.querySelector('#showtime');
  const availableTickets = document.querySelector('#available-tickets');
  const description = document.querySelector('#movie-details p:last-of-type');

  // update the movie details in the DOM with the data from the movie object
  poster.src = movie.poster;
  title.textContent = movie.title;
  runtime.textContent = `Runtime: ${movie.runtime} minutes`;
  showtime.textContent = `Showtime: ${movie.showtime}`;
  availableTickets.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;
  description.textContent = movie.description;

  console.log(movie);
}
