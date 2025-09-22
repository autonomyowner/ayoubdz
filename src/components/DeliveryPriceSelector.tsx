import { useState } from 'react';
import { deliveryPricingData } from '../data/deliveryPricing';

const DeliveryPriceSelector = () => {
  const [selectedWilaya, setSelectedWilaya] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter wilayas based on search term
  const filteredWilayas = deliveryPricingData.filter(item =>
    item.wilaya.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get selected wilaya data
  const selectedData = deliveryPricingData.find(item => item.wilaya === selectedWilaya);

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case 'A': return 'bg-green-100 text-green-800 border-green-300';
      case 'B': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'C': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'D': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 text-sm font-semibold mb-4">
          <span className="mr-2">🚚</span>
          Delivery Price Calculator
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Check Delivery Price</h3>
        <p className="text-gray-600 text-sm">Select your wilaya to see delivery cost</p>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2 text-sm">
          Search Wilaya
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type wilaya name..."
          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
        />
      </div>

      {/* Wilaya Selector */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2 text-sm">
          Choose Your Wilaya
        </label>
        <select
          value={selectedWilaya}
          onChange={(e) => setSelectedWilaya(e.target.value)}
          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
        >
          <option value="">Select your wilaya</option>
          {filteredWilayas.map((item) => (
            <option key={item.wilayaCode} value={item.wilaya}>
              {item.wilaya}
            </option>
          ))}
        </select>
      </div>

      {/* Price Display */}
      {selectedData && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600 mb-2">
              {selectedData.price === 0 ? 'FREE' : `${selectedData.price.toLocaleString()} DA`}
            </div>
            <div className="text-gray-700 text-sm mb-2">
              Delivery to <strong>{selectedData.wilaya}</strong>
            </div>
            <div className="flex items-center justify-center mb-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getZoneColor(selectedData.zone)}`}>
                Zone {selectedData.zone}
              </span>
            </div>
            <div className="text-gray-600 text-sm">
              Estimated delivery: <strong>{selectedData.deliveryTime}</strong>
            </div>
          </div>
        </div>
      )}

      {/* Quick Info */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="text-xs text-gray-600 text-center">
          <div className="font-semibold mb-1">Delivery Zones:</div>
          <div className="flex justify-center space-x-2 text-xs">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Zone A</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Zone B</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Zone C</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Zone D</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPriceSelector;
