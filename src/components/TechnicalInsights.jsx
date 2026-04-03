import React from 'react';
import { FaBolt, FaShieldAlt, FaSync, FaChevronRight } from 'react-icons/fa';

const TechnicalInsights = () => {
  const insights = [
    {
      title: "Peak Performance",
      desc: "Optimized chipset and graphics drivers ensure hardware operates at maximum efficiency, reducing latency and increasing data throughput.",
      icon: <FaBolt />,
      color: "blue"
    },
    {
      title: "System Stability",
      desc: "Verified firmware updates and core system drivers prevent common issues like screen flickering, boot failures, and system crashes.",
      icon: <FaSync />,
      color: "emerald"
    },
    {
      title: "Hardened Security",
      desc: "Advanced security drivers and BIOS patches protect your hardware from low-level threats through encryption and secure boot protocols.",
      icon: <FaShieldAlt />,
      color: "rose"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/30 font-poppins">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-4">
            <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest text-center">Technical Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Why Hardware <span className="text-blue-600">Optimization</span> Matters
          </h2>
          <p className="text-slate-500 text-base font-medium">
            Maintaining an up-to-date driver ecosystem is the single most important factor for your computer's long-term health and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.05)] transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-2xl mb-8 transition-all duration-500 group-hover:scale-110
                ${item.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : ''}
                ${item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' : ''}
                ${item.color === 'rose' ? 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' : ''}
              `}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
                {item.desc}
              </p>
              
              <button className="flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
                Read Documentation <FaChevronRight size={8} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalInsights;