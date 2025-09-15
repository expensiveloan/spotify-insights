import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-yellow-500 py-4 text-center">
            <p>&copy; {new Date().getFullYear()} Spotify Insights. All rights reserved.</p>
            <p>
                <a href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer" className="underline">
                    Join our Discord
                </a>
            </p>
        </footer>
    );
};

export default Footer;