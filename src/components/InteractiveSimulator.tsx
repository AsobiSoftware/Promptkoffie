import React, { useState } from 'react';
import { Coffee, ShieldCheck, Paperclip, Send, Mic, Plus, Sparkles, X } from 'lucide-react';

export const InteractiveSimulator: React.FC = () => {
  const [platform, setPlatform] = useState<'chatgpt' | 'gemini' | 'claude'>('chatgpt');

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Platform Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        <button
          onClick={() => setPlatform('chatgpt')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
            platform === 'chatgpt'
              ? 'bg-[#202123] text-white border-stone-700 shadow-md scale-102'
              : 'bg-white text-[#57534E] border-[#E7E1D8] hover:bg-stone-50'
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-[#10A37F]" />
          <span>ChatGPT interface</span>
        </button>

        <button
          onClick={() => setPlatform('gemini')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
            platform === 'gemini'
              ? 'bg-[#1A73E8] text-white border-blue-600 shadow-md scale-102'
              : 'bg-white text-[#57534E] border-[#E7E1D8] hover:bg-stone-50'
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span>Gemini interface</span>
        </button>

        <button
          onClick={() => setPlatform('claude')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
            platform === 'claude'
              ? 'bg-[#D97706] text-white border-amber-600 shadow-md scale-102'
              : 'bg-white text-[#57534E] border-[#E7E1D8] hover:bg-stone-50'
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Claude interface</span>
        </button>

        <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border bg-white text-[#A8A29E] border-[#E7E1D8] opacity-60 cursor-default">
          <div className="w-2 h-2 rounded-full bg-[#A8A29E]" />
          <span>Perplexity — binnenkort</span>
        </span>
      </div>

      {/* Main Browser Frame */}
      <div className="bg-[#1C1917] border border-[#332F2C] rounded-2xl shadow-2xl overflow-hidden text-left">
        {/* Browser URL Bar Header */}
        <div className="px-4 py-2.5 bg-[#141210] border-b border-[#292524] flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-3 py-1 bg-[#23201D] rounded-md border border-[#332F2C] text-xs font-mono text-stone-300 flex items-center gap-1.5">
              <span className="text-emerald-500">https://</span>
              <span>
                {platform === 'chatgpt' ? 'chatgpt.com' : platform === 'gemini' ? 'gemini.google.com' : 'claude.ai'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-amber-300 bg-amber-950/70 border border-amber-800/60 px-2.5 py-1 rounded-md">
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span>Koffiesaldo: <strong className="text-emerald-400">€1,42</strong></span>
          </div>
        </div>

        {/* ==================== 1. CHATGPT AUTHENTIC LOOK ==================== */}
        {platform === 'chatgpt' && (
          <div className="bg-[#212121] text-stone-200 min-h-[340px] flex flex-col sm:flex-row">
            {/* Sidebar Mockup */}
            <div className="w-56 bg-[#171717] border-r border-[#2f2f2f] p-3 hidden sm:flex flex-col justify-between text-xs text-stone-400">
              <div>
                <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-[#212121] text-stone-200 font-medium mb-3 border border-[#2f2f2f]">
                  <Plus className="w-4 h-4" />
                  <span>Nieuwe chat</span>
                </div>
                <div className="space-y-1">
                  <div className="px-2 py-1.5 rounded-md bg-[#212121]/60 text-stone-300 truncate font-medium">
                    Samenvatting rapport
                  </div>
                  <div className="px-2 py-1.5 rounded-md hover:bg-[#212121]/40 text-stone-500 truncate">
                    Python data analyse script
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-[#2f2f2f] text-[11px] text-stone-500 flex items-center justify-between">
                <span>ChatGPT 4o</span>
                <span className="bg-[#10A37F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">PLUS</span>
              </div>
            </div>

            {/* Main Chat Content Area */}
            <div className="flex-1 flex flex-col justify-between p-4 sm:p-5 bg-[#212121] relative">
              {/* Top Chat Header */}
              <div className="flex items-center justify-between border-b border-[#2f2f2f] pb-3 mb-3 text-xs font-semibold text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="text-stone-100 font-bold text-sm">ChatGPT 4o</span>
                  <span className="text-[10px] text-stone-500 bg-[#2a2a2a] px-2 py-0.5 rounded">Onthoudt context</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3">
                {/* User Prompt */}
                <div className="flex justify-end">
                  <div className="bg-[#2f2f2f] text-stone-100 px-4 py-2.5 rounded-2xl rounded-tr-xs max-w-md text-xs sm:text-sm">
                    Schrijf de 3 belangrijkste conclusies uit dit onderzoeksrapport.
                  </div>
                </div>

                {/* Injected Promptkoffie ad — in de lege ruimte onder het eigen bericht */}
                <div className="group flex items-start gap-2 bg-[#1A1918] border border-amber-500/30 rounded-lg px-2.5 py-2 text-xs">
                  <div className="w-4 h-4 rounded bg-[#B45309] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Coffee className="w-2.5 h-2.5" />
                  </div>
                  <div className="flex-1 flex items-center gap-1.5 truncate">
                    <span className="font-bold text-amber-400 shrink-0 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                      Swapfiets
                    </span>
                    <span className="text-stone-300 truncate">— Altijd een werkende e-bike voor werk of studie. Vanaf €16,90/mnd.</span>
                  </div>
                  <button type="button" aria-label="Advertentie sluiten" className="text-stone-400 hover:text-white hover:bg-white/10 rounded shrink-0 transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </div>

                {/* ChatGPT Response in THINKING / GENERATING State */}
                <div className="flex items-start gap-3 justify-start">
                  <div className="w-7 h-7 rounded-full bg-[#10A37F] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    <Sparkles className="w-4 h-4 text-white animate-pulse" />
                  </div>
                  <div className="bg-[#262626] border border-[#333333] p-3.5 rounded-2xl rounded-tl-xs max-w-lg text-xs sm:text-sm text-stone-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5 text-stone-400 font-medium text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#10A37F] animate-ping" />
                      <span className="font-semibold text-stone-300">Nadenken over antwoord (3s)...</span>
                    </div>
                    <div className="flex items-center gap-1.5 py-1">
                      <span className="w-2 h-2 rounded-full bg-stone-400 animate-pulse [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-stone-400 animate-pulse [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-stone-400 animate-pulse" />
                      <span className="text-stone-400 text-xs ml-2 italic">Kernpunten formuleren...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ChatGPT Input Box */}
              <div className="mt-3 bg-[#2f2f2f] border border-[#424242] rounded-2xl p-2.5 flex items-center justify-between gap-2 shadow-inner">
                <div className="flex items-center gap-2 text-stone-500 text-xs pl-2">
                  <Paperclip className="w-4 h-4" />
                  <span>Bericht aan ChatGPT...</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-stone-700 text-stone-400 flex items-center justify-center">
                  <Send className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. GEMINI AUTHENTIC LOOK ==================== */}
        {platform === 'gemini' && (
          <div className="bg-[#F8FAFC] text-slate-800 min-h-[340px] flex flex-col justify-between p-4 sm:p-5 relative">
            {/* Gemini Clean Top Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-rose-400 flex items-center justify-center text-white text-[10px] font-bold">
                  ✦
                </div>
                <span className="font-bold text-slate-900 text-sm">Gemini 1.5 Pro</span>
              </div>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                Google Workspace gekoppeld
              </span>
            </div>

            {/* Chat Content */}
            <div className="space-y-3">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-[#E9EEF6] text-slate-900 px-4 py-2.5 rounded-2xl rounded-tr-xs max-w-md text-xs sm:text-sm font-medium">
                  Geef me een kortere samenvatting van dit document.
                </div>
              </div>

              {/* Injected Promptkoffie ad — in de lege ruimte onder het eigen bericht */}
              <div className="group flex items-start gap-2 bg-[#0F172A] border border-amber-500/30 rounded-lg px-2.5 py-2 text-xs">
                <div className="w-4 h-4 rounded bg-[#B45309] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Coffee className="w-2.5 h-2.5" />
                </div>
                <div className="flex-1 flex items-center gap-1.5 truncate">
                  <span className="font-bold text-amber-300 shrink-0 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                    Bol.com
                  </span>
                  <span className="text-slate-300 truncate">— Boeken en elektronica direct morgen in huis.</span>
                </div>
                <button type="button" aria-label="Advertentie sluiten" className="text-stone-400 hover:text-white hover:bg-white/10 rounded shrink-0 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </div>

              {/* Gemini Response in THINKING State */}
              <div className="flex items-start gap-3 justify-start">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-rose-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs animate-pulse">
                  ✦
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-xs max-w-lg text-xs sm:text-sm text-slate-800 shadow-2xs">
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-blue-600">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                    <span>Gemini is aan het nadenken...</span>
                  </div>
                  <div className="space-y-1.5 py-1">
                    <div className="h-2.5 w-52 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 rounded-full animate-pulse" />
                    <div className="h-2.5 w-36 bg-slate-200 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Gemini Input Box */}
            <div className="mt-3 bg-slate-100 border border-slate-300 rounded-full px-4 py-2.5 flex items-center justify-between gap-2 shadow-inner">
              <span className="text-slate-400 text-xs">Vraag het aan Gemini...</span>
              <div className="flex items-center gap-2 text-slate-500">
                <Mic className="w-4 h-4" />
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <Send className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 3. CLAUDE AUTHENTIC LOOK ==================== */}
        {platform === 'claude' && (
          <div className="bg-[#FAF6F0] text-[#2C2825] min-h-[340px] flex flex-col justify-between p-4 sm:p-5 relative">
            {/* Claude Top Header */}
            <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-3 mb-3 text-xs font-serif">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-[#DA7756] text-white font-bold flex items-center justify-center text-xs">
                  ✶
                </span>
                <span className="font-bold text-[#2C2825] text-sm">Claude 3.5 Sonnet</span>
              </div>
              <span className="text-[11px] text-[#A08060] bg-[#F2E8DC] px-2.5 py-0.5 rounded-md border border-[#E0D0C0]">
                Anthropic
              </span>
            </div>

            {/* Chat Content */}
            <div className="space-y-3">
              {/* User Prompt */}
              <div className="flex justify-end">
                <div className="bg-[#EFE6DA] text-[#2C2825] border border-[#E0D5C5] px-4 py-2.5 rounded-2xl rounded-tr-xs max-w-md text-xs sm:text-sm font-medium">
                  Herschrijf deze e-mail op een professionele en vriendelijke manier.
                </div>
              </div>

              {/* Injected Promptkoffie ad — in de lege ruimte onder het eigen bericht */}
              <div className="group flex items-start gap-2 bg-[#221F1C] border border-amber-500/30 rounded-lg px-2.5 py-2 text-xs">
                <div className="w-4 h-4 rounded bg-[#B45309] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Coffee className="w-2.5 h-2.5" />
                </div>
                <div className="flex-1 flex items-center gap-1.5 truncate">
                  <span className="font-bold text-amber-300 shrink-0 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                    Duolingo
                  </span>
                  <span className="text-stone-300 truncate">— Leer Spaans in 5 min/dag terwijl AI je antwoord genereert.</span>
                </div>
                <button type="button" aria-label="Advertentie sluiten" className="text-stone-400 hover:text-white hover:bg-white/10 rounded shrink-0 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </div>

              {/* Claude Response in THINKING State */}
              <div className="flex items-start gap-3 justify-start">
                <div className="w-7 h-7 rounded-md bg-[#DA7756] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 animate-pulse">
                  ✶
                </div>
                <div className="bg-white border border-[#E5DACD] p-4 rounded-2xl rounded-tl-xs max-w-lg text-xs sm:text-sm text-[#2C2825] shadow-2xs font-serif">
                  <div className="flex items-center gap-2 mb-1.5 text-xs text-[#DA7756] font-sans font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#DA7756] animate-ping" />
                    <span>Thinking for 4 seconds...</span>
                  </div>
                  <p className="text-xs text-[#8C827A] italic font-sans flex items-center gap-1.5 py-1">
                    <span>E-mail herformuleren in professionele en vriendelijke toon</span>
                    <span className="inline-block w-1.5 h-3.5 bg-[#DA7756] animate-pulse" />
                  </p>
                </div>
              </div>
            </div>

            {/* Claude Input Box */}
            <div className="mt-3 bg-white border border-[#DCD0C0] rounded-xl p-3 flex items-center justify-between gap-2 shadow-xs">
              <span className="text-[#8C827A] text-xs">Reply to Claude...</span>
              <div className="w-6 h-6 rounded-md bg-[#DA7756] text-white flex items-center justify-center">
                <Send className="w-3 h-3" />
              </div>
            </div>
          </div>
        )}

        {/* Footer Guarantee Bar */}
        <div className="bg-[#141210] px-4 py-3 border-t border-[#292524] flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>0% Data Gelezen • 100% Privacy</span>
        </div>
      </div>
    </div>
  );
};
