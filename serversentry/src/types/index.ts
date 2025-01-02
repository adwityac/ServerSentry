export interface GameMetric {
  id: string;
  timestamp: number;
  value: number;
}

export interface PerformanceData {
  fps: GameMetric[];
  latency: GameMetric[];
  memoryUsage: GameMetric[];
  activePlayers: number;
  serverLoad: number;
}

export interface ServerStatus {
  status: 'healthy' | 'warning' | 'critical';
  uptime: number;
  region: string;
}