// import { loadData } from "../util/js/local-storage.js";

const languages = [
  {
    name: "Amharic",
    id: "am",
    region: "et",
  },
];

const keyboards = {
  GA: {
    name: "GFF Amharic",
    id: "gff_amharic",
    filename:
      "chrome-extension://dnadjfebloagokapeibjkhdfkgknmdbn/keyman/languages/gff_amharic.js",
    languages,
  },
  GE: {
    name: "GFF Ethiopic",
    id: "gff_ethiopic",
    filename:
      "chrome-extension://dnadjfebloagokapeibjkhdfkgknmdbn/keyman/languages/gff_ethiopic.js",
    languages,
  },
  SE: {
    name: "SIL Ethiopic",
    id: "sil_ethiopic",
    filename:
      "chrome-extension://dnadjfebloagokapeibjkhdfkgknmdbn/keyman/languages/sil_ethiopic.js",
    languages,
  },
  SEP: {
    name: "SIL Ethiopic Power-G",
    id: "sil_ethiopic_power_g",
    filename:
      "chrome-extension://dnadjfebloagokapeibjkhdfkgknmdbn/keyman/languages/sil_ethiopic_power_g.js",
    languages,
  },
};

let currentKeyboard = keyboards.GA;
// let savedKey = loadData([" keyboard"]);

// if (savedKey != undefined) {
//   currentKeyboard = savedKey;
// }

function init() {
  keyman.init({ attachType: "auto" }).then(() => {
    keyman.addKeyboards(currentKeyboard);
  });
}

function addKeyboard() {
  keyman.addKeyboards(currentKeyboard);
}

function removeKeyboard() {
  keyman.removeKeyboards(currentKeyboard.id);
}

window.addEventListener("message", (event) => {
  if (event.origin === window.location.origin) {
    if (event.data.type === "init") {
      console.log("message init");
      init();
    }
    if (event.data.type === "add") {
      console.log("message add");
      addKeyboard();
    }
    if (event.data.type === "rm") {
      console.log("message rm");
      removeKeyboard();
    }
    if (event.data.type === "ch") {
      removeKeyboard();
      const key = event?.data.val || "GA";
      currentKeyboard = keyboards[`${key}`];
      addKeyboard();
    }
    if (event.data.type === "chi") {
      //removeKeyboard();
      console.log("ok===");
      const key = event?.data.val || "GA";
      currentKeyboard = keyboards[`${key}`];
      //addKeyboard();
    }
  }
});
