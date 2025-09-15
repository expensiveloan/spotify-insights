import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSession, signIn, signOut } from '../lib/session';

const useAuth = () => {
    const [session, setSession] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchSession = async () => {
            const sessionData = await getSession();
            setSession(sessionData);
        };
        fetchSession();
    }, []);

    const login = () => {
        signIn();
    };

    const logout = () => {
        signOut();
        router.push('/');
    };

    return { session, login, logout };
};

export default useAuth;