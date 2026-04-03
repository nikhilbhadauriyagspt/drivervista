import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { FaArrowLeft, FaShieldAlt, FaInfoCircle, FaChevronRight, FaExclamationTriangle, FaCogs } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-poppins">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Database Record Not Found</h2>
          <Link to="/services" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg">
            Back to Driver Index
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[service.iconName] || Icons.FaCogs;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-poppins">
      <Helmet>
        <title>{service.title} - Technical Specifications & Issue Resolution</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-widest mb-12 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Driver Index
        </Link>
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-6 border border-blue-100">
              <FaInfoCircle className="text-blue-600 text-xs" />
              <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[2px]">Technical Documentation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">{service.title}</h1>
            <p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed italic">
              "{service.shortDesc}"
            </p>
            <div className="prose prose-lg text-slate-500 mb-12 max-w-none font-medium leading-relaxed">
              <p>{service.longDesc}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="relative p-1 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[3rem] shadow-sm">
              <div className="bg-white p-12 rounded-[2.8rem] flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center text-4xl mb-8 shadow-inner">
                  <IconComponent />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">System Integration Status</h3>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-blue-600 w-[92%] rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between w-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>Compatibility</span>
                  <span className="text-blue-600">92% Verified</span>
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-50 w-full">
                   <Link to="/contact" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10">
                     Initialize Diagnostic Fix <FaChevronRight size={10} />
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Issues Section - The Core Need */}
        <div className="mt-24" data-aos="fade-up">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center text-xl border border-rose-100">
              <FaExclamationTriangle />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Common Failure Symptoms</h2>
              <p className="text-slate-400 text-sm font-medium">Identify if your system is experiencing {service.title.toLowerCase()} issues.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.issues && service.issues.map((issue, idx) => (
              <div key={idx} className="group p-8 bg-slate-50/50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-xs font-black text-rose-500 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg mb-2">{issue.problem}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-4">
                      {issue.symptom}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[10px] font-black text-rose-600 uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span> Critical Support Required
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 p-12 bg-blue-600 rounded-[3.5rem] text-center relative overflow-hidden shadow-2xl shadow-blue-600/20" data-aos="zoom-in">
           {/* Abstract Decoration */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
           
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Expert Technical Assistance Available</h2>
             <p className="text-blue-100 text-lg font-medium mb-10 max-w-2xl mx-auto">
               Our team of system specialists can remotely diagnose and resolve complex driver conflicts within 24 hours.
             </p>
             <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-all shadow-xl">
               Connect with a Specialist <FaChevronRight size={12} />
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;