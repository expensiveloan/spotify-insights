import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { StatsCard } from '../components/StatsCard';
import { fetchSpotifyInsights } from '../lib/spotifyClient';
import styles from '../styles/dashboard.module.css';

const Dashboard = () => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInsights = async () => {
      try {
        const data = await fetchSpotifyInsights();
        setInsights(data);
      } catch (error) {
        console.error('Error fetching Spotify insights:', error);
      } finally {
        setLoading(false);
      }
    };

    getInsights();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!insights) {
    return <div>No insights available. Please connect your Spotify account.</div>;
  }

  return (
    <Layout>
      <div className={styles.dashboard}>
        <h1>Your Spotify Insights</h1>
        <StatsCard title="Minutes Listened" value={insights.minutesListened} />
        <StatsCard title="Top Artists" value={insights.topArtists.join(', ')} />
        <StatsCard title="Top Albums" value={insights.topAlbums.join(', ')} />
        <StatsCard title="Top Genres" value={insights.topGenres.join(', ')} />
      </div>
    </Layout>
  );
};

export default Dashboard;