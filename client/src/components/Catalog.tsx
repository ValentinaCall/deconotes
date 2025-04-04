import { useState } from 'react';
import { products, Product } from '@/lib/data';

const Catalog = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterProducts = (category: string) => {
    setFilter(category);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = searchQuery === '' || 
                          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Nuestro Catálogo de Productos</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Descubre nuestras soluciones innovadoras diseñadas para mejorar la productividad y la organización.</p>
        </div>

        {/* Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => filterProducts('all')}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                filter === 'all' 
                  ? 'bg-[#3498db] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Todos los Productos
            </button>
            <button 
              onClick={() => filterProducts('software')}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                filter === 'software' 
                  ? 'bg-[#3498db] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Software
            </button>
            <button 
              onClick={() => filterProducts('hardware')}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                filter === 'hardware' 
                  ? 'bg-[#3498db] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Hardware
            </button>
            <button 
              onClick={() => filterProducts('service')}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                filter === 'service' 
                  ? 'bg-[#3498db] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Servicios
            </button>
          </div>
        </div>

        {/* Search Box */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              className="w-full py-3 pl-12 pr-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:bg-white"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <i className="fas fa-search text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="bg-[#3498db] text-white text-sm py-1 px-3 rounded-full">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                  <button className="bg-[#f39c12] hover:bg-yellow-500 text-white py-2 px-4 rounded transition duration-300">Ver Detalles</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
