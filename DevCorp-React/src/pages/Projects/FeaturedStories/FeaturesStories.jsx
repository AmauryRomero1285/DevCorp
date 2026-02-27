// src/components/projects/FeaturedStories.jsx
import React from 'react';

export default function FeaturedStories() {
  return (
    <section className="py-24 px-6 md:px-20 lg:px-40 bg-slate-50 dark:bg-background-dark border-y border-slate-200 dark:border-slate-800">
      <div className="mb-16">
        <div className="flex items-center gap-3 text-primary mb-2">
          <span className="h-px w-8 bg-primary"></span>
          <span className="text-sm font-bold uppercase tracking-widest">Casos de Éxito</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
          Featured Success Stories
        </h2>
      </div>

      <div className="space-y-24">
        {/* Historia 1 - Nebula */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Nebula Wealth Manager"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFNGImT7Wy9fw8ek6nEZvMjWxyDGnoSpda_qBN2lDOB80VCsSxNcmSiDR0vNcAjo-FbmRn6WOgGaXsv8XJT7zHD45UIZYzlaa8jSX4AjOI-yloPWsahkY7vo2FZdkuE-zpFhz25NXWcFWcA9O2Ywd705m2mDcAeY_C4oGs5VboUgt-qCVdeZQHA7Er3KkOd52e7Ez9Ka047SlCbUBRFZFUc7Ca8l8t3oOKh22fTJaJghyjTYuR6-kJlDE1OX5U5O47rJAh3LlsIVTG"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="space-y-6">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Fintech
            </span>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              Nebula Wealth Manager: Scaling Global Assets
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              We developed a robust, high-frequency wealth management engine that streamlined operations for a leading financial institution. The project focused on sub-second data synchronization across three continents.
            </p>

            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-extrabold text-primary">350%</div>
                <div className="text-sm text-slate-500 font-medium">ROI in first year</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-extrabold text-primary">0.2s</div>
                <div className="text-sm text-slate-500 font-medium">Average Latency</div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Read Full Narrative <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Historia 2 - PulseLink */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 relative group rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="PulseLink EHR"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq1JwtfMj6V1kX2utgK7jOs3z-wxhqtaUW798_UuFBKaabNpzsynQhRZGu6mDEz3T_xP1liNEYGjZFVhjDe8szFIwsgdn_n_ZTRCDkX25d-2-vkzJpkhk2q9c9RHUlBiRKV5kGuG0DY4SmPxNHp75gLH_BBnPIoiQKvAbPpMe5StKfLl3_B-pIHIRiDbxVA7sCuqrRxuj-LdsICX8XtXqVMVu9UMxEXc4voCLuOdgZS2y1M-f0UmIvH3B9c7hoaSmKpC53jym6Xb0h"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="lg:order-1 space-y-6">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Healthcare
            </span>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              PulseLink EHR: Transforming Patient Monitoring
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              PulseLink revolutionized how medical staff interact with patient data. By implementing AI-driven alerting and HIPAA-compliant cloud architecture, we reduced administrative burden by 40%.
            </p>

            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-extrabold text-primary">40%</div>
                <div className="text-sm text-slate-500 font-medium">Admin Reduction</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-extrabold text-primary">12M+</div>
                <div className="text-sm text-slate-500 font-medium">Patients Managed</div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Read Full Narrative <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}