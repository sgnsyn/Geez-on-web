const languages = [
  {
    name: "Amharic",
    id: "am",
    region: "et",
  },
];

export const fontSizes = {
  GA: "11ch",
  GE: "11ch",
  SE: "10ch",
  SEP: "18ch",
};

const GA_FILE = chrome.runtime.getURL("../../keyman/languages/gff_amharic.js");

const GE_FILE = chrome.runtime.getURL("../../keyman/languages/gff_ethiopic.js");
const SE_FILE = chrome.runtime.getURL("../../keyman/languages/sil_ethiopic.js");
const SEP_FILE = chrome.runtime.getURL(
  "../../keyman/languages/sil_ethiopic_power_g.js",
);
const keyboards = {
  GA: {
    name: "GFF Amharic",
    id: "gff_amharic",
    filename: GA_FILE,
    languages,
  },
  GE: {
    name: "GFF Ethiopic",
    id: "gff_ethiopic",
    filename: GE_FILE,
    languages,
  },
  SE: {
    name: "SIL Ethiopic",
    id: "sil_ethiopic",
    filename: SE_FILE,
    languages,
  },
  SEP: {
    name: "SIL Ethiopic Power-G",
    id: "sil_ethiopic_power_g",
    filename: SEP_FILE,
    languages,
  },
};

let currentKeyboard = keyboards.GE;

export function keymanInit(key) {
  keyman.init({ attachType: "auto" }).then(() => {
    currentKeyboard = keyboards[key];
    keyman.addKeyboards(keyboards[key]);
  });
}

export function updateKeyboard(key) {
  keyman.removeKeyboards(currentKeyboard.id);
  currentKeyboard = keyboards[key];
  keyman.addKeyboards(keyboards[key]);
}
