import React from 'react';
import { Lock, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyTrust: React.FC = () => {
  const points = [
    {
      icon: EyeOff,
      title: 'Geen Prompts of Antwoorden Gelezen',
      description:
        'Promptkoffie heeft GEEN toegang tot de inhoud van je chats, vragen of de gegenereerde AI-antwoorden. Onze extensie is blind voor de tekst.',
    },
    {
      icon: Lock,
      title: 'Uitsluitend Status-Detectie',
      description:
        'We meten alleen of de AI momenteel aan het typen is (bijv. via de laadindicator in het scherm) om de ad-overlay veilig te activeren.',
    },
    {
      icon: FileText,
      title: 'Geen Verkoop van Je Gegevens',
      description:
        'We verzamelen geen persoonlijke zoekprofielen. Adverteerders kopen alleen geanonimiseerde wachttijd-impressies zonder jouw identiteit.',
    },
  ];

  return (
    <section id="privacy" className="py-20 bg-[#FAF8F5] relative border-b border-[#E7E1D8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E7E1D8] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] font-serif leading-tight">
                Jouw studie- en werkprompts blijven 100% privé.
              </h2>
              <p className="text-base text-[#57534E] leading-relaxed">
                We snappen dat je AI gebruikt voor vertrouwelijke verslagen, code of zakelijke berichten. Daarom is Promptkoffie gebouwd met een strikte privacy-garantie.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#1C1917] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AVG / GDPR Volledig Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1C1917] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Getoetst door Chrome Web Store veiligheidseisen</span>
                </div>
              </div>
            </div>

            {/* Right: verticale checklist, geen kaart-in-kaart */}
            <div className="lg:col-span-7 divide-y divide-[#E7E1D8]">
              {points.map((p, idx) => {
                const IconComp = p.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1C1917] mb-1 font-serif">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
