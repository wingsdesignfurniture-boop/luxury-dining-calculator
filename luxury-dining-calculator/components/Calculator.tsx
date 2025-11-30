import React, { useState } from 'react';
import { Calculator as CalcIcon, RefreshCw, Ruler, Users, Layers, Gem, Info } from 'lucide-react';
import { BaseVariant, CalculationResult, SeatingCapacity, TopMaterial } from '../types';
import { BASE_PRICES, MARKUP_RATES, PLYWOOD_COST, TOP_RATES } from '../constants';
import { ResultCard } from './ResultCard';

export const Calculator: React.FC = () => {
  const [seating, setSeating] = useState<SeatingCapacity>(SeatingCapacity.SIX);
  const [length, setLength] = useState<string>('');
  const [breadth, setBreadth] = useState<string>('');
  const [topMaterial, setTopMaterial] = useState<TopMaterial>(TopMaterial.ONYX);
  const [baseVariant, setBaseVariant] = useState<BaseVariant>(BaseVariant.WOODEN);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculate = () => {
    const len = parseFloat(length);
    const wid = parseFloat(breadth);

    if (isNaN(len) || isNaN(wid) || len <= 0 || wid <= 0) {
      alert("Please enter valid positive numbers for dimensions.");
      return;
    }

    const area = len * wid;
    const topRate = TOP_RATES[topMaterial];
    const topCost = area * topRate;
    
    const baseCost = BASE_PRICES[seating][baseVariant];
    
    // Total Cost = Marble Top + Base + Plywood (Fixed 4000)
    const totalCost = topCost + baseCost + PLYWOOD_COST;

    const clientPrice = totalCost * MARKUP_RATES.CLIENT;
    const designerPrice = totalCost * MARKUP_RATES.DESIGNER;

    setResult({
      topCost,
      baseCost,
      totalCost,
      clientPrice,
      designerPrice,
      area
    });
  };

  const reset = () => {
    setResult(null);
    setLength('');
    setBreadth('');
    setSeating(SeatingCapacity.SIX);
    setTopMaterial(TopMaterial.ONYX);
    setBaseVariant(BaseVariant.WOODEN);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <CalcIcon className="w-6 h-6 text-indigo-600" />
              </div>
              Table Configurator
            </h2>
            
            <div className="space-y-6">
              {/* Seating Capacity */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-500" />
                  Seating Capacity
                </label>
                <div className="relative">
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value as SeatingCapacity)}
                    className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all cursor-pointer hover:border-indigo-300 appearance-none"
                    style={{ backgroundImage: 'none' }} 
                  >
                    <option value={SeatingCapacity.SIX}>6 Seater</option>
                    <option value={SeatingCapacity.EIGHT}>8 Seater</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>

              {/* Dimensions */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-indigo-500" />
                  Dimensions (Feet)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="0"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">FT</span>
                    <span className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Length</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={breadth}
                      onChange={(e) => setBreadth(e.target.value)}
                      placeholder="0"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">FT</span>
                    <span className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Breadth</span>
                  </div>
                </div>
              </div>

              {/* Top Material */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Gem className="w-4 h-4 text-indigo-500" />
                  Top Material
                </label>
                <div className="relative">
                  <select
                    value={topMaterial}
                    onChange={(e) => setTopMaterial(e.target.value as TopMaterial)}
                    className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all cursor-pointer hover:border-indigo-300 appearance-none"
                  >
                    <option value={TopMaterial.ONYX}>Natural Onyx</option>
                    <option value={TopMaterial.ITALIAN}>Italian Marble</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>

              {/* Base Variant */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  Base Selection
                </label>
                <div className="relative">
                  <select
                    value={baseVariant}
                    onChange={(e) => setBaseVariant(e.target.value as BaseVariant)}
                    className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all cursor-pointer hover:border-indigo-300 appearance-none"
                  >
                    <option value={BaseVariant.WOODEN}>Wooden Base</option>
                    <option value={BaseVariant.METAL_LIGHT}>Light Metal Base</option>
                    <option value={BaseVariant.METAL_HEAVY}>Heavy Metal Base</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>

              <button
                onClick={calculate}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200 transform active:scale-[0.98] mt-4"
              >
                Calculate Selling Price
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-7">
          {!result ? (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center bg-white border border-slate-200 rounded-3xl p-10 text-center shadow-sm">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <CalcIcon className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700">Ready to Calculate</h3>
              <p className="text-slate-500 max-w-sm mt-3 leading-relaxed">
                Enter the table dimensions and material specifications on the left to generate the client and partner pricing.
              </p>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in">
              {/* Main Price Cards */}
              <div className="grid grid-cols-1 gap-6">
                <ResultCard
                  title="Client Quotation"
                  amount={result.clientPrice}
                  description="Recommended Final Selling Price"
                  highlight={true}
                />
                <ResultCard
                  title="Interior Designer Price"
                  amount={result.designerPrice}
                  description="Exclusive Partner Rate"
                />
              </div>

              {/* Specification Summary */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center backdrop-blur-sm">
                  <h3 className="font-bold text-slate-700 flex items-center gap-2">
                    <Info className="w-4 h-4 text-indigo-500" />
                    Selected Specifications
                  </h3>
                  <button onClick={reset} className="text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-indigo-50">
                    <RefreshCw className="w-3.5 h-3.5" /> Start Over
                  </button>
                </div>
                <div className="p-8">
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
                    <div>
                      <dt className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Configuration</dt>
                      <dd className="text-lg text-slate-800 font-semibold">{seating} Seater</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Dimensions</dt>
                      <dd className="text-lg text-slate-800 font-semibold">{length}' × {breadth}' <span className="text-slate-400 text-base font-normal">({result.area.toLocaleString()} sq.ft)</span></dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Surface Material</dt>
                      <dd className="text-lg text-slate-800 font-semibold">
                        {topMaterial === TopMaterial.ONYX ? 'Natural Onyx' : 'Italian Marble'}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Base Type</dt>
                      <dd className="text-lg text-slate-800 font-semibold">
                        {baseVariant === BaseVariant.WOODEN && 'Wooden Base'}
                        {baseVariant === BaseVariant.METAL_LIGHT && 'Light Metal Base'}
                        {baseVariant === BaseVariant.METAL_HEAVY && 'Heavy Metal Base'}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};