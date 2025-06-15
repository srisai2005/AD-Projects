import React from 'react';
import { Plane as Plant, Calendar, Scale, Tag } from 'lucide-react';

interface CropCardProps {
  name: string;
  yield: string;
  growthPeriod: number;
  procedure: string[];
  tags: string[];
  image: string; // Add image property
}

export function CropCard({ name, yield: cropYield, growthPeriod, procedure, tags, image }: CropCardProps) {
  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl p-6 space-y-4 transform transition-all hover:scale-[1.02]">
      {/* Crop Image */}
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <img
          src={image} // Removed the query string
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Crop Name and Tags */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Plant className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Yield and Growth Period */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Scale className="w-5 h-5" />
          <span>Expected yield: {cropYield}</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="w-5 h-5" />
          <span>Growth period: {growthPeriod} days</span>
        </div>
      </div>

      {/* Farming Procedure */}
      <div className="mt-4">
        <h4 className="font-semibold text-gray-700 mb-2">Farming Steps:</h4>
        <ol className="list-decimal list-inside space-y-2">
          {procedure.map((step, index) => (
            <li key={index} className="text-gray-600 hover:text-gray-900 transition-colors">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}