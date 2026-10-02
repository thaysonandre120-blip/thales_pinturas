/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SERVICES_DATA, getWhatsAppLink } from '../siteConfig';
import { ArrowUpRight, Check, ZoomIn } from 'lucide-react';
import { openImageLightbox } from './ImageLightboxModal';

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-[#E2DDD5]">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#BD6B3B] uppercase block mb-2">
              Nossos Serviços
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-[#14201C] tracking-tight">
              Pintura, Revitalização, Pedras & Limpeza
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-[#595349] max-w-md">
            Padrão técnico rigoroso em Itajaí e região. Imóvel entregue limpo e pronto para morar.
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`bg-[#F4EFEA] border p-5 sm:p-6 flex flex-col justify-between group transition-all ${
                service.isSpecialHighlight
                  ? 'border-[#BD6B3B] bg-[#F7F2EB] shadow-md'
                  : 'border-[#E2DDD5] hover:border-[#1D2F29]'
              }`}
            >
              <div>
                {/* Number & Tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2DDD5]">
                  <span className="font-serif text-2xl font-bold text-[#8D7F71]">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#595349] bg-[#EAE4DB] px-2 py-0.5">
                    {service.badgeText || 'Especialidade'}
                  </span>
                </div>

                {/* Service Image (Colorida e Viva - Permite Zoom e Interação) */}
                {/* Image Gallery */}
                <div className="mb-4 space-y-2">
                  <div
                    onClick={() =>
                      openImageLightbox({
                        src: service.image,
                        alt: service.title,
                        title: service.title,
                        subtitle: service.subtitle,
                      })
                    }
                    className="relative overflow-hidden border border-[#DCD3C5] aspect-[16/10] cursor-pointer group/img"
                    title="Clique para ver em alta resolução e dar zoom"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover filter saturate-[1.12] contrast-[1.05] group-hover/img:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-2.5 py-1 bg-[#14201C]/85 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <ZoomIn size={12} />
                        <span>Ampliar</span>
                      </span>
                    </div>
                  </div>

                  {service.complementaryImages && service.complementaryImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {service.complementaryImages.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() =>
                            openImageLightbox({
                              src: img,
                              alt: `${service.title} - Imagem Complementar ${idx + 1}`,
                              title: `${service.title} - Detalhe`,
                            })
                          }
                          className="relative overflow-hidden border border-[#DCD3C5] aspect-[16/10] cursor-pointer group/img"
                        >
                          <img
                            src={img}
                            alt="Complementary"
                            className="w-full h-full object-cover filter saturate-[1.12] group-hover/img:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn size={12} className="text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#14201C] mb-1">
                  {service.title}
                </h3>

                <p className="text-[11px] font-semibold text-[#BD6B3B] tracking-wide uppercase mb-3">
                  {service.subtitle}
                </p>

                <p className="text-xs text-[#595349] leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5 text-[11px] text-[#3A352F]">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={13} className="text-[#BD6B3B] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Certification Badge */}
                {service.certification && (
                  <div className="mb-5 p-3 sm:p-4 border border-[#E2DDD5] bg-[#FFFFFF] flex items-start gap-3 sm:gap-4 group hover:border-[#DCD3C5] transition-colors">
                    <div 
                      className="shrink-0 w-12 h-16 sm:w-16 sm:h-20 border border-[#DCD3C5] cursor-pointer relative overflow-hidden"
                      onClick={() => openImageLightbox({
                        src: service.certification!.image,
                        alt: 'Certificado de Capacitação',
                        title: 'Certificado de Capacitação Profissional'
                      })}
                      title="Ampliar Certificado"
                    >
                      <img 
                        src={service.certification.image} 
                        alt="Certificado" 
                        className="w-full h-full object-cover filter contrast-125 group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn size={12} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold tracking-widest text-[#BD6B3B] uppercase mb-1 block flex items-center gap-1">
                        <Check size={10} strokeWidth={3} />
                        Profissional Certificado
                      </span>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#14201C] leading-snug mb-1">
                        {service.certification.title}
                      </p>
                      <p className="text-[10px] text-[#595349] leading-relaxed">
                        Habilitado pela <strong className="font-bold text-[#3A352F]">{service.certification.issuer}</strong> em {service.certification.date}.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Notice & WhatsApp Action */}
              <div>
                <p className="text-[10px] text-[#8C8479] mb-3 italic">
                  {service.deadlineNotice}
                </p>

                <a
                  href={getWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-[#1D2F29] hover:bg-[#BD6B3B] text-[#FAF8F5] text-xs font-bold tracking-wider uppercase transition-colors shadow-xs"
                >
                  <span>Solicitar orçamento</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
