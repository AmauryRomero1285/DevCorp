// src/components/projects/HeroSection.jsx
import React from 'react';

export default function HeroSection() {
  return (
    <div className="bg-white dark:bg-slate-900/50">
      <div className="px-6 md:px-20 lg:px-40 pb-20 pt-10">
        <div className="max-w-4xl">
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Professional Projects & Solutions
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Discover how DevCorp empowers industry leaders through cutting-edge technology and tailored software engineering. From high-impact success stories to our extensive development gallery.
          </p>
        </div>
      </div>
    </div>
  );
}