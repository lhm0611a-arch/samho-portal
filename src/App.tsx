import { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Clock } from 'lucide-react';
import { BackgroundSlider } from './components/BackgroundSlider';
import { SystemCard } from './components/SystemCard';
import { systems } from './data/systems';
import { motion } from 'motion/react';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };

  return (
    <div className="min-h-screen relative flex flex-col text-slate-200 font-sans selection:bg-blue-500/30">
      <BackgroundSlider />
      
      {/* Top Navigation Bar */}
      <header className="relative z-20 w-full px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center bg-black/10 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-5 mb-6 md:mb-0">
          <img 
            src="/ci.png" 
            alt="HD Hyundai Samho" 
            className="h-7 object-contain"
          />
          <div className="h-6 w-px bg-white/20 hidden md:block"></div>
          <span className="text-sm font-medium tracking-widest text-slate-300 hidden md:block uppercase">
            Global HR Portal
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4" />
            <span className="tracking-wide">Secure Network</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-300">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="tracking-widest">{formatTime(time)}</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 lg:py-24">
        <div className="max-w-[1400px] w-full">
          
          {/* Hero Section */}
          <div className="mb-20 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full uppercase tracking-widest mb-8 inline-flex border border-blue-500/20 backdrop-blur-sm">
                <Activity className="w-4 h-4 animate-pulse" />
                System Gateway V3.0
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15] drop-shadow-lg break-keep">
                Foreign Workforce<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 drop-shadow-md">
                  Integration System
                </span>
              </h2>
              <p className="text-slate-200 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto md:mx-0 drop-shadow-md break-keep">
                HD현대삼호의 글로벌 인재 채용부터 정착, 역량 평가까지 전 과정을 아우르는 차세대 디지털 행정 포털입니다.
              </p>
            </motion.div>
          </div>

          {/* System Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {systems.map((sys, index) => (
              <SystemCard key={sys.id} sys={sys} index={index} />
            ))}
          </div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-20 w-full py-8 px-12 border-t border-white/5 bg-black/20 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
           <img 
            src="/ci.png" 
            alt="HD Hyundai Samho" 
            className="h-4 object-contain opacity-40 hover:opacity-100 transition-opacity"
          />
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <p className="text-[11px] text-slate-500 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Co-Prosperity Dept.
          </p>
        </div>
        <div className="flex gap-4 text-[11px] font-medium text-slate-500 tracking-widest uppercase">
          <span>Version 3.8.1</span>
          <span>&middot;</span>
          <span>KR-SOUTH-1</span>
        </div>
      </footer>
    </div>
  );
}
