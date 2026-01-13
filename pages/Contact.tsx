
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been sent. Our specialist will contact you within 24 hours.');
  };

  return (
    <div className="pt-24 bg-slate-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h1 className="text-5xl font-bold text-slate-900 mb-6">Let's Protect Your <span className="text-blue-600">Investment</span></h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Have questions or ready for a free estimate? Our team is standing by to help you choose the best roofing solution for your property.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-slate-900">Phone Support</h4>
                    <p className="text-slate-600 text-lg">(555) 123-4567</p>
                    <p className="text-sm text-slate-400">Available Mon-Fri, 8am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-slate-900">Email Inquiries</h4>
                    <p className="text-slate-600 text-lg">quotes@smartroofing.com</p>
                    <p className="text-sm text-slate-400">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shrink-0">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-slate-900">Service Area</h4>
                    <p className="text-slate-600 text-lg">Greater Skyline City & Surrounding Suburbs</p>
                    <p className="text-sm text-slate-400">Licensed in SC, NC, and GA</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden h-64 bg-slate-200 relative neo-shadow">
                <img 
                  src="https://picsum.photos/800/400?grayscale" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white px-6 py-3 rounded-full shadow-xl font-bold text-slate-900">
                     <i className="fas fa-map-marked-alt mr-2 text-blue-600"></i> Open Maps
                   </div>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Request a Free Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="(555) 000-0000"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Service Type</label>
                    <select 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="residential">Residential Roofing</option>
                      <option value="commercial">Commercial Roofing</option>
                      <option value="repair">Roof Repair</option>
                      <option value="inspection">Inspection</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Project Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your roofing needs..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-extrabold text-xl shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 active:scale-95"
                >
                  Submit Request
                </button>
                <p className="text-center text-slate-400 text-sm">
                  <i className="fas fa-lock mr-2"></i> Your data is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
