import { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
const scopes = 'user-read-private user-read-email user-top-read user-read-recently-played';

export default function auth(req: NextApiRequest, res: NextApiResponse) {
    const authUrl = 'https://accounts.spotify.com/authorize?' + querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        scope: scopes,
        redirect_uri: redirectUri,
    });

    res.redirect(authUrl);
}