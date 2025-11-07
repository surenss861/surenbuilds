"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ShoppingBag, Search, ShoppingCart, Star, ArrowRight, Check, Filter, Heart, TrendingUp, Users, Award, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

const products = [
  { 
    id: 1, 
    name: "Heritage Leather Jacket", 
    price: 1299, 
    category: "Outerwear", 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80",
    description: "Handcrafted Italian leather with premium hardware",
    badge: "Bestseller"
  },
  { 
    id: 2, 
    name: "Signature White Sneakers", 
    price: 495, 
    category: "Footwear", 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80",
    description: "Timeless design meets modern comfort",
    badge: "New"
  },
  { 
    id: 3, 
    name: "Swiss Precision Watch", 
    price: 2495, 
    category: "Accessories", 
    rating: 5.0, 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
    description: "Swiss movement, sapphire crystal",
    badge: "Limited"
  },
  { 
    id: 4, 
    name: "Designer Sunglasses", 
    price: 695, 
    category: "Accessories", 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80",
    description: "UV protection with style",
    badge: null
  },
  { 
    id: 5, 
    name: "Cashmere Blend Scarf", 
    price: 395, 
    category: "Accessories", 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1200&q=80",
    description: "Luxurious softness for all seasons",
    badge: null
  },
  { 
    id: 6, 
    name: "Tailored Blazer", 
    price: 895, 
    category: "Outerwear", 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80",
    description: "Perfect fit for any occasion",
    badge: "Exclusive"
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers", icon: Users },
  { value: "4.9/5", label: "Average Rating", icon: Star },
  { value: "150+", label: "Countries Served", icon: Award },
  { value: "98%", label: "Satisfaction Rate", icon: TrendingUp },
];

const testimonials = [
  {
    name: "Alexander Chen",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "The quality is exceptional. Every piece feels like an investment in timeless style.",
    rating: 5
  },
  {
    name: "Sophia Martinez",
    role: "Fashion Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "Their attention to detail sets them apart. Truly luxury without compromise.",
    rating: 5
  },
];

export default function EcommerceStorePage() {
  const [cart, setCart] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.1]);

  const filteredProducts = products.filter(p => {
    const matchesCategory = !selectedCategory || p.category === selectedCategory;
    const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = Array.from(new Set(products.map(p => p.category)));

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(favorites.includes(id) 
      ? favorites.filter(f => f !== id)
      : [...favorites, id]
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Premium Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-light tracking-[0.2em]">LUXE</div>
            <div className="hidden lg:flex items-center gap-10">
              <Link href="#" className="text-sm font-medium tracking-wider uppercase hover:text-gray-600 transition-colors">Collections</Link>
              <Link href="#" className="text-sm font-medium tracking-wider uppercase hover:text-gray-600 transition-colors">About</Link>
              <Link href="#" className="text-sm font-medium tracking-wider uppercase hover:text-gray-600 transition-colors">Journal</Link>
            </div>
            <div className="flex items-center gap-6">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
                {cart.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center font-medium"
                  >
                    {cart.length}
                  </motion.span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Cinematic Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div style={{ y, scale, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 relative">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
              alt="Luxury Store"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </div>
        </motion.div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
            const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                initial={{
                  x: Math.random() * width,
                  y: Math.random() * height,
                }}
                animate={{
                  y: [null, Math.random() * height],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-8 tracking-wider uppercase"
            >
              <Sparkles className="w-4 h-4" />
              E-commerce Excellence
            </motion.div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.9] text-white tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block"
              >
                Timeless
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block font-normal"
              >
                Elegance
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Where luxury meets digital excellence. A curated collection of the world's finest products.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <MagneticButton href="/contact" variant="primary" className="bg-white text-black hover:bg-gray-100">
                Explore Collection
              </MagneticButton>
              <Link
                href="/concepts"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Back to Concepts
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl font-light mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Product Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-6 tracking-wider uppercase">
                Featured Collection
              </div>
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                Curated Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Each piece is carefully selected to represent the pinnacle of craftsmanship and design.
              </p>
            </div>
          </AnimatedSection>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search our collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all font-light"
              />
            </div>
            <div className="flex items-center gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-4 rounded-lg text-sm font-medium transition-all tracking-wider uppercase ${
                    selectedCategory === cat
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Premium Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const inCart = cart.includes(product.id);
              const isFavorite = favorites.includes(product.id);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 relative">
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white text-xs font-medium tracking-wider uppercase">
                        {product.badge}
                      </div>
                    )}

                    {/* Favorite Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                    </motion.button>

                    {/* Product Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full relative"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                      {/* Quick Add Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => inCart ? null : addToCart(product.id)}
                          className="px-8 py-4 bg-white text-black font-medium rounded-lg shadow-xl tracking-wider uppercase text-sm"
                        >
                          {inCart ? "In Cart" : "Add to Cart"}
                        </motion.button>
                      </motion.div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-8">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                      </div>
                      <h3 className="text-xl font-light mb-2 tracking-wide">{product.name}</h3>
                      <p className="text-sm text-gray-500 mb-4 font-light">{product.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-3xl font-light">${product.price.toLocaleString()}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => inCart ? null : addToCart(product.id)}
                          className={`px-6 py-3 rounded-lg font-medium transition-colors tracking-wider uppercase text-sm ${
                            inCart
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-black text-white hover:bg-gray-800"
                          }`}
                        >
                          {inCart ? "Added" : "Add"}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                Trusted by Leaders
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 relative">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Ready to Build Your Luxury Store?
            </h2>
            <p className="text-xl text-white/80 mb-12 font-light max-w-2xl mx-auto">
              Let's create an e-commerce experience that reflects your brand's excellence and drives exceptional results.
            </p>
            <MagneticButton href="/contact" variant="primary" className="bg-white text-black hover:bg-gray-100">
              Get Started
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
