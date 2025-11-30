import React from 'react';

interface ResultCardProps {
  title: string;
  amount: number;
  description: string;
  highlight?: boolean;
}

export const ResultCard: React.FC<ResultCardProps> = ({ title, amount, description, highlight = false }) => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  return (
    <div className={`relative overflow-hidden p-8 rounded-3xl border transition-all duration-300 group ${
      highlight 
        ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 text-white shadow-xl shadow-slate-200' 
        : 'bg-white border-slate-200 text-slate-800 shadow-sm hover:shadow-md'
    }`}>
      {highlight && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      )}
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h3 className={`text-sm font-bold uppercase tracking-widest mb-1 ${highlight ? 'text-indigo-300' : 'text-slate-400'}`}>
            {title}
          </h3>
          <p className={`text-sm ${highlight ? 'text-slate-300' : 'text-slate-500'}`}>
            {description}
          </p>
        </div>
        <div className={`text-4xl md:text-5xl font-bold tracking-tight ${highlight ? 'text-white' : 'text-slate-900'}`}>
          {formatter.format(amount)}
        </div>
      </div>
    </div>
  );
};