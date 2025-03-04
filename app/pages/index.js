"use client"
import React, { useState } from 'react';
import { Search, MapPin, Database, Beaker, ChevronDown, Phone, Mail, Map, Check, ThumbsUp, Shield, Star, Calendar, Filter, Clock, ArrowRight, Heart, Globe, Users, Flask, Microscope } from 'lucide-react';
import LabMap from './components/LabMap';

const LabConnectLanding = () => {
  const [searchType, setSearchType] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Select Category');
  const [activeTab, setActiveTab] = useState('labs');

  const featuredLabs = [
    {
      id: 1,
      name: 'Kumar Lab',
      category: 'VIROLOGY',
      location: 'IITA, Ibadan',
      date: '27.05.2023',
      author: 'Jane Doe',
      isNew: true,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&h=400',
      equipment: ['PCR Machines', 'Centrifuges', 'Microscopes'],
      price: 'From $120/day'
    },
    {
      id: 2,
      name: 'Smith Research Group',
      category: 'BIOCHEMISTRY',
      location: 'University of California, Berkeley',
      date: '15.07.2023',
      author: 'John Smith',
      isNew: true,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&h=400',
      equipment: ['Mass Spectrometers', 'HPLC Systems', 'Protein Analyzers'],
      price: 'From $150/day'
    },
    {
      id: 3,
      name: 'Advanced Materials Lab',
      category: 'MATERIALS SCIENCE',
      location: 'MIT, Cambridge',
      date: '10.08.2023',
      author: 'David Johnson',
      isNew: true,
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&h=400',
      equipment: ['SEM', 'XRD', 'Thermal Analyzers'],
      price: 'From $200/day'
    },
    {
      id: 4,
      name: 'Genomics Research Center',
      category: 'GENETICS',
      location: 'Stanford University, California',
      date: '05.09.2023',
      author: 'Sarah Williams',
      isNew: false,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&h=400',
      equipment: ['DNA Sequencers', 'PCR Machines', 'Bioanalyzers'],
      price: 'From $180/day'
    },
    {
      id: 5,
      name: 'Quantum Physics Laboratory',
      category: 'PHYSICS',
      location: 'ETH Zurich, Switzerland',
      date: '20.08.2023',
      author: 'Michael Chen',
      isNew: false,
      rating: 4.9,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=800&h=400',
      equipment: ['Quantum Computers', 'Cryostats', 'Laser Systems'],
      price: 'From $250/day'
    },
    {
      id: 6,
      name: 'Biomedical Engineering Lab',
      category: 'BIOTECHNOLOGY',
      location: 'Johns Hopkins University, Baltimore',
      date: '15.07.2023',
      author: 'Emily Rodriguez',
      isNew: false,
      rating: 4.7,
      reviews: 63,
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&h=400',
      equipment: ['Bioreactors', 'Cell Sorters', 'Tissue Culture Systems'],
      price: 'From $160/day'
    },
  ];

  const trendingLocations = [
    { name: 'Lagos', image: 'https://images.unsplash.com/photo-1588960546159-f4f16e10c60a?auto=format&fit=crop&w=800&h=400', flag: '🇳🇬', labCount: 24 },
    { name: 'Ibadan', image: 'https://images.unsplash.com/photo-1577942933955-417d1f52d6c5?auto=format&fit=crop&w=800&h=400', flag: '🇳🇬', labCount: 18 },
    { name: 'Abuja', image: 'https://images.unsplash.com/photo-1582642238738-ae65e5e6d6f3?auto=format&fit=crop&w=800&h=400', flag: '🇳🇬', labCount: 15 },
    { name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&h=400', flag: '🇬🇧', labCount: 87 },
    { name: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&h=400', flag: '🇺🇸', labCount: 104 },
  ];

  const categories = [
    { name: 'Virology', icon: <Beaker size={20} /> },
    { name: 'Biochemistry', icon: <Flask size={20} /> },
    { name: 'Materials Science', icon: <Database size={20} /> },
    { name: 'Biotechnology', icon: <Beaker size={20} /> },
    { name: 'Microbiology', icon: <Microscope size={20} /> },
    { name: 'Genetics', icon: <Database size={20} /> },
    { name: 'Immunology', icon: <Shield size={20} /> },
    { name: 'Chemistry', icon: <Flask size={20} /> },
    { name: 'Physics', icon: <Database size={20} /> },
  ];

  const registrationSteps = [
    {
      step: 1,
      title: 'Create Account',
      description: 'Sign up for an account to access all features and functionalities of our platform. It only takes a few minutes!',
      icon: <Shield size={24} />
    },
    {
      step: 2,
      title: 'Get Verified',
      description: 'Verify your account to ensure security and build trust within our community. Follow the simple verification process.',
      icon: <Check size={24} />
    },
    {
      step: 3,
      title: 'Submit Lab Information',
      description: 'Share details about your laboratory to be included in our extensive database. Provide accurate information to reach a wider audience.',
      icon: <Database size={24} />
    },
    {
      step: 4,
      title: 'Get Listed!',
      description: 'Congratulations! Once your lab information is approved, you\'ll be listed on our platform, gaining visibility and attracting potential collaborators.',
      icon: <ThumbsUp size={24} />
    }
  ];

  const deals = [
    {
      title: "Early Bird Discount",
      description: "Book a lab 30 days in advance and get 15% off",
      code: "EARLY15",
      expires: "Limited time offer"
    },
    {
      title: "Academic Special",
      description: "Special rates for university researchers",
      code: "ACADEMIC25",
      expires: "No expiration"
    },
    {
      title: "Long-term Booking",
      description: "Book for 2+ weeks and save 20%",
      code: "LONGTERM20",
      expires: "Valid until Dec 31"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={18} />
            <span>+234 012 3456 789</span>
            <span className="hidden md:inline-block">|</span>
            <Mail size={18} className="hidden md:inline-block" />
            <span className="hidden md:inline-block">support@labconnect.com</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
              <Globe size={18} />
              <span className="hidden md:inline-block">English (US)</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
              <span>Sign In</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
              <span>Register</span>
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-80"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full"></div>
              <Microscope className="text-white absolute z-10" size={24} />
              <div className="absolute bottom-0 w-full h-1/3 bg-blue-900 opacity-30"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">LabConnect</h1>
              <p className="text-xs text-gray-500">Discover Labs Everywhere</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className={`font-medium ${activeTab === 'labs' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition-colors'}`} onClick={() => setActiveTab('labs')}>Labs</a>
            <a href="#" className={`font-medium ${activeTab === 'equipment' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition-colors'}`} onClick={() => setActiveTab('equipment')}>Equipment</a>
            <a href="#" className={`font-medium ${activeTab === 'services' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition-colors'}`} onClick={() => setActiveTab('services')}>Services</a>
            <a href="#" className={`font-medium ${activeTab === 'deals' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition-colors'}`} onClick={() => setActiveTab('deals')}>Deals</a>
            <a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-full font-medium transition-colors">
              REGISTER YOUR LAB
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="h-[500px] w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&w=1920&h=500&q=80" 
            alt="Advanced laboratory research" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 absolute inset-0 z-20 flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto text-center text-white mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Find the Perfect Lab for Your Research</h2>
            <p className="text-xl md:text-2xl mb-8">Connect with research laboratories worldwide for collaboration and innovation</p>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">What?</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="What kind of lab?"
                    className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                  />
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Where?</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Location of lab?"
                    className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                  <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Category</label>
                <div className="relative">
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg appearance-none pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option>Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                  <Database size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <ChevronDown size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center mx-auto transition-colors">
                <Search size={20} className="mr-2" />
                Search Labs
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Star size={20} className="text-blue-600" />
              </div>
              <span className="mt-2 text-sm font-medium">Top Rated</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Calendar size={20} className="text-blue-600" />
              </div>
              <span className="mt-2 text-sm font-medium">Availability</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Filter size={20} className="text-blue-600" />
              </div>
              <span className="mt-2 text-sm font-medium">Filters</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Clock size={20} className="text-blue-600" />
              </div>
              <span className="mt-2 text-sm font-medium">Recent</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Heart size={20} className="text-blue-600" />
              </div>
              <span className="mt-2 text-sm font-medium">Saved</span>
            </a>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-8 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Special Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white">
                <h3 className="text-xl font-bold">{deal.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{deal.description}</p>
                <div className="bg-gray-100 p-3 rounded-lg mb-4 flex justify-between items-center">
                  <span className="font-bold text-gray-800">{deal.code}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Copy</button>
                </div>
                <p className="text-sm text-gray-500">{deal.expires}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section - Updated with interactive map */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Laboratories Map</h2>
          <p className="text-gray-600 text-center max-w-2xl mb-8">
            Explore labs around the world with our interactive map. Find the perfect research facility for your needs.
          </p>
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <LabMap />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">Click on markers to view lab details</p>
          </div>
        </div>
      </section>

      {/* Recently Added Laboratories */}
      <section className="py-12 md:py-16 container mx-auto px-4 bg-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Recently Added Laboratories</h2>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronDown size={20} className="transform rotate-90" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronDown size={20} className="transform -rotate-90" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredLabs.map((lab) => (
            <div key={lab.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                {lab.isNew && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <Heart size={18} className="text-gray-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{lab.name}</h3>
                  <div className="flex items-center bg-blue-600 text-white px-2 py-1 rounded text-sm">
                    <Star size={14} className="mr-1" />
                    <span>{lab.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin size={16} className="mr-1" />
                  <span>{lab.location}</span>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded mr-2">
                    {lab.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {lab.reviews} reviews
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {lab.equipment.map((item, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">{lab.price}</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium inline-flex items-center transition-colors">
            View All Labs <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Lab Registration Steps */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Lab Listing is Easy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationSteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium inline-block transition-colors">
              Register Your Lab Now
            </a>
          </div>
        </div>
      </section>

      {/* Trending Locations */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Trending Locations</h2>
        <p className="text-gray-600 mb-8">Most popular laboratory hubs around the world</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trendingLocations.map((location, index) => (
            <a 
              key={index} 
              href="#" 
              className="relative overflow-hidden rounded-lg h-64 group"
            >
              <img src={location.image} alt={location.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold flex items-center">
                  {location.name} <span className="ml-2">{location.flag}</span>
                </h3>
                <p className="text-sm mt-1">{location.labCount} laboratories</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow flex items-center space-x-3 cursor-pointer hover:bg-blue-50"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-white text-3xl font-bold mb-4">Special Offer for New Labs</h2>
                <p className="text-white text-lg mb-6">
                  Register your lab today and get featured placement for 3 months. Increase your visibility and find new collaborators with our premium listing.
                </p>
                <a href="#" className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg transition-colors">
                  Register Now
                </a>
              </div>
              <div className="md:w-1/3 relative">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&h=600" 
                  alt="Lab equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Researchers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">Dr. Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Stanford University</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "LabConnect made it incredibly easy to find specialized equipment for our research. The booking process was seamless, and the lab we worked with exceeded our expectations."
              </p>
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">Prof. Michael Chen</h3>
                  <p className="text-sm text-gray-600">MIT</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a lab director, listing our facilities on LabConnect has significantly increased our collaboration opportunities and equipment utilization. The platform is intuitive and well-designed."
              </p>
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">Dr. Oluwaseun Adeyemi</h3>
                  <p className="text-sm text-gray-600">IITA, Nigeria</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "LabConnect has revolutionized how we conduct research in Nigeria. Access to specialized labs has accelerated our work in agricultural biotechnology tremendously."
              </p>
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-auto pt-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-80"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full"></div>
                  <Microscope className="text-white absolute z-10" size={24} />
                  <div className="absolute bottom-0 w-full h-1/3 bg-blue-900 opacity-30"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">LabConnect</h3>
                  <p className="text-xs text-gray-500">Discover Labs Everywhere</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                A global laboratory directory. Explore diverse labs worldwide for research, innovation, and collaboration. Join our community today for scientific excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600">ƒ</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600">ig</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <div className="grid grid-cols-1 gap-2">
                <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Sign in</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Register</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Labs Map</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <div className="grid grid-cols-1 gap-2">
                <a href="#" className="text-gray-600 hover:text-blue-600">Virology</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Biochemistry</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Materials Science</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Biotechnology</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Genetics</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">All Categories</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-600 mb-1">Virology Unit</p>
              <p className="text-gray-600 mb-4">IITA, Ibadan, Oyo, Nigeria</p>
              <div className="flex items-center mb-2">
                <Mail size={16} className="text-gray-600 mr-2" />
                <span className="text-gray-600">hello@labconnect.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-gray-600 mr-2" />
                <span className="text-gray-600">+2340123456789</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} LabConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LabConnectLanding;