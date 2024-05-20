document.addEventListener('DOMContentLoaded', function () {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjRkMzgyY2VjMWFlYjgwMTBmYjc4NGQyZWY5ZmQzMCIsInN1YiI6IjYzYzcxZTM2MjBhZjc3MDBhNzk4YmYwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8blyh0U1C1NerXqT0NlsDgMA5Ntbb5WokP2eMjqj_I'
      }
    };
  
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const moviesContainer = document.getElementById('aclamadas');
      moviesContainer.innerHTML = '';

      response.results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('peliculaItem');
        
        const imgElement = document.createElement('img');
        imgElement.classList.add('imgAclamada');
        imgElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        imgElement.alt = movie.title;
        imgElement.loading = 'lazy';

        movieElement.appendChild(imgElement);
        moviesContainer.appendChild(movieElement);
      });
    })
    .catch(err => console.error(err));
});