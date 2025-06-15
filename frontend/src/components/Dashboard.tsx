import { Key, useState, useMemo } from 'react';
import { WeatherInput } from './WeatherInput';
import { CropCard } from './CropCard';
import { crops } from '../data/crops';
import { Search, LogOut, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import React from 'react';

export function Dashboard() {
  const { user, logout } = useAuth();
  const [view, setView] = useState<'prediction' | 'browse'>('prediction');
  const [soilType, setSoilType] = useState('');
  const [temperature, setTemperature] = useState(25);
  const [rainfall, setRainfall] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isSignup ? '/signup' : '/login';
    const response = await fetch(`http://localhost:5000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      if (!isSignup) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
    } else {
      alert(data.message);
    }
  };

  const suggestedCrops = useMemo(() => {
    if (view === 'prediction' && !soilType) return [];

    return crops.filter(crop => {
      if (view === 'browse') {
        return searchTerm !== '' && 
          crop.name.toLowerCase().includes(searchTerm.toLowerCase());
      }

      const tempMatch = temperature >= crop.idealTemp.min && temperature <= crop.idealTemp.max;
      const rainMatch = rainfall >= crop.rainfall.min && rainfall <= crop.rainfall.max;
      const soilMatch = crop.soilTypes.includes(soilType);
      return tempMatch && rainMatch && soilMatch;
    });
  }, [view, soilType, temperature, rainfall, searchTerm]);

  return (
    <div
      className="min-h-screen bg-cover bg-center animate-fade-in"
      style={{
        backgroundImage: "url('https://www.agfoundation.org/imgz/_1200x690_crop_center-center_75_none/9585/sunset.webp')",
      }}
    >
      <header className="bg-black bg-opacity-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
              Weather Based Crop Suggestion System
            </h1>
            <p className="text-sm text-gray-300 mt-2">Welcome, {user?.name || "Guest"}</p>
            <p className="text-sm text-gray-300">Farm Location: {user?.farmLocation || "Unknown"}</p>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition duration-300"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white bg-opacity-90 rounded-lg shadow-lg animate-fade-in">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setView('prediction')}
            className={`px-4 py-2 rounded-md transition duration-300 transform hover:scale-105 ${
              view === 'prediction'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            Crop Prediction
          </button>
          <button
            onClick={() => {
              setView('browse');
              setSearchTerm('');
            }}
            className={`px-4 py-2 rounded-md transition duration-300 transform hover:scale-105 ${
              view === 'browse'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            Browse All Crops
          </button>
        </div>

        {view === 'prediction' ? (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Your Soil Type
                </label>
                <select
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Choose soil type...</option>
                  <option value="red soil">Red Soil</option>
                  <option value="black soil">Black Soil</option>
                  <option value="clay">Clay Soil</option>
                  <option value="desert soil">Desert Soil</option>
                  <option value="alluvial">Alluvial Soil</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <WeatherInput
                temperature={temperature}
                setTemperature={setTemperature}
                rainfall={rainfall}
                setRainfall={setRainfall}
              />
            </div>
            <button
              onClick={() => {
                setSoilType('');
                setTemperature(25);
                setRainfall(100);
              }}
              className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300 transform hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter crop name to search..."
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 pl-10"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}

        <div className="space-y-6">
          {suggestedCrops.length > 0 ? (
            <>
              <h2 className="text-xl font-semibold text-gray-900">
                {view === 'prediction'
                  ? `Found ${suggestedCrops.length} suitable crops for your conditions`
                  : `Found ${suggestedCrops.length} crops matching "${searchTerm}"`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestedCrops.map((crop: { name: string; yield: string; growthPeriod: number; procedure: string[]; tags: string[]; }, index: Key | null | undefined) => (
                  <CropCard
                    key={index}
                    name={crop.name}
                    yield={crop.yield}
                    growthPeriod={crop.growthPeriod}
                    procedure={crop.procedure}
                    tags={crop.tags}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600">
                {view === 'prediction'
                  ? soilType
                    ? "No suitable crops found for these conditions. Try adjusting the temperature or rainfall."
                    : "Select your soil type to get crop suggestions."
                  : searchTerm
                    ? "No crops found matching your search."
                    : "Enter a crop name to search available crops."}
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2025 Weather Based Crop Suggestion System. All rights reserved.</p>
        </div>
      </footer>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-4">{isSignup ? 'Signup' : 'Login'}</h1>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              {isSignup ? 'Signup' : 'Login'}
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-green-600 hover:underline"
            >
              {isSignup ? 'Login' : 'Signup'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}