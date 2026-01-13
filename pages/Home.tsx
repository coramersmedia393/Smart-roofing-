
import React from 'react';
import { SERVICES, TESTIMONIALS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful Modern Roof" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              #1 Trusted Roofing Specialist
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Reliable & Professional <br />
              <span className="text-blue-500">Roofing Services</span> <br />
              You Can Trust.
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              From residential repairs to massive commercial installations, Smart Roofing provides premium workmanship backed by a 25-year warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/20 transition-all hover:-translate-y-1"
              >
                Get a Free Quote
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl hidden lg:block">
          <div className="grid grid-cols-3 gap-8 bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl neo-shadow border border-white/50">
            <div className="flex items-center space-x-4 border-r border-slate-200">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <i className="fas fa-certificate text-blue-600 text-2xl"></i>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">25+</p>
                <p className="text-slate-500 font-medium">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-r border-slate-200 px-8">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <i className="fas fa-users text-blue-600 text-2xl"></i>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">5k+</p>
                <p className="text-slate-500 font-medium">Happy Clients</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 px-8">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <i className="fas fa-shield-halved text-blue-600 text-2xl"></i>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">100%</p>
                <p className="text-slate-500 font-medium">Warranty Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
             <i className="fab fa-google text-4xl"></i>
             <i className="fab fa-aws text-4xl"></i>
             <i className="fab fa-microsoft text-4xl"></i>
             <i className="fab fa-stripe text-4xl"></i>
             <i className="fab fa-atlassian text-4xl"></i>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expert Roofing Solutions</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We specialize in modern roofing techniques that protect your property while enhancing its aesthetic appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group glass-card rounded-3xl p-8 floating-3d shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-lg shadow-blue-500/30">
                  <i className={`fas ${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-blue-600 font-bold flex items-center hover:translate-x-2 transition-transform"
                >
                  Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('services')}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-3xl relative">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < t.rating ? 'text-yellow-400' : 'text-slate-300'}`}></i>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md mr-4" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
                <div className="absolute -top-4 right-8 text-6xl text-blue-100 opacity-50">
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to get started on your project?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of homeowners and businesses who trust Smart Roofing for their premium protection.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-extrabold text-xl shadow-2xl hover:bg-blue-50 transition-all hover:-translate-y-1 active:scale-95"
          >
            Get My Free Quote Now
          </button>
        </div>
        <div className="absolute inset-0 opacity-10">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="white" />
           </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
