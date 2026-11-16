/* Finanzplaner — statische Web-App, Daten in localStorage */

var SPEICHER_KEY = "finanzplaner-v1";

var STARTDATEN = {
  "kosten": [
    {
      "name": "Mitarbeiterdarlehen",
      "tag": 30,
      "betrag": 153,
      "kategorie": "finanzen",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Miete / Tilgung",
      "tag": 27,
      "betrag": 1650,
      "kategorie": "wohnen",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "DSL & Telefon",
      "tag": 29,
      "betrag": 43,
      "kategorie": "telecom",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Fitnessstudio",
      "tag": 2,
      "betrag": 25,
      "kategorie": "gesundheit",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Risiko-Lebensversicherung",
      "tag": 3,
      "betrag": 9.81,
      "kategorie": "versicherung",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Kontoführungsgebühren",
      "tag": 3,
      "betrag": 5.44,
      "kategorie": "finanzen",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Kfz-Steuer",
      "tag": 1,
      "betrag": 218.04,
      "kategorie": "mobilitaet",
      "intervall": "jaehrlich",
      "faelligkeitsmonat": 1
    },
    {
      "name": "Wartungs- & Inspektionspaket",
      "tag": 7,
      "betrag": 73,
      "kategorie": "mobilitaet",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Amazon Abo",
      "tag": 10,
      "betrag": 8.99,
      "kategorie": "abos",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Strom",
      "tag": 14,
      "betrag": 80,
      "kategorie": "energie",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Rechtsschutzversicherung",
      "tag": 15,
      "betrag": 30.1,
      "kategorie": "versicherung",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Grundsteuer (Eichendorffstraße)",
      "tag": 15,
      "betrag": 72.8,
      "kategorie": "wohnen",
      "intervall": "quartalsweise",
      "faelligkeitsmonat": 2
    },
    {
      "name": "Rundfunkbeitrag",
      "tag": 15,
      "betrag": 55.5,
      "kategorie": "abos",
      "intervall": "quartalsweise",
      "faelligkeitsmonat": 2
    },
    {
      "name": "Handyvertrag klarmobil",
      "tag": 15,
      "betrag": 9.99,
      "kategorie": "telecom",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Netflix",
      "tag": 21,
      "betrag": 4.99,
      "kategorie": "abos",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Spotify",
      "tag": 21,
      "betrag": 9,
      "kategorie": "abos",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Hausratversicherung",
      "tag": 1,
      "betrag": 164.76,
      "kategorie": "versicherung",
      "intervall": "jaehrlich",
      "faelligkeitsmonat": 11
    },
    {
      "name": "Haftpflichtversicherung (geschätzt)",
      "tag": 1,
      "betrag": 60,
      "kategorie": "versicherung",
      "intervall": "jaehrlich",
      "faelligkeitsmonat": 1
    },
    {
      "name": "Kfz-Versicherung",
      "tag": 1,
      "betrag": 692,
      "kategorie": "mobilitaet",
      "intervall": "jaehrlich",
      "faelligkeitsmonat": 12
    },
    {
      "name": "ADAC",
      "tag": 1,
      "betrag": 54,
      "kategorie": "mobilitaet",
      "intervall": "jaehrlich",
      "faelligkeitsmonat": 10
    },
    {
      "name": "Baufinanzierung",
      "tag": 15,
      "betrag": 176.78,
      "kategorie": "finanzen",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Ansparleistung Bausparvertrag",
      "tag": 1,
      "betrag": 160,
      "kategorie": "finanzen",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Monatliche Tilgungsrate",
      "tag": 31,
      "betrag": 208.33,
      "kategorie": "finanzen",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    },
    {
      "name": "Hausgeld (Eichendorffstraße)",
      "tag": 1,
      "betrag": 279,
      "kategorie": "wohnen",
      "intervall": "monatlich",
      "faelligkeitsmonat": null
    }
  ],
  "einnahmen": [
    {
      "name": "Gehalt (Annahme)",
      "betrag": 5000,
      "intervall": "monatlich",
      "tag": 1
    }
  ]
};

var KATEGORIEN = [
  { id: "wohnen", name: "Wohnen", farbe: "#C9A84C" },
  { id: "versicherung", name: "Versicherungen", farbe: "#7A9BB8" },
  { id: "energie", name: "Energie", farbe: "#E0B366" },
  { id: "telecom", name: "Telekommunikation", farbe: "#9B7EC8" },
  { id: "mobilitaet", name: "Mobilität", farbe: "#6BA3A3" },
  { id: "abos", name: "Abos & Medien", farbe: "#D4A0A0" },
  { id: "finanzen", name: "Finanzen & Kredite", farbe: "#B8A87A" },
  { id: "gesundheit", name: "Gesundheit", farbe: "#8FBF8F" },
  { id: "sonstiges", name: "Sonstiges", farbe: "#9AA3B0" }
];

var INTERVALLE = {
  monatlich:     { teiler: 1,  malJahr: 12, schritt: 1,  label: "Monatlich" },
  quartalsweise: { teiler: 3,  malJahr: 4,  schritt: 3,  label: "Quartalsweise" },
  halbjaehrlich: { teiler: 6,  malJahr: 2,  schritt: 6,  label: "Halbjährlich" },
  jaehrlich:     { teiler: 12, malJahr: 1,  schritt: 12, label: "Jährlich" }
};

var MONATSNAMEN = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember"
];

var TAB_SEITEN = ["ueberblick", "posten", "kategorien", "jahr"];
var euroFmt = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

var daten = { kosten: [], einnahmen: [] };
var aktuelleListe = "kosten";
var formZurueck = "posten";
var appGestartet = false;
var heuteRef = null;
var toastTimer = null;
var sichtJahr = null;
var sichtMonat = null;
var faelligAufgeklappt = false;
var buchungen = {};
var FAELLIG_LIMIT = 4;

/* ---------- Datum & Zahlen ---------- */

function heute() {
  return heuteRef ? new Date(heuteRef) : new Date();
}

function setHeute(wert) {
  heuteRef = wert || null;
}

function aktuellerMonat() {
  return heute().getMonth() + 1;
}

function aktuellesJahr() {
  return heute().getFullYear();
}

function rund(n) {
  return Math.round((Number(n) || 0) * 100) / 100;
}

function zuCent(n) {
  return Math.round((Number(n) || 0) * 100);
}

function vonCent(c) {
  return (c || 0) / 100;
}

function formatEuro(n) {
  return euroFmt.format(rund(n));
}

function parseBetrag(roh) {
  if (typeof roh === "number") return isFinite(roh) ? rund(roh) : NaN;
  var t = String(roh == null ? "" : roh).trim().replace(/\s/g, "").replace("€", "");
  if (!t) return NaN;
  if (t.indexOf(",") >= 0) t = t.replace(/\./g, "").replace(",", ".");
  var n = Number(t);
  return isFinite(n) ? rund(n) : NaN;
}

