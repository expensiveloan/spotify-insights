export interface UserData {
  id: string;
  displayName: string;
  profileImage: string;
  minutesListened: number;
  topArtists: Artist[];
  topAlbums: Album[];
  topGenres: string[];
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
}

export interface Album {
  id: string;
  name: string;
  image: string;
  releaseDate: string;
}