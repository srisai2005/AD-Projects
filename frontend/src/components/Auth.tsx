import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserPlus, LogIn, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    farmLocation: '',
  });
  const { login, signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (isLogin) {
      const success = await login(formData.email, formData.password);
      if (success) {
        toast.success('Welcome back!');
        window.location.href = '/dashboard';
      } else {
        toast.error('Invalid credentials');
      }
    } else {
      if (!formData.name || !formData.farmLocation) {
        toast.error('Please fill in all fields');
        return;
      }
      const success = await signup(formData); // Include name and farmLocation
      if (success) {
        setIsLogin(true);
        toast.success('Account created successfully! Please login.');
        setFormData({ email: '', password: '', name: '', farmLocation: '' });
      } else {
        toast.error('Error creating account');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all hover:scale-[1.01]">
        <div className="text-center mb-8">
          <Lock className="mx-auto h-12 w-12 text-green-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? 'Access your farming dashboard' : 'Join our farming community'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Farm Location</label>
                <input
                  type="text"
                  value={formData.farmLocation}
                  onChange={(e) => setFormData({ ...formData, farmLocation: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Region/City"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {isLogin ? (
              <>
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4 mr-2" />
                Create Account
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({ email: '', password: '', name: '', farmLocation: '' });
            }}
            className="text-sm text-green-600 hover:text-green-500"
          >
            {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}