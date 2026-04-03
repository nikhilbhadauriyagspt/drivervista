import React, { useState } from 'react';
import { FaMicrochip, FaHdd, FaUsb, FaShieldAlt, FaCheck, FaCogs, FaChevronRight } from 'react-icons/fa';

const Capabilities = () => {
  const [activeTab, setActiveTab] = useState(0);

  const capabilityData = [
    {
      title: "Essential Drivers",
      icon: <FaMicrochip />,
      color: "blue",
      description: "Fundamental software required for basic computer operations. These act as the primary traffic controllers for your system architecture.",
      features: [
        { name: "Chipset Sync", detail: "Backbone data exchange between CPU and RAM." },
        { name: "Visual Engine", detail: "GPU instruction translation for display output." },
        { name: "Audio Logic", detail: "Digital-to-Analog sound signal processing." },
        { name: "Network Link", detail: "Global connectivity via Wi-Fi & LAN protocols." }
      ]
    },
    {
      title: "Hardware Specific",
      icon: <FaHdd />,
      color: "indigo",
      description: "Dedicated software layers that control internal modules to ensure maximum performance and data safety.",
      features: [
        { name: "Storage Control", detail: "High-speed read/write management for SSDs." },
        { name: "USB Connectivity", detail: "Port recognition and resource assignment." },
        { name: "Bluetooth Pairing", detail: "Low-latency wireless device synchronization." },
        { name: "Input Accuracy", detail: "Precision touchpad and keyboard mapping." }
      ]
    },
    {
      title: "Peripheral Drivers",
      icon: <FaUsb />,
      color: "emerald",
      description: "Software bridges that manage external hardware, handling complex translation between digital files and physical devices.",
      features: [
        { name: "Print Spooling", detail: "Converting digital docs into printer formats." },
        { name: "Image Capture", detail: "High-res digitizing for scanner protocols." },
        { name: "Video Streams", detail: "Webcam resolution and frame rate optimization." },
        { name: "External Media", detail: "Plug-and-play support for backup drives." }
      ]
    },
    {
      title: "Advanced Systems",
      icon: <FaShieldAlt />,
      color: "rose",
      description: "Low-level system protection and firmware initialization that safeguards your hardware environment before boot.",
      features: [
        { name: "BIOS/UEFI", detail: "Hardware initialization before OS loading." },
        { name: "Security Layers", detail: "Data encryption and secure boot protection." },
        { name: "Monitor Sync", detail: "Refresh rate and color calibration logic." },
        { name: "System Integrity", detail: "Coordinated ecosystem for smooth operation." }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Refined Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-4">
            <FaCogs className="text-blue-600 text-[10px]" />
            <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">Core Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            System Optimization <span className="text-blue-600">Standards</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            A comprehensive breakdown of how our driver database enhances your hardware performance and system stability.
          </p>
        </div>

        {/* Minimalist Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
          {capabilityData.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === idx 
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-200 scale-105' 
                : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
              }`}
            >
              <span className="text-sm">{tab.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wider">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Airy Content Detail Area */}
        <div className="max-w-6xl mx-auto bg-slate-50/30 border border-slate-100 rounded-[2.5rem] p-8 lg:p-16 relative" data-aos="fade-up">
          
          {/* Subtle Ambient Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 bg-gradient-to-tr from-transparent via-blue-100 to-transparent blur-[80px] z-0`}></div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 relative z-10">
            
            {/* Left: Summary */}
            <div className="w-full lg:w-2/5">
              <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl text-blue-600 mb-8`}>
                {capabilityData[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{capabilityData[activeTab].title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
                {capabilityData[activeTab].description}
              </p>
              <button className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                Learn Technical Logic <FaChevronRight size={10} />
              </button>
            </div>

            {/* Right: Feature Grid - Lighter Cards */}
            <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilityData[activeTab].features.map((feat, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <h4 className="text-slate-900 font-bold text-[13px] uppercase tracking-wide">{feat.name}</h4>
                  </div>
                  <p className="text-slate-400 text-[11px] font-medium leading-relaxed pl-4">
                    {feat.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Technical Verified Tag */}
        <div className="mt-16 text-center" data-aos="fade-up">
           <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[4px] mb-2">Technical Integrity Verified</p>
           <div className="w-12 h-0.5 bg-slate-100 mx-auto"></div>
        </div>

      </div>
    </section>
  );
};

export default Capabilities;