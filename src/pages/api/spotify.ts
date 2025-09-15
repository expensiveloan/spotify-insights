import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { spotifyApi } from '../../../lib/spotifyClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const userId = session.user.id;

        // Fetch user data
        const userData = await spotifyApi.getMe();
        const topArtists = await spotifyApi.getMyTopArtists();
        const topAlbums = await spotifyApi.getMyTopAlbums();
        const topGenres = await spotifyApi.getMyTopGenres();

        // Fetch minutes listened (this is a hypothetical endpoint)
        const minutesListened = await spotifyApi.getMinutesListened();

        res.status(200).json({
            user: userData.body,
            topArtists: topArtists.body.items,
            topAlbums: topAlbums.body.items,
            topGenres: topGenres.body,
            minutesListened,
        });
    } catch (error) {
        console.error('Error fetching data from Spotify API:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}