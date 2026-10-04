/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-12 sm:pt-24 sm:pb-16 bg-[#FAF8F5] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Copy Column - Pushed to extremity and top */}
          <div className="lg:col-span-5 lg:pt-4 xl:pt-8 xl:pr-6">
            {/* Top Quality Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF8F5] border border-[#BD6B3B]/60 text-[#14201C] text-[10px] font-semibold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="text-xs">⭐</span>
              <span className="text-[#BD6B3B] font-bold">Entre os 3 melhores do Brasil em 2026</span>
              <span className="text-[9px] text-[#8C7E72] pl-0.5 hidden sm:inline">• Alto Padrão</span>
            </div>

            {/* Direct H1 Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14201C] tracking-tight leading-tight mb-4">
              Pintura Profissional e Limpeza Pós-Obra
            </h1>

            {/* Subtitle - Short & Clean */}
            <p className="text-sm sm:text-base text-[#4E473D] leading-relaxed mb-6 max-w-lg">
              Pintura residencial e predial, pedras naturais e limpeza fina. Acabamento de alto padrão, sem respingos e pronto para morar.
            </p>

          </div>

          {/* Hero Visual Column - HUGE and imposing */}
          <div className="lg:col-span-7 relative mt-8 lg:mt-0 w-full">
            <div className="p-2 sm:p-3 bg-[#FAF8F5] border border-[#DCD3C5] shadow-xl w-full">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/obras/fachada-residencial-moderna-editada.jpg"
                  alt="Pintura residencial executada pela Thales Pinturas"
                  className="w-full h-full object-cover filter saturate-[1.12] contrast-[1.05]"
                  loading="eager"
                />
              </div>

              <div className="mt-2.5 px-2 flex items-center text-[10px] sm:text-xs text-[#7A7165]">
                <span>Obra residencial real executada com excelência</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
