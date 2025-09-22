import { useState } from 'react';
import { deliveryPricingData } from '../data/deliveryPricing';

const DeliveryPricingTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'wilaya' | 'price' | 'deliveryTime'>('wilaya');

  // Filter and sort data
  const filteredData = deliveryPricingData
    .filter(item => {
      const matchesSearch = item.wilaya.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesZone = selectedZone === 'all' || item.zone === selectedZone;
      return matchesSearch && matchesZone;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'wilaya':
          return a.wilaya.localeCompare(b.wilaya);
        case 'price':
          return a.price - b.price;
        case 'deliveryTime':
          return a.deliveryTime.localeCompare(b.deliveryTime);
        default:
          return 0;
      }
    });

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case 'A': return 'bg-green-100 text-green-800 border-green-200';
      case 'B': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'C': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'D': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getZoneDescription = (zone: string) => {
    switch (zone) {
      case 'A': return 'Zone A - Algiers & Surrounding Areas';
      case 'B': return 'Zone B - Central & Eastern Regions';
      case 'C': return 'Zone C - Southern Regions';
      case 'D': return 'Zone D - Remote Areas';
      default: return '';
    }
  };

  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 text-sm font-semibold mb-4">
          <span className="mr-2">🚚</span>
          Delivery Pricing for All Wilayas
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Nationwide Delivery
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Choose your wilaya to see delivery prices and estimated delivery times. 
          We deliver premium fragrances safely across all 58 wilayas of Algeria.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-6 space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search */}
          <div>
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

          {/* Zone Filter */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Filter by Zone
            </label>
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
            >
              <option value="all">All Zones</option>
              <option value="A">Zone A - Algiers & Surrounding</option>
              <option value="B">Zone B - Central & Eastern</option>
              <option value="C">Zone C - Southern Regions</option>
              <option value="D">Zone D - Remote Areas</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'wilaya' | 'price' | 'deliveryTime')}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
            >
              <option value="wilaya">Wilaya Name</option>
              <option value="price">Price (Low to High)</option>
              <option value="deliveryTime">Delivery Time</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Showing {filteredData.length} of {deliveryPricingData.length} wilayas
          </p>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-amber-50 to-orange-50">
              <th className="px-4 py-4 text-left text-gray-800 font-bold text-sm uppercase tracking-wide border-b-2 border-amber-200">
                Wilaya
              </th>
              <th className="px-4 py-4 text-left text-gray-800 font-bold text-sm uppercase tracking-wide border-b-2 border-amber-200">
                Code
              </th>
              <th className="px-4 py-4 text-center text-gray-800 font-bold text-sm uppercase tracking-wide border-b-2 border-amber-200">
                Zone
              </th>
              <th className="px-4 py-4 text-center text-gray-800 font-bold text-sm uppercase tracking-wide border-b-2 border-amber-200">
                Price (DA)
              </th>
              <th className="px-4 py-4 text-center text-gray-800 font-bold text-sm uppercase tracking-wide border-b-2 border-amber-200">
                Delivery Time
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr 
                key={item.wilayaCode} 
                className={`hover:bg-amber-50 transition-colors duration-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="px-4 py-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-800">{item.wilaya}</div>
                </td>
                <td className="px-4 py-4 border-b border-gray-200">
                  <span className="text-gray-600 font-mono text-sm">{item.wilayaCode}</span>
                </td>
                <td className="px-4 py-4 border-b border-gray-200 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getZoneColor(item.zone)}`}>
                    Zone {item.zone}
                  </span>
                </td>
                <td className="px-4 py-4 border-b border-gray-200 text-center">
                  <div className="font-bold text-lg text-amber-600">
                    {item.price === 0 ? 'FREE' : `${item.price.toLocaleString()} DA`}
                  </div>
                </td>
                <td className="px-4 py-4 border-b border-gray-200 text-center">
                  <span className="text-gray-700 font-medium">{item.deliveryTime}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Zone Legend */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-amber-50 rounded-xl">
        <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Delivery Zones</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['A', 'B', 'C', 'D'].map(zone => (
            <div key={zone} className="text-center">
              <div className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold border mb-2 ${getZoneColor(zone)}`}>
                Zone {zone}
              </div>
              <p className="text-xs text-gray-600">{getZoneDescription(zone)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
        <div className="flex items-start">
          <span className="text-amber-600 text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">Delivery Information</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Free delivery for orders over 50,000 DA in Zone A</li>
              <li>• All packages are insured and tracked</li>
              <li>• Delivery times may vary during holidays</li>
              <li>• Contact us for express delivery options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPricingTable;
