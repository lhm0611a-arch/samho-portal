import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SystemItem } from '../types';
import { motion } from 'motion/react';

export const SystemCard: React.FC<{ sys: SystemItem, index: number }> = ({ sys, index }) => {
  const isOnline = sys.status === 'ONLINE';
  const Icon = sys.icon;

  return (
    <motion.a 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
      whileHover={isOnline ? { y: -4, scale: 1.01 } : {}}
      whileTap={isOnline ? { scale: 0.98 } : {}}
      href={isOnline && sys.link !== '#' ? sys.link : undefined}
      target={isOnline && sys.link !== '#' ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between h-full p-4 sm:p-5 rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden backdrop-blur-xl border transition-colors duration-500
        ${isOnline 
          ? 'bg-black/30 border-white/10 hover:bg-black/50 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer' 
          : 'bg-black/20 border-white/5 opacity-60 cursor-not-allowed grayscale'}`}
    >
      {/* Subtle background glow effect on hover */}
      {isOnline && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
          
          {/* Animated Shimmer line */}
          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        </>
      )}

      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div className={`p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors duration-500 ${isOnline ? 'text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 group-hover:border-blue-500/30' : 'text-slate-500'}`}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </div>
          <span className={`text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-full border tracking-wider backdrop-blur-md whitespace-nowrap
            ${isOnline 
              ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
              : 'text-slate-400 bg-slate-500/10 border-slate-500/20'}`}>
            {sys.status}
          </span>
        </div>
        
        <div className="text-[10px] font-semibold text-blue-400 tracking-widest mb-1.5 sm:mb-2 uppercase">
          {sys.type}
        </div>
        <h3 className="font-bold text-lg sm:text-xl text-white tracking-tight mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors drop-shadow-md break-keep">
          {sys.title}
        </h3>
        <div className="text-[11px] sm:text-xs font-semibold text-slate-300 mb-2 sm:mb-3 uppercase tracking-wider">{sys.subtitle}</div>
        
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium break-keep line-clamp-3">
          {sys.description}
        </p>
      </div>
      
      <div className="relative z-10 mt-3 sm:mt-4 flex items-center justify-between pt-3 border-t border-white/5">
        <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wider">
          {sys.id}
        </span>
        {isOnline ? (
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
          </div>
        ) : (
          <div className="text-[9px] font-medium text-slate-500 tracking-widest bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
            STANDBY
          </div>
        )}
      </div>
    </motion.a>
  );
}
