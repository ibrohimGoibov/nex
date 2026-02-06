'use client';

import { useState, useEffect } from 'react';
import { 
  Filter, X, Star, ShoppingCart, Zap, Truck, Shield, 
  TrendingUp, Heart, Search, Check, RefreshCw,
  ChevronDown, Car as CarIcon
} from 'lucide-react';
import { useBearStore } from '@/app/store/product';
import { useBeareBrand } from '@/app/store/brand'
import { useLikeStore } from '../store/favorite';

const Car = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
  </svg>
);

const AllProductsPage = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [availability, setAvailability] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cartItems, setCartItems] = useState<Record<number, number>>({});
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [activeImages, setActiveImages] = useState<Record<number, number>>({});  
  const [showBrandsModal, setShowBrandsModal] = useState<boolean>(false);
  const [brandSearchQuery, setBrandSearchQuery] = useState<string>("");
  
  const getProduct = useBearStore((state: any) => state.getProduct);
  const data = useBearStore((state: any) => state.data);
  const [loading, setLoading] = useState(true);
  const brand = useBeareBrand((state:any) => state.data)
  const getBrands = useBeareBrand((state:any) => state.getBrands)
  const LikeCar = useLikeStore((state:any) => state.LikeCar)
  
  function handleAdd(carId: number | string) {
    LikeCar(carId);
  }
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        await getProduct();
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, [getProduct]);

  
  useEffect(() => {
    if (data && data.length > 0) {
      const initialActiveImages: Record<number, number> = {};
      data.forEach((product: any) => {
        initialActiveImages[product.id] = 0;
      });
      setActiveImages(initialActiveImages);
    }
  }, [data]);

  
  const categories = [
    { id: 'suv', name: 'SUV', count: 45, icon: Truck, color: 'from-red-600 to-orange-500' },
    { id: 'sedan', name: 'Sedan', count: 32, icon: Car, color: 'from-red-500 to-pink-500' },
    { id: 'coupe', name: 'Coupe', count: 28, icon: Zap, color: 'from-red-700 to-amber-500' },
    { id: 'hatchback', name: 'Hatchback', count: 19, icon: Car, color: 'from-red-600 to-yellow-500' },
    { id: 'truck', name: 'Truck', count: 15, icon: Truck, color: 'from-red-800 to-rose-500' },
  ];

  
  const brands = Array.from(new Set(data?.map((p: any) => p.brandName) || []))
    .map((brand:any) => ({
      id: brand.toLowerCase().replace(/\s+/g, '-'),
      name: brand,
      products: data?.filter((p: any) => p.brandName === brand).length || 0
    }))
    .slice(0, 5); 

  const priceFilters = [
    { label: "Under $10k", min: 0, max: 10000 },
    { label: "$10k - $25k", min: 10000, max: 25000 },
    { label: "$25k - $50k", min: 25000, max: 50000 },
    { label: "Over $50k", min: 50000, max: 500000 },
  ];

  const ratingFilters = [
    { stars: 5, label: "★★★★★ & Up", minRating: 4.5 },
    { stars: 4, label: "★★★★☆ & Up", minRating: 4.0 },
    { stars: 3, label: "★★★☆☆ & Up", minRating: 3.0 },
    { stars: 2, label: "★★☆☆☆ & Up", minRating: 2.0 },
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleBrandToggle = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const handleAddToCart = (productId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const changeActiveImage = (productId: number, imageIndex: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [productId]: imageIndex
    }));
  };

  const resetFilters = () => {
    setPriceRange([0, 500000]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setRating(0);
    setAvailability('all');
    setSearchQuery('');
  };

  
  const filteredProducts = data?.filter((product: any) => {
    const price = product.price || 0;
    if (price < priceRange[0] || price > priceRange[1]) return false;
    
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.carClass?.toLowerCase())) return false;
    
    if (selectedBrands.length > 0) {
      const productBrandId = product.brandName?.toLowerCase().replace(/\s+/g, '-');
      if (!selectedBrands.includes(productBrandId)) return false;
    }
    
    
    const productRating = Math.random() * 2 + 3; 
    if (rating > 0 && productRating < rating) return false;
    
    if (availability === 'in-stock' && !product.inStock) return false;
    if (availability === 'out-of-stock' && product.inStock) return false;
    
    if (searchQuery && !product.model?.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.brandName?.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  }) || [];

  
  const sortedProducts = [...filteredProducts].sort((a: any, b: any) => {
    switch (sortBy) {
      case 'price-low': return (a.price || 0) - (b.price || 0);
      case 'price-high': return (b.price || 0) - (a.price || 0);
      case 'rating': return (b.rating || 0) - (a.rating || 0);
      case 'year': return (b.year || 0) - (a.year || 0);
      default: return 0;
    }
  });

  
  const getProductTags = (product: any) => {
    const tags = [];
    const year = product.year || 0;
    const currentYear = new Date().getFullYear();
    
    if (year >= currentYear - 1) {
      tags.push("NEW MODEL");
    }
    if (product.price && product.price < 20000) {
      tags.push("BEST DEAL");
    }
    if (product.price && product.price > 50000) {
      tags.push("PREMIUM");
    }
    if (Math.random() > 0.7) {
      tags.push("POPULAR");
    }
    
    return tags;
  };

  
  const getRandomRating = (id: number) => {
    const seed = id * 123456;
    return 3 + (seed % 200) / 100; 
  };

  
  const getRandomReviews = (id: number) => {
    const seed = id * 654321;
    return 50 + (seed % 450); 
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8 mt-[50px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-xl font-semibold text-red-400">Loading premium cars...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8 mt-[50px]">
      {showBrandsModal && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-500"
            onClick={() => setShowBrandsModal(false)}
          />
          
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <div className={`transform transition-all duration-700 ease-out w-full max-w-4xl ${
              showBrandsModal 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-full opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-b-2xl border-2 border-red-500/50 border-t-0 shadow-2xl shadow-red-900/30 overflow-hidden">
                <div className="p-6 border-b border-red-500/30 bg-gradient-to-r from-red-900/20 to-black">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-red-600 to-red-700 rounded-xl">
                        <CarIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">SELECT BRANDS</h2>
                        <p className="text-red-300 text-sm">Choose from available car brands</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowBrandsModal(false)}
                      className="p-2 hover:bg-red-500/20 rounded-lg transition-all duration-300 hover:rotate-90"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search brands..."
                      value={brandSearchQuery}
                      onChange={(e) => setBrandSearchQuery(e.target.value)}
                      className="w-full bg-gray-900/70 border border-red-500/30 rounded-xl pl-12 pr-4 py-3 
                        focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50
                        placeholder-gray-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {brands.map((brand: any) => (
                      <button
                        key={brand.id}
                        onClick={() => handleBrandToggle(brand.id)}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-500
                          ${selectedBrands.includes(brand.id)
                            ? 'border-red-500 bg-gradient-to-br from-red-900/30 to-black scale-105'
                            : 'border-gray-800 bg-gray-900/50 hover:border-red-400'
                          }`}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className={`p-3 rounded-full ${
                            selectedBrands.includes(brand.id)
                              ? 'bg-gradient-to-r from-red-600 to-red-700'
                              : 'bg-gray-800 group-hover:bg-red-900/50'
                          } transition-all duration-300`}>
                            <CarIcon className="w-6 h-6" />
                          </div>
                          
                          <div className="text-center">
                            <div className="font-bold text-sm mb-1">{brand.name}</div>
                            <div className="text-xs text-gray-400">
                              {brand.products} car{brand.products !== 1 ? 's' : ''}
                            </div>
                          </div>

                          {selectedBrands.includes(brand.id) && (
                            <div className="absolute top-2 right-2">
                              <div className="relative">
                                <div className="absolute inset-0 bg-red-500 rounded-full blur-sm"></div>
                                <Check className="relative w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t border-red-500/30 bg-black/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-red-500/20 rounded-full border border-red-500/50">
                        <span className="text-red-300 font-bold">
                          {selectedBrands.length} selected
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedBrands([])}
                        className="px-6 py-2 rounded-xl border border-gray-700 hover:border-red-500 
                          hover:bg-red-500/10 transition-all duration-300"
                      >
                        Clear All
                      </button>
                      <button
                        onClick={() => setShowBrandsModal(false)}
                        className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-xl 
                          font-bold hover:from-red-500 hover:to-red-600 transition-all duration-300
                          transform hover:scale-105"
                      >
                        Apply Selection
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 text-center animate-fade-down">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 
            rounded-full border border-red-500/30 mb-6 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-semibold tracking-wider">PREMIUM COLLECTION</span>
            <Zap className="w-5 h-5 text-red-400 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
            DISCOVER PREMIUM CARS
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our curated collection of <span className="text-red-400 font-semibold">{data?.length || 0}+</span> premium vehicles
          </p>
        </div>

        <div className="mb-8">
          <button
            onClick={() => setShowBrandsModal(true)}
            className="group relative w-full bg-gradient-to-r from-gray-900/50 to-black/50 
              border-2 border-red-500/30 rounded-2xl p-6 hover:border-red-500 
              transition-all duration-500 overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-xl">
                  <CarIcon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold mb-1">AVAILABLE BRANDS</div>
                  <div className="text-gray-400">
                    {selectedBrands.length > 0 
                      ? `${selectedBrands.length} brand${selectedBrands.length !== 1 ? 's' : ''} selected` 
                      : 'Click to select brands'}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-6 h-6 text-red-400 group-hover:rotate-180 transition-transform duration-500" />
            </div>
            
            {selectedBrands.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedBrands.slice(0, 5).map(brandId => {
                  const brand = brands.find((b: any) => b.id === brandId);
                  return brand && (
                    <span 
                      key={brand.id}
                      className="px-4 py-2 bg-gradient-to-r from-red-900/50 to-red-800/30 
                        rounded-full border border-red-500/50 text-sm font-semibold
                        flex items-center gap-2"
                    >
                      {brand.name}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBrandToggle(brand.id);
                        }}
                        className="hover:bg-red-700 rounded-full p-1 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}
                {selectedBrands.length > 5 && (
                  <span className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 
                    rounded-full border border-gray-700 text-sm">
                    +{selectedBrands.length - 5} more
                  </span>
                )}
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 
              group-hover:from-red-500/5 group-hover:via-red-500/10 group-hover:to-red-500/5 
              transition-all duration-500" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Zap, value: sortedProducts.length.toString(), label: "Cars Found", color: "from-red-500 to-orange-500" },
            { icon: TrendingUp, value: "4.7", label: "Avg Rating", color: "from-red-600 to-yellow-500" },
            { icon: Truck, value: "24/7", label: "Test Drive", color: "from-red-700 to-amber-500" },
            { icon: Shield, value: "100%", label: "Secure Deal", color: "from-red-800 to-rose-500" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 
                hover:border-red-500 transition-all duration-300 animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 animate-slide-right">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-red-400 animate-pulse" />
                  <h2 className="text-xl font-bold">FILTERS</h2>
                </div>
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors group"
                >
                  <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Reset All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="lg:hidden p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative mb-6 group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-400" />
                <input
                  type="text"
                  placeholder="Search cars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl pl-10 pr-4 py-3 
                    focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  CATEGORIES
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryToggle(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300
                        ${selectedCategories.includes(category.id)
                          ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50'
                          : 'bg-gray-900/50 hover:bg-gray-800/50 border border-transparent hover:border-red-500/30'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                          <category.icon className="w-4 h-4" />
                        </div>
                        <span>{category.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">({category.count})</span>
                        {selectedCategories.includes(category.id) && (
                          <Check className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                  PRICE RANGE
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-red-300 font-semibold">${priceRange[0].toLocaleString()}</div>
                    <div className="text-sm text-red-300 font-semibold">${priceRange[1].toLocaleString()}</div>
                  </div>
                  <div className="relative pt-2">
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="1000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full appearance-none h-2 bg-gray-700 rounded-lg [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full 
                        [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full appearance-none h-2 bg-gray-700 rounded-lg [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full 
                        [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:cursor-pointer absolute top-2 left-0"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {priceFilters.map((filter) => (
                      <button
                        key={filter.label}
                        onClick={() => setPriceRange([filter.min, filter.max])}
                        className={`p-2 rounded-lg text-sm transition-all duration-300
                          ${priceRange[0] === filter.min && priceRange[1] === filter.max
                            ? 'bg-red-500/20 text-red-400 border border-red-500/50 transform scale-105'
                            : 'bg-gray-900/50 hover:bg-gray-800/50 hover:border-red-500/30'
                          }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {brands.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    BRANDS
                  </h3>
                  <div className="space-y-2">
                    {brands.slice(0, 3).map((brand: any) => (
                      <button
                        key={brand.id}
                        onClick={() => handleBrandToggle(brand.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300
                          ${selectedBrands.includes(brand.id)
                            ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50'
                            : 'bg-gray-900/50 hover:bg-gray-800/50 border border-transparent hover:border-red-500/30'
                          }`}
                      >
                        <span>{brand.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-sm">({brand.products})</span>
                          {selectedBrands.includes(brand.id) && (
                            <Check className="w-4 h-4 text-red-400 animate-pulse" />
                          )}
                        </div>
                      </button>
                    ))}
                    <button
                      onClick={() => setShowBrandsModal(true)}
                      className="w-full flex items-center justify-center p-3 rounded-xl transition-all duration-300
                        bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30
                        hover:border-red-500 hover:bg-red-500/10"
                    >
                      <span className="text-red-400 font-semibold">View All Brands</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                  RATING
                </h3>
                <div className="space-y-2">
                  {ratingFilters.map((filter) => (
                    <button
                      key={filter.stars}
                      onClick={() => setRating(filter.minRating)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300
                        ${rating === filter.minRating
                          ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50'
                          : 'bg-gray-900/50 hover:bg-gray-800/50 border border-transparent hover:border-red-500/30'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < filter.stars ? 'fill-red-400 text-red-400' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">& Up</span>
                      </div>
                      {rating === filter.minRating && (
                        <Check className="w-4 h-4 text-red-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  AVAILABILITY
                </h3>
                <div className="space-y-2">
                  {['all', 'in-stock', 'out-of-stock'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setAvailability(option)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300
                        ${availability === option
                          ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50'
                          : 'bg-gray-900/50 hover:bg-gray-800/50 border border-transparent hover:border-red-500/30'
                        }`}
                    >
                      <span className="capitalize">{option.replace('-', ' ')}</span>
                      {availability === option && (
                        <Check className="w-4 h-4 text-red-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 animate-fade-down">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-red-600/20 
                    hover:from-red-500/30 hover:to-red-600/30 border border-red-500/50 px-4 py-2 
                    rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                </button>
                <div className="text-2xl font-bold">
                  <span className="text-red-400 animate-pulse">{filteredProducts.length}</span> CARS FOUND
                </div>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2 focus:outline-none 
                    focus:border-red-500 transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="year">Newest First</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 animate-fade-in">
                <div className="text-6xl mb-4 animate-pulse">🔥</div>
                <div className="text-2xl font-bold mb-2 text-red-400">No cars found</div>
                <p className="text-gray-400 mb-6">Try adjusting your filters</p>
                <button
                  onClick={resetFilters}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 
                    px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 
                    hover:shadow-xl hover:shadow-red-500/30"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product: any, index: number) => {
                  const tags = getProductTags(product);
                  const productRating = getRandomRating(product.id);
                  const reviews = getRandomReviews(product.id);
                  const displayPrice = product.price ? `$${product.price.toLocaleString()}` : 'Price on request';
                  const activeImageIndex = activeImages[product.id] || 0;
                  const mainImage = product.images?.[activeImageIndex]?.mainImage;
                  
                  return (
                    <div
                      key={product.id}
                      className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 
                        hover:border-red-500/50 overflow-hidden transition-all duration-500
                        hover:shadow-2xl hover:shadow-red-500/20 animate-fade-in relative"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tags.includes("NEW MODEL") && (
                        <div className="absolute top-3 left-3 z-20 animate-pulse">
                          <div className="relative">
                            <div className="absolute inset-0 bg-red-500 rounded-full blur-md" />
                            <div className="relative bg-gradient-to-r from-red-600 to-orange-600 
                              px-3 py-1 rounded-full text-white font-bold text-xs">
                              NEW MODEL
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="relative h-48 overflow-hidden">
                        {mainImage ? (
                          <img
                            src={`http://157.180.29.248:5505/api/images/${mainImage}`}
                            alt={`${product.brandName} ${product.model}`}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <Car className="w-16 h-16 text-red-500" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                          {tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-red-500/90 to-red-600/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 
                            transition-colors z-20"
                        >
                          <Heart
                          onClick={() => handleAdd(product.id)}
                            className={`w-5 h-5 transition-all duration-300
                              ${favorites.includes(product.id) 
                                ? 'fill-red-500 text-red-500 scale-110' 
                                : 'text-white hover:text-red-400'
                              }`}
                          />
                        </button>
                      </div>

                      {product.images && product.images.length > 1 && (
                        <div className="px-5 pt-3 flex gap-2">
                          {product.images.map((img: any, idx: number) => (
                            <button
                              key={idx}
                              onClick={() => changeActiveImage(product.id, idx)}
                              className={`w-10 h-10 rounded-lg overflow-hidden transition-all duration-300
                                ${activeImageIndex === idx 
                                  ? 'ring-2 ring-red-500 transform scale-110' 
                                  : 'opacity-70 hover:opacity-100 hover:scale-105'
                                }`}
                            >
                              <img
                                src={`http://157.180.29.248:5505/api/images/${img.mainImage}`}
                                className="w-full h-full object-cover"
                                alt={`View ${idx + 1}`}
                              />
                            </button>
                          ))}
                        </div>
                      )}

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                            {product.carClass || 'Premium'}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-red-400 text-red-400" />
                            <span className="text-sm font-bold text-white">{productRating.toFixed(1)}</span>
                            <span className="text-xs text-gray-400">({reviews})</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold mb-1 text-white group-hover:text-red-300 transition-colors">
                          {product.brandName} {product.model}
                        </h3>
                        
                        {product.year && (
                          <p className="text-sm text-gray-400 mb-3">Year: {product.year}</p>
                        )}

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">{displayPrice}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleAddToCart(product.id)}
                          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold 
                            transition-all duration-300 transform hover:scale-[1.02] group/btn relative overflow-hidden
                            bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600"
                        >
                          <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                          TEST DRIVE
                          {cartItems[product.id] > 0 && (
                            <span className="ml-2 px-2 py-1 text-xs bg-white/20 rounded-full">
                              {cartItems[product.id]}
                            </span>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                            translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="fixed bottom-8 right-8 z-50">
          <button
            className="relative bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-full 
              shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300
              transform hover:scale-110 animate-bounce-subtle group"
          >
            <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            {Object.keys(cartItems).length > 0 && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full 
                flex items-center justify-center text-xs font-bold animate-pulse">
                {Object.values(cartItems).reduce((a: any, b: any) => a + b, 0)}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;