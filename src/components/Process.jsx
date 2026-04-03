import React from 'react';
import { FaPlay, FaMicrochip, FaDesktop, FaVolumeUp, FaHdd, FaMousePointer, FaChevronRight } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    icon: <FaMousePointer />,
    title: "User Command",
    desc: "You click play on a video file. Your OS receives the request and starts the coordination.",
    color: "blue"
  },
  {
    id: 2,
    icon: <FaHdd />,
    title: "Storage Access",
    desc: "Storage driver reads the video data from your SSD or HDD and sends it to the OS.",
    color: "indigo"
  },
  {
    id: 3,
    icon: <FaMicrochip />,
    title: "Chipset Sync",
    desc: "The chipset driver manages high-speed data flow between CPU, RAM, and the motherboard.",
    color: "emerald"
  },
  {
    id: 4,
    icon: <FaDesktop />,
    title: "Visual Rendering",
    desc: "The graphics driver translates data into commands for the GPU to display frames.",
    color: "blue"
  },
  {
    id: 5,
    icon: <FaVolumeUp />,
    title: "Audio Engine",
    desc: "The audio driver converts digital signals into analog sound for your hardware output.",
    color: "rose"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-50/50 font-poppins overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
            <FaPlay className="text-blue-600 text-[10px]" />
            <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[2px]">Optimization Flow</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            The Coordinated <span className="text-blue-600">Ecosystem</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Witness how multiple driver layers collaborate in milliseconds to execute a simple command like watching a video.
          </p>
        </div>

        <div className="relative">
          {/* Subtle Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="group flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-center text-xl shadow-sm transform group-hover:scale-110 group-hover:border-blue-200 transition-all duration-500 mb-8
                  ${step.color === 'blue' ? 'text-blue-600' : ''}
                  ${step.color === 'indigo' ? 'text-indigo-600' : ''}
                  ${step.color === 'emerald' ? 'text-emerald-600' : ''}
                  ${step.color === 'rose' ? 'text-rose-600' : ''}
                `}>
                  {step.icon}
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm h-full group-hover:border-blue-100 group-hover:shadow-md transition-all duration-500 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    Step 0{step.id}
                  </div>
                  <h3 className="text-slate-900 font-bold text-base mb-4 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Support Banner */}
        <div className="mt-20 p-10 bg-white border border-slate-100 rounded-[3rem] text-center shadow-sm relative overflow-hidden" data-aos="zoom-in">
           <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]"></div>
           <div className="relative z-10">
             <h4 className="text-slate-900 text-2xl font-bold mb-4">Ready to optimize your system stack?</h4>
             <p className="text-slate-500 mb-10 max-w-xl mx-auto font-medium">Ensuring your drivers are synchronized is the single most important factor for hardware longevity.</p>
             <button className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/15 active:scale-95 group">
               Initialize Full Scan <FaChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Process;