export interface Movie {
  id:            string
  title:         string
  release_date:  string
  vote_average:  string
  runtime:       string
  overview:      string
  poster_path:   string
  backdrop_path: string
  genres: [{ id: string, name: string }]
}
