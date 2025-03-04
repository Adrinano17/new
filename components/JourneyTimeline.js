"use client"
import React, { useState } from 'react';
import { Search, MapPin, Database, Beaker, ChevronDown, Phone, Mail, Map, Check, ThumbsUp, Shield, Star, Calendar, Filter, Clock, ArrowRight, Heart, Globe, Users, Code, Laptop, BookOpen, Cross, FolderRoot as Football, Headphones, ShoppingBag, Bookmark } from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const featuredPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      category: "TECHNOLOGY",
      excerpt: "Learn the best practices for building large-scale React applications with modern architecture.",
      date: "May 15, 2025",
      author: "John Developer",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&h=500",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Frontend"]
    },
    {
      id: 2,
      title: "Faith in the Digital Age",
      category: "GOSPEL",
      excerpt: "Exploring how technology can enhance spiritual growth and community building in modern churches.",
      date: "April 28, 2025",
      author: "Pastor Sarah",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&h=500",
      readTime: "6 min read",
      tags: ["Faith", "Digital", "Community"]
    },
    {
      id: 3,
      title: "Tactical Analysis: Modern Football Formations",
      category: "FOOTBALL",
      excerpt: "A deep dive into how top managers are evolving traditional formations to dominate the modern game.",
      date: "May 2, 2025",
      author: "Coach Williams",
      image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f76?auto=format&fit=crop&w=800&h=500",
      readTime: "10 min read",
      tags: ["Tactics", "Analysis", "Formations"]
    },
    {
      id: 4,
      title: "The Rise of TypeScript in Enterprise Development",
      category: "TECHNOLOGY",
      excerpt: "Why TypeScript has become the standard for large-scale JavaScript applications and how to leverage it effectively.",
      date: "May 10, 2025",
      author: "Tech Lead Alex",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500",
      readTime: "7 min read",
      tags: ["TypeScript", "JavaScript", "Enterprise"]
    },
    {
      id: 5,
      title: "Finding God's Purpose in Your Career",
      category: "GOSPEL",
      excerpt: "Practical guidance for aligning your professional life with your spiritual values and divine purpose.",
      date: "April 20, 2025",
      author: "Minister Johnson",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&h=500",
      readTime: "5 min read",
      tags: ["Purpose", "Career", "Faith"]
    },
    {
      id: 6,
      title: "Premier League Season Review: Stars and Surprises",
      category: "FOOTBALL",
      excerpt: "Analyzing the standout performers and unexpected developments from this season's Premier League campaign.",
      date: "May 5, 2025",
      author: "Sports Analyst Emma",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&h=500",
      readTime: "12 min read",
      tags: ["Premier League", "Analysis", "Season Review"]
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Developer's Essential Hoodie",
      category: "APPAREL",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&h=500",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Faith & Code Coffee Mug",
      category: "ACCESSORIES",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&h=500",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Premium Football Training Kit",
      category: "SPORTS",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&h=500",
      rating: 4.7,
      reviews: 56,
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "This blog has transformed how I approach both my faith and my coding career. The insights are practical and deeply meaningful.",
      author: "Michael Chen",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 2,
      text: "The football analysis here is top-notch. I've improved my coaching techniques significantly by applying the tactical breakdowns shared on this platform.",
      author: "Sarah Williams",
      role: "Youth Football Coach",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 3,
      text: "Finding a community that embraces both faith and technology has been a blessing. The content resonates deeply with my journey as a Christian in tech.",
      author: "David Johnson",
      role: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
    }
  ];

  const filterPosts = (category) => {
    setActiveTab(category);
  };

  const filteredPosts = activeTab === 'all' 
    ? featuredPosts 
    : featuredPosts.filter(post => post.category.toLowerCase() === activeTab);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="h-[600px] w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1920&h=600&q=80" 
            alt="Technology and faith" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 absolute inset-0 z-20 flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto text-center text-white mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <Code className="text-white" size={32} />
              </div>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-3">
                <Cross className="text-white" size={32} />
              </div>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center ml-3">
                <Football className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gospel, Tech & Football</h1>
            <p className="text-xl md:text-2xl mb-8">Join us on a journey of faith, technology, and sportsmanship</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore Articles
              </a>
              <a href="#" className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Passions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white text-center transform transition-transform hover:scale-105 shadow-xl">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Laptop size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Technology</h3>
            <p className="mb-6">Insights, tutorials, and thought leadership from a senior developer's perspective.</p>
            <a href="#" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Explore Tech
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-8 text-white text-center transform transition-transform hover:scale-105 shadow-xl">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Gospel</h3>
            <p className="mb-6">Faith journeys, spiritual insights, and the intersection of belief and modern life.</p>
            <a href="#" className="inline-block bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors">
              Explore Faith
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-8 text-white text-center transform transition-transform hover:scale-105 shadow-xl">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Football size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Football</h3>
            <p className="mb-6">Analysis, commentary, and passion for the beautiful game from a fan's perspective.</p>
            <a href="#" className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
              Explore Football
            </a>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => filterPosts('all')} 
                className={`px-4 py-2 rounded-full ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                All
              </button>
              <button 
                onClick={() => filterPosts('technology')} 
                className={`px-4 py-2 rounded-full ${activeTab === 'technology' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Tech
              </button>
              <button 
                onClick={() => filterPosts('gospel')} 
                className={`px-4 py-2 rounded-full ${activeTab === 'gospel' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Gospel
              </button>
              <button 
                onClick={() => filterPosts('football')} 
                className={`px-4 py-2 rounded-full ${activeTab === 'football' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Football
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock size={14} className="text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm">
                      Read More <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 text-blue-100">Get the latest articles, resources, and product updates delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm mt-4 text-blue-200">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Shop Collection</h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            View All Products <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden relative group">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium m-2 hover:bg-gray-100 transition-colors">
                    Quick View
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium m-2 hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <Heart size={18} className="text-gray-500" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold hover:text-blue-600 transition-colors">
                    <a href="#">{product.name}</a>
                  </h3>
                  <span className="font-bold text-blue-600">{product.price}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded mr-2">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="ml-1">{product.rating}</span>
                    <span className="mx-1">·</span>
                    <span>{product.reviews} reviews</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm">
                    View Details
                  </a>
                  <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                    <ShoppingBag size={18} className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Connect with like-minded individuals passionate about technology, faith, and football. Share your journey and grow together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Sign Up Now
              </a>
              <a href="#" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors mb-3">
                <Laptop size={24} className="text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Tech Tutorials</h3>
              <p className="text-sm text-gray-600">Practical guides for developers</p>
            </a>
            
            <a href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors mb-3">
                <BookOpen size={24} className="text-red-600" />
              </div>
              <h3 className="font-bold mb-2">Faith Resources</h3>
              <p className="text-sm text-gray-600">Devotionals and spiritual growth</p>
            </a>
            
            <a href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors mb-3">
                <Football size={24} className="text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Match Analysis</h3>
              <p className="text-sm text-gray-600">Tactical breakdowns and reviews</p>
            </a>
            
            <a href="#" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors mb-3">
                <ShoppingBag size={24} className="text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Shop Collection</h3>
              <p className="text-sm text-gray-600">Apparel, accessories, and more</p>
            </a>
          </div>
        </div>
      </section>

      {/* Recent Podcast Episodes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Podcast Episodes</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              All Episodes <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex">
              <div className="w-1/3 bg-blue-600 flex items-center justify-center p-6">
                <Headphones size={48} className="text-white" />
              </div>
              <div className="w-2/3 p-6">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2 inline-block">
                  TECH TALK
                </span>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  <a href="#">The Future of Web Development</a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">Exploring emerging technologies and frameworks reshaping the web.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>45 min</span>
                  <span className="mx-2">•</span>
                  <Calendar size={14} className="mr-1" />
                  <span>May 10, 2025</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex">
              <div className="w-1/3 bg-red-600 flex items-center justify-center p-6">
                <Headphones size={48} className="text-white" />
              </div>
              <div className="w-2/3 p-6">
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full mb-2 inline-block">
                  FAITH JOURNEY
                </span>
                <h3 className="text-xl font-bold mb-2 hover:text-red-600 transition-colors">
                  <a href="#">Finding Purpose in a Digital World</a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">Navigating faith and meaning in our technology-driven society.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>38 min</span>
                  <span className="mx-2">•</span>
                  <Calendar size={14} className="mr-1" />
                  <span>May 5, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Code className="text-white" size={20} />
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center -ml-2">
                    <Cross className="text-white" size={20} />
                  </div>
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center -ml-2">
                    <Football className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Gospel Tech & Football</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                A unique blend of technology insights, spiritual growth, and football passion from a senior developer's perspective.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white">ƒ</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white">ig</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Articles</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Podcast</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Categories</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gospel & Faith</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Football</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Growth</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Product Reviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get the latest updates</p>
              <div className="flex mb-4">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
              <p className="text-gray-500 text-sm">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Gospel Tech & Football. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;