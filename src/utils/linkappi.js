const API = "https://api.themoviedb.org/3/";

export function get(path) {
  return fetch(`${API}${path}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTNiMDIzNGViYzkxMjNkMDUxYTU5YzU5YzU2MWYzNyIsInN1YiI6IjYxNTkwZDI1NDNkOWIxMDA5NTJlZmZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c4bnmRRB9DKlEGgk-Ff1HlXAYDMJzmGzKX80S71ZaTQ",
      "Content-Type": "application/json;charset=utf-8'",
    },
  }).then((result) => result.json());
}
