import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/Layout';

const Home = () => {
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen bg-black text-yellow-500">
        <h1 className="text-4xl font-bold mb-4">Welcome to Spotify Insights</h1>
        <p className="text-lg mb-8">Connect your Spotify account to view your listening statistics.</p>
        <button
          onClick={login}
          className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition"
        >
          Connect to Spotify
        </button>
      </div>
    </Layout>
  );
};

export default Home;