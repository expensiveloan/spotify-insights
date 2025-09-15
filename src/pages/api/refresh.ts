import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken } from '../../../lib/session';

export default async function refresh(req: NextApiRequest, res: NextApiResponse) {
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) {
        return res.status(400).json({ error: 'Refresh token is required' });
    }

    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        }),
    });

    if (!tokenResponse.ok) {
        return res.status(tokenResponse.status).json({ error: 'Failed to refresh access token' });
    }

    const tokenData = await tokenResponse.json();
    return res.status(200).json(tokenData);
}