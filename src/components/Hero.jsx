import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrochip, FaDesktop, FaVolumeUp, FaWifi, FaArrowRight, FaShieldAlt, FaCogs, FaWrench } from 'react-icons/fa';

const Hero = () => {
  const essentialDrivers = [
    { name: "Chipset", role: "The Traffic Controller", icon: <FaMicrochip />, color: "text-blue-600", bgColor: "bg-blue-50" },
    { name: "Graphics", role: "The Visual Engine", icon: <FaDesktop />, color: "text-indigo-600", bgColor: "bg-indigo-50" },
    { name: "Audio", role: "The Sound Manager", icon: <FaVolumeUp />, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { name: "Network", role: "The Internet Bridge", icon: <FaWifi />, color: "text-rose-600", bgColor: "bg-rose-50" },
  ];

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-32 pb-20 bg-white font-poppins overflow-hidden">
      
      {/* Advanced Technical Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full lg:w-1/2 text-left" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <FaWrench className="text-blue-600 text-[10px]" />
              <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[2px]">Expert Driver Support & Diagnostics</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Hardware Issues? We <br />
              <span className="text-blue-600">Restore Your Sync</span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg font-medium mb-10 max-w-xl leading-relaxed">
              If your computer is flickering, lagging, or failing to connect, it's likely a driver mismatch. We diagnose and fix hardware communication errors to get your system back to peak performance.
            </p>

            <div className="flex flex-wrap gap-5 mb-16">
              <Link to="/contact" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 text-sm group">
                Report Driver Issue <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-10 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all text-sm shadow-sm">
                Explore Fixed Drivers
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative" data-aos="fade-left" data-aos-delay="200">
            <div className="relative p-8 bg-white/60 backdrop-blur-md border border-white rounded-[3rem] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)]">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {essentialDrivers.map((driver, idx) => (
                  <div key={idx} className="p-8 border border-slate-50 rounded-3xl bg-white shadow-sm hover:border-blue-100 transition-all duration-500 group cursor-default">
                    <div className={`w-12 h-12 ${driver.bgColor} ${driver.color} rounded-2xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform shadow-inner`}>
                      {driver.icon}
                    </div>
                    <h4 className="text-slate-900 font-bold text-lg mb-1">{driver.name}</h4>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed">We fix {driver.name.toLowerCase()} related system errors.</p>
                  </div>
                ))}
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-900 rounded-full flex flex-col items-center justify-center shadow-2xl border-[4px] border-white z-20 hidden md:flex animate-float">
                 <FaCogs className="text-blue-500 text-2xl animate-spin-slow mb-1" />
                 <span className="text-white font-black text-[8px] uppercase tracking-[2px]">Fixing Core</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        @keyframes float { 0%, 100% { transform: translate(-50%, -50%) translateY(0); } 50% { transform: translate(-50%, -50%) translateY(-10px); } }
        .animate-float { animation: float 5s ease-in-out infinite; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}} />
    </section>
  );
};

export default Hero;