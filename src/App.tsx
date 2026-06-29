import { ShieldCheck, Activity } from 'lucide-react';
import { BackgroundSlider } from './components/BackgroundSlider';
import { SystemCard } from './components/SystemCard';
import { systems } from './data/systems';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen relative flex flex-col text-slate-200 font-sans selection:bg-blue-500/30">
      <BackgroundSlider />
      
      {/* Top Navigation Bar */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 w-full px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex flex-col md:flex-row justify-between items-center bg-black/30 backdrop-blur-md border-b border-white/10"
      >
        <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-0">
          <img 
            src="/ci.png" 
            alt="HD Hyundai Samho" 
            className="h-5 sm:h-6 object-contain"
          />
          <div className="h-5 w-px bg-white/20 hidden md:block"></div>
          <span className="text-xs sm:text-sm font-medium tracking-widest text-slate-300 hidden md:block uppercase">
            Global HR Portal
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4" />
            <span className="tracking-wide">Secure Network</span>
          </div>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 lg:py-6">
        <div className="max-w-[1400px] w-full">
          
          {/* Hero Section */}
          <div className="mb-8 sm:mb-10 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
              className="max-w-3xl mx-auto md:mx-0"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center justify-center md:justify-start gap-2 text-[10px] sm:text-xs font-bold text-blue-400 bg-black/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-widest mb-4 sm:mb-6 inline-flex border border-blue-500/30 backdrop-blur-md"
              >
                <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
                System Gateway V3.0
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4 leading-[1.15] break-keep [text-shadow:_0_2px_15px_rgba(0,0,0,0.8),_0_4px_30px_rgba(0,0,0,0.5)]"
              >
                Foreign Workforce<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]">
                  Integration System
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-slate-100 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto md:mx-0 break-keep px-2 sm:px-0 [text-shadow:_0_1px_8px_rgba(0,0,0,0.8)]"
              >
                HD현대삼호의 글로벌 인재 채용부터 정착, 역량 평가까지 전 과정을 아우르는 차세대 디지털 행정 포털입니다.
              </motion.p>
            </motion.div>
          </div>

          {/* System Grid Cards */}
          <motion.div 
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
          >
            {systems.map((sys, index) => (
              <SystemCard key={sys.id} sys={sys} index={index} />
            ))}
          </motion.div>

        </div>
      </main>
      
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-20 w-full py-5 sm:py-6 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-black/40 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <img 
            src="/ci.png" 
            alt="HD Hyundai Samho" 
            className="h-3 sm:h-4 object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <p className="text-[10px] sm:text-[11px] text-slate-500 tracking-widest uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} Co-Prosperity Dept.
          </p>
        </div>
        <div className="flex gap-4 text-[11px] font-medium text-slate-500 tracking-widest uppercase">
          <span>Version 3.8.1</span>
          <span>&middot;</span>
          <span>KR-SOUTH-1</span>
        </div>
      </motion.footer>
    </div>
  );
}
