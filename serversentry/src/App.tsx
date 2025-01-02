import React, { useState, useEffect } from 'react';
import { Activity, Users, Server } from 'lucide-react';
import { MetricsCard } from './components/MetricsCard';
import { PerformanceChart } from './components/PerformanceChart';
import { ServerStatusBadge } from './components/ServerStatusBadge';
import type { PerformanceData, ServerStatus, GameMetric } from './types';

function App() {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    fps: [],
    latency: [],
    memoryUsage: [],
    activePlayers: 0,
    serverLoad: 0
  });

  const [serverStatus, setServerStatus] = useState<ServerStatus>({
    status: 'healthy',
    uptime: 0,
    region: 'US-East'
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = Date.now();
      const newMetric = (prev: GameMetric[]): GameMetric[] => [
        ...prev.slice(-20),
        {
          id: timestamp.toString(),
          timestamp,
          value: Math.random() * 100
        }
      ];

      setPerformanceData(prev => ({
        fps: newMetric(prev.fps),
        latency: newMetric(prev.latency),
        memoryUsage: newMetric(prev.memoryUsage),
        activePlayers: Math.floor(Math.random() * 1000),
        serverLoad: Math.random() * 100
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <Activity className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Game Performance Dashboard</h1>
          </div>
          <ServerStatusBadge status={serverStatus} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricsCard
            title="Active Players"
            value={performanceData.activePlayers}
            change={2.5}
            unit="players"
          />
          <MetricsCard
            title="Average FPS"
            value={performanceData.fps[performanceData.fps.length - 1]?.value ?? 0}
            change={-1.2}
            unit="fps"
          />
          <MetricsCard
            title="Server Load"
            value={performanceData.serverLoad}
            change={0.8}
            unit="%"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium text-gray-900 mb-4">FPS Over Time</h2>
            <PerformanceChart data={performanceData.fps} color="#4f46e5" dataKey="fps" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Latency Over Time</h2>
            <PerformanceChart data={performanceData.latency} color="#ef4444" dataKey="latency" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;