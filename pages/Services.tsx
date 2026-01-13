
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Our Premium Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive roofing solutions tailored to your specific needs. From tiny repairs to massive commercial complexes.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 neo-shadow flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-xl">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <button className="w-full bg-white border-2 border-slate-200 text-slate-900 py-3 rounded-xl font-bold hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                    Inquire About This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-slate-400 text-lg">Our streamlined process ensures your project is completed with zero stress.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We assess your roof and provide a detailed diagnostic report.' },
              { step: '02', title: 'Planning', desc: 'Material selection and project timeline scheduling.' },
              { step: '03', title: 'Execution', desc: 'Expert installation with strict safety and quality standards.' },
              { step: '04', title: 'Final Review', desc: 'Final walkthrough and cleanup to ensure 100% satisfaction.' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-white/5 absolute -top-10 left-0">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-4 relative z-10">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-blue-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
