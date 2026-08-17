import type { MouseEvent } from 'react';

/**
 * Onderschept een klik op een anker-link (#sectie) en scrollt handmatig naar
 * het element, zonder dat de browser het adres bijwerkt naar
 * promptkoffie.nl/#sectie.
 *
 * Bestaat het element niet op de huidige pagina (bijv. omdat we op /over-ons
 * staan en de link naar /#privacy wijst), dan doen we niets — de browser
 * navigeert dan gewoon normaal naar de andere pagina.
 */
/**
 * Secties die gecentreerd in beeld moeten komen in plaats van tegen de
 * bovenkant — voor secties waar de focus nadrukkelijk in het midden van het
 * scherm moet liggen (zoals de "Zet jezelf op de wachtlijst."-sectie).
 */
const CENTERED_SECTIONS = new Set(['wachtlijst']);

function scrollBlockFor(id: string): ScrollLogicalPosition {
  return CENTERED_SECTIONS.has(id) ? 'center' : 'start';
}

export function handleSectionLinkClick(
  e: MouseEvent<HTMLAnchorElement>,
  id: string
): void {
  const el = document.getElementById(id);
  if (!el) return;

  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: scrollBlockFor(id) });
}

/**
 * Ruimt een binnenkomende #hash in de URL op nadat we ernaartoe gescrolld
 * zijn — zo blijft promptkoffie.nl altijd in de adresbalk staan, ook als
 * iemand via een oude bookmark of een link vanaf /over-ons of /adverteerders
 * met een #hash binnenkomt.
 */
export function cleanIncomingHash(): void {
  if (typeof window === 'undefined' || !window.location.hash) return;

  const id = window.location.hash.slice(1);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ block: scrollBlockFor(id) });
  }
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