function neueId(prefix) {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function intervallVon(key) {
  return INTERVALLE[key] || INTERVALLE.monatlich;
}

function kategorieVon(id) {
  var i;
  for (i = 0; i < KATEGORIEN.length; i++) {
    if (KATEGORIEN[i].id === id) return KATEGORIEN[i];
  }
  return KATEGORIEN[KATEGORIEN.length - 1];
}

/* ---------- Kernlogik: Umlegung, Summen, Fälligkeit ---------- */

function jahresbetrag(posten) {
  if (!posten) return 0;
  return rund(Number(posten.betrag) * intervallVon(posten.intervall).malJahr);
}

function monatsbetrag(posten) {
  return rund(jahresbetrag(posten) / 12);
}

function summeJahr(liste) {
  var i, c = 0;
  liste = liste || [];
  for (i = 0; i < liste.length; i++) c += zuCent(jahresbetrag(liste[i]));
  return vonCent(c);
}

function summeMonat(liste) {
  return rund(summeJahr(liste) / 12);
}

function restJahr(stand) {
  stand = stand || daten;
  return rund(summeJahr(stand.einnahmen) - summeJahr(stand.kosten));
}

function restMonat(stand) {
  return rund(restJahr(stand) / 12);
}

function faelligInMonat(posten, monat) {
  if (!posten) return false;
  monat = Number(monat);
  if (posten.intervall === "monatlich") return true;
  var start = Number(posten.faelligkeitsmonat);
  if (!start || start < 1 || start > 12) return false;
  var schritt = intervallVon(posten.intervall).schritt;
  var delta = (monat - start + 12) % 12;
  return delta % schritt === 0;
}

function faelligePosten(monat, stand) {
  stand = stand || daten;
  var aus = [];
  var i, p;
  for (i = 0; i < stand.kosten.length; i++) {
    p = stand.kosten[i];
    if (faelligInMonat(p, monat)) {
      aus.push({ art: "kosten", posten: p, betrag: rund(p.betrag) });
    }
  }
  for (i = 0; i < stand.einnahmen.length; i++) {
    p = stand.einnahmen[i];
    if (faelligInMonat(p, monat)) {
      aus.push({ art: "einnahmen", posten: p, betrag: rund(p.betrag) });
    }
  }
  return aus;
}

function tageImMonat(jahr, monat) {
  return new Date(jahr, monat, 0).getDate();
}

function parseTag(roh) {
  if (roh == null || roh === "") return null;
  var n = parseInt(roh, 10);
  if (!isFinite(n) || n < 1) return null;
  return n > 31 ? 31 : n;
}

function einzugstag(posten, jahr, monat) {
  if (!posten) return null;
  var tag = parseTag(posten.tag);
  if (!tag) return null;
  return Math.min(tag, tageImMonat(jahr, monat));
}

function buchungsSchluessel(jahr, monat, postenId) {
  return String(jahr) + "-" + String(monat).padStart(2, "0") + ":" + postenId;
}

function setzeBuchung(postenId, jahr, monat, eingezogen) {
  var k = buchungsSchluessel(jahr, monat, postenId);
  if (eingezogen == null) delete buchungen[k];
  else buchungen[k] = !!eingezogen;
}

function loescheBuchungen() {
  buchungen = {};
}

function istEingezogen(posten, jahr, monat) {
  if (posten && posten.id && Object.prototype.hasOwnProperty.call(buchungen, buchungsSchluessel(jahr, monat, posten.id))) {
    return !!buchungen[buchungsSchluessel(jahr, monat, posten.id)];
  }
  var d = heute();
  var hj = d.getFullYear();
  var hm = d.getMonth() + 1;
  var ht = d.getDate();
  if (jahr < hj || (jahr === hj && monat < hm)) return true;
  if (jahr > hj || (jahr === hj && monat > hm)) return false;
  var tag = einzugstag(posten, jahr, monat);
  if (!tag) return false;
  return tag <= ht;
}

function sortiereNachTag(liste, jahr, monat) {
  return liste.slice().sort(function (a, b) {
    var pa = a.posten || a;
    var pb = b.posten || b;
    var ta = einzugstag(pa, jahr, monat);
    var tb = einzugstag(pb, jahr, monat);
    if (ta == null && tb == null) return (pa.name || "").localeCompare(pb.name || "", "de");
    if (ta == null) return 1;
    if (tb == null) return -1;
    if (ta !== tb) return ta - tb;
    return (pa.name || "").localeCompare(pb.name || "", "de");
  });
}

function monatsFixkosten(jahr, monat, stand) {
  stand = stand || daten;
  var aus = [];
  var i, p;
  for (i = 0; i < stand.kosten.length; i++) {
    p = stand.kosten[i];
    if (faelligInMonat(p, monat)) {
      aus.push({
        art: "kosten",
        posten: p,
        betrag: rund(p.betrag),
        tag: einzugstag(p, jahr, monat),
        eingezogen: istEingezogen(p, jahr, monat)
      });
    }
  }
  return sortiereNachTag(aus, jahr, monat);
}

function monatsEinnahmenListe(jahr, monat, stand) {
  stand = stand || daten;
  var aus = [];
  var i, p;
  for (i = 0; i < stand.einnahmen.length; i++) {
    p = stand.einnahmen[i];
    if (faelligInMonat(p, monat)) {
      aus.push({
        art: "einnahmen",
        posten: p,
        betrag: rund(p.betrag),
        tag: einzugstag(p, jahr, monat),
        eingezogen: istEingezogen(p, jahr, monat)
      });
    }
  }
  return sortiereNachTag(aus, jahr, monat);
}

function monatsZusammenfassung(jahr, monat, stand) {
  var kosten = monatsFixkosten(jahr, monat, stand);
  var i, summe = 0, eingezogen = 0;
  for (i = 0; i < kosten.length; i++) {
    summe = rund(summe + kosten[i].betrag);
    if (kosten[i].eingezogen) eingezogen = rund(eingezogen + kosten[i].betrag);
  }
  return {
    anzahl: kosten.length,
    summe: summe,
    eingezogen: eingezogen,
    offen: rund(summe - eingezogen),
    anteil: summe > 0 ? eingezogen / summe : 0,
    posten: kosten
  };
}

function initSichtMonat() {
  if (sichtJahr == null || sichtMonat == null) {
    sichtJahr = aktuellesJahr();
    sichtMonat = aktuellerMonat();
  }
}

function istSichtHeute() {
  return sichtJahr === aktuellesJahr() && sichtMonat === aktuellerMonat();
}

function setzeSichtMonat(jahr, monat) {
  sichtJahr = jahr;
  sichtMonat = monat;
  while (sichtMonat > 12) { sichtMonat -= 12; sichtJahr += 1; }
  while (sichtMonat < 1) { sichtMonat += 12; sichtJahr -= 1; }
  return { jahr: sichtJahr, monat: sichtMonat };
}

function verschiebeSichtMonat(delta) {
  faelligAufgeklappt = false;
  return setzeSichtMonat(sichtJahr, (sichtMonat || aktuellerMonat()) + delta);
}

function geheZuHeute() {
  faelligAufgeklappt = false;
  return setzeSichtMonat(aktuellesJahr(), aktuellerMonat());
}

function setzeFaelligAufgeklappt(wert) {
  faelligAufgeklappt = !!wert;
}

function kategorienAnteile(liste) {
  liste = liste || daten.kosten;
  var map = {};
  var i, k, kat, mon, jahrSumme, anteil;
  jahrSumme = summeJahr(liste);
  for (i = 0; i < liste.length; i++) {
    k = liste[i];
    kat = kategorieVon(k.kategorie);
    if (!map[kat.id]) {
      map[kat.id] = { id: kat.id, name: kat.name, farbe: kat.farbe, jahr: 0, monat: 0, anteil: 0 };
    }
    map[kat.id].jahr = rund(map[kat.id].jahr + jahresbetrag(k));
  }
  var aus = [];
  for (i = 0; i < KATEGORIEN.length; i++) {
    if (map[KATEGORIEN[i].id]) aus.push(map[KATEGORIEN[i].id]);
  }
  for (i = 0; i < aus.length; i++) {
    mon = rund(aus[i].jahr / 12);
    anteil = jahrSumme > 0 ? aus[i].jahr / jahrSumme : 0;
    aus[i].monat = mon;
    aus[i].anteil = anteil;
  }
  aus.sort(function (a, b) { return b.jahr - a.jahr; });
  return aus;
}

/* ---------- Speichern / Laden / CRUD ---------- */

function leererStand() {
  return { kosten: [], einnahmen: [] };
}

function bereinigePosten(roh, art) {
  if (!roh || typeof roh !== "object") return null;
  var betrag = parseBetrag(roh.betrag);
  if (!roh.name || !isFinite(betrag) || betrag <= 0) return null;
  var intervall = INTERVALLE[roh.intervall] ? roh.intervall : "monatlich";
  var monat = Number(roh.faelligkeitsmonat);
  if (intervall === "monatlich") monat = null;
  else if (!monat || monat < 1 || monat > 12) monat = null;
  var kat = "sonstiges";
  if (art === "kosten") {
    kat = kategorieVon(roh.kategorie).id;
  }
  var obj = {
    id: typeof roh.id === "string" && roh.id ? roh.id : neueId(art === "kosten" ? "k_" : "e_"),
    name: String(roh.name).trim().slice(0, 60),
    betrag: betrag,
    intervall: intervall,
    faelligkeitsmonat: monat,
    tag: parseTag(roh.tag)
  };
  if (art === "kosten") obj.kategorie = kat;
  return obj;
}

function bereinigeStand(roh) {
  var stand = leererStand();
  var i, p;
  if (!roh || typeof roh !== "object") return stand;
  var kosten = Array.isArray(roh.kosten) ? roh.kosten : [];
  var einnahmen = Array.isArray(roh.einnahmen) ? roh.einnahmen : [];
  for (i = 0; i < kosten.length; i++) {
    p = bereinigePosten(kosten[i], "kosten");
    if (p) stand.kosten.push(p);
  }
  for (i = 0; i < einnahmen.length; i++) {
    p = bereinigePosten(einnahmen[i], "einnahmen");
    if (p) stand.einnahmen.push(p);
  }
  return stand;
}

function ergaenzeTageAusStartdaten(stand) {
  var map = {}, i, p, geaendert = false;
  for (i = 0; i < STARTDATEN.kosten.length; i++) {
    p = STARTDATEN.kosten[i];
    if (p.name && p.tag) map[p.name] = p.tag;
  }
  for (i = 0; i < stand.kosten.length; i++) {
    if (stand.kosten[i].tag) continue;
    if (map[stand.kosten[i].name]) {
      stand.kosten[i].tag = map[stand.kosten[i].name];
      geaendert = true;
    }
  }
  return geaendert;
}

function ladeDaten() {
  try {
    var roh = typeof localStorage !== "undefined" ? localStorage.getItem(SPEICHER_KEY) : null;
    daten = roh ? bereinigeStand(JSON.parse(roh)) : bereinigeStand(STARTDATEN);
    if (!roh) speichereDaten();
    else if (ergaenzeTageAusStartdaten(daten)) speichereDaten();
  } catch (e) {
    daten = leererStand();
  }
  return daten;
}

function speichereDaten() {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(SPEICHER_KEY, JSON.stringify(daten));
}

function listeFuer(art) {
  return art === "einnahmen" ? daten.einnahmen : daten.kosten;
}

function findePosten(id, stand) {
  stand = stand || daten;
  var i;
  for (i = 0; i < stand.kosten.length; i++) {
    if (stand.kosten[i].id === id) return { art: "kosten", posten: stand.kosten[i], index: i };
  }
  for (i = 0; i < stand.einnahmen.length; i++) {
    if (stand.einnahmen[i].id === id) return { art: "einnahmen", posten: stand.einnahmen[i], index: i };
  }
  return null;
}

function hinzufuegenPosten(art, felder) {
  var p = bereinigePosten(felder, art);
  if (!p) return null;
  if (!p.id) p.id = neueId(art === "kosten" ? "k_" : "e_");
  listeFuer(art).push(p);
  speichereDaten();
  return p;
}

function aktualisierePosten(id, felder) {
  var fund = findePosten(id);
  if (!fund) return null;
  var gemischt = {};
  var k;
  for (k in fund.posten) gemischt[k] = fund.posten[k];
  for (k in felder) gemischt[k] = felder[k];
  gemischt.id = id;
  var p = bereinigePosten(gemischt, fund.art);
  if (!p) return null;
  p.id = id;
  listeFuer(fund.art)[fund.index] = p;
  speichereDaten();
  return p;
}

function loeschePosten(id) {
  var fund = findePosten(id);
  if (!fund) return false;
  listeFuer(fund.art).splice(fund.index, 1);
  speichereDaten();
  return true;
}

function setzeStand(stand) {
  daten = bereinigeStand(stand);
  speichereDaten();
  return daten;
}

function loescheAlleDaten() {
  daten = leererStand();
  if (typeof localStorage !== "undefined") localStorage.removeItem(SPEICHER_KEY);
  return daten;
}

/* ---------- Export / Import ---------- */

function exportPaket() {
  return {
    version: 1,
    exportiert: new Date().toISOString(),
    kosten: daten.kosten.slice(),
    einnahmen: daten.einnahmen.slice()
  };
}

function importPaket(obj) {
  if (!obj || typeof obj !== "object") {
    return { ok: false, fehler: "Die Datei ist kein gültiges Backup." };
  }
  if (!Array.isArray(obj.kosten) && !Array.isArray(obj.einnahmen)) {
    return { ok: false, fehler: "Die Datei ist kein gültiges Backup." };
  }
  setzeStand({
    kosten: Array.isArray(obj.kosten) ? obj.kosten : [],
    einnahmen: Array.isArray(obj.einnahmen) ? obj.einnahmen : []
  });
  return { ok: true, daten: daten };
}

/* ---------- Hilfen für die Anzeige ---------- */

function monatLabel(nr) {
  var n = Number(nr);
  return n >= 1 && n <= 12 ? MONATSNAMEN[n - 1] : "";
}

function intervallText(posten) {
  var t = intervallVon(posten.intervall).label;
  if (posten.intervall !== "monatlich" && posten.faelligkeitsmonat) {
    t += " · fällig im " + monatLabel(posten.faelligkeitsmonat);
  }
  if (posten.tag) t += " · am " + posten.tag + ".";
  return t;
}

function umlegungText(posten) {
  if (posten.intervall === "monatlich") return "";
  return "umgelegt " + formatEuro(monatsbetrag(posten)) + " / Monat";
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Darstellung ---------- */

function toast(text) {
  var el = document.getElementById("toast");
  if (!el) return;
  el.textContent = text;
  el.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { el.hidden = true; }, 2200);
}

function zeigeSeite(id, hashSetzen) {
  var seiten = document.querySelectorAll(".seite");
  var i, tabbar, tabs;
  for (i = 0; i < seiten.length; i++) seiten[i].classList.remove("aktiv");
  var ziel = document.getElementById(id);
  if (!ziel) {
    id = "ueberblick";
    ziel = document.getElementById(id);
  }
  ziel.classList.add("aktiv");

  tabbar = document.getElementById("tabbar");
  if (tabbar) tabbar.hidden = (id === "formular-seite" || id === "einstellungen");

  tabs = document.querySelectorAll(".tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.toggle("aktiv", tabs[i].getAttribute("data-ziel") === id);
  }

  if (hashSetzen !== false && typeof location !== "undefined") {
    var hash = id === "formular-seite" ? "formular" : id;
    if (location.hash.replace("#", "") !== hash) {
      if (typeof history !== "undefined" && history.replaceState) {
        history.replaceState(null, "", "#" + hash);
      } else {
        location.hash = hash;
      }
    }
  }

  if (id === "ueberblick") renderUeberblick();
  if (id === "posten") renderPosten();
  if (id === "kategorien") renderKategorien();
  if (id === "jahr") renderJahr();
}

function renderUeberblick() {
  var rMonat = restMonat();
  var rJahr = restJahr();
  var karte = document.getElementById("rest-karte");
  var kicker = document.getElementById("rest-kicker");
  var negativ = rMonat < 0;
  if (karte) karte.classList.toggle("negativ", negativ);
  if (kicker) kicker.textContent = negativ ? "Fehlbetrag pro Monat" : "Verfügbar pro Monat";
  setText("rest-monat", formatEuro(Math.abs(rMonat)));
  setText("rest-jahr", formatEuro(rJahr));
  setText("ein-monat", formatEuro(summeMonat(daten.einnahmen)));
  setText("ein-jahr", formatEuro(summeJahr(daten.einnahmen)) + " im Jahr");
  setText("kost-monat", formatEuro(summeMonat(daten.kosten)));
  setText("kost-jahr", formatEuro(summeJahr(daten.kosten)) + " im Jahr");
  renderFaelligKarte();
}

function renderFaelligKarte() {
  initSichtMonat();
  var jahr = sichtJahr;
  var monat = sichtMonat;
  var titel = document.getElementById("faellig-titel");
  if (titel) {
    var t = "Fällig im " + monatLabel(monat);
    if (jahr !== aktuellesJahr()) t += " " + jahr;
    titel.textContent = t;
  }
  var heuteBtn = document.getElementById("faellig-heute");
  if (heuteBtn) heuteBtn.hidden = istSichtHeute();

  var zus = monatsZusammenfassung(jahr, monat);
  var sumEl = document.getElementById("faellig-zusammenfassung");
  if (sumEl) {
    if (!zus.anzahl) {
      sumEl.hidden = true;
      sumEl.innerHTML = "";
    } else {
      sumEl.hidden = false;
      var pct = Math.round(zus.anteil * 100);
      sumEl.innerHTML =
        '<div class="faellig-summary-zahlen">' +
          '<div>Summe im Monat<strong>' + formatEuro(zus.summe) + "</strong></div>" +
          '<div>Eingezogen<strong>' + formatEuro(zus.eingezogen) + "</strong></div>" +
          '<div class="offen">Noch offen<strong>' + formatEuro(zus.offen) + "</strong></div>" +
        "</div>" +
        '<div class="fortschritt" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct +
          '" aria-label="Bereits eingezogen"><div class="fortschritt-wert" style="width:' + pct + '%"></div></div>';
    }
  }

  var liste = document.getElementById("faellig-liste");
  var mehrBtn = document.getElementById("faellig-mehr");
  if (liste) {
    if (!zus.anzahl) {
      liste.innerHTML = '<p class="klein">In diesem Monat gehen keine Fixkosten ab.</p>';
      if (mehrBtn) mehrBtn.hidden = true;
    } else {
      var html = "";
      var i, sichtbar;
      for (i = 0; i < zus.posten.length; i++) {
        sichtbar = faelligAufgeklappt || i < FAELLIG_LIMIT;
        html += faelligEintragHtml(zus.posten[i], jahr, monat, !sichtbar);
      }
      liste.innerHTML = html;
      if (mehrBtn) {
        if (zus.anzahl <= FAELLIG_LIMIT) {
          mehrBtn.hidden = true;
        } else {
          mehrBtn.hidden = false;
          mehrBtn.textContent = faelligAufgeklappt
            ? "Weniger"
            : "Alle " + zus.anzahl + " anzeigen";
        }
      }
    }
  }

  var einEl = document.getElementById("faellig-einnahmen");
  var einnahmen = monatsEinnahmenListe(jahr, monat);
  if (einEl) {
    if (!einnahmen.length) {
      einEl.hidden = true;
      einEl.innerHTML = "";
    } else {
      var eHtml = '<div class="kicker">Einnahmen in diesem Monat</div>';
      var j, eSum = 0;
      for (j = 0; j < einnahmen.length; j++) {
        eSum = rund(eSum + einnahmen[j].betrag);
        eHtml += '<div class="faellig-einnahmen-zeile"><span class="name">' +
          escapeHtml(einnahmen[j].posten.name) +
          (einnahmen[j].tag ? " · " + einnahmen[j].tag + "." : "") +
          '</span><span>' + formatEuro(einnahmen[j].betrag) + "</span></div>";
      }
      einEl.innerHTML = eHtml;
      einEl.hidden = false;
    }
  }

  var strich = document.getElementById("faellig-summe");
  if (strich) {
    var einSumme = 0, k;
    for (k = 0; k < einnahmen.length; k++) einSumme = rund(einSumme + einnahmen[k].betrag);
    if (!daten.kosten.length && !daten.einnahmen.length) {
      strich.hidden = true;
    } else {
      strich.hidden = false;
      strich.innerHTML = "<span>Tatsächlich unter dem Strich</span><span class=\"betrag\">" +
        formatEuro(einSumme - zus.summe) + "</span>";
    }
  }
}

function faelligEintragHtml(eintrag, jahr, monat, versteckt) {
  var p = eintrag.posten;
  var kat = kategorieVon(p.kategorie);
  var tag = eintrag.tag;
  var datum = tag
    ? '<div class="datum-feld" aria-label="Am ' + tag + '.">' + tag + ".</div>"
    : '<div class="datum-feld leer" aria-label="Kein Abbuchungstag">—</div>';
  var haken = eintrag.eingezogen
    ? '<span class="haken" title="Eingezogen" aria-label="Eingezogen"><svg viewBox="0 0 16 16" width="10" height="10" aria-hidden="true"><path d="M3 8.2 6.2 11.5 13 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'
    : "";
  var status = eintrag.eingezogen ? "Eingezogen" : "Offen";
  var klasse = "faellig-eintrag" + (eintrag.eingezogen ? " eingezogen" : " offen") + (versteckt ? " versteckt" : "");
  var meta = escapeHtml(kat.name) + " · " + escapeHtml(intervallVon(p.intervall).label);
  if (p.intervall !== "monatlich" && p.faelligkeitsmonat) {
    meta += " · fällig im " + monatLabel(p.faelligkeitsmonat);
  }
  return '<div class="' + klasse + '" data-id="' + escapeHtml(p.id) + '">' +
    datum +
    '<div class="eintrag-mitte">' +
      '<div class="eintrag-name">' + escapeHtml(p.name) + haken + "</div>" +
      '<div class="eintrag-meta">' + meta + "</div>" +
    "</div>" +
    '<div class="eintrag-rechts">' +
      '<div class="eintrag-betrag">' + formatEuro(p.betrag) + "</div>" +
      '<div class="status-text">' + status + "</div>" +
    "</div></div>";
}

function eintragHtml(p, art, kat, mitBadge, alsButton, mitUmlegung) {
  var meta = (art === "kosten" ? escapeHtml(kat.name) + " · " : "") + escapeHtml(intervallText(p));
  var uml = mitUmlegung === false ? "" : umlegungText(p);
  var badge = (mitBadge && art === "einnahmen") ? '<span class="einnahme-badge">Einnahme</span>' : "";
  var tag = alsButton === false ? "div" : "button";
  var typ = alsButton === false ? "" : ' type="button"';
  var data = alsButton === false ? "" : ' data-id="' + escapeHtml(p.id) + '"';
  return '<' + tag + typ + ' class="eintrag"' + data + ">" +
    '<div class="eintrag-links">' +
      '<span class="farbpunkt" style="background:' + kat.farbe + '"></span>' +
      '<div><div class="eintrag-name">' + escapeHtml(p.name) + badge + "</div>" +
      '<div class="eintrag-meta">' + meta + "</div></div>" +
    "</div>" +
    '<div class="eintrag-rechts">' +
      '<div class="eintrag-betrag">' + formatEuro(p.betrag) + "</div>" +
      (uml ? '<div class="eintrag-umlegung">' + escapeHtml(uml) + "</div>" : "") +
    "</div></" + tag + ">";
}

function renderPosten() {
  var listeEl = document.getElementById("posten-liste");
  var leerEl = document.getElementById("posten-leer");
  if (!listeEl) return;
  var art = aktuelleListe;
  var liste = listeFuer(art).slice();
  var i;

  var btns = document.querySelectorAll(".segment-btn");
  for (i = 0; i < btns.length; i++) {
    var aktiv = btns[i].getAttribute("data-liste") === art;
    btns[i].classList.toggle("aktiv", aktiv);
    btns[i].setAttribute("aria-selected", aktiv ? "true" : "false");
  }

  if (!liste.length) {
    listeEl.innerHTML = "";
    if (leerEl) {
      leerEl.hidden = false;
      leerEl.textContent = art === "kosten"
        ? "Noch keine Fixkosten. Tippe auf +, um den ersten Posten anzulegen."
        : "Noch keine Einnahmen. Tippe auf +, um den ersten Posten anzulegen.";
    }
    return;
  }
  if (leerEl) leerEl.hidden = true;

  if (art === "kosten") {
    var gruppen = {};
    for (i = 0; i < liste.length; i++) {
      var kid = kategorieVon(liste[i].kategorie).id;
      if (!gruppen[kid]) gruppen[kid] = [];
      gruppen[kid].push(liste[i]);
    }
    var html = "";
    for (i = 0; i < KATEGORIEN.length; i++) {
      var g = gruppen[KATEGORIEN[i].id];
      if (!g || !g.length) continue;
      g.sort(function (a, b) { return a.name.localeCompare(b.name, "de"); });
      html += '<div class="gruppe"><h2 class="gruppe-titel">' + escapeHtml(KATEGORIEN[i].name) + "</h2>";
      html += '<div class="karte">';
      var j;
      for (j = 0; j < g.length; j++) {
        html += eintragHtml(g[j], "kosten", KATEGORIEN[i], false, true);
      }
      html += "</div></div>";
    }
    listeEl.innerHTML = html;
  } else {
    liste.sort(function (a, b) { return a.name.localeCompare(b.name, "de"); });
    var htmlE = '<div class="karte">';
    for (i = 0; i < liste.length; i++) {
      htmlE += eintragHtml(liste[i], "einnahmen", { farbe: "#8FCB9B", name: "Einnahme" }, false, true);
    }
    htmlE += "</div>";
    listeEl.innerHTML = htmlE;
  }
}

function renderKategorien() {
  var anteile = kategorienAnteile(daten.kosten);
  var total = summeMonat(daten.kosten);
  setText("donut-total", formatEuro(total));
  zeichneDonut(anteile, total);

  var legende = document.getElementById("legende");
  if (!legende) return;
  if (!anteile.length) {
    legende.innerHTML = '<p class="leer">Sobald Fixkosten angelegt sind, erscheint hier die Verteilung nach Kategorien.</p>';
    return;
  }
  var html = "";
  var i, a, pct;
  for (i = 0; i < anteile.length; i++) {
    a = anteile[i];
    pct = Math.round(a.anteil * 1000) / 10;
    var pctText = (Math.abs(pct - Math.round(pct)) < 0.05 ? String(Math.round(pct)) : pct.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 })) + " %";
    html += '<div class="legende-zeile">' +
      '<span class="farbpunkt" style="background:' + a.farbe + ';margin-top:0"></span>' +
      '<div class="legende-name">' + escapeHtml(a.name) + "</div>" +
      '<div class="legende-anteil">' + pctText + "</div>" +
      '<div class="legende-betrag">' + formatEuro(a.monat) + "</div>" +
      "</div>";
  }
  legende.innerHTML = html;
}

