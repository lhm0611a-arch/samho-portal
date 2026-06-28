import { ArrowUpRight } from 'lucide-react';
import { SystemItem } from '../types';
import { motion } from 'motion/react';

export function SystemCard({ sys, index }: { sys: SystemItem, index: number }) {
  const isOnline = sys.status === 'ONLINE';
  const Icon = sys.icon;

  return (
    <motion.a 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
      href={isOnline && sys.link !== '#' ? sys.link : undefined}
      target={isOnline && sys.link !== '#' ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between h-full p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl border transition-all duration-500
        ${isOnline 
          ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer' 
          : 'bg-white/5 border-white/5 opacity-60 cursor-not-allowed grayscale'}`}
    >
      {/* Subtle background glow effect on hover */}
      {isOnline && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-8">
          <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors duration-500 ${isOnline ? 'text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 group-hover:border-blue-500/30' : 'text-slate-500'}`}>
            <Icon className="w-8 h-8 stroke-[1.5]" />
          </div>
          <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full border tracking-wider backdrop-blur-md whitespace-nowrap
            ${isOnline 
              ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
              : 'text-slate-400 bg-slate-500/10 border-slate-500/20'}`}>
            {sys.status}
          </span>
        </div>
        
        <div className="text-xs font-semibold text-blue-400 tracking-widest mb-3 uppercase">
          {sys.type}
        </div>
        <h3 className="font-bold text-3xl text-white tracking-tight mb-3 group-hover:text-blue-200 transition-colors drop-shadow-md break-keep min-h-[4.5rem]">
          {sys.title}
        </h3>
        <div className="text-sm font-semibold text-slate-300 mb-6 uppercase tracking-wider">{sys.subtitle}</div>
        
        <p className="text-slate-300 text-base leading-relaxed font-medium break-keep">
          {sys.description}
        </p>
      </div>
      
      <div className="relative z-10 mt-10 flex items-center justify-between pt-6 border-t border-white/5">
        <span className="text-[11px] font-medium text-slate-500 tracking-wider">
          {sys.id}
        </span>
        {isOnline ? (
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
          </div>
        ) : (
          <div className="text-[10px] font-medium text-slate-500 tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            STANDBY
          </div>
        )}
      </div>
    </motion.a>
  );
}
