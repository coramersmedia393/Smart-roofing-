
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Mission & Values</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building safety and trust, one roof at a time. Discover why Smart Roofing is the industry leader in premium protection.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
           <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
           <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-900 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                alt="Working on a roof" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-3xl -z-0"></div>
              <div className="absolute -top-6 -left-6 border-8 border-slate-100 w-full h-full rounded-3xl -z-10"></div>
            </div>
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">The Smart Roofing Story</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Decades of Craftsmanship & Unwavering Quality</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 1998, Smart Roofing started with a simple vision: to provide homeowners with a roofing service that prioritizes transparency, quality, and long-term reliability.
                </p>
                <p>
                  What began as a small family-owned operation has grown into a regional leader, servicing both residential and major commercial projects. Our growth has been fueled by one thing—the trust of our customers.
                </p>
                <p>
                  We don't just "install roofs." We engineer protective systems designed to withstand the harshest elements, ensuring your most valuable asset remains safe for decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Integrity First',
                desc: 'We believe in honest assessments. If you don\'t need a full replacement, we\'ll tell you. Transparency is our foundation.',
                icon: 'fa-handshake'
              },
              {
                title: 'Superior Quality',
                desc: 'We only use top-grade materials from GAF, CertainTeed, and Owens Corning, installed by certified master roofers.',
                icon: 'fa-award'
              },
              {
                title: 'Customer Safety',
                desc: 'Safety is non-negotiable. We maintain a clean worksite and strictly adhere to all OSHA safety protocols.',
                icon: 'fa-helmet-safety'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl neo-shadow floating-3d border border-white/50">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 text-2xl">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
