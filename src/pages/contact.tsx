import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-yellow-500">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-8">For any inquiries, please join our Discord server:</p>
            <a
                href="https://discord.gg/your-discord-link"
                className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition"
                target="_blank"
                rel="noopener noreferrer"
            >
                Join Discord
            </a>
        </div>
    );
};

export default Contact;