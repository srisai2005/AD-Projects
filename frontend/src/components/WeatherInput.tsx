import React from 'react';
import { Droplets, Thermometer } from 'lucide-react';

interface WeatherInputProps {
  temperature: number;
  setTemperature: (temp: number) => void;
  rainfall: number;
  setRainfall: (rain: number) => void;
}

export function WeatherInput({ temperature, setTemperature, rainfall, setRainfall }: WeatherInputProps) {
  return (
    <div className="space-y-6">
      {/* Temperature Input */}
      <div className="flex items-center space-x-4">
        <Thermometer className="w-6 h-6 text-red-500" />
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Temperature (°C): <span className="font-bold">{temperature}°C</span>
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={temperature}
            onInput={(e) => setTemperature(Number((e.target as HTMLInputElement).value))} // Update in real-time
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Cold (0°C)</span>
            <span>Moderate (25°C)</span>
            <span>Hot (50°C)</span>
          </div>
        </div>
      </div>

      {/* Rainfall Input */}
      <div className="flex items-center space-x-4">
        <Droplets className="w-6 h-6 text-blue-500" />
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Rainfall (mm/month): <span className="font-bold">{rainfall}mm</span>
          </label>
          <input
            type="range"
            min="0"
            max="500"
            value={rainfall}
            onInput={(e) => setRainfall(Number((e.target as HTMLInputElement).value))} // Update in real-time
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Dry (0mm)</span>
            <span>Moderate (250mm)</span>
            <span>Wet (500mm)</span>
          </div>
        </div>
      </div>
    </div>
  );
}