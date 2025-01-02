import React from 'react';
import { ServerStatus } from '../types';
import { Activity } from 'lucide-react';

interface ServerStatusBadgeProps {
  status: ServerStatus;
}

export function ServerStatusBadge({ status }: ServerStatusBadgeProps) {
  const statusColors = {
    healthy: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    critical: 'bg-red-100 text-red-800'
  };

  return (
    <div className="flex items-center space-x-2">
      <Activity className="w-4 h-4" />
      <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${statusColors[status.status]}`}>
        {status.status.charAt(0).toUpperCase() + status.status.slice(1)}
      </span>
      <span className="text-sm text-gray-500">
        Region: {status.region} | Uptime: {Math.floor(status.uptime / 3600)}h
      </span>
    </div>
  );
}