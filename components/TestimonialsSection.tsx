/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../siteConfig';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // If array is empty, the entire section disappears automatically
  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null;
  }

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scrollBy = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 300;
    el.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
    el.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const el = scrollRef.current;
    if (el) el.style.cursor = 'grab';
  };

  return (
    <section id="avaliacoes" className="py-20 md:py-24 bg-[#FAF8F5] border-t border-[#E2DDD5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#DCD3C5]">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#BD6B3B] uppercase block mb-3">
              Comentários Reais
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#14201C] tracking-tight">
              O que dizem no Instagram
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs font-bold uppercase tracking-wider">
              <InstagramIcon size={14} />
              <span>@jthales_pinturas</span>
            </div>

          </div>
        </div>

        {/* Drag hint for mobile */}
        <p className="text-[11px] text-[#8D7F71] font-medium mb-4 md:hidden flex items-center gap-1.5">
          <span>←</span>
          <span>Arraste para ver mais avaliações</span>
          <span>→</span>
        </p>
      </div>

      {/* Horizontal Scrollable Carousel */}
      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-4 select-none"
        style={{ cursor: 'grab' }}
      >
        {/* Left spacer for alignment */}
        <div className="shrink-0 w-0 md:w-[calc((100vw-1280px)/2)]" />

        {/* CTA card at the START */}
        <div
          className="shrink-0 w-[260px] sm:w-[280px] md:w-[300px] bg-[#1D2F29] border border-[#1D2F29] p-5 md:p-6 flex flex-col items-center justify-center text-center"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center text-white mb-4 rounded-full">
            <InstagramIcon size={22} />
          </div>
          <p className="text-[#FAF8F5] font-serif text-lg font-semibold mb-2">
            Siga no Instagram
          </p>
          <p className="text-[#A2B8AC] text-xs mb-5 leading-relaxed">
            Veja mais obras, bastidores e depoimentos de clientes reais
          </p>
          <a
            href="https://www.instagram.com/jthales_pinturas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
          >
            <InstagramIcon size={14} />
            <span>@jthales_pinturas</span>
          </a>
        </div>

        {/* Comment Cards */}
        {TESTIMONIALS_DATA.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-[260px] sm:w-[280px] md:w-[300px] bg-white border border-[#E2DDD5] p-5 md:p-6 flex flex-col justify-between relative group hover:border-[#1D2F29] transition-colors"
          >
            {/* Instagram Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex text-[#BD6B3B] gap-0.5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" stroke="none" aria-hidden="true" />
                ))}
              </div>
              <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 border border-[#E2DDD5] bg-[#FFFFFF] text-[#14201C] flex items-center gap-1">
                <InstagramIcon size={10} />
                <span>Instagram</span>
              </span>
            </div>

            {/* Comment Text */}
            <blockquote className="font-sans text-sm md:text-base text-[#222B27] leading-relaxed mb-5 flex-1">
              "{item.text}"
            </blockquote>

            {/* Author */}
            <div className="pt-4 border-t border-[#EAE4DB] flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center text-white font-bold text-xs rounded-full">
                {item.name.replace('@', '').charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="font-sans font-bold text-xs text-[#14201C]">
                  {item.name}
                </div>
                <div className="text-[10px] text-[#8D7F71] font-medium">
                  {item.role}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Right spacer */}
        <div className="shrink-0 w-4 md:w-[calc((100vw-1280px)/2)]" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
