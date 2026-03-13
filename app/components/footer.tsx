"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-12 text-center bg-[#022166] border-t border-white/5">
      <p className="text-slate-400 font-black tracking-widest text-[10px] uppercase mb-4 opacity-80">
        © 2026 Fisioterapia Malavasi • Via I Maggio n°95 Cavezzo (MO) | P. IVA 03890170362
      </p>
      <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest">
        <Link href="/privacy" className="text-slate-500 hover:text-[#55B4FF] transition-colors">Privacy Policy</Link>
        <Link href="/cookie" className="text-slate-500 hover:text-[#55B4FF] transition-colors">Cookie Policy</Link>
      </div>
      <p className="mt-6 text-[9px] text-slate-700 font-bold uppercase tracking-[0.3em]">MAGO DIGITAL™ STUDIO</p>
    </footer>
  );
}