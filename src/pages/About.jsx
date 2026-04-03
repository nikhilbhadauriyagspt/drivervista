import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCheck, FaShieldAlt, FaCogs, FaHandshake, FaMicrochip, FaDatabase, FaBolt, FaAward } from 'react-icons/fa';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Technical Integrity",
      desc: "We adhere to verified hardware diagnostic protocols to ensure the long-term stability of your computer system."
    },
    {
      icon: <FaCogs />,
      title: "System Synchronization",
      desc: "Our primary mission is to ensure your software and hardware communicate seamlessly through optimized driver layers."
    },
    {
      icon: <FaHandshake />,
      title: "Diagnostic Clarity",
      desc: "We provide detailed technical reports and clear explanations of hardware conflicts before any resolution work begins."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Helmet>
        <title>About DriverVista | Professional System Standards</title>
        <meta name="description" content="Learn about DriverVista's commitment to hardware integrity, technical excellence, and the digital bridge between software and hardware." />
      </Helmet>

      {/* Modern Sub-Hero Section */}
      <section className="relative py-32 bg-slate-50 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/20 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full mb-6">
            <FaDatabase className="text-blue-600 text-[10px]" />
            <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[2px]">Corporate Identity</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            The Digital Bridge for <br />
            <span className="text-blue-600">Hardware Intelligence</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            DriverVista was established to bridge the complex gap between high-level software and the intricate physical architecture of modern computing hardware.
          </p>
        </div>
      </section>

      {/* Core Objective */}
      <section className="py-24 border-b border-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm">
                <img src="/banner/about.jpg" className="w-full h-[500px] object-cover" alt="Technical Center" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-10 right-10 bg-white p-8 rounded-3xl shadow-lg border border-slate-50 hidden md:block">
                   <div className="flex items-center gap-6">
                      <div className="text-blue-600 text-4xl font-black italic uppercase tracking-tighter">OS-HW</div>
                      <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">System <br/> Integrity <br/> Verified</div>
                   </div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[3px] block mb-4">Our Objective</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">Restoring Synchronization Across the System Stack</h2>
              <div className="space-y-6 text-slate-500 text-base font-medium leading-relaxed">
                <p>
                  In the modern era, hardware components are incredibly advanced, yet they remain dormant without the correct driver protocols. DriverVista specializes in the identification, diagnostic, and resolution of driver-related hardware conflicts.
                </p>
                <p>
                  We believe that a computer's longevity depends on how well its components speak to each other. By maintaining a database of over 50,000 verified protocols and employing system architects, we ensure that your hardware works exactly as the manufacturer intended.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {['Protocol-Driven Diagnostics', 'Verified Driver Library', 'OEM Standard Compliance', 'Hardware Longevity Focus'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[10px] text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <FaCheck />
                    </div>
                    <span className="font-bold text-slate-700 text-xs uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Competencies</h2>
            <p className="text-slate-500 font-medium italic text-sm">"The pillars that define our technical approach to hardware management."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 group">
                <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {v.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Callout */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Advanced Technical Proficiency</h2>
                   <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">
                     Our architects undergo rigorous continuous training to stay synchronized with latest hardware advancements. From TPM 2.0 security layers to NVMe Gen5 storage protocols, we provide expert resolution for complex driver-level dependencies.
                   </p>
                   <div className="space-y-6">
                      <div className="flex items-center gap-5">
                         <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-sm shadow-lg shadow-blue-600/20">01</div>
                         <p className="font-bold text-slate-200 uppercase tracking-wide text-xs">Deep System Health Audits with every resolution.</p>
                      </div>
                      <div className="flex items-center gap-5">
                         <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-sm shadow-lg shadow-blue-600/20">02</div>
                         <p className="font-bold text-slate-200 uppercase tracking-wide text-xs">Strict adherence to OEM security and boot compliance.</p>
                      </div>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   {[
                     { icon: <FaBolt />, label: "High Performance" },
                     { icon: <FaMicrochip />, label: "Core Sync" },
                     { icon: <FaAward />, label: "Verified Library" },
                     { icon: <FaDatabase />, label: "Global Protocols" }
                   ].map((box, i) => (
                     <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] text-center hover:bg-white/10 transition-all cursor-default">
                        <div className="text-2xl text-blue-500 mb-4 flex justify-center">{box.icon}</div>
                        <p className="font-bold text-[10px] text-white uppercase tracking-[3px] leading-tight">{box.label}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer Brading */}
      <section className="py-24">
         <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight uppercase">Technical Authority & Accountability</h2>
            <p className="text-slate-500 text-base font-medium leading-relaxed mb-12">
              We believe that trust is established through consistent system performance and transparent documentation. DriverVista ensures that every client receives a technical breakdown of the hardware conflict and the verified fix implemented.
            </p>
            <div className="inline-block border-b-2 border-blue-600 pb-2">
               <p className="font-black text-slate-900 tracking-tighter text-2xl uppercase italic">Driver<span className="text-blue-600">Vista</span></p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;