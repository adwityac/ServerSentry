import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: number;
  change: number;
  unit?: string;
}

export function MetricsCard({ title, value, change, unit = '' }: MetricsCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">
          {value}
          {unit && <span className="text-gray-500 text-sm ml-1">{unit}</span>}
        </p>
        <span
          className={`ml-2 flex items-center text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          {Math.abs(change)}%
        </span>
      </div>
    </div>
  );
}