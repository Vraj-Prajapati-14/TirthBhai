import React from 'react';
import { Users, FolderKanban, MessageSquare, CheckCircle } from 'lucide-react';

interface StatsCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
  trend: number;
  bgColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, label, value, trend, bgColor }) => (
  <div className={`${bgColor} rounded-xl p-6 text-white`}>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm opacity-80">{label}</p>
        <h3 className="text-2xl font-bold mt-2">{value}</h3>
      </div>
      <Icon className="w-8 h-8 opacity-80" />
    </div>
    <div className="mt-4 text-sm">
      <span className={trend > 0 ? 'text-green-300' : 'text-red-300'}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
      <span className="opacity-80 ml-2">vs last month</span>
    </div>
  </div>
);

export const DashboardStats = () => {
  const stats = [
    { 
      icon: Users, 
      label: 'Team Members', 
      value: 12, 
      trend: 8,
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700'
    },
    { 
      icon: FolderKanban, 
      label: 'Active Projects', 
      value: 24, 
      trend: 12,
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700'
    },
    { 
      icon: MessageSquare, 
      label: 'New Inquiries', 
      value: 18, 
      trend: -5,
      bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700'
    },
    { 
      icon: CheckCircle, 
      label: 'Completed Tasks', 
      value: 64, 
      trend: 24,
      bgColor: 'bg-gradient-to-br from-green-500 to-green-700'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};