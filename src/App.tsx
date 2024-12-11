import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="min-h-[calc(100vh-150px)]">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;