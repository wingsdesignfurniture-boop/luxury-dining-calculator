import React from 'react';
import { Calculator } from './components/Calculator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">LuxFurniture <span className="text-slate-400 font-normal">| Sales Tool</span></h1>
          </div>
          <div className="text-sm text-slate-500 font-medium">
            Internal Use Only
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Dining Table Calculator</h2>
          <p className="mt-2 text-slate-600">Calculate client and partner pricing for custom dining tables.</p>
        </div>
        
        <Calculator />
      </main>
    </div>
  );
};

export default App;
