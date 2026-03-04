import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { Shield, Heart, AlertTriangle, User, Activity, Home, Car, Flame, Users, Phone, Briefcase, X, FileText, Plane, TrendingUp, DollarSign, Infinity, Calendar, CreditCard, Gift, Zap, Truck, Package, Square } from "lucide-react";

interface CoverageItem {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  coverage: CoverageItem[];
}

const iconMap: Record<string, any> = {
  shield: Shield,
  heart: Heart,
  alert: AlertTriangle,
  user: User,
  activity: Activity,
  home: Home,
  car: Car,
  flame: Flame,
  users: Users,
  phone: Phone,
  briefcase: Briefcase,
  x: X,
  file: FileText,
  plane: Plane,
  "trending-up": TrendingUp,
  "dollar-sign": DollarSign,
  infinity: Infinity,
  calendar: Calendar,
  "credit-card": CreditCard,
    
  gift: Gift,
  zap: Zap,
  truck: Truck,
  package: Package,
  square: Square
};

const CoverageCarousel: React.FC<Props> = ({ coverage }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / coverage.length;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / coverage.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <h3 className="text-xl font-[MMC] text-[#0A1F7A] mb-6">Coberturas Incluídas</h3>
      
      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-8"
      >
        {coverage.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Shield;
          return (
            <motion.div
              key={index}
              className={`snap-center flex-shrink-0 w-full bg-white border-2 rounded-xl p-6 transition-all duration-300 ${
                activeIndex === index ? "border-[#0A1F7A]" : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#e84620]/10 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="text-[#e84620]" size={32} />
                </div>
                
                <h4 className="text-lg font-[MMC] text-gray-900 mb-2">
                  {item.title}
                </h4>
                
                <p className="text-sm text-gray-600 font-[NotoSansLight]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {coverage.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-[#0A1F7A] w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverageCarousel;
