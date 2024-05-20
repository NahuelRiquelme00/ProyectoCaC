document.addEventListener('DOMContentLoaded', function () {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjRkMzgyY2VjMWFlYjgwMTBmYjc4NGQyZWY5ZmQzMCIsInN1YiI6IjYzYzcxZTM2MjBhZjc3MDBhNzk4YmYwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8blyh0U1C1NerXqT0NlsDgMA5Ntbb5WokP2eMjqj_I'
      }
    };
  
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        const moviesContainer = document.getElementById('populares');
        moviesContainer.innerHTML = '';
  
        response.results.forEach(movie => {
          const movieLink = document.createElement('a');
          movieLink.href = './pages/detalle.html';
  
          const movieElement = document.createElement('div');
          movieElement.classList.add('pelicula');
  
          const imgElement = document.createElement('img');
          imgElement.classList.add('imgTendencia');
          imgElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          imgElement.alt = movie.title;
          imgElement.loading = 'lazy';
  
          const titleDiv = document.createElement('div');
          titleDiv.classList.add('tituloPelicula');
  
          const titleElement = document.createElement('h4');
          titleElement.textContent = movie.title;
  
          titleDiv.appendChild(titleElement);
          movieElement.appendChild(imgElement);
          movieElement.appendChild(titleDiv);
          movieLink.appendChild(movieElement);
          moviesContainer.appendChild(movieLink);
        });
      })
      .catch(err => console.error(err));
  });