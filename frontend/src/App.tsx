import React from 'react';
import { Auth } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

function AppContent() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Show a loading spinner while checking authentication
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return isAuthenticated ? <Dashboard /> : <Auth />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
      <Toaster position="top-right" />
    </AuthProvider>
  );
}

export default App;