function zeichneDonut(anteile, total) {
  var host = document.getElementById("donut");
  if (!host) return;
  var size = 240, cx = 120, cy = 120, stroke = 30;
  var r = (size / 2) - stroke / 2 - 2;
  var umfang = 2 * Math.PI * r;
  var svg = '<svg viewBox="0 0 ' + size + " " + size + '" width="' + size + '" height="' + size + '" aria-hidden="true">';
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="rgba(201,168,76,0.14)" stroke-width="' + stroke + '"></circle>';

  if (total > 0 && anteile.length) {
    var offset = 0;
    var i, a, laenge, gap;
    for (i = 0; i < anteile.length; i++) {
      a = anteile[i];
      laenge = umfang * a.anteil;
      gap = umfang - laenge;
      svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + a.farbe +
        '" stroke-width="' + stroke + '" stroke-linecap="butt" ' +
        'stroke-dasharray="' + laenge.toFixed(3) + " " + gap.toFixed(3) + '" ' +
        'stroke-dashoffset="' + (-offset).toFixed(3) + '" ' +
        'transform="rotate(-90 ' + cx + " " + cy + ')"></circle>';
      offset += laenge;
    }
  }
  svg += "</svg>";
  host.innerHTML = svg;
}

function renderJahr() {
  var host = document.getElementById("jahr-liste");
  if (!host) return;
  var jahr = aktuellesJahr();
  var aktuellM = aktuellerMonat();
  var html = "";
  var m, i, e, p, kat, sonder, monKosten, monEinnahmen, ausgaben, einnahmen, kosten, ein, hatWas;
  for (m = 1; m <= 12; m++) {
    // Dieselbe Fälligkeitslogik wie die Wisch-Karte: nicht-monatliche Posten nur im Fälligkeitsmonat.
    kosten = monatsFixkosten(jahr, m);
    ein = monatsEinnahmenListe(jahr, m);
    sonder = [];
    monKosten = 0;
    monEinnahmen = 0;
    for (i = 0; i < kosten.length; i++) {
      if (kosten[i].posten.intervall === "monatlich") monKosten = rund(monKosten + kosten[i].betrag);
      else sonder.push(kosten[i]);
    }
    for (i = 0; i < ein.length; i++) {
      if (ein[i].posten.intervall === "monatlich") monEinnahmen = rund(monEinnahmen + ein[i].betrag);
      else sonder.push(ein[i]);
    }
    ausgaben = monKosten;
    einnahmen = monEinnahmen;
    for (i = 0; i < sonder.length; i++) {
      if (sonder[i].art === "kosten") ausgaben = rund(ausgaben + sonder[i].betrag);
      else einnahmen = rund(einnahmen + sonder[i].betrag);
    }
    hatWas = sonder.length > 0;
    html += '<div class="karte monat-karte' + (m === aktuellM ? " aktuell" : "") + (hatWas ? "" : " leer-monat") + '" data-monat="' + m + '">';
    html += '<div class="monat-kopf"><div class="monat-name">' + MONATSNAMEN[m - 1];
    if (m === aktuellM) html += '<span class="monat-badge">Aktuell</span>';
    html += '</div><div class="monat-summe">' + formatEuro(einnahmen - ausgaben) + "</div></div>";
    if (hatWas) {
      for (i = 0; i < sonder.length; i++) {
        e = sonder[i];
        p = e.posten;
        kat = e.art === "kosten" ? kategorieVon(p.kategorie) : { farbe: "#8FCB9B", name: "Einnahme" };
        html += eintragHtml(p, e.art, kat, true, false, false);
      }
    }
    html += '<p class="klein">Monatliche Posten: ' + formatEuro(monEinnahmen) + " Einnahmen · " +
      formatEuro(monKosten) + " Fixkosten</p>";
    html += "</div>";
  }
  host.innerHTML = html;
}

