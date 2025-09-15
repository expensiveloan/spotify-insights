import { NextApiRequest, NextApiResponse } from 'next';
import { getTokenFromCode } from '../../../lib/spotifyClient';
import { setSession } from '../../../lib/session';

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
    const { code } = req.query;

    if (!code) {
        return res.status(400).json({ error: 'Code not provided' });
    }

    try {
        const tokenData = await getTokenFromCode(code as string);
        await setSession(tokenData);

        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error during callback:', error);
        res.status(500).json({ error: 'Failed to retrieve access token' });
    }
}