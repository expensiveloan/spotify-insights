export const formatMinutes = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
};

export const formatTopArtists = (artists: Array<{ name: string; playcount: number }>): string => {
    return artists.map(artist => `${artist.name} (${artist.playcount} plays)`).join(', ');
};

export const formatTopAlbums = (albums: Array<{ name: string; releaseDate: string }>): string => {
    return albums.map(album => `${album.name} (Released: ${album.releaseDate})`).join(', ');
};

export const formatTopGenres = (genres: string[]): string => {
    return genres.join(', ');
};