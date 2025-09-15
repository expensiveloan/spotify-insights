import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-black text-yellow-500 p-4 rounded-lg shadow-md flex items-center">
      {icon && <div className="mr-2">{icon}</div>}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;