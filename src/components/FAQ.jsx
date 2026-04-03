import React, { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle, FaChevronRight } from 'react-icons/fa';

const faqs = [
  {
    question: "What happens if a chipset driver stops working?",
    answer: "If the chipset driver fails, the system may become unstable, hardware devices may not be recognized, and in severe cases, the computer may fail to boot at all as it is the central communication hub."
  },
  {
    question: "Why is my screen flickering or showing low resolution?",
    answer: "This is usually caused by a failing or outdated Graphics (Display) driver. The graphics driver is responsible for translating OS instructions into commands that your GPU can process for smooth visual output."
  },
  {
    question: "I have no sound. Is it a hardware or driver issue?",
    answer: "Most sound issues are driver-related. The audio driver converts digital signals into analog sound. If it's missing or corrupted, your speakers and microphones will not function even if the hardware is perfect."
  },
  {
    question: "How do network drivers affect my internet speed?",
    answer: "Network drivers handle data packet transmission and protocols. An outdated driver can lead to frequent disconnections, low speeds, or inability to connect to modern Wi-Fi 6 networks."
  },
  {
    question: "What is the difference between BIOS and regular drivers?",
    answer: "BIOS/UEFI is low-level firmware that starts your computer before the OS loads. Regular drivers operate within the OS to manage specific hardware components like printers or webcams after the system has booted."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white font-poppins">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: FAQ Intro */}
          <div className="w-full lg:w-1/3" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
              <FaQuestionCircle className="text-blue-600 text-xs" />
              <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[2px]">Support Center</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Hardware & Driver <br />
              <span className="text-blue-600">Common Queries</span>
            </h2>
            <p className="text-slate-500 text-base font-medium mb-10 leading-relaxed">
              Find detailed technical answers to common system issues and hardware driver dependencies.
            </p>
            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
               <p className="text-slate-900 font-bold text-sm mb-2 uppercase tracking-wide">Still have questions?</p>
               <p className="text-slate-400 text-xs font-medium mb-6">Our technical team is available for advanced system diagnostics.</p>
               <button className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                 Contact Support <FaChevronRight size={10} />
               </button>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="w-full lg:w-2/3" data-aos="fade-left">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-[2rem] transition-all duration-500 ${activeIndex === index ? 'border-blue-200 bg-blue-50/30 shadow-sm' : 'border-slate-100 hover:border-slate-200'}`}
                >
                  <button
                    className="w-full flex items-center justify-between p-8 text-left"
                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  >
                    <span className={`text-base font-bold transition-colors ${activeIndex === index ? 'text-blue-600' : 'text-slate-900'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-blue-600 text-white rotate-180 shadow-lg shadow-blue-500/20' : 'bg-slate-50 text-slate-400'}`}>
                      {activeIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-8 pt-0 text-slate-500 text-sm leading-relaxed font-medium">
                      <div className="w-full h-[1px] bg-slate-100 mb-6"></div>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;