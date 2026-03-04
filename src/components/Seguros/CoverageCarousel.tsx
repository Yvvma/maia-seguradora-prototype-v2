import { motion } from "framer-motion";
import React from "react";
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

const bgColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-teal-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-cyan-500'
];

const CoverageCarousel: React.FC<Props> = ({ coverage }) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-[MMC] text-[#0A1F7A] mb-6">Coberturas Incluídas</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {coverage.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Shield;
          const bgColor = bgColors[index % bgColors.length];
          
          return (
            <motion.div
              key={index}
              className={`${bgColor} rounded-md p-4 text-white`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <IconComponent size={32} />
                
                <h4 className="text-sm font-[NotoSansBold]">
                  {item.title}
                </h4>
                
                <p className="text-xs font-[NotoSansLight]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CoverageCarousel;