function setText(id, text) {
  var el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ---------- Formular ---------- */

function fuelleKategorieSelect() {
  var sel = document.getElementById("f-kategorie");
  if (!sel || sel.options.length) return;
  var i;
  for (i = 0; i < KATEGORIEN.length; i++) {
    var o = document.createElement("option");
    o.value = KATEGORIEN[i].id;
    o.textContent = KATEGORIEN[i].name;
    sel.appendChild(o);
  }
}

function fuelleMonatSelect() {
  var sel = document.getElementById("f-monat");
  if (!sel || sel.options.length) return;
  var o0 = document.createElement("option");
  o0.value = "";
  o0.textContent = "Bitte wählen";
  sel.appendChild(o0);
  var i;
  for (i = 0; i < 12; i++) {
    var o = document.createElement("option");
    o.value = String(i + 1);
    o.textContent = MONATSNAMEN[i];
    sel.appendChild(o);
  }
}

function oeffneFormular(art, id) {
  fuelleKategorieSelect();
  fuelleMonatSelect();
  formZurueck = "posten";
  var form = document.getElementById("formular");
  if (form) form.reset();
  setValue("f-id", id || "");
  setValue("f-art", art);
  setValue("f-intervall", "monatlich");
  setValue("f-kategorie", "sonstiges");
  setValue("f-monat", "");
  setValue("f-tag", "");
  var titel = art === "einnahmen" ? "Neue Einnahme" : "Neue Fixkosten";
  var del = document.getElementById("form-loeschen");
  var katFeld = document.getElementById("kategorie-feld");
  if (katFeld) katFeld.hidden = art === "einnahmen";
  var katSel = document.getElementById("f-kategorie");
  if (katSel) katSel.required = art === "kosten";

  if (id) {
    var fund = findePosten(id);
    if (fund) {
      art = fund.art;
      setValue("f-art", art);
      setValue("f-name", fund.posten.name);
      setValue("f-betrag", String(fund.posten.betrag).replace(".", ","));
      setValue("f-intervall", fund.posten.intervall);
      if (fund.posten.kategorie) setValue("f-kategorie", fund.posten.kategorie);
      setValue("f-monat", fund.posten.faelligkeitsmonat ? String(fund.posten.faelligkeitsmonat) : "");
      setValue("f-tag", fund.posten.tag ? String(fund.posten.tag) : "");
      titel = art === "einnahmen" ? "Einnahme bearbeiten" : "Fixkosten bearbeiten";
      if (katFeld) katFeld.hidden = art === "einnahmen";
    }
  }
  setText("form-titel", titel);
  if (del) del.hidden = !id;
  aktualisiereIntervallFelder();
  aktualisiereFormVorschau();
  zeigeSeite("formular-seite");
  var nameEl = document.getElementById("f-name");
  if (nameEl) nameEl.focus();
}

function setValue(id, wert) {
  var el = document.getElementById(id);
  if (el) el.value = wert;
}

function getValue(id) {
  var el = document.getElementById(id);
  return el ? el.value : "";
}

function aktualisiereIntervallFelder() {
  var intervall = getValue("f-intervall");
  var feld = document.getElementById("monat-feld");
  var sel = document.getElementById("f-monat");
  var sichtbar = intervall !== "monatlich";
  if (feld) feld.hidden = !sichtbar;
  if (sel) sel.required = sichtbar;
}

function aktualisiereFormVorschau() {
  var el = document.getElementById("form-vorschau");
  if (!el) return;
  var betrag = parseBetrag(getValue("f-betrag"));
  var intervall = getValue("f-intervall");
  var monat = Number(getValue("f-monat"));
  if (!isFinite(betrag) || betrag <= 0) {
    el.hidden = true;
    return;
  }
  var tag = parseTag(getValue("f-tag"));
  var posten = { betrag: betrag, intervall: intervall, faelligkeitsmonat: monat || null, tag: tag };
  var text = "Das sind <strong>" + formatEuro(monatsbetrag(posten)) + " pro Monat</strong> bzw. <strong>" +
    formatEuro(jahresbetrag(posten)) + " im Jahr</strong>.";
  if (tag) text += " Abbuchung jeweils am <strong>" + tag + ".</strong>";
  if (intervall !== "monatlich") {
    if (monat) {
      var termine = [];
      var m;
      for (m = 1; m <= 12; m++) if (faelligInMonat(posten, m)) termine.push(monatLabel(m));
      text += " Fällig: " + termine.join(", ") + ".";
    } else {
      text += " Bitte einen Fälligkeitsmonat wählen, damit der Betrag im Jahresplan erscheint.";
    }
  }
  el.innerHTML = text;
  el.hidden = false;
}

function leseFormular() {
  return {
    id: getValue("f-id") || undefined,
    name: getValue("f-name").trim(),
    betrag: parseBetrag(getValue("f-betrag")),
    kategorie: getValue("f-kategorie"),
    intervall: getValue("f-intervall"),
    faelligkeitsmonat: getValue("f-monat") ? Number(getValue("f-monat")) : null,
    tag: parseTag(getValue("f-tag"))
  };
}

function speichereFormular(ev) {
  if (ev) ev.preventDefault();
  var art = getValue("f-art") || "kosten";
  var felder = leseFormular();
  if (!felder.name) {
    toast("Bitte einen Namen angeben.");
    return false;
  }
  if (!isFinite(felder.betrag) || felder.betrag <= 0) {
    toast("Bitte einen gültigen Betrag angeben.");
    return false;
  }
  if (felder.intervall !== "monatlich" && !felder.faelligkeitsmonat) {
    toast("Bitte den Fälligkeitsmonat wählen.");
    return false;
  }
  if (felder.id) aktualisierePosten(felder.id, felder);
  else hinzufuegenPosten(art, felder);
  toast("Gespeichert");
  aktuelleListe = art;
  zeigeSeite("posten");
  return true;
}

function loescheImFormular() {
  var id = getValue("f-id");
  if (!id) return;
  if (!confirm("Diesen Posten wirklich löschen?")) return;
  loeschePosten(id);
  toast("Gelöscht");
  zeigeSeite("posten");
}

/* ---------- Export-Datei / Import-Datei ---------- */

function exportiereDatei() {
  var paket = exportPaket();
  var blob = new Blob([JSON.stringify(paket, null, 2)], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  var d = heute();
  var datum = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  a.download = "finanzplaner-backup-" + datum + ".json";
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 500);
  toast("Backup gespeichert");
}

function importiereDatei(file) {
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function () {
    try {
      var obj = JSON.parse(reader.result);
      if (!obj || typeof obj !== "object" || (!Array.isArray(obj.kosten) && !Array.isArray(obj.einnahmen))) {
        toast("Die Datei ist kein gültiges Backup.");
        return;
      }
      if (!confirm("Aktuelle Daten durch das Backup ersetzen?")) return;
      var res = importPaket(obj);
      if (!res.ok) {
        toast(res.fehler);
        return;
      }
      toast("Backup importiert");
      zeigeSeite("ueberblick");
    } catch (err) {
      toast("Die Datei ist kein gültiges Backup.");
    }
  };
  reader.readAsText(file);
}

/* ---------- Start / Events ---------- */

function hashZuSeite(hash) {
  var h = (hash || "").replace(/^#/, "");
  if (h === "formular") return "formular-seite";
  if (h === "einstellungen" || h === "formular-seite") return h;
  if (TAB_SEITEN.indexOf(h) >= 0) return h;
  return "ueberblick";
}

function startAppEinmal() {
  if (appGestartet) return;
  appGestartet = true;
  ladeDaten();
  geheZuHeute();
  fuelleKategorieSelect();
  fuelleMonatSelect();
  bindeEvents();
  var start = hashZuSeite(typeof location !== "undefined" ? location.hash : "");
  if (start === "formular-seite") oeffneFormular(aktuelleListe, null);
  else zeigeSeite(start);
}

function bindeMonatSwipe(el) {
  if (!el || el.getAttribute("data-swipe") === "1") return;
  el.setAttribute("data-swipe", "1");
  var startX = 0, startY = 0, aktiv = false;
  el.addEventListener("touchstart", function (e) {
    var t = e.changedTouches && e.changedTouches[0];
    if (!t) return;
    startX = t.clientX;
    startY = t.clientY;
    aktiv = true;
  }, { passive: true });
  el.addEventListener("touchend", function (e) {
    if (!aktiv) return;
    aktiv = false;
    var t = e.changedTouches && e.changedTouches[0];
    if (!t) return;
    var dx = t.clientX - startX;
    var dy = t.clientY - startY;
    if (Math.abs(dx) < 50) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.2) return;
    verschiebeSichtMonat(dx < 0 ? 1 : -1);
    renderFaelligKarte();
  }, { passive: true });
}

function bindeEvents() {
  var i, tabs = document.querySelectorAll(".tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      zeigeSeite(this.getAttribute("data-ziel"));
    });
  }

  var seg = document.querySelectorAll(".segment-btn");
  for (i = 0; i < seg.length; i++) {
    seg[i].addEventListener("click", function () {
      aktuelleListe = this.getAttribute("data-liste");
      renderPosten();
    });
  }

  var neu = document.getElementById("posten-neu");
  if (neu) neu.addEventListener("click", function () { oeffneFormular(aktuelleListe, null); });

  var liste = document.getElementById("posten-liste");
  if (liste) {
    liste.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest(".eintrag") : null;
      if (btn && btn.getAttribute("data-id")) oeffneFormular(aktuelleListe, btn.getAttribute("data-id"));
    });
  }

  var ab = document.getElementById("form-abbrechen");
  if (ab) ab.addEventListener("click", function () { zeigeSeite(formZurueck || "posten"); });

  var form = document.getElementById("formular");
  if (form) form.addEventListener("submit", speichereFormular);

  var del = document.getElementById("form-loeschen");
  if (del) del.addEventListener("click", loescheImFormular);

  var intSel = document.getElementById("f-intervall");
  if (intSel) intSel.addEventListener("change", function () {
    aktualisiereIntervallFelder();
    aktualisiereFormVorschau();
  });
  var betragEl = document.getElementById("f-betrag");
  if (betragEl) betragEl.addEventListener("input", aktualisiereFormVorschau);
  var monatEl = document.getElementById("f-monat");
  if (monatEl) monatEl.addEventListener("change", aktualisiereFormVorschau);
  var tagEl = document.getElementById("f-tag");
  if (tagEl) tagEl.addEventListener("input", aktualisiereFormVorschau);

  var faellZur = document.getElementById("faellig-zurueck");
  if (faellZur) faellZur.addEventListener("click", function () {
    verschiebeSichtMonat(-1);
    renderFaelligKarte();
  });
  var faellVor = document.getElementById("faellig-vor");
  if (faellVor) faellVor.addEventListener("click", function () {
    verschiebeSichtMonat(1);
    renderFaelligKarte();
  });
  var faellHeute = document.getElementById("faellig-heute");
  if (faellHeute) faellHeute.addEventListener("click", function () {
    geheZuHeute();
    renderFaelligKarte();
  });
  var faellMehr = document.getElementById("faellig-mehr");
  if (faellMehr) faellMehr.addEventListener("click", function () {
    setzeFaelligAufgeklappt(!faelligAufgeklappt);
    renderFaelligKarte();
  });
  bindeMonatSwipe(document.getElementById("faellig-karte"));

  var ein = document.getElementById("btn-einstellungen");
  if (ein) ein.addEventListener("click", function () { zeigeSeite("einstellungen"); });
  var zur = document.getElementById("einstellungen-zurueck");
  if (zur) zur.addEventListener("click", function () { zeigeSeite("ueberblick"); });

  var exp = document.getElementById("btn-export");
  if (exp) exp.addEventListener("click", exportiereDatei);
  var imp = document.getElementById("btn-import");
  if (imp) imp.addEventListener("click", function () {
    document.getElementById("import-datei").click();
  });
  var impDatei = document.getElementById("import-datei");
  if (impDatei) {
    impDatei.addEventListener("change", function (e) {
      var f = e.target.files && e.target.files[0];
      importiereDatei(f);
      e.target.value = "";
    });
  }
  var reset = document.getElementById("btn-reset");
  if (reset) {
    reset.addEventListener("click", function () {
      if (!confirm("Wirklich alle Fixkosten und Einnahmen löschen?")) return;
      loescheAlleDaten();
      toast("Alle Daten gelöscht");
      zeigeSeite("ueberblick");
    });
  }

  if (typeof window !== "undefined") {
    window.addEventListener("hashchange", function () {
      var seite = hashZuSeite(location.hash);
      if (seite === "formular-seite") {
        if (!document.getElementById("formular-seite").classList.contains("aktiv")) {
          oeffneFormular(aktuelleListe, null);
        }
      } else {
        zeigeSeite(seite, false);
      }
    });
  }
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      if (document.getElementById("ueberblick")) startAppEinmal();
    });
  } else if (document.getElementById("ueberblick")) {
    startAppEinmal();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SPEICHER_KEY: SPEICHER_KEY,
    KATEGORIEN: KATEGORIEN,
    INTERVALLE: INTERVALLE,
    MONATSNAMEN: MONATSNAMEN,
    parseBetrag: parseBetrag,
    formatEuro: formatEuro,
    rund: rund,
    jahresbetrag: jahresbetrag,
    monatsbetrag: monatsbetrag,
    summeJahr: summeJahr,
    summeMonat: summeMonat,
    restJahr: restJahr,
    restMonat: restMonat,
    faelligInMonat: faelligInMonat,
    faelligePosten: faelligePosten,
    kategorienAnteile: kategorienAnteile,
    hinzufuegenPosten: hinzufuegenPosten,
    aktualisierePosten: aktualisierePosten,
    loeschePosten: loeschePosten,
    findePosten: findePosten,
    exportPaket: exportPaket,
    importPaket: importPaket,
    ladeDaten: ladeDaten,
    setzeStand: setzeStand,
    loescheAlleDaten: loescheAlleDaten,
    bereinigeStand: bereinigeStand,
    setHeute: setHeute,
    aktuellerMonat: aktuellerMonat,
    aktuellesJahr: aktuellesJahr,
    tageImMonat: tageImMonat,
    parseTag: parseTag,
    einzugstag: einzugstag,
    istEingezogen: istEingezogen,
    setzeBuchung: setzeBuchung,
    loescheBuchungen: loescheBuchungen,
    sortiereNachTag: sortiereNachTag,
    monatsFixkosten: monatsFixkosten,
    monatsZusammenfassung: monatsZusammenfassung,
    setzeSichtMonat: setzeSichtMonat,
    verschiebeSichtMonat: verschiebeSichtMonat,
    geheZuHeute: geheZuHeute,
    istSichtHeute: istSichtHeute,
    setzeFaelligAufgeklappt: setzeFaelligAufgeklappt,
    renderUeberblick: renderUeberblick,
    renderFaelligKarte: renderFaelligKarte,
    FAELLIG_LIMIT: FAELLIG_LIMIT,
    get sichtJahr() { return sichtJahr; },
    get sichtMonat() { return sichtMonat; },
    get faelligAufgeklappt() { return faelligAufgeklappt; },
    get daten() { return daten; },
    set daten(v) { daten = v; }
  };
}
