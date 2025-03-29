if (typeof keyman === "undefined") {
  console.log("Keyboard requires KeymanWeb 10.0 or later");
  if (typeof tavultesoft !== "undefined")
    tavultesoft.keymanweb.util.alert(
      "This keyboard requires KeymanWeb 10.0 or later"
    );
} else {
  KeymanWeb.KR(new Keyboard_gff_ethiopic());
}
function Keyboard_gff_ethiopic() {
  this._v =
    typeof keyman != "undefined" && typeof keyman.version == "string"
      ? parseInt(keyman.version, 10)
      : 9;
  this.KI = "Keyboard_gff_ethiopic";
  this.KN = "Ethiopic (Modern Geʾez)";
  this.KMINVER = "15.0";
  this.KV = { F: ' 1em "Abyssinica SIL"', K102: 0 };
  this.KV.KLS = {
    default: [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "",
      "",
      "",
      "ቅⷅ",
      "ው",
      "እ",
      "ር",
      "ት",
      "ይ",
      "ኡ",
      "ኢ",
      "ኦ",
      "ፕ",
      "[",
      "]",
      "\\",
      "",
      "",
      "",
      "አ",
      "ስሥꬅ",
      "ድ",
      "ፍ",
      "ግⷝ",
      "ህኅ",
      "ጅ",
      "ክⷍ",
      "ል",
      "፤",
      "'",
      "",
      "",
      "",
      "",
      "",
      "\\",
      "ዝꬕ",
      "ሽⶥ",
      "ችⶭ",
      "ቭ",
      "ብ",
      "ን",
      "ም",
      "፣፥",
      "።",
      "/",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    shift: [
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "፟",
      "+",
      "",
      "",
      "",
      "ቕ",
      "ው",
      "ዕ",
      "ር",
      "ጥ",
      "ይ",
      "ዑ",
      "ዒ",
      "ዖ",
      "ጵ",
      "{",
      "}",
      "|",
      "",
      "",
      "",
      "ዐ",
      "ጽፅꬭ",
      "ዽꬍ",
      "ፍ",
      "ጝ",
      "ሕ𞟥",
      "ጅ",
      "ኽⷕ",
      "ል",
      "፡",
      '"',
      "",
      "",
      "",
      "",
      "",
      "|",
      "ዥⶵ",
      "ሽ",
      "ጭⶽꬥ",
      "ቭ",
      "ብ",
      "ኝ",
      "ም",
      "‹",
      "›",
      "?፧",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    ctrl: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "◌፞",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  };
  this.KV.BK = (function (x) {
    var e = Array.apply(null, Array(65)).map(String.prototype.valueOf, ""),
      r = [],
      v,
      i,
      m = [
        "default",
        "shift",
        "ctrl",
        "shift-ctrl",
        "alt",
        "shift-alt",
        "ctrl-alt",
        "shift-ctrl-alt",
      ];
    for (i = m.length - 1; i >= 0; i--)
      if ((v = x[m[i]]) || r.length) r = (v ? v : e).slice().concat(r);
    return r;
  })(this.KV.KLS);
  this.KDU = 1;
  this.KH = "";
  this.KM = 0;
  this.KBVER = "1.0.3";
  this.KMBM = 0x10;
  this.KS = 1;
  this.KVKD =
    "T_ግዕዝ T_ኃምስ T_ካዕብ T_ሣልስ T_ራብዕ T_ሳብዕ T_ሳምን T_WWA T_ዘመደ_ግዕዝ T_ዘመደ_ካዕብ T_ዘመደ_ሣልስ T_ዘመደ_ራብዕ T_ዘመደ_ኃምስ T_ዘመደ_ካዕብ_ጉራጌ T_ዘመደ_ሣልስ_ጉራጌ T_ዘመደ_ኃምስ_ጉራጌ T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ U_135E U_135F U_135D T_THOUSAND T_BACK T_BEEP";
  this.KVKL = {
    phone: {
      font: "Abyssinica SIL",
      layer: [
        {
          id: "default",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "አ" },
                { id: "T_ካዕብ", text: "ኡ" },
                { id: "T_ሣልስ", text: "ኢ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ኣ" },
                { id: "T_ኃምስ", text: "ኤ" },
                { id: "T_ሳብዕ", text: "ኦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሀ" },
                { id: "T_ካዕብ", text: "ሁ" },
                { id: "T_ሣልስ", text: "ሂ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ሃ",
                  hint: "ኋ",
                  sk: [{ text: "ኋ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሄ" },
                {
                  id: "T_ሳብዕ",
                  text: "ሆ",
                  hint: "ሇ",
                  sk: [{ text: "ሇ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ለ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ለ" },
                { id: "T_ካዕብ", text: "ሉ" },
                { id: "T_ሣልስ", text: "ሊ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ላ",
                  hint: "ሏ",
                  sk: [{ text: "ሏ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሌ" },
                {
                  id: "T_ሳብዕ",
                  text: "ሎ",
                  hint: "ⶀ",
                  sk: [{ text: "ⶀ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሐ" },
                { id: "T_ካዕብ", text: "ሑ" },
                { id: "T_ሣልስ", text: "ሒ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ሓ",
                  nextlayer: "𞟨-layer",
                  hint: "ሗ",
                  sk: [{ text: "ሗ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሔ" },
                { id: "T_ሳብዕ", text: "ሖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "መ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "𞟨-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "መ" },
                { id: "T_ካዕብ", text: "ሙ" },
                { id: "T_ሣልስ", text: "ሚ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ማ",
                  nextlayer: "ᎀ-layer",
                  hint: "ሟ",
                  sk: [{ text: "ሟ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሜ" },
                {
                  id: "T_ሳብዕ",
                  text: "ሞ",
                  hint: "ⶁ",
                  sk: [{ text: "ⶁ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሠ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሠ" },
                { id: "T_ካዕብ", text: "ሡ" },
                { id: "T_ሣልስ", text: "ሢ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ሣ",
                  hint: "ሧ",
                  sk: [{ text: "ሧ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሤ" },
                { id: "T_ሳብዕ", text: "ሦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ረ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ረ" },
                { id: "T_ካዕብ", text: "ሩ" },
                { id: "T_ሣልስ", text: "ሪ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ራ",
                  hint: "ሯ",
                  sk: [{ text: "ሯ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሬ" },
                {
                  id: "T_ሳብዕ",
                  text: "ሮ",
                  hint: "ⶂ",
                  sk: [{ text: "ⶂ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሰ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሰ" },
                { id: "T_ካዕብ", text: "ሱ" },
                { id: "T_ሣልስ", text: "ሲ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ሳ",
                  hint: "ሷ",
                  sk: [{ text: "ሷ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሴ" },
                {
                  id: "T_ሳብዕ",
                  text: "ሶ",
                  hint: "ⶃ",
                  sk: [{ text: "ⶃ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሸ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሸ" },
                { id: "T_ካዕብ", text: "ሹ" },
                { id: "T_ሣልስ", text: "ሺ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ሻ",
                  hint: "ሿ",
                  sk: [{ text: "ሿ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሼ" },
                {
                  id: "T_ሳብዕ",
                  text: "ሾ",
                  hint: "ⶄ",
                  sk: [{ text: "ⶄ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ቀ" },
                { id: "T_ካዕብ", text: "ቁ" },
                { id: "T_ሣልስ", text: "ቂ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ቃ", nextlayer: "ቈ-layer", hint: "ቋ" },
                { id: "T_ኃምስ", text: "ቄ" },
                {
                  id: "T_ሳብዕ",
                  text: "ቆ",
                  hint: "ቇ",
                  sk: [{ text: "ቇ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቈ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "T_ዘመደ_ሣልስ_ጉራጌ", text: "𞟰" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "T_ዘመደ_ኃምስ_ጉራጌ", text: "𞟱" },
                { id: "T_ዘመደ_ካዕብ_ጉራጌ", text: "𞟲" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ቈ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ቀ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ቊ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ቋ" },
                { id: "T_ዘመደ_ኃምስ", text: "ቌ" },
                { id: "T_ዘመደ_ካዕብ", text: "ቍ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ቐ" },
                { id: "T_ካዕብ", text: "ቑ" },
                { id: "T_ሣልስ", text: "ቒ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ቓ", nextlayer: "ቘ-layer", hint: "ቛ" },
                { id: "T_ኃምስ", text: "ቔ" },
                { id: "T_ሳብዕ", text: "ቖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቘ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ቘ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ቐ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ቚ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ቛ" },
                { id: "T_ዘመደ_ኃምስ", text: "ቜ" },
                { id: "T_ዘመደ_ካዕብ", text: "ቝ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "በ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "በ" },
                { id: "T_ካዕብ", text: "ቡ" },
                { id: "T_ሣልስ", text: "ቢ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ባ",
                  nextlayer: "ᎄ-layer",
                  hint: "ቧ",
                  sk: [{ text: "ቧ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ቤ" },
                {
                  id: "T_ሳብዕ",
                  text: "ቦ",
                  hint: "ⶅ",
                  sk: [{ text: "ⶅ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቨ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ቨ" },
                { id: "T_ካዕብ", text: "ቩ" },
                { id: "T_ሣልስ", text: "ቪ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ቫ",
                  hint: "ቯ",
                  sk: [{ text: "ቯ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ቬ" },
                { id: "T_ሳብዕ", text: "ቮ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ተ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ተ" },
                { id: "T_ካዕብ", text: "ቱ" },
                { id: "T_ሣልስ", text: "ቲ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ታ",
                  hint: "ቷ",
                  sk: [{ text: "ቷ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ቴ" },
                {
                  id: "T_ሳብዕ",
                  text: "ቶ",
                  hint: "ⶆ",
                  sk: [{ text: "ⶆ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቸ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ቸ" },
                { id: "T_ካዕብ", text: "ቹ" },
                { id: "T_ሣልስ", text: "ቺ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ቻ",
                  hint: "ቿ",
                  sk: [{ text: "ቿ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ቼ" },
                {
                  id: "T_ሳብዕ",
                  text: "ቾ",
                  hint: "ⶇ",
                  sk: [{ text: "ⶇ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ኀ" },
                { id: "T_ካዕብ", text: "ኁ" },
                { id: "T_ሣልስ", text: "ኂ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ኃ", nextlayer: "ኈ-layer", hint: "ኋ" },
                { id: "T_ኃምስ", text: "ኄ" },
                {
                  id: "T_ሳብዕ",
                  text: "ኆ",
                  hint: "ኇ",
                  sk: [{ text: "ኇ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኈ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ኈ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ኀ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ኊ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ኋ" },
                { id: "T_ዘመደ_ኃምስ", text: "ኌ" },
                { id: "T_ዘመደ_ካዕብ", text: "ኍ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ነ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ነ" },
                { id: "T_ካዕብ", text: "ኑ" },
                { id: "T_ሣልስ", text: "ኒ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ና",
                  hint: "ኗ",
                  sk: [{ text: "ኗ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ኔ" },
                {
                  id: "T_ሳብዕ",
                  text: "ኖ",
                  hint: "ⶈ",
                  sk: [{ text: "ⶈ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኘ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ኘ" },
                { id: "T_ካዕብ", text: "ኙ" },
                { id: "T_ሣልስ", text: "ኚ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ኛ",
                  hint: "ኟ",
                  sk: [{ text: "ኟ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ኜ" },
                {
                  id: "T_ሳብዕ",
                  text: "ኞ",
                  hint: "ⶉ",
                  sk: [{ text: "ⶉ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "አ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "አ" },
                { id: "T_ካዕብ", text: "ኡ" },
                { id: "T_ሣልስ", text: "ኢ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ኣ",
                  hint: "ኧ",
                  sk: [{ text: "ኧ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ኤ" },
                {
                  id: "T_ሳብዕ",
                  text: "ኦ",
                  hint: "ⶊ",
                  sk: [{ text: "ⶊ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ከ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ከ" },
                { id: "T_ካዕብ", text: "ኩ" },
                { id: "T_ሣልስ", text: "ኪ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ካ", nextlayer: "ኰ-layer", hint: "ኳ" },
                { id: "T_ኃምስ", text: "ኬ" },
                {
                  id: "T_ሳብዕ",
                  text: "ኮ",
                  hint: "ኯ",
                  sk: [{ text: "ኯ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኰ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "T_ዘመደ_ሣልስ_ጉራጌ", text: "𞟵" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "T_ዘመደ_ኃምስ_ጉራጌ", text: "𞟶" },
                { id: "T_ዘመደ_ካዕብ_ጉራጌ", text: "𞟷" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ኰ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ከ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ኲ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ኳ" },
                { id: "T_ዘመደ_ኃምስ", text: "ኴ" },
                { id: "T_ዘመደ_ካዕብ", text: "ኵ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኸ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ኸ" },
                { id: "T_ካዕብ", text: "ኹ" },
                { id: "T_ሣልስ", text: "ኺ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ኻ", nextlayer: "ዀ-layer", hint: "ዃ" },
                { id: "T_ኃምስ", text: "ኼ" },
                { id: "T_ሳብዕ", text: "ኾ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ዀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ዀ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ኸ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ዂ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ዃ" },
                { id: "T_ዘመደ_ኃምስ", text: "ዄ" },
                { id: "T_ዘመደ_ካዕብ", text: "ዅ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ወ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ወ" },
                { id: "T_ካዕብ", text: "ዉ" },
                { id: "T_ሣልስ", text: "ዊ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ዋ" },
                { id: "T_ኃምስ", text: "ዌ" },
                {
                  id: "T_ሳብዕ",
                  text: "ዎ",
                  hint: "ዏ",
                  sk: [{ text: "ዏ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ዐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ዐ" },
                { id: "T_ካዕብ", text: "ዑ" },
                { id: "T_ሣልስ", text: "ዒ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ዓ" },
                { id: "T_ኃምስ", text: "ዔ" },
                { id: "T_ሳብዕ", text: "ዖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ዘ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ዘ" },
                { id: "T_ካዕብ", text: "ዙ" },
                { id: "T_ሣልስ", text: "ዚ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ዛ",
                  hint: "ዟ",
                  sk: [{ text: "ዟ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ዜ" },
                {
                  id: "T_ሳብዕ",
                  text: "ዞ",
                  hint: "ⶋ",
                  sk: [{ text: "ⶋ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ዠ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ዠ" },
                { id: "T_ካዕብ", text: "ዡ" },
                { id: "T_ሣልስ", text: "ዢ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ዣ",
                  hint: "ዧ",
                  sk: [{ text: "ዧ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ዤ" },
                { id: "T_ሳብዕ", text: "ዦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "የ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "ኀ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "የ" },
                { id: "T_ካዕብ", text: "ዩ" },
                { id: "T_ሣልስ", text: "ዪ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ያ" },
                { id: "T_ኃምስ", text: "ዬ" },
                {
                  id: "T_ሳብዕ",
                  text: "ዮ",
                  hint: "ዯ",
                  sk: [{ text: "ዯ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ደ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "ኀ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ደ" },
                { id: "T_ካዕብ", text: "ዱ" },
                { id: "T_ሣልስ", text: "ዲ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ዳ",
                  hint: "ዷ",
                  sk: [{ text: "ዷ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ዴ" },
                {
                  id: "T_ሳብዕ",
                  text: "ዶ",
                  hint: "ⶌ",
                  sk: [{ text: "ⶌ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "ኀ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጀ" },
                { id: "T_ካዕብ", text: "ጁ" },
                { id: "T_ሣልስ", text: "ጂ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ጃ",
                  hint: "ጇ",
                  sk: [{ text: "ጇ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጄ" },
                {
                  id: "T_ሳብዕ",
                  text: "ጆ",
                  hint: "ⶎ",
                  sk: [{ text: "ⶎ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ገ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ገ" },
                { id: "T_ካዕብ", text: "ጉ" },
                { id: "T_ሣልስ", text: "ጊ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ጋ", nextlayer: "ጐ-layer", hint: "ጓ" },
                { id: "T_ኃምስ", text: "ጌ" },
                {
                  id: "T_ሳብዕ",
                  text: "ጎ",
                  hint: "ጏ",
                  sk: [{ text: "ጏ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "ኀ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "T_ዘመደ_ሣልስ_ጉራጌ", text: "𞟸" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "T_ዘመደ_ኃምስ_ጉራጌ", text: "𞟹" },
                { id: "T_ዘመደ_ካዕብ_ጉራጌ", text: "𞟺" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ጐ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ገ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ጒ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ጓ" },
                { id: "T_ዘመደ_ኃምስ", text: "ጔ" },
                { id: "T_ዘመደ_ካዕብ", text: "ጕ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጘ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጘ" },
                { id: "T_ካዕብ", text: "ጙ" },
                { id: "T_ሣልስ", text: "ጚ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ጛ", nextlayer: "ⶓ-layer", hint: "ጟ" },
                { id: "T_ኃምስ", text: "ጜ" },
                { id: "T_ሳብዕ", text: "ጞ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጠ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጠ" },
                { id: "T_ካዕብ", text: "ጡ" },
                { id: "T_ሣልስ", text: "ጢ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ጣ",
                  hint: "ጧ",
                  sk: [{ text: "ጧ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጤ" },
                {
                  id: "T_ሳብዕ",
                  text: "ጦ",
                  hint: "ⶏ",
                  sk: [{ text: "ⶏ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጨ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጨ" },
                { id: "T_ካዕብ", text: "ጩ" },
                { id: "T_ሣልስ", text: "ጪ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ጫ",
                  hint: "ጯ",
                  sk: [{ text: "ጯ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጬ" },
                {
                  id: "T_ሳብዕ",
                  text: "ጮ",
                  hint: "ⶐ",
                  sk: [{ text: "ⶐ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጰ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጰ" },
                { id: "T_ካዕብ", text: "ጱ" },
                { id: "T_ሣልስ", text: "ጲ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ጳ",
                  hint: "ጷ",
                  sk: [{ text: "ጷ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጴ" },
                {
                  id: "T_ሳብዕ",
                  text: "ጶ",
                  hint: "ⶑ",
                  sk: [{ text: "ⶑ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጸ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጸ" },
                { id: "T_ካዕብ", text: "ጹ" },
                { id: "T_ሣልስ", text: "ጺ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ጻ",
                  hint: "ጿ",
                  sk: [{ text: "ጿ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጼ" },
                { id: "T_ሳብዕ", text: "ጾ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ፀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ፀ" },
                { id: "T_ካዕብ", text: "ፁ" },
                { id: "T_ሣልስ", text: "ፂ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ፃ" },
                { id: "T_ኃምስ", text: "ፄ" },
                {
                  id: "T_ሳብዕ",
                  text: "ፆ",
                  hint: "ፇ",
                  sk: [{ text: "ፇ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ፈ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ፈ" },
                { id: "T_ካዕብ", text: "ፉ" },
                { id: "T_ሣልስ", text: "ፊ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ፋ",
                  nextlayer: "ᎈ-layer",
                  hint: "ፏ",
                  sk: [{ text: "ፏ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ፌ" },
                { id: "T_ሳብዕ", text: "ፎ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ፐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ፐ" },
                { id: "T_ካዕብ", text: "ፑ" },
                { id: "T_ሣልስ", text: "ፒ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ፓ",
                  nextlayer: "ᎌ-layer",
                  hint: "ፗ",
                  sk: [{ text: "ፗ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ፔ" },
                {
                  id: "T_ሳብዕ",
                  text: "ፖ",
                  hint: "ⶒ",
                  sk: [{ text: "ⶒ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ᎀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ᎀ" },
                { id: "T_BACK", text: "⟲", nextlayer: "መ-layer" },
                {
                  id: "T_ዘመደ_ሣልስ",
                  text: "𞟭",
                  sk: [{ text: "ᎁ", id: "T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ሟ" },
                {
                  id: "T_ዘመደ_ኃምስ",
                  text: "𞟮",
                  sk: [{ text: "ᎂ", id: "T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "T_ዘመደ_ካዕብ", text: "ᎃ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ᎄ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ᎄ" },
                { id: "T_BACK", text: "⟲", nextlayer: "በ-layer" },
                {
                  id: "T_ዘመደ_ሣልስ",
                  text: "𞟳",
                  sk: [{ text: "ᎅ", id: "T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ቧ" },
                {
                  id: "T_ዘመደ_ኃምስ",
                  text: "𞟴",
                  sk: [{ text: "ᎆ", id: "T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "T_ዘመደ_ካዕብ", text: "ᎇ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ᎈ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ᎈ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ፈ-layer" },
                {
                  id: "T_ዘመደ_ሣልስ",
                  text: "𞟻",
                  sk: [{ text: "ᎉ", id: "T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ፏ" },
                {
                  id: "T_ዘመደ_ኃምስ",
                  text: "𞟼",
                  sk: [{ text: "ᎊ", id: "T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "T_ዘመደ_ካዕብ", text: "ᎋ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ᎌ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "ኀ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ᎌ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ፐ-layer" },
                {
                  id: "T_ዘመደ_ሣልስ",
                  text: "𞟽",
                  sk: [{ text: "ᎍ", id: "T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ፗ" },
                {
                  id: "T_ዘመደ_ኃምስ",
                  text: "𞟾",
                  sk: [{ text: "ᎎ", id: "T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "T_ዘመደ_ካዕብ", text: "ᎏ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ⶓ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ⶓ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ጘ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ⶔ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ጟ" },
                { id: "T_ዘመደ_ኃምስ", text: "ⶕ" },
                { id: "T_ዘመደ_ካዕብ", text: "ⶖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "𞟠-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "𞟠" },
                { id: "T_ካዕብ", text: "𞟡" },
                { id: "T_ሣልስ", text: "𞟢" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "𞟣" },
                { id: "T_ኃምስ", text: "𞟤" },
                { id: "T_ሳብዕ", text: "𞟦" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "𞟨-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "U_1E7E5", text: "𞟥", nextlayer: "𞟠-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ጀ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                {
                  id: "K_H",
                  text: "ህ",
                  nextlayer: "ሀ-layer",
                  hint: "ኅ",
                  sk: [{ text: "ኅ", id: "U_1285", nextlayer: "ኀ-layer" }],
                },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "*123*",
                  sp: "1",
                  nextlayer: "punctuation",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "𞟨" },
                { id: "T_BACK", text: "⟲", nextlayer: "ሐ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "𞟩" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ሗ" },
                { id: "T_ዘመደ_ኃምስ", text: "𞟪" },
                { id: "T_ዘመደ_ካዕብ", text: "𞟫" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "punctuation",
          row: [
            {
              id: "1",
              key: [
                {
                  id: "K_1",
                  text: "1",
                  hint: "፩፲",
                  sk: [
                    { text: "፩", id: "U_1369" },
                    { text: "፲", id: "U_1372", layer: "shift" },
                    { text: "፻", id: "U_137B" },
                  ],
                },
                {
                  id: "K_2",
                  text: "2",
                  hint: "፪፳",
                  sk: [
                    { text: "፪", id: "U_136A" },
                    { text: "፳", id: "U_1373" },
                  ],
                },
                {
                  id: "K_3",
                  text: "3",
                  hint: "፫፴",
                  sk: [
                    { text: "፫", id: "U_136B" },
                    { text: "፴", id: "U_1374" },
                  ],
                },
                {
                  id: "K_4",
                  text: "4",
                  hint: "፬፵",
                  sk: [
                    { text: "፬", id: "U_136C" },
                    { text: "፵", id: "U_1375" },
                  ],
                },
                {
                  id: "K_5",
                  text: "5",
                  hint: "፭፶",
                  sk: [
                    { text: "፭", id: "U_136D" },
                    { text: "፶", id: "U_1376" },
                  ],
                },
                {
                  id: "K_6",
                  text: "6",
                  hint: "፮፷",
                  sk: [
                    { text: "፮", id: "U_136E" },
                    { text: "፷", id: "U_1377" },
                  ],
                },
                {
                  id: "K_7",
                  text: "7",
                  hint: "፯፸",
                  sk: [
                    { text: "፯", id: "U_136F" },
                    { text: "፸", id: "U_1378" },
                  ],
                },
                {
                  id: "K_8",
                  text: "8",
                  hint: "፰፹",
                  sk: [
                    { text: "፰", id: "U_1370" },
                    { text: "፹", id: "U_1379" },
                  ],
                },
                {
                  id: "K_9",
                  text: "9",
                  hint: "፱፺",
                  sk: [
                    { text: "፱", id: "U_1371" },
                    { text: "፺", id: "U_137A" },
                  ],
                },
                {
                  id: "K_0",
                  text: "0",
                  hint: "፻፼",
                  sk: [
                    { text: "°", id: "U_00B0" },
                    { text: "፲", id: "U_1372", layer: "shift" },
                    { text: "፻", id: "U_137B" },
                    { text: "፲፻", id: "T_THOUSAND" },
                    { text: "፼", id: "U_137C" },
                  ],
                },
              ],
            },
            {
              id: "2",
              key: [
                {
                  id: "K_HYPHEN",
                  text: "-",
                  layer: "default",
                  hint: "–",
                  sk: [
                    { text: "–", id: "U_2013" },
                    { text: "—", id: "U_2014" },
                    { text: "•", id: "U_2022" },
                  ],
                },
                {
                  id: "K_SLASH",
                  text: "/",
                  layer: "default",
                  hint: "\\",
                  sk: [{ text: "\\", id: "K_BKSLASH" }],
                },
                { id: "U_002C", text: "," },
                { id: "U_003B", text: ";" },
                { id: "K_9", text: "(", layer: "shift" },
                { id: "K_0", text: ")", layer: "shift" },
                {
                  id: "K_4",
                  text: "$",
                  layer: "shift",
                  hint: "€",
                  sk: [
                    { text: "₽", id: "U_20BD" },
                    { text: "¥", id: "U_00A5" },
                    { text: "€", id: "U_20AC" },
                    { text: "¢", id: "U_A2" },
                    { text: "£", id: "U_A3" },
                    { text: "₩", id: "U_20A9" },
                  ],
                },
                {
                  id: "K_7",
                  text: "&",
                  layer: "shift",
                  hint: "§",
                  sk: [{ text: "§", id: "U_00A7" }],
                },
                {
                  id: "U_0027",
                  text: "'",
                  hint: "‘’",
                  sk: [
                    { text: "`", id: "U_0060" },
                    { text: "‘", id: "U_2018" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "K_QUOTE",
                  text: '"',
                  layer: "shift",
                  hint: "«»",
                  sk: [
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                    { text: "„", id: "U_201E" },
                    { text: "“", id: "U_201C" },
                    { text: "”", id: "U_201D" },
                    { text: '"', id: "K_QUOTE", layer: "shift" },
                  ],
                },
              ],
            },
            {
              id: "3",
              key: [
                {
                  id: "K_SHIFT",
                  text: "@",
                  width: "170",
                  sp: "1",
                  nextlayer: "punctuation-2",
                  sk: [
                    {
                      text: "ሀለሐ",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "default",
                    },
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                {
                  id: "U_002E",
                  text: ".",
                  pad: "70",
                  width: "120",
                  hint: "…",
                  sk: [{ text: "…", id: "U_2026" }],
                },
                { id: "U_003A", text: ":", width: "120" },
                { id: "K_2", text: "@", width: "120", layer: "shift" },
                {
                  id: "K_1",
                  text: "!",
                  width: "120",
                  layer: "shift",
                  hint: "¡",
                  sk: [{ text: "¡", id: "U_00A1" }],
                },
                {
                  id: "K_SLASH",
                  text: "?",
                  width: "120",
                  layer: "shift",
                  hint: "¿",
                  sk: [{ text: "¿", id: "U_00BF" }],
                },
                {
                  id: "K_BKSP",
                  text: "*BkSp*",
                  pad: "65",
                  width: "170",
                  sp: "1",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_LOPT",
                  text: "*Menu*",
                  width: "170",
                  sp: "1",
                  nextlayer: "default",
                },
                { id: "K_SPACE", pad: "85", width: "630" },
                {
                  id: "K_ENTER",
                  text: "*Enter*",
                  pad: "80",
                  width: "170",
                  sp: "1",
                },
              ],
            },
          ],
        },
        {
          id: "punctuation-2",
          row: [
            {
              id: "1",
              key: [
                { id: "K_LBRKT", text: "[" },
                { id: "K_RBRKT", text: "]" },
                { id: "K_LBRKT", text: "{", layer: "shift" },
                { id: "K_RBRKT", text: "}", layer: "shift" },
                { id: "K_3", text: "#", layer: "shift" },
                {
                  id: "K_5",
                  text: "%",
                  layer: "shift",
                  hint: "‰",
                  sk: [{ text: "‰", id: "U_2030" }],
                },
                { id: "K_6", text: "^", layer: "shift" },
                { id: "K_8", text: "*", layer: "shift" },
                { id: "K_EQUAL", text: "+", layer: "shift" },
                { id: "K_EQUAL", text: "=" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_005F", text: "_" },
                { id: "K_BKSLASH", text: "\\", layer: "default" },
                { id: "K_BKSLASH", text: "|", layer: "shift" },
                { id: "K_BKQUOTE", text: "~", layer: "shift" },
                { id: "U_003C", text: "<" },
                { id: "U_003E", text: ">" },
                { id: "U_20AC", text: "€" },
                { id: "U_00A3", text: "£" },
                { id: "U_00A5", text: "¥" },
                { id: "U_2022", text: "•" },
              ],
            },
            {
              id: "3",
              key: [
                {
                  id: "K_SHIFT",
                  text: "፩፪፫",
                  width: "170",
                  sp: "1",
                  nextlayer: "ethiopic-punctuation",
                  sk: [
                    {
                      text: "ሀለሐ",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "default",
                    },
                    {
                      text: "*123*",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "punctuation",
                    },
                  ],
                },
                {
                  id: "U_002E",
                  text: ".",
                  pad: "70",
                  width: "120",
                  hint: "…",
                  sk: [{ text: "…", id: "U_2026" }],
                },
                { id: "U_003A", text: ":", width: "120" },
                { id: "K_2", text: "@", width: "120", layer: "shift" },
                {
                  id: "K_1",
                  text: "!",
                  width: "120",
                  layer: "shift",
                  hint: "¡",
                  sk: [{ text: "¡", id: "U_00A1" }],
                },
                {
                  id: "K_SLASH",
                  text: "?",
                  width: "120",
                  layer: "shift",
                  hint: "¿",
                  sk: [{ text: "¿", id: "U_00BF" }],
                },
                {
                  id: "K_BKSP",
                  text: "*BkSp*",
                  pad: "65",
                  width: "170",
                  sp: "1",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_LOPT",
                  text: "*Menu*",
                  width: "170",
                  sp: "1",
                  nextlayer: "default",
                },
                { id: "K_SPACE", pad: "85", width: "630" },
                {
                  id: "K_ENTER",
                  text: "*Enter*",
                  pad: "80",
                  width: "170",
                  sp: "1",
                },
              ],
            },
          ],
        },
        {
          id: "ethiopic-punctuation",
          row: [
            {
              id: "1",
              key: [
                {
                  id: "U_1372",
                  text: "፲",
                  hint: "᎐",
                  sk: [{ text: "᎐", id: "U_1390" }],
                },
                {
                  id: "U_1373",
                  text: "፳",
                  hint: "᎓",
                  sk: [{ text: "᎓", id: "U_1393" }],
                },
                {
                  id: "U_1374",
                  text: "፴",
                  hint: "᎒",
                  sk: [{ text: "᎒", id: "U_1392" }],
                },
                {
                  id: "U_1375",
                  text: "፵",
                  hint: "᎙",
                  sk: [{ text: "᎙", id: "U_1399" }],
                },
                {
                  id: "U_1376",
                  text: "፶",
                  hint: "᎑",
                  sk: [{ text: "᎑", id: "U_1391" }],
                },
                {
                  id: "U_1377",
                  text: "፷",
                  hint: "᎔",
                  sk: [{ text: "᎔", id: "U_1394" }],
                },
                {
                  id: "U_1378",
                  text: "፸",
                  hint: "᎖",
                  sk: [{ text: "᎖", id: "U_1396" }],
                },
                {
                  id: "U_1379",
                  text: "፹",
                  hint: "᎕",
                  sk: [{ text: "᎕", id: "U_1395" }],
                },
                {
                  id: "U_137A",
                  text: "፺",
                  hint: "᎗",
                  sk: [{ text: "᎗", id: "U_1397" }],
                },
                {
                  id: "U_137C",
                  text: "፼",
                  hint: "᎘",
                  sk: [{ text: "᎘", id: "U_1398" }],
                },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_1369", text: "፩" },
                { id: "U_136A", text: "፪" },
                { id: "U_136B", text: "፫" },
                { id: "U_136C", text: "፬" },
                { id: "U_136D", text: "፭" },
                { id: "U_136E", text: "፮" },
                { id: "U_136F", text: "፯" },
                { id: "U_1370", text: "፰" },
                { id: "U_1371", text: "፱" },
                { id: "U_137C", text: "፼" },
              ],
            },
            {
              id: "3",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ꬁꬑꬨ",
                  sp: "1",
                  nextlayer: "legacy-default",
                },
                { id: "U_1367", text: "፧" },
                { id: "U_1360", text: "፠" },
                { id: "U_1368", text: "፨" },
                { id: "U_1361", text: "፡" },
                { id: "U_1363", text: "፣" },
                { id: "U_1364", text: "፤" },
                { id: "U_1365", text: "፥" },
                { id: "U_1366", text: "፦" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1", nextlayer: "default" },
                {
                  id: "U_00AB",
                  text: "«",
                  hint: "“",
                  sk: [{ text: "“", id: "U_201C" }],
                },
                {
                  id: "U_2039",
                  text: "‹",
                  hint: "‘",
                  sk: [{ text: "‘", id: "U_2018" }],
                },
                { id: "U_135E", text: "◌፞" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "U_135F",
                  text: "◌፟",
                  sk: [{ text: "◌፝", id: "U_135D" }],
                },
                {
                  id: "U_203A",
                  text: "›",
                  hint: "’",
                  sk: [{ text: "’", id: "U_2019" }],
                },
                {
                  id: "U_00BB",
                  text: "»",
                  hint: "”",
                  sk: [{ text: "”", id: "U_201D" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-default",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "አ" },
                { id: "T_ካዕብ", text: "ኡ" },
                { id: "T_ሣልስ", text: "ኢ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ኣ" },
                { id: "T_ኃምስ", text: "ኤ" },
                { id: "T_ሳብዕ", text: "ኦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ኀ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ኀ" },
                { id: "T_ካዕብ", text: "ኁ" },
                { id: "T_ሣልስ", text: "ኂ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ኃ",
                  nextlayer: "legacy-ኈ-extra",
                  hint: "ኋ",
                },
                { id: "T_ኃምስ", text: "ኄ" },
                {
                  id: "T_ሳብዕ",
                  text: "ኆ",
                  hint: "ኇ",
                  sk: [{ text: "ኇ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ኈ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ኈ" },
                { id: "T_BACK", text: "⟲", nextlayer: "legacy-ኀ-extra" },
                { id: "T_ዘመደ_ሣልስ", text: "ኊ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ዘመደ_ራብዕ", text: "ኋ" },
                { id: "T_ዘመደ_ኃምስ", text: "ኌ" },
                { id: "T_ዘመደ_ካዕብ", text: "ኍ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ዸ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ዸ" },
                { id: "T_ካዕብ", text: "ዹ" },
                { id: "T_ሣልስ", text: "ዺ" },
                { id: "K_SPACE", width: "215" },
                {
                  id: "T_ራብዕ",
                  text: "ዻ",
                  hint: "ዿ",
                  sk: [{ text: "ዿ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ዼ" },
                {
                  id: "T_ሳብዕ",
                  text: "ዾ",
                  hint: "ⶍ",
                  sk: [{ text: "ⶍ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⶠ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⶠ" },
                { id: "T_ካዕብ", text: "ⶡ" },
                { id: "T_ሣልስ", text: "ⶢ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ⶣ" },
                { id: "T_ኃምስ", text: "ⶤ" },
                { id: "T_ሳብዕ", text: "ⶦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⶨ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⶨ" },
                { id: "T_ካዕብ", text: "ⶩ" },
                { id: "T_ሣልስ", text: "ⶪ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ⶫ" },
                { id: "T_ኃምስ", text: "ⶬ" },
                { id: "T_ሳብዕ", text: "ⶮ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⶰ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⶰ" },
                { id: "T_ካዕብ", text: "ⶱ" },
                { id: "T_ሣልስ", text: "ⶲ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ⶳ" },
                { id: "T_ኃምስ", text: "ⶴ" },
                { id: "T_ሳብዕ", text: "ⶶ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⶸ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⶸ" },
                { id: "T_ካዕብ", text: "ⶹ" },
                { id: "T_ሣልስ", text: "ⶺ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ⶻ" },
                { id: "T_ኃምስ", text: "ⶼ" },
                { id: "T_ሳብዕ", text: "ⶾ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⷀ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⷀ" },
                { id: "T_ካዕብ", text: "ⷁ" },
                { id: "T_ሣልስ", text: "ⷂ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ⷃ" },
                { id: "T_ኃምስ", text: "ⷄ" },
                { id: "T_ሳብዕ", text: "ⷆ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⷈ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⷈ" },
                { id: "T_ካዕብ", text: "ⷉ" },
                { id: "T_ሣልስ", text: "ⷊ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ⷋ" },
                { id: "T_ኃምስ", text: "ⷌ" },
                { id: "T_ሳብዕ", text: "ⷎ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⷐ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⷐ" },
                { id: "T_ካዕብ", text: "ⷑ" },
                { id: "T_ሣልስ", text: "ⷒ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ⷓ" },
                { id: "T_ኃምስ", text: "ⷔ" },
                { id: "T_ሳብዕ", text: "ⷖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⷘ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⷘ" },
                { id: "T_ካዕብ", text: "ⷙ" },
                { id: "T_ሣልስ", text: "ⷚ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ⷛ" },
                { id: "T_ኃምስ", text: "ⷜ" },
                { id: "T_ሳብዕ", text: "ⷞ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬁ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_BEEP", sp: "1" },
                { id: "T_ካዕብ", text: "ꬁ" },
                { id: "T_ሣልስ", text: "ꬂ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ꬃ" },
                { id: "T_ኃምስ", text: "ꬄ" },
                { id: "T_ሳብዕ", text: "ꬆ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬉ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_BEEP", sp: "1" },
                { id: "T_ካዕብ", text: "ꬉ" },
                { id: "T_ሣልስ", text: "ꬊ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ꬋ" },
                { id: "T_ኃምስ", text: "ꬌ" },
                { id: "T_ሳብዕ", text: "ꬎ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬑ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_BEEP", sp: "1" },
                { id: "T_ካዕብ", text: "ꬑ" },
                { id: "T_ሣልስ", text: "ꬒ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ꬓ" },
                { id: "T_ኃምስ", text: "ꬔ" },
                { id: "T_ሳብዕ", text: "ꬖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬠ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1", nextlayer: "ሐ-layer" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_L", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ꬠ" },
                { id: "T_ካዕብ", text: "ꬡ" },
                { id: "T_ሣልስ", text: "ꬢ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ꬣ" },
                { id: "T_ኃምስ", text: "ꬤ" },
                { id: "T_ሳብዕ", text: "ꬦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬨ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                {
                  id: "U_AB2D",
                  text: "ꬭ",
                  nextlayer: "legacy-ꬨ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "𞟥", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                { id: "T_BEEP", text: "ጵ", sp: "1", layer: "shift" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", sp: "1" },
                { id: "U_2DA0", text: "ⶥ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                {
                  id: "U_2DD5",
                  text: "ⷕ",
                  nextlayer: "legacy-ⷐ-extra",
                  layer: "shift",
                },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1" },
                { id: "U_2DAD", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                {
                  id: "U_2DBD",
                  text: "ⶽ",
                  nextlayer: "legacy-ⶸ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "U_2DCD", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "U_1285", text: "ኅ", nextlayer: "legacy-ኀ-extra" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                {
                  id: "U_AB25",
                  text: "ꬥ",
                  nextlayer: "legacy-ꬠ-extra",
                  layer: "shift",
                },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ሀለሐ",
                  sp: "1",
                  nextlayer: "default",
                  sk: [
                    {
                      text: "፩፪፫",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "ethiopic-punctuation",
                    },
                  ],
                },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                {
                  id: "U_1362",
                  text: "።",
                  hint: "፡",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "K_N", text: "ን", sp: "1" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ꬨ" },
                { id: "T_ካዕብ", text: "ꬩ" },
                { id: "T_ሣልስ", text: "ꬪ" },
                { id: "K_SPACE", width: "215" },
                { id: "T_ራብዕ", text: "ꬫ" },
                { id: "T_ኃምስ", text: "ꬬ" },
                { id: "T_ሳብዕ", text: "ꬮ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
      ],
      displayUnderlying: false,
    },
    tablet: {
      font: "Abyssinica SIL",
      layer: [
        {
          id: "default",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "አ" },
                { id: "T_ካዕብ", text: "ኡ" },
                { id: "T_ሣልስ", text: "ኢ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ኣ" },
                { id: "T_ኃምስ", text: "ኤ" },
                { id: "T_ሳብዕ", text: "ኦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሀ" },
                { id: "T_ካዕብ", text: "ሁ" },
                { id: "T_ሣልስ", text: "ሂ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ሃ",
                  hint: "ኋ",
                  sk: [{ text: "ኋ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሄ" },
                { id: "T_ሳብዕ", text: "ሆ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ለ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ለ" },
                { id: "T_ካዕብ", text: "ሉ" },
                { id: "T_ሣልስ", text: "ሊ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ላ",
                  hint: "ሏ",
                  sk: [{ text: "ሏ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሌ" },
                { id: "T_ሳብዕ", text: "ሎ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሐ" },
                { id: "T_ካዕብ", text: "ሑ" },
                { id: "T_ሣልስ", text: "ሒ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ሓ",
                  hint: "ሗ",
                  sk: [{ text: "ሗ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሔ" },
                { id: "T_ሳብዕ", text: "ሖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "𞟠-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "𞟠" },
                { id: "T_ካዕብ", text: "𞟡" },
                { id: "T_ሣልስ", text: "𞟢" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "𞟣" },
                { id: "T_ኃምስ", text: "𞟤" },
                { id: "T_ሳብዕ", text: "𞟦" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "መ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "መ" },
                { id: "T_ካዕብ", text: "ሙ" },
                { id: "T_ሣልስ", text: "ሚ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ማ",
                  nextlayer: "ᎀ-layer",
                  hint: "ሟ",
                  sk: [{ text: "ሟ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሜ" },
                { id: "T_ሳብዕ", text: "ሞ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ᎀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ᎀ" },
                { id: "T_BACK", text: "⟲", nextlayer: "መ-layer" },
                {
                  id: "T_ዘመደ_ሣልስ",
                  text: "𞟭",
                  sk: [{ text: "ᎁ", id: "T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ሟ" },
                {
                  id: "T_ዘመደ_ኃምስ",
                  text: "𞟮",
                  sk: [{ text: "ᎂ", id: "T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "T_ዘመደ_ካዕብ", text: "ᎃ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሠ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሠ" },
                { id: "T_ካዕብ", text: "ሡ" },
                { id: "T_ሣልስ", text: "ሢ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ሣ",
                  hint: "ሧ",
                  sk: [{ text: "ሧ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሤ" },
                { id: "T_ሳብዕ", text: "ሦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ረ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ረ" },
                { id: "T_ካዕብ", text: "ሩ" },
                { id: "T_ሣልስ", text: "ሪ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ራ",
                  hint: "ሯ",
                  sk: [{ text: "ሯ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሬ" },
                { id: "T_ሳብዕ", text: "ሮ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሰ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሰ" },
                { id: "T_ካዕብ", text: "ሱ" },
                { id: "T_ሣልስ", text: "ሲ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ሳ",
                  hint: "ሷ",
                  sk: [{ text: "ሷ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሴ" },
                { id: "T_ሳብዕ", text: "ሶ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ሸ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ሸ" },
                { id: "T_ካዕብ", text: "ሹ" },
                { id: "T_ሣልስ", text: "ሺ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ሻ",
                  hint: "ሿ",
                  sk: [{ text: "ሿ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ሼ" },
                { id: "T_ሳብዕ", text: "ሾ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ቀ" },
                { id: "T_ካዕብ", text: "ቁ" },
                { id: "T_ሣልስ", text: "ቂ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ቃ", nextlayer: "ቈ-layer", hint: "ቋ" },
                { id: "T_ኃምስ", text: "ቄ" },
                { id: "T_ሳብዕ", text: "ቆ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቈ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "T_ዘመደ_ሣልስ_ጉራጌ", text: "𞟰" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "T_ዘመደ_ኃምስ_ጉራጌ", text: "𞟱" },
                { id: "T_ዘመደ_ካዕብ_ጉራጌ", text: "𞟲" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ቈ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ቀ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ቊ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ቋ" },
                { id: "T_ዘመደ_ኃምስ", text: "ቌ" },
                { id: "T_ዘመደ_ካዕብ", text: "ቍ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ቐ" },
                { id: "T_ካዕብ", text: "ቑ" },
                { id: "T_ሣልስ", text: "ቒ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ቓ", nextlayer: "ቘ-layer", hint: "ቛ" },
                { id: "T_ኃምስ", text: "ቔ" },
                { id: "T_ሳብዕ", text: "ቖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቘ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ቘ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ቐ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ቚ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ቛ" },
                { id: "T_ዘመደ_ኃምስ", text: "ቜ" },
                { id: "T_ዘመደ_ካዕብ", text: "ቝ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "በ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "በ" },
                { id: "T_ካዕብ", text: "ቡ" },
                { id: "T_ሣልስ", text: "ቢ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ባ",
                  nextlayer: "ᎄ-layer",
                  hint: "ቧ",
                  sk: [{ text: "ቧ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ቤ" },
                { id: "T_ሳብዕ", text: "ቦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ᎄ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ᎄ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ከ-layer" },
                {
                  id: "T_ዘመደ_ሣልስ",
                  text: "𞟳",
                  sk: [{ text: "ᎅ", id: "T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ቧ" },
                {
                  id: "T_ዘመደ_ኃምስ",
                  text: "𞟴",
                  sk: [{ text: "ᎆ", id: "T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "T_ዘመደ_ካዕብ", text: "ᎇ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቨ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ቨ" },
                { id: "T_ካዕብ", text: "ቩ" },
                { id: "T_ሣልስ", text: "ቪ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ቫ" },
                { id: "T_ኃምስ", text: "ቬ" },
                {
                  id: "T_ሳብዕ",
                  text: "ቮ",
                  hint: "ቯ",
                  sk: [{ text: "ቯ", id: "T_WWA" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ተ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ተ" },
                { id: "T_ካዕብ", text: "ቱ" },
                { id: "T_ሣልስ", text: "ቲ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ታ",
                  hint: "ቷ",
                  sk: [{ text: "ቷ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ቴ" },
                { id: "T_ሳብዕ", text: "ቶ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ቸ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ቸ" },
                { id: "T_ካዕብ", text: "ቹ" },
                { id: "T_ሣልስ", text: "ቺ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ቻ",
                  hint: "ቿ",
                  sk: [{ text: "ቿ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ቼ" },
                { id: "T_ሳብዕ", text: "ቾ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ኀ" },
                { id: "T_ካዕብ", text: "ኁ" },
                { id: "T_ሣልስ", text: "ኂ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ኃ", nextlayer: "ኈ-layer", hint: "ኋ" },
                { id: "T_ኃምስ", text: "ኄ" },
                { id: "T_ሳብዕ", text: "ኆ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኈ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ኈ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ኀ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ኊ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ኋ" },
                { id: "T_ዘመደ_ኃምስ", text: "ኌ" },
                { id: "T_ዘመደ_ካዕብ", text: "ኍ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ነ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ነ" },
                { id: "T_ካዕብ", text: "ኑ" },
                { id: "T_ሣልስ", text: "ኒ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ና",
                  hint: "ኗ",
                  sk: [{ text: "ኗ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ኔ" },
                { id: "T_ሳብዕ", text: "ኖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኘ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ኘ" },
                { id: "T_ካዕብ", text: "ኙ" },
                { id: "T_ሣልስ", text: "ኚ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ኛ",
                  hint: "ኟ",
                  sk: [{ text: "ኟ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ኜ" },
                { id: "T_ሳብዕ", text: "ኞ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "አ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                {
                  id: "T_ግዕዝ",
                  text: "አ",
                  hint: "ኧ",
                  sk: [{ text: "ኧ", id: "T_WWA" }],
                },
                { id: "T_ካዕብ", text: "ኡ" },
                { id: "T_ሣልስ", text: "ኢ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ኣ" },
                { id: "T_ኃምስ", text: "ኤ" },
                { id: "T_ሳብዕ", text: "ኦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ከ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ከ" },
                { id: "T_ካዕብ", text: "ኩ" },
                { id: "T_ሣልስ", text: "ኪ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ካ", nextlayer: "ኰ-layer", hint: "ኳ" },
                { id: "T_ኃምስ", text: "ኬ" },
                { id: "T_ሳብዕ", text: "ኮ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኰ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "T_ዘመደ_ሣልስ_ጉራጌ", text: "𞟵" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "T_ዘመደ_ኃምስ_ጉራጌ", text: "𞟶" },
                { id: "T_ዘመደ_ካዕብ_ጉራጌ", text: "𞟷" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ኰ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ከ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ኲ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ኳ" },
                { id: "T_ዘመደ_ኃምስ", text: "ኴ" },
                { id: "T_ዘመደ_ካዕብ", text: "ኵ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ኸ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ኸ" },
                { id: "T_ካዕብ", text: "ኹ" },
                { id: "T_ሣልስ", text: "ኺ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ኻ", nextlayer: "ዀ-layer", hint: "ዃ" },
                { id: "T_ኃምስ", text: "ኼ" },
                { id: "T_ሳብዕ", text: "ኾ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ዀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ዀ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ኸ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ዂ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ዃ" },
                { id: "T_ዘመደ_ኃምስ", text: "ዄ" },
                { id: "T_ዘመደ_ካዕብ", text: "ዅ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ወ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ወ" },
                { id: "T_ካዕብ", text: "ዉ" },
                { id: "T_ሣልስ", text: "ዊ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ዋ" },
                { id: "T_ኃምስ", text: "ዌ" },
                { id: "T_ሳብዕ", text: "ዎ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ዐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ዐ" },
                { id: "T_ካዕብ", text: "ዑ" },
                { id: "T_ሣልስ", text: "ዒ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ዓ" },
                { id: "T_ኃምስ", text: "ዔ" },
                { id: "T_ሳብዕ", text: "ዖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ዘ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ዘ" },
                { id: "T_ካዕብ", text: "ዙ" },
                { id: "T_ሣልስ", text: "ዚ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ዛ",
                  hint: "ዟ",
                  sk: [{ text: "ዟ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ዜ" },
                { id: "T_ሳብዕ", text: "ዞ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ዠ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ዠ" },
                { id: "T_ካዕብ", text: "ዡ" },
                { id: "T_ሣልስ", text: "ዢ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ዣ",
                  hint: "ዧ",
                  sk: [{ text: "ዧ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ዤ" },
                { id: "T_ሳብዕ", text: "ዦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "የ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "የ" },
                { id: "T_ካዕብ", text: "ዩ" },
                { id: "T_ሣልስ", text: "ዪ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ያ" },
                { id: "T_ኃምስ", text: "ዬ" },
                { id: "T_ሳብዕ", text: "ዮ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ደ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ደ" },
                { id: "T_ካዕብ", text: "ዱ" },
                { id: "T_ሣልስ", text: "ዲ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ዳ",
                  hint: "ዷ",
                  sk: [{ text: "ዷ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ዴ" },
                { id: "T_ሳብዕ", text: "ዶ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ዸ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ዸ" },
                { id: "T_ካዕብ", text: "ዹ" },
                { id: "T_ሣልስ", text: "ዺ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ዻ",
                  hint: "ዿ",
                  sk: [{ text: "ዿ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ዼ" },
                { id: "T_ሳብዕ", text: "ዾ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጀ" },
                { id: "T_ካዕብ", text: "ጁ" },
                { id: "T_ሣልስ", text: "ጂ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ጃ",
                  hint: "ጇ",
                  sk: [{ text: "ጇ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጄ" },
                { id: "T_ሳብዕ", text: "ጆ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ገ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ገ" },
                { id: "T_ካዕብ", text: "ጉ" },
                { id: "T_ሣልስ", text: "ጊ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ጋ", hint: "ጓ", nextlayer: "ጐ-layer" },
                { id: "T_ኃምስ", text: "ጌ" },
                { id: "T_ሳብዕ", text: "ጎ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "T_ዘመደ_ሣልስ_ጉራጌ", text: "𞟸" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "T_ዘመደ_ኃምስ_ጉራጌ", text: "𞟹" },
                { id: "T_ዘመደ_ካዕብ_ጉራጌ", text: "𞟺" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ጐ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ገ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ጒ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ጓ" },
                { id: "T_ዘመደ_ኃምስ", text: "ጔ" },
                { id: "T_ዘመደ_ካዕብ", text: "ጕ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጘ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጘ" },
                { id: "T_ካዕብ", text: "ጙ" },
                { id: "T_ሣልስ", text: "ጚ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ጛ", nextlayer: "ⶓ-layer", hint: "ጟ" },
                { id: "T_ኃምስ", text: "ጜ" },
                { id: "T_ሳብዕ", text: "ጞ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ⶓ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ⶓ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ጘ-layer" },
                { id: "T_ዘመደ_ሣልስ", text: "ⶔ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ጟ" },
                { id: "T_ዘመደ_ኃምስ", text: "ⶕ" },
                { id: "T_ዘመደ_ካዕብ", text: "ⶖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጠ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጠ" },
                { id: "T_ካዕብ", text: "ጡ" },
                { id: "T_ሣልስ", text: "ጢ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ጣ",
                  hint: "ጧ",
                  sk: [{ text: "ጧ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጤ" },
                { id: "T_ሳብዕ", text: "ጦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጨ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጨ" },
                { id: "T_ካዕብ", text: "ጩ" },
                { id: "T_ሣልስ", text: "ጪ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ጫ",
                  hint: "ጯ",
                  sk: [{ text: "ጯ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጬ" },
                { id: "T_ሳብዕ", text: "ጮ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጰ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጰ" },
                { id: "T_ካዕብ", text: "ጱ" },
                { id: "T_ሣልስ", text: "ጲ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ጳ",
                  hint: "ጷ",
                  sk: [{ text: "ጷ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጴ" },
                { id: "T_ሳብዕ", text: "ጶ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ጸ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ጸ" },
                { id: "T_ካዕብ", text: "ጹ" },
                { id: "T_ሣልስ", text: "ጺ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ጻ",
                  hint: "ጿ",
                  sk: [{ text: "ጿ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ጼ" },
                { id: "T_ሳብዕ", text: "ጾ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ፀ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ፀ" },
                { id: "T_ካዕብ", text: "ፁ" },
                { id: "T_ሣልስ", text: "ፂ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ፃ" },
                { id: "T_ኃምስ", text: "ፄ" },
                { id: "T_ሳብዕ", text: "ፆ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ፈ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ፈ" },
                { id: "T_ካዕብ", text: "ፉ" },
                { id: "T_ሣልስ", text: "ፊ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ፋ", nextlayer: "ᎈ-layer", hint: "ፏ" },
                { id: "T_ኃምስ", text: "ፌ" },
                { id: "T_ሳብዕ", text: "ፎ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ᎈ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ᎈ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ፈ-layer" },
                {
                  id: "T_ዘመደ_ሣልስ",
                  text: "𞟻",
                  sk: [{ text: "ᎉ", id: "T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ፏ" },
                {
                  id: "T_ዘመደ_ኃምስ",
                  text: "𞟼",
                  sk: [{ text: "ᎊ", id: "T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "T_ዘመደ_ካዕብ", text: "ᎋ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ፐ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ፐ" },
                { id: "T_ካዕብ", text: "ፑ" },
                { id: "T_ሣልስ", text: "ፒ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ፓ",
                  nextlayer: "ᎌ-layer",
                  hint: "ፗ",
                  sk: [{ text: "ፗ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ፔ" },
                { id: "T_ሳብዕ", text: "ፖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "ᎌ-layer",
          row: [
            {
              id: "1",
              key: [
                { id: "K_Z", text: "ዥ", nextlayer: "ዠ-layer", layer: "shift" },
                { id: "U_1225", text: "ሥ", nextlayer: "ሠ-layer" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "U_1285", text: "ኅ", nextlayer: "ኀ-layer" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_12D5", text: "ዕ", pad: "70", nextlayer: "ዐ-layer" },
                { id: "K_X", text: "ሽ", nextlayer: "ሸ-layer" },
                { id: "K_J", text: "ጅ", nextlayer: "ደ-layer" },
                { id: "K_F", text: "ፍ", nextlayer: "ፈ-layer" },
                { id: "K_K", text: "ኽ", nextlayer: "ኸ-layer", layer: "shift" },
                { id: "K_H", text: "ሕ", nextlayer: "ሐ-layer", layer: "shift" },
                { id: "K_W", text: "ው", nextlayer: "ወ-layer" },
                { id: "K_G", text: "ጝ", nextlayer: "ጘ-layer", layer: "shift" },
                { id: "K_Q", text: "ቕ", nextlayer: "ቐ-layer", layer: "shift" },
                { id: "K_C", text: "ች", nextlayer: "ቸ-layer" },
                { id: "K_C", text: "ጭ", nextlayer: "ጨ-layer", layer: "shift" },
                { id: "U_1345", text: "ፅ", nextlayer: "ፀ-layer" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_12A5", text: "እ", pad: "70", nextlayer: "አ-layer" },
                { id: "K_S", text: "ስ", nextlayer: "ሰ-layer" },
                { id: "K_D", text: "ድ", nextlayer: "ደ-layer" },
                { id: "K_R", text: "ር", nextlayer: "ረ-layer" },
                { id: "K_K", text: "ክ", nextlayer: "ከ-layer" },
                { id: "K_H", text: "ህ", nextlayer: "ሀ-layer" },
                { id: "K_Y", text: "ይ", nextlayer: "የ-layer" },
                { id: "K_G", text: "ግ", nextlayer: "ገ-layer" },
                { id: "K_Q", text: "ቅ", nextlayer: "ቀ-layer" },
                { id: "K_T", text: "ት", nextlayer: "ተ-layer" },
                { id: "K_T", text: "ጥ", nextlayer: "ጠ-layer", layer: "shift" },
                { id: "K_S", text: "ጽ", nextlayer: "ጸ-layer", layer: "shift" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "@", sp: "1", nextlayer: "punctuation" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "K_P", text: "ጵ", nextlayer: "ጰ-layer", layer: "shift" },
                { id: "K_Z", text: "ዝ", nextlayer: "ዘ-layer" },
                { id: "K_V", text: "ቭ", nextlayer: "ቨ-layer" },
                { id: "K_B", text: "ብ", nextlayer: "በ-layer" },
                { id: "K_L", text: "ል", nextlayer: "ለ-layer" },
                { id: "K_M", text: "ም", nextlayer: "መ-layer" },
                { id: "K_N", text: "ን", nextlayer: "ነ-layer" },
                { id: "K_N", text: "ኝ", nextlayer: "ኘ-layer", layer: "shift" },
                { id: "K_P", text: "ፕ", nextlayer: "ፐ-layer" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ዘመደ_ግዕዝ", text: "ᎌ" },
                { id: "T_BACK", text: "⟲", nextlayer: "ፐ-layer" },
                {
                  id: "T_ዘመደ_ሣልስ",
                  text: "𞟽",
                  sk: [{ text: "ᎍ", id: "T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "K_SPACE", width: "560" },
                { id: "T_ዘመደ_ራብዕ", text: "ፗ" },
                {
                  id: "T_ዘመደ_ኃምስ",
                  text: "𞟾",
                  sk: [{ text: "ᎎ", id: "T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ" }],
                },
                { id: "T_ዘመደ_ካዕብ", text: "ᎏ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "punctuation",
          row: [
            {
              id: "1",
              key: [
                {
                  id: "K_5",
                  text: "%",
                  layer: "shift",
                  hint: "‰",
                  sk: [{ text: "‰", id: "U_2030" }],
                },
                { id: "K_3", text: "#", layer: "shift" },
                { id: "U_003C", text: "<" },
                { id: "U_003E", text: ">" },
                { id: "K_LBRKT", text: "{", layer: "shift" },
                { id: "K_RBRKT", text: "}", layer: "shift" },
                { id: "U_00A3", text: "£" },
                { id: "U_00A5", text: "¥" },
                { id: "K_8", text: "*", layer: "shift" },
                { id: "K_EQUAL", text: "=" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "K_6", text: "^", layer: "shift" },
                { id: "K_BKQUOTE", text: "~", layer: "shift" },
                { id: "U_003B", text: ";" },
                { id: "K_BKSLASH", text: "\\" },
                { id: "K_LBRKT", text: "[" },
                { id: "K_RBRKT", text: "]" },
                { id: "U_20AC", text: "€" },
                {
                  id: "K_QUOTE",
                  text: '"',
                  layer: "shift",
                  hint: "«»",
                  sk: [
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                    { text: "„", id: "U_201E" },
                    { text: "“", id: "U_201C" },
                    { text: "”", id: "U_201D" },
                  ],
                },
                { id: "U_2022", text: "•" },
                {
                  id: "K_HYPHEN",
                  text: "-",
                  hint: "–",
                  sk: [
                    { text: "–", id: "U_2013" },
                    { text: "—", id: "U_2014" },
                  ],
                },
              ],
            },
            {
              id: "3",
              key: [
                {
                  id: "K_7",
                  text: "&",
                  layer: "shift",
                  hint: "§",
                  sk: [{ text: "§", id: "U_00A7" }],
                },
                { id: "K_BKSLASH", text: "|", layer: "shift" },
                { id: "U_002C", text: "," },
                { id: "K_SLASH", text: "/" },
                { id: "K_9", text: "(", layer: "shift" },
                { id: "K_0", text: ")", layer: "shift" },
                {
                  id: "K_4",
                  text: "$",
                  layer: "shift",
                  hint: "€",
                  sk: [
                    { text: "₽", id: "U_20BD" },
                    { text: "¥", id: "U_00A5" },
                    { text: "€", id: "U_20AC" },
                    { text: "¢", id: "U_A2" },
                    { text: "£", id: "U_A3" },
                    { text: "₩", id: "U_20A9" },
                  ],
                },
                {
                  id: "U_0027",
                  text: "'",
                  hint: "‘’",
                  sk: [
                    { text: "`", id: "U_0060" },
                    { text: "‘", id: "U_2018" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "U_00B0", text: "°" },
                { id: "K_EQUAL", text: "+", layer: "shift" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "፩፪፫",
                  width: "170",
                  sp: "1",
                  nextlayer: "ethiopic-punctuation",
                  sk: [
                    {
                      text: "ሀለሐ",
                      id: "K_SHIFT",
                      sp: "1",
                      nextlayer: "default",
                    },
                  ],
                },
                {
                  id: "U_002E",
                  text: ".",
                  pad: "70",
                  width: "120",
                  hint: "…",
                  sk: [{ text: "…", id: "U_2026" }],
                },
                { id: "U_003A", text: ":", width: "120" },
                { id: "K_2", text: "@", width: "120", layer: "shift" },
                {
                  id: "K_1",
                  text: "!",
                  width: "120",
                  layer: "shift",
                  hint: "¡",
                  sk: [{ text: "¡", id: "U_00A1" }],
                },
                {
                  id: "K_SLASH",
                  text: "?",
                  width: "120",
                  layer: "shift",
                  hint: "¿",
                  sk: [{ text: "¿", id: "U_00BF" }],
                },
                {
                  id: "K_BKSP",
                  text: "*BkSp*",
                  pad: "65",
                  width: "170",
                  sp: "1",
                },
              ],
            },
            {
              id: "5",
              key: [
                {
                  id: "K_LOPT",
                  text: "*Menu*",
                  width: "170",
                  sp: "1",
                  nextlayer: "default",
                },
                { id: "K_SPACE", pad: "85", width: "630" },
                {
                  id: "K_ENTER",
                  text: "*Enter*",
                  pad: "80",
                  width: "170",
                  sp: "1",
                },
              ],
            },
          ],
        },
        {
          id: "ethiopic-punctuation",
          row: [
            {
              id: "1",
              key: [
                { id: "U_1372", text: "፲", pad: "70" },
                { id: "U_1373", text: "፳" },
                { id: "U_1374", text: "፴" },
                { id: "U_1375", text: "፵" },
                { id: "U_1376", text: "፶" },
                { id: "U_1377", text: "፷" },
                { id: "U_1378", text: "፸" },
                { id: "U_1379", text: "፹" },
                { id: "U_137A", text: "፺" },
                { id: "U_137C", text: "፼" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "U_1369", text: "፩", pad: "70" },
                { id: "U_136A", text: "፪" },
                { id: "U_136B", text: "፫" },
                { id: "U_136C", text: "፬" },
                { id: "U_136D", text: "፭" },
                { id: "U_136E", text: "፮" },
                { id: "U_136F", text: "፯" },
                { id: "U_1370", text: "፰" },
                { id: "U_1371", text: "፱" },
                { id: "U_137B", text: "፻" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "U_1390", pad: "70", text: "᎐" },
                { id: "U_1393", text: "᎓" },
                { text: "᎒", id: "U_1392" },
                { text: "᎙", id: "U_1399" },
                { text: "᎑", id: "U_1391" },
                { text: "᎔", id: "U_1394" },
                { text: "᎖", id: "U_1396" },
                { text: "᎕", id: "U_1395" },
                { text: "᎗", id: "U_1397" },
                { text: "᎘", id: "U_1398" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                {
                  id: "K_SHIFT",
                  text: "ꬁꬑꬨ",
                  sp: "1",
                  nextlayer: "legacy-default",
                },
                { id: "U_1367", text: "፧" },
                { id: "U_1360", text: "፠" },
                { id: "U_1368", text: "፨" },
                { id: "U_1361", text: "፡" },
                { id: "U_1363", text: "፣" },
                { id: "U_1364", text: "፤" },
                { id: "U_1365", text: "፥" },
                { id: "U_1366", text: "፦" },
                { id: "U_2019", text: "’" },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1", nextlayer: "default" },
                {
                  id: "U_00AB",
                  text: "«",
                  hint: "“",
                  sk: [{ text: "“", id: "U_201C" }],
                },
                {
                  id: "U_2039",
                  text: "‹",
                  hint: "‘",
                  sk: [{ text: "‘", id: "U_2018" }],
                },
                { id: "U_135E", text: "◌፞" },
                { id: "K_SPACE", width: "330" },
                { id: "U_135F", text: "◌፟" },
                {
                  id: "U_203A",
                  text: "›",
                  hint: "’",
                  sk: [{ text: "’", id: "U_2019" }],
                },
                {
                  id: "U_00BB",
                  text: "»",
                  width: "100",
                  hint: "”",
                  sk: [{ text: "”", id: "U_201D" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-default",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "አ" },
                { id: "T_ካዕብ", text: "ኡ" },
                { id: "T_ሣልስ", text: "ኢ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ኣ" },
                { id: "T_ኃምስ", text: "ኤ" },
                { id: "T_ሳብዕ", text: "ኦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ዸ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ዸ" },
                { id: "T_ካዕብ", text: "ዹ" },
                { id: "T_ሣልስ", text: "ዺ" },
                { id: "K_SPACE", width: "560" },
                {
                  id: "T_ራብዕ",
                  text: "ዻ",
                  hint: "ዿ",
                  sk: [{ text: "ዿ", id: "T_WWA" }],
                },
                { id: "T_ኃምስ", text: "ዼ" },
                {
                  id: "T_ሳብዕ",
                  text: "ዾ",
                  hint: "ⶍ",
                  sk: [{ text: "ⶍ", id: "T_ሳምን" }],
                },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⶠ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⶠ" },
                { id: "T_ካዕብ", text: "ⶡ" },
                { id: "T_ሣልስ", text: "ⶢ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ⶣ" },
                { id: "T_ኃምስ", text: "ⶤ" },
                { id: "T_ሳብዕ", text: "ⶦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⶨ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⶨ" },
                { id: "T_ካዕብ", text: "ⶩ" },
                { id: "T_ሣልስ", text: "ⶪ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ⶫ" },
                { id: "T_ኃምስ", text: "ⶬ" },
                { id: "T_ሳብዕ", text: "ⶮ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⶰ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⶰ" },
                { id: "T_ካዕብ", text: "ⶱ" },
                { id: "T_ሣልስ", text: "ⶲ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ⶳ" },
                { id: "T_ኃምስ", text: "ⶴ" },
                { id: "T_ሳብዕ", text: "ⶶ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⶸ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⶸ" },
                { id: "T_ካዕብ", text: "ⶹ" },
                { id: "T_ሣልስ", text: "ⶺ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ⶻ" },
                { id: "T_ኃምስ", text: "ⶼ" },
                { id: "T_ሳብዕ", text: "ⶾ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⷀ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⷀ" },
                { id: "T_ካዕብ", text: "ⷁ" },
                { id: "T_ሣልስ", text: "ⷂ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ⷃ" },
                { id: "T_ኃምስ", text: "ⷄ" },
                { id: "T_ሳብዕ", text: "ⷆ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⷈ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⷈ" },
                { id: "T_ካዕብ", text: "ⷉ" },
                { id: "T_ሣልስ", text: "ⷊ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ⷋ" },
                { id: "T_ኃምስ", text: "ⷌ" },
                { id: "T_ሳብዕ", text: "ⷎ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⷐ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⷐ" },
                { id: "T_ካዕብ", text: "ⷑ" },
                { id: "T_ሣልስ", text: "ⷒ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ⷓ" },
                { id: "T_ኃምስ", text: "ⷔ" },
                { id: "T_ሳብዕ", text: "ⷖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ⷘ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ⷘ" },
                { id: "T_ካዕብ", text: "ⷙ" },
                { id: "T_ሣልስ", text: "ⷚ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ⷛ" },
                { id: "T_ኃምስ", text: "ⷜ" },
                { id: "T_ሳብዕ", text: "ⷞ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬁ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_BEEP", sp: "1" },
                { id: "T_ካዕብ", text: "ꬁ" },
                { id: "T_ሣልስ", text: "ꬂ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ꬃ" },
                { id: "T_ኃምስ", text: "ꬄ" },
                { id: "T_ሳብዕ", text: "ꬆ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬉ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_BEEP", sp: "1" },
                { id: "T_ካዕብ", text: "ꬉ" },
                { id: "T_ሣልስ", text: "ꬊ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ꬋ" },
                { id: "T_ኃምስ", text: "ꬌ" },
                { id: "T_ሳብዕ", text: "ꬎ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬑ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_BEEP", sp: "1" },
                { id: "T_ካዕብ", text: "ꬑ" },
                { id: "T_ሣልስ", text: "ꬒ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ꬓ" },
                { id: "T_ኃምስ", text: "ꬔ" },
                { id: "T_ሳብዕ", text: "ꬖ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬠ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ꬠ" },
                { id: "T_ካዕብ", text: "ꬡ" },
                { id: "T_ሣልስ", text: "ꬢ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ꬣ" },
                { id: "T_ኃምስ", text: "ꬤ" },
                { id: "T_ሳብዕ", text: "ꬦ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
        {
          id: "legacy-ꬨ-extra",
          row: [
            {
              id: "1",
              key: [
                { id: "U_2DB5", text: "ⶵ", nextlayer: "legacy-ⶰ-extra" },
                { id: "T_BEEP", text: "ሥ", sp: "1" },
                { id: "K_1", text: "1" },
                { id: "K_2", text: "2" },
                { id: "K_3", text: "3" },
                { id: "K_4", text: "4" },
                { id: "K_5", text: "5" },
                { id: "K_6", text: "6" },
                { id: "K_7", text: "7" },
                { id: "K_8", text: "8" },
                { id: "K_9", text: "9" },
                { id: "K_0", text: "0" },
                { id: "T_BEEP", text: "ኅ", sp: "1" },
              ],
            },
            {
              id: "2",
              key: [
                { id: "T_BEEP", text: "ዕ", pad: "70", sp: "1" },
                { id: "U_2DA0", text: "ⶠ", nextlayer: "legacy-ⶠ-extra" },
                { id: "U_AB0D", text: "ꬍ", nextlayer: "legacy-ꬉ-extra" },
                { id: "U_135A", text: "ፚ" },
                { id: "U_2DD5", text: "ⷕ", nextlayer: "legacy-ⷐ-extra" },
                { id: "T_BEEP", text: "ሕ", sp: "1" },
                { id: "T_BEEP", text: "ው", sp: "1" },
                { id: "T_BEEP", text: "ጝ", sp: "1" },
                { id: "T_BEEP", text: "ቕ", sp: "1", layer: "shift" },
                { id: "K_C", text: "ⶭ", nextlayer: "legacy-ⶨ-extra" },
                { id: "U_2DBD", text: "ⶽ", nextlayer: "legacy-ⶸ-extra" },
                { id: "T_BEEP", text: "ፅ", sp: "1" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "3",
              key: [
                { id: "T_BEEP", text: "እ", pad: "70", sp: "1" },
                { id: "U_AB05", text: "ꬅ", nextlayer: "legacy-ꬁ-extra" },
                { id: "U_12FD", text: "ዽ", nextlayer: "legacy-ዸ-extra" },
                { id: "U_1358", text: "ፘ" },
                { id: "K_K", text: "ⷍ", nextlayer: "legacy-ⷈ-extra" },
                { id: "K_H", text: "ህ", sp: "1" },
                { id: "T_BEEP", text: "ይ", sp: "1" },
                { id: "U_2DDD", text: "ⷝ", nextlayer: "legacy-ⷘ-extra" },
                { id: "U_2DC5", text: "ⷅ", nextlayer: "legacy-ⷀ-extra" },
                { id: "T_BEEP", text: "ት", sp: "1" },
                { id: "U_AB25", text: "ꬥ", nextlayer: "legacy-ꬠ-extra" },
                { id: "U_AB2D", text: "ꬭ", nextlayer: "legacy-ꬨ-extra" },
                { id: "T_SPACER", width: "20", sp: "10" },
              ],
            },
            {
              id: "4",
              key: [
                { id: "K_SHIFT", text: "ሀለሐ", sp: "1", nextlayer: "default" },
                {
                  id: "K_1",
                  text: "!",
                  layer: "shift",
                  hint: "?",
                  sk: [
                    { text: "?", id: "K_SLASH", layer: "shift" },
                    { text: "/", id: "K_SLASH" },
                    { text: ".", id: "U_002E" },
                    { text: ",", id: "U_002C" },
                    { text: "-", id: "U_002D" },
                    { text: ":", id: "U_003A" },
                    { text: "’", id: "U_2019" },
                  ],
                },
                { id: "T_BEEP", text: "ጵ", sp: "1" },
                { id: "U_AB15", text: "ꬕ", nextlayer: "legacy-ꬑ-extra" },
                { id: "T_BEEP", text: "ቭ", sp: "1" },
                { id: "T_BEEP", text: "ብ", sp: "1" },
                { id: "T_BEEP", text: "ል", sp: "1" },
                { id: "U_1359", text: "ፙ" },
                { id: "T_BEEP", text: "ን", sp: "1" },
                { id: "T_BEEP", text: "ኝ", sp: "1" },
                { id: "T_BEEP", text: "ፕ", sp: "1" },
                {
                  id: "U_1362",
                  text: "።",
                  hint: ":",
                  sk: [
                    { text: "፡", id: "K_COLON", layer: "shift" },
                    { text: "፣", id: "K_COMMA" },
                    { text: "፤", id: "K_COLON" },
                    { text: "፦", id: "U_1366" },
                    { text: "«", id: "U_00AB" },
                    { text: "»", id: "U_00BB" },
                  ],
                },
                { id: "K_BKSP", text: "*BkSp*", sp: "1" },
              ],
            },
            {
              id: "5",
              key: [
                { id: "K_LOPT", text: "*Menu*", sp: "1" },
                { id: "T_ግዕዝ", text: "ꬨ" },
                { id: "T_ካዕብ", text: "ꬩ" },
                { id: "T_ሣልስ", text: "ꬪ" },
                { id: "K_SPACE", width: "560" },
                { id: "T_ራብዕ", text: "ꬫ" },
                { id: "T_ኃምስ", text: "ꬬ" },
                { id: "T_ሳብዕ", text: "ꬮ" },
                { id: "K_ENTER", text: "*Enter*", sp: "1" },
              ],
            },
          ],
        },
      ],
      displayUnderlying: false,
    },
  };
  this.KCSS =
    "/*\n  * Pastel colors for GFF Keyboards\n  * Primarily from: https://www.behance.net/gallery/125405749/Top-10-trending-pastel-color-palettes-in-2021\n  */\n \n /* functional keys */\n .phone div.kmw-key.kmw-key-shift[id$='K_LOPT'],     .tablet div.kmw-key.kmw-key-shift[id$='K_LOPT'],\n .phone div.kmw-key.kmw-key-shift[id$='K_BKSP'],     .tablet div.kmw-key.kmw-key-shift[id$='K_BKSP'],\n .phone div.kmw-key.kmw-key-shift[id$='K_ENTER'],   .tablet div.kmw-key.kmw-key-shift[id$='K_ENTER'],\n .phone div.kmw-key.kmw-key-shift[id$='K_SHIFT'],    .tablet div.kmw-key.kmw-key-shift[id$='K_SHIFT'],\n .phone div.kmw-key.kmw-key-special[id$='K_SHIFT'], .tablet div.kmw-key.kmw-key-special[id$='K_SHIFT'],\n .phone div.kmw-key.kmw-key-shift[id$='T_EMPTY'],   .tablet div.kmw-key.kmw-key-shift[id$='T_EMPTY']\n /* { background: #f3d6ce  ; color: black; } */\n   { background: #ece1d5 ; color: black ; }\n \n /* default layers: latin punctuation */\n .phone div.kmw-key.kmw-key-default[id$='K_SPACE'], .tablet div.kmw-key.kmw-key-default[id$='K_SPACE']\n   { background: #f4eee7 ; color: #f4eee7 ; } /* eceae4 */\n \n .phone div.kmw-key.kmw-key-default[id$='K_1+shift'], .tablet div.kmw-key.kmw-key-default[id$='K_1+shift'], /* ! */\n .phone div.kmw-key.kmw-key-default[id$='U_1362'],    .tablet div.kmw-key.kmw-key-default[id$='U_1362']     /* ። */\n   { background: #f4eee7 ; color: black ; }\n \n /* ethiopic-extra layer:  punctuation */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_00AB'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_00AB'], /* « */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_00BB'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_00BB'],  /* » */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_2039'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_2039'], /* « */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_203A'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_203A']  /* » */\n   { background:  #ebece6 ; color: black ; } \n \n   /* ethiopic-punctuation layer:  punctuation */\n .phone div.kmw-key.kmw-key-default[id$='punctuation-U_2039'], .tablet div.kmw-key.kmw-key-default[id$='punctuation-U_2039'], /* ‹ */\n .phone div.kmw-key.kmw-key-default[id$='punctuation-U_203A'], .tablet div.kmw-key.kmw-key-default[id$='punctuation-U_203A'],  /* › */\n .phone div.kmw-key.kmw-key-default[id$='punctuation-U_00AB'], .tablet div.kmw-key.kmw-key-default[id$='punctuation-U_00AB'], /* « */\n .phone div.kmw-key.kmw-key-default[id$='punctuation-U_00BB'], .tablet div.kmw-key.kmw-key-default[id$='punctuation-U_00BB']  /* » */\n { background:  #ebece6 ; color: black ; } \n \n /* ethiopic-extra layer: ethiopic punctuation */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_1361'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_1361'], /* ፡ */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_1362'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_1362'], /* ። */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_1363'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_1363'], /* ፣ */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_1364'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_1364'], /* ፤ */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_1365'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_1365'], /* ፥ */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_1366'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_1366'], /* ፦ */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_1367'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_1367'], /* ፧ */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_1360'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_1360'], /* ፠ */\n .phone div.kmw-key.kmw-key-default[id$='extra-U_1368'], .tablet div.kmw-key.kmw-key-default[id$='extra-U_1368']  /* ፨ */\n   { background:  #f4eee7 ; color: black ; }\n \n /* ethiopic-extra layer: western numerals */\n .phone div.kmw-key.kmw-key-default[id$='K_1'], .tablet div.kmw-key.kmw-key-default[id$='K_1'], /* 1 */\n .phone div.kmw-key.kmw-key-default[id$='K_2'], .tablet div.kmw-key.kmw-key-default[id$='K_2'], /* 2 */\n .phone div.kmw-key.kmw-key-default[id$='K_3'], .tablet div.kmw-key.kmw-key-default[id$='K_3'], /* 3 */\n .phone div.kmw-key.kmw-key-default[id$='K_4'], .tablet div.kmw-key.kmw-key-default[id$='K_4'], /* 4 */\n .phone div.kmw-key.kmw-key-default[id$='K_5'], .tablet div.kmw-key.kmw-key-default[id$='K_5'], /* 5 */\n .phone div.kmw-key.kmw-key-default[id$='K_6'], .tablet div.kmw-key.kmw-key-default[id$='K_6'], /* 6 */\n .phone div.kmw-key.kmw-key-default[id$='K_7'], .tablet div.kmw-key.kmw-key-default[id$='K_7'], /* 7 */\n .phone div.kmw-key.kmw-key-default[id$='K_8'], .tablet div.kmw-key.kmw-key-default[id$='K_8'], /* 8 */\n .phone div.kmw-key.kmw-key-default[id$='K_9'], .tablet div.kmw-key.kmw-key-default[id$='K_9'], /* 9 */\n .phone div.kmw-key.kmw-key-default[id$='K_0'], .tablet div.kmw-key.kmw-key-default[id$='K_0'], /* 0 */\n .tablet div.kmw-key.kmw-key-default[id$='K_HYPHEN'], .tablet div.kmw-key.kmw-key-default[id$='K_EQUAL'], \n .kmw-keyboard-gff_ethiopic #ethiopic-etens-extra-T_MORE  /* ▶ */\n   { background:  #ebece6 ; color: black ; }\n \n /* ethiopic-extra layer: ge'ez numerals */\n .phone div.kmw-key.kmw-key-default[id$='K_SPACE'], .tablet div.kmw-key.kmw-key-default[id$='K_SPACE'],\n .phone div.kmw-key.kmw-key-default[id$='U_1369'], .tablet div.kmw-key.kmw-key-default[id$='U_1369'], /* ፩ */\n .phone div.kmw-key.kmw-key-default[id$='U_136A'], .tablet div.kmw-key.kmw-key-default[id$='U_136A'], /* ፪ */\n .phone div.kmw-key.kmw-key-default[id$='U_136B'], .tablet div.kmw-key.kmw-key-default[id$='U_136B'], /* ፫ */\n .phone div.kmw-key.kmw-key-default[id$='U_136C'], .tablet div.kmw-key.kmw-key-default[id$='U_136C'], /* ፬ */\n .phone div.kmw-key.kmw-key-default[id$='U_136D'], .tablet div.kmw-key.kmw-key-default[id$='U_136D'], /* ፭ */\n .phone div.kmw-key.kmw-key-default[id$='U_136E'], .tablet div.kmw-key.kmw-key-default[id$='U_136E'], /* ፮ */\n .phone div.kmw-key.kmw-key-default[id$='U_136F'], .tablet div.kmw-key.kmw-key-default[id$='U_136F'], /* ፯ */\n .phone div.kmw-key.kmw-key-default[id$='U_1370'], .tablet div.kmw-key.kmw-key-default[id$='U_1370'], /* ፰ */\n .phone div.kmw-key.kmw-key-default[id$='U_1371'], .tablet div.kmw-key.kmw-key-default[id$='U_1371'], /* ፱ */\n .phone div.kmw-key.kmw-key-default[id$='U_1372+shift'], .tablet div.kmw-key.kmw-key-default[id$='U_1372'],  /* ፲ */\n .kmw-keyboard-gff_ethiopic #ethiopic-tens-extra-T_MORE  /* ▶ */\n   { background:  #ece1d5 ; color: black ; }\n \n .phone div.kmw-key.kmw-key-default[id$='U_1372'], .tablet div.kmw-key.kmw-key-default[id$='U_1372'], /* ፲ */\n .phone div.kmw-key.kmw-key-default[id$='U_1373'], .tablet div.kmw-key.kmw-key-default[id$='U_1373'], /* ፳ */\n .phone div.kmw-key.kmw-key-default[id$='U_1374'], .tablet div.kmw-key.kmw-key-default[id$='U_1374'], /* ፴ */\n .phone div.kmw-key.kmw-key-default[id$='U_1375'], .tablet div.kmw-key.kmw-key-default[id$='U_1375'], /* ፵ */\n .phone div.kmw-key.kmw-key-default[id$='U_1376'], .tablet div.kmw-key.kmw-key-default[id$='U_1376'], /* ፶ */\n .phone div.kmw-key.kmw-key-default[id$='U_1377'], .tablet div.kmw-key.kmw-key-default[id$='U_1377'], /* ፷ */\n .phone div.kmw-key.kmw-key-default[id$='U_1378'], .tablet div.kmw-key.kmw-key-default[id$='U_1378'], /* ፸ */\n .phone div.kmw-key.kmw-key-default[id$='U_1379'], .tablet div.kmw-key.kmw-key-default[id$='U_1379'], /* ፹ */\n .phone div.kmw-key.kmw-key-default[id$='U_137A'], .tablet div.kmw-key.kmw-key-default[id$='U_137A'], /* ፺ */\n .phone div.kmw-key.kmw-key-default[id$='U_137B'], .tablet div.kmw-key.kmw-key-default[id$='U_137B'], /* ፻ */\n .phone div.kmw-key.kmw-key-default[id$='T_THOUSAND'], .tablet div.kmw-key.kmw-key-default[id$='T_THOUSAND'], /* ፲፻ */ \n .phone div.kmw-key.kmw-key-default[id$='U_137C'], .tablet div.kmw-key.kmw-key-default[id$='U_137C'],  /* ፼ */\n /* .kmw-keyboard-gff_ethiopic #ethiopic-extra-T_MORE, */\n .phone div.kmw-key.kmw-key-special[id$='extra-T_MORE'] /* ▶ */\n   { background:  #f3d6ce ; color: black ; }\n \n .phone div.kmw-key.kmw-key-default[id$='U_1390'], .tablet div.kmw-key.kmw-key-default[id$='U_1390'], /* ᎐ */ \n .phone div.kmw-key.kmw-key-default[id$='U_1391'], .tablet div.kmw-key.kmw-key-default[id$='U_1391'], /* ᎑ */ \n .phone div.kmw-key.kmw-key-default[id$='U_1391'], .tablet div.kmw-key.kmw-key-default[id$='U_1392'], /* ᎒ */ \n .phone div.kmw-key.kmw-key-default[id$='U_1393'], .tablet div.kmw-key.kmw-key-default[id$='U_1393'], /* ᎓ */\n .phone div.kmw-key.kmw-key-default[id$='U_1394'], .tablet div.kmw-key.kmw-key-default[id$='U_1394'], /* ᎔ */\n .phone div.kmw-key.kmw-key-default[id$='U_1395'], .tablet div.kmw-key.kmw-key-default[id$='U_1395'], /* ᎕ */\n .phone div.kmw-key.kmw-key-default[id$='U_1396'], .tablet div.kmw-key.kmw-key-default[id$='U_1396'], /* ᎖ */\n .phone div.kmw-key.kmw-key-default[id$='U_1397'], .tablet div.kmw-key.kmw-key-default[id$='U_1397'], /* ᎗ */\n .phone div.kmw-key.kmw-key-default[id$='U_1398'], .tablet div.kmw-key.kmw-key-default[id$='U_1398'], /* ᎘ */\n .phone div.kmw-key.kmw-key-default[id$='U_1399'], .tablet div.kmw-key.kmw-key-default[id$='U_1399'] /* ᎙ */\n     { background:  #f8f2e0 ; color: black ; } \n \n /* default layer ግዕዝ */\n .phone div.kmw-key.kmw-key-default[id$='T_ግዕዝ'], .tablet div.kmw-key.kmw-key-default[id$='T_ግዕዝ']\n   { background:  #e2f0cb ; color: black; } /*#baed91 */\n \n /* default layer ካዕብ */\n .phone div.kmw-key.kmw-key-default[id$='T_ካዕብ'], .tablet div.kmw-key.kmw-key-default[id$='T_ካዕብ']\n   { background:  #ffffb5 ; color: black; } /* #faf884 */ \n \n /* default layer ሣልስ */\n .phone div.kmw-key.kmw-key-default[id$='T_ሣልስ'], .tablet div.kmw-key.kmw-key-default[id$='T_ሣልስ']\n   { background:  #fea3aa  ; color: black; }\n \n /* default layer ራብዕ */\n .phone div.kmw-key.kmw-key-default[id$='T_ራብዕ'], .tablet div.kmw-key.kmw-key-default[id$='T_ራብዕ']\n   { background:  #ccf1ff  ; color: black; } /* #b2cefe */\n \n /* default layer ኃምስ */\n .phone div.kmw-key.kmw-key-default[id$='T_ኃምስ'], .tablet div.kmw-key.kmw-key-default[id$='T_ኃምስ']\n   { background:  #e0d7ff  ; color: black; } /* #f2a2e8 */\n \n /* default layer ሳድስ - used primarily when a sadis letter appears in a popup or on the -extra layers */\n /*\n .phone div.kmw-key.kmw-key-default[id$='T_ሳድስ'], .tablet div.kmw-key.kmw-key-default[id$='T_ሳድስ']\n   { background: #eceae4; color: black; }\n */\n \n /* default layer ሳብዕ */\n .phone div.kmw-key.kmw-key-default[id$='T_ሳብዕ'], .tablet div.kmw-key.kmw-key-default[id$='T_ሳብዕ']\n   { background:  #fad6b6  ; color: black; } /* f8b88b*/\n \n /* ዘመደ-ግዕዝ */\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ግዕዝ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ግዕዝ']\n   {\n     background: #ffffff;  color: black ;\n     background: linear-gradient(180deg, #ffffff 0%, #e2f0cb 100%);\n   }\n \n /* ዘመደ-ካዕብ */\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ካዕብ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ካዕብ'],\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ካዕብ_ጉራጌ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ካዕብ_ጉራጌ']\n   {\n     background: #ffffff; color: black ;\n     background: linear-gradient(180deg, #ffffff 0%, #ffffb5 100%);\n   }\n \n /* ዘመደ-ሣልስ */\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ሣልስ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ሣልስ'],\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ሣልስ_ጉራጌ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ሣልስ_ጉራጌ'],\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ሣልስ_ጉራጌ_ታሪካዊ']\n   {\n     background: #ffffff;  color: black ;\n     background: linear-gradient(180deg, #ffffff 0%, #fea3aa 100%);\n   }\n \n /* ዘመደ-ራብዕ */\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ራብዕ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ራብዕ'],\n .phone div.kmw-key.kmw-key-default[id$='T_WWA'], .tablet div.kmw-key.kmw-key-default[id$='T_WWA']\n   {\n     background: #ffffff;  color: black ;\n     background: linear-gradient(180deg, #ffffff 0%, #ccf1ff 100%);\n   }\n \n /* ዘመደ-ኃምስ */\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ኃምስ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ኃምስ'],\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ኃምስ_ጉራጌ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ኃምስ_ጉራጌ'],\n .phone div.kmw-key.kmw-key-default[id$='T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ'], .tablet div.kmw-key.kmw-key-default[id$='T_ዘመደ_ኃምስ_ጉራጌ_ታሪካዊ']\n   {\n     background: #ffffff;  color: black ;\n     background: linear-gradient(180deg, #ffffff 0%, #e0d7ff 100%);\n   }\n \n /* resets sadis letters that appear in popups of the default layers, this is needed for when the keys appear on the -extra layer */\n .tablet.ios .kmw-keyboard-gff_ethiopic #punctuation-K_HYPHEN, .tablet.ios .kmw-keyboard-gff_ethiopic #punctuation-K_EQUAL,  \n .ios .kmw-keyboard-gff_ethiopic #punctuation-K_1\\+shift, .phone.ios .kmw-keyboard-gff_ethiopic #punctuation-2-K_1\\+shift\n {background: #fdfdfe ; color: black ; }\n \n .tablet.android .kmw-keyboard-gff_ethiopic #punctuation-K_HYPHEN, .tablet.android .kmw-keyboard-gff_ethiopic #punctuation-K_EQUAL, \n .android .kmw-keyboard-gff_ethiopic #punctuation-K_1\\+shift, .phone.android .kmw-keyboard-gff_ethiopic #punctuation-2-K_1\\+shift\n {background: #777 ; color: white ; }\n \n .phone div.kmw-key.kmw-key-default[id$='U_135D'],  .tablet div.kmw-key.kmw-key-default[id$='U_135D'],\n .phone div.kmw-key.kmw-key-default[id$='U_135E'],  .tablet div.kmw-key.kmw-key-default[id$='U_135E'],\n .phone div.kmw-key.kmw-key-default[id$='U_135F'],  .tablet div.kmw-key.kmw-key-default[id$='U_135F']\n {background: #E2EADA ; color: black ; }\n ";
  this.s15 =
    " ሀሁሂሃሄህሆሇለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቇቈ቉ቊቋቌቍ቎቏ቐቑቒቓቔቕቖ቗ቘ቙ቚቛቜቝ቞቟በቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኇኈ኉ኊኋኌኍ኎኏ነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኯኰ኱ኲኳኴኵ኶኷ኸኹኺኻኼኽኾ኿ዀ዁ዂዃዄዅ዆዇ወዉዊዋዌውዎዏዐዑዒዓዔዕዖ዗ዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮዯደዱዲዳዴድዶዷዸዹዺዻዼዽዾዿጀጁጂጃጄጅጆጇገጉጊጋጌግጎጏጐ጑ጒጓጔጕ጖጗ጘጙጚጛጜጝጞጟጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፇፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗፘፙፚ፛፜፝፞፟፠፡።፣፤፥፦፧፨፩፪፫፬፭፮፯፰፱፲፳፴፵፶፷፸፹፺፻፼፽፾፿ᎀᎁᎂᎃᎄᎅᎆᎇᎈᎉᎊᎋᎌᎍᎎᎏ᎐᎑᎒᎓᎔᎕᎖᎗᎘᎙ⶀⶁⶂⶃⶄⶅⶆⶇⶈⶉⶊⶋⶌⶍⶎⶏⶐⶑⶒⶓⶔⶕⶖ⶗⶘⶙⶚⶛⶜⶝⶞⶟ⶠⶡⶢⶣⶤⶥⶦ⶧ⶨⶩⶪⶫⶬⶭⶮ⶯ⶰⶱⶲⶳⶴⶵⶶ⶷ⶸⶹⶺⶻⶼⶽⶾ⶿ⷀⷁⷂⷃⷄⷅⷆ⷇ⷈⷉⷊⷋⷌⷍⷎ⷏ⷐⷑⷒⷓⷔⷕⷖ⷗ⷘⷙⷚⷛⷜⷝⷞꬁꬂꬃꬄꬅꬆ꬇꬈ꬉꬊꬋꬌꬍꬎ꬏꬐ꬑꬒꬓꬔꬕꬖ꬗꬘꬙꬚꬛꬜꬝꬞꬟ꬠꬡꬢꬣꬤꬥꬦ꬧ꬨꬩꬪꬫꬬꬭꬮ𞟠𞟡𞟢𞟣𞟤𞟥𞟦𞟧𞟨𞟩𞟪𞟫𞟬𞟭𞟮𞟯𞟰𞟱𞟲𞟳𞟴𞟵𞟶𞟷𞟸𞟹𞟺𞟻𞟼𞟽𞟾";
  this.s16 = "ሀለሐ𞟠መሠረሰሸⶠቀቐⷀበቨተቸⶨኀነኘከⷈኸⷐወዐዘዠⶰየደዸጀገጘⷘጠጨⶸꬠጰጸꬨፀፈፐ";
  this.s17 = "ሁሉሑ𞟡ሙሡሩሱሹⶡቁቑⷁቡቩቱቹⶩኁኑኙኩⷉኹⷑዉዑዙዡⶱዩዱዹጁጉጙⷙጡጩⶹꬡጱጹꬩፁፉፑ";
  this.s18 = "ሂሊሒ𞟢ሚሢሪሲሺⶢቂቒⷂቢቪቲቺⶪኂኒኚኪⷊኺⷒዊዒዚዢⶲዪዲዺጂጊጚⷚጢጪⶺꬢጲጺꬪፂፊፒ";
  this.s19 = "ሃላሓ𞟣ማሣራሳሻⶣቃቓⷃባቫታቻⶫኃናኛካⷋኻⷓዋዓዛዣⶳያዳዻጃጋጛⷛጣጫⶻꬣጳጻꬫፃፋፓ";
  this.s20 = "ሄሌሔ𞟤ሜሤሬሴሼⶤቄቔⷄቤቬቴቼⶬኄኔኜኬⷌኼⷔዌዔዜዤⶴዬዴዼጄጌጜⷜጤጬⶼꬤጴጼꬬፄፌፔ";
  this.s21 = "ህልሕ𞟥ምሥርስሽⶥቅቕⷅብቭትችⶭኅንኝክⷍኽⷕውዐዝዥⶵይድዽጅግጝⷝጥጭⶽꬥጵጽꬭፅፍፕ";
  this.s22 = "ሆሎሖ𞟦ሞሦሮሶሾⶦቆቖⷆቦቮቶቾⶮኅኖኞኮⷎኾⷖዎዖዞዦⶶዮዶዾጆጎጞⷞጦጮⶾꬦጶጾꬮፆፎፖ";
  this.s23 = "hlHmrsxqQbvtcnNkKwzZydDjgGTCPSfp";
  this.s24 = "ህልሕምርስሽቅቕብቭትችንኝክኽውዝዥይድዽጅግጝጥጭጵጽፍፕ";
  this.s25 = "LMRXBVWYJF";
  this.s26 = "ልምርሽብቭውይጅፍ";
  this.s27 = "ህልምርስሽቅብትችኅንኝአክውዝይድዽጅግጥጭጵፅፕ";
  this.s28 = "ሆሎሞሮሶሾቆቦቶቾኆኖኞኦኮዎዞዮዶዾጆጎጦጮጶፆፖ";
  this.s29 = "ሇⶀⶁⶂⶃⶄቇⶅⶆⶇኇⶈⶉⶊኯዏⶋዯⶌⶍⶎጏⶏⶐⶑፇⶒ";
  this.s30 = "ꬁꬉꬑ";
  this.s31 = "ꬂꬊꬒ";
  this.s32 = "ꬃꬋꬓ";
  this.s33 = "ꬄꬌꬔ";
  this.s34 = "ꬅꬍꬕ";
  this.s35 = "ꬆꬎꬖ";
  this.s36 = "ቃካጋ";
  this.s37 = "ቍኵጕ";
  this.s38 = "ቊኲጒᎁᎅᎉᎍ";
  this.s39 = "ቌኴጔᎂᎆᎊᎎ";
  this.s40 = "𞟲𞟷𞟺";
  this.s41 = "𞟰𞟵𞟸𞟭𞟳𞟻𞟽";
  this.s42 = "𞟱𞟶𞟹𞟮𞟴𞟼𞟾";
  this.s43 = "ምርፍ";
  this.s44 = "ፙፘፚ";
  this.s45 = "Y";
  this.s46 = ["", "a", "A", "u", "U", "i", "I", "e", "E", "o", "O", ""];
  this.s47 = "እአዐኡዑኢዒእዕኦዖኤ";
  this.s48 = "አኢዐዒ";
  this.s49 = "ልሕምሥርስሽብቭትችንኝዝዥድዽጅጥጭጵጽፍፕ";
  this.s50 = "ሉሑሙሡሩሱሹቡቩቱቹኑኙዙዡዱዹጁጡጩጱጹፉፑ";
  this.s51 = "ሏሗሟሧሯሷሿቧቯቷቿኗኟዟዧዷዿጇጧጯጷጿፏፗ";
  this.s52 = "ሁኁሑሙቁቑቡኩኹጉጙፉፑ";
  this.s53 = "ሃኃሓማቃቓባካኻጋጛፋፓ";
  this.s54 = "ኈኈ𞟨ᎀቈቘᎄኰዀጐⶓᎈᎌ";
  this.s55 = "ኍኍ𞟫ᎃቍቝᎇኵዅጕⶖᎋᎏ";
  this.s56 = "ኊኊ𞟩𞟭ቊቚ𞟳ኲዂጒⶔ𞟻𞟽";
  this.s57 = "ኋኋሗሟቋቛቧኳዃጓጟፏፗ";
  this.s58 = "ኌኌ𞟪𞟮ቌቜ𞟴ኴዄጔⶕ𞟼𞟾";
  this.s59 = "23456789";
  this.s60 = "፪፫፬፭፮፯፰፱";
  this.s61 = "፳፴፵፶፷፸፹፺";
  this.s62 = "123456789";
  this.s63 = "፩፪፫፬፭፮፯፰፱፲፳፴፵፶፷፸፹፺፻፼";
  this.s64 = "0123456789";
  this.s65 = ":,";
  this.s66 = "፡፣";
  this.s67 = "eE";
  this.s68 = "uU";
  this.s69 = "iI";
  this.s70 = "aA";
  this.s71 = "oO";
  this.s72 = ["", "", "", "", "", "", "", ""];
  this.s73 = "ሀሁሂሃሄሆሇኋ";
  this.s74 = "ለሉሊላሌሎⶀሏ";
  this.s75 = "ሐሑሒሓሔሖ!ሗ";
  this.s76 = "𞟠𞟡𞟢𞟣𞟤𞟥𞟦!!";
  this.s77 = "መሙሚማሜሞⶁሟ";
  this.s78 = "ሠሡሢሣሤሦ!ሧ";
  this.s79 = "ረሩሪራሬሮⶂሯ";
  this.s80 = "ሰሱሲሳሴሶⶃሷ";
  this.s81 = "!ꬁꬂꬃꬄꬆ!!";
  this.s82 = "ሸሹሺሻሼሾⶄሿ";
  this.s83 = "ⶠⶡⶢⶣⶤⶦ!!";
  this.s84 = "ቀቁቂቃቄቆቇ!";
  this.s85 = "ቐቑቒቓቔቖ!!";
  this.s86 = "ⷀⷁⷂⷃⷄⷆ!!";
  this.s87 = "በቡቢባቤቦⶅቧ";
  this.s88 = "ቨቩቪቫቬቮ!ቯ";
  this.s89 = "ተቱቲታቴቶⶆቷ";
  this.s90 = "ቸቹቺቻቼቾⶇቿ";
  this.s91 = "ⶨⶩⶪⶫⶬⶮ!!";
  this.s92 = "ኀኁኂኃኄኆኇ!";
  this.s93 = "ነኑኒናኔኖⶈኗ";
  this.s94 = "ኘኙኚኛኜኞⶉኟ";
  this.s95 = "አኡኢኣኤኦⶊኧ";
  this.s96 = "ከኩኪካኬኮኯ!";
  this.s97 = "ⷈⷉⷊⷋⷌⷍⷎ!!";
  this.s98 = "ኸኹኺኻኼኾ!!";
  this.s99 = "ⷐⷑⷒⷓⷔⷕⷖ!!";
  this.s100 = "ወዉዊዋዌዎዏ!";
  this.s101 = "ዐዑዒዓዔዖ!!";
  this.s102 = "ዘዙዚዛዜዞⶋዟ";
  this.s103 = "!ꬑꬒꬓꬔꬖ!!";
  this.s104 = "ዠዡዢዣዤዦ!ዧ";
  this.s105 = "ⶰⶱⶲⶳⶴⶶ!!";
  this.s106 = "የዩዪያዬዮዯⶌ!";
  this.s107 = "ደዱዲዳዴዶⶌዷ";
  this.s108 = "ዸዹዺዻዼዾⶍዿ";
  this.s109 = "!ꬉꬊꬋꬌꬎ!!";
  this.s110 = "ጀጁጂጃጄጆⶎጇ";
  this.s111 = "ገጉጊጋጌጎጏ!";
  this.s112 = "ጘጙጚጛጜጞ!!";
  this.s113 = "ⷘⷙⷚⷛⷜⷞ!!";
  this.s114 = "ጠጡጢጣጤጦⶏጧ";
  this.s115 = "ጨጩጪጫጬጮⶐጯ";
  this.s116 = "ⶸⶹⶺⶻⶼⶾ!!";
  this.s117 = "ꬠꬡꬢꬣꬤꬦ!!";
  this.s118 = "ጰጱጲጳጴጶⶑጷ";
  this.s119 = "ጸጹጺጻጼጾ!ጿ";
  this.s120 = "ꬨꬩꬪꬫꬬꬮ!!";
  this.s121 = "ፀፁፂፃፄፆፇ!";
  this.s122 = "ፈፉፊፋፌፎ!ፏ";
  this.s123 = "ፐፑፒፓፔፖⶒፗ";
  this.s124 = ["", "", "", "", ""];
  this.s125 = "𞟨𞟫𞟩ሗ𞟪";
  this.s126 = "ᎀᎃ𞟭ሟ𞟮";
  this.s127 = "ቈቍቊቋቌ";
  this.s128 = "ቘቝቚቛቜ";
  this.s129 = "ᎄᎇ𞟳ቧ𞟴";
  this.s130 = "ኈኍኊኋኌ";
  this.s131 = "ኰኵኲኳኴ";
  this.s132 = "ዀዅዂዃዄ";
  this.s133 = "ጐጕጒጓጔ";
  this.s134 = "ⶓⶖⶔጟⶕ";
  this.s135 = "ᎈᎋ𞟻ፏ𞟼";
  this.s136 = "ᎌᎏ𞟽ፗ𞟾";
  this.s137 = ["", "", ""];
  this.s138 = "𞟲𞟰𞟱";
  this.s139 = "𞟷𞟵𞟶";
  this.s140 = "𞟺𞟸𞟹";
  this.s141 = ["", ""];
  this.s142 = "ᎁᎂ";
  this.s143 = "ᎅᎆ";
  this.s144 = "ᎉᎊ";
  this.s145 = "ᎍᎎ";
  this.s146 = "᎐᎓᎒᎙᎑᎔᎖᎕᎗᎘_";
  this.s147 = "[1᎐2᎓3᎒4᎙5᎑6᎔7᎖8᎕9᎗0᎘]";
  this.s148 = "1234567890_";
  this.s149 =
    "`1234567890-=~!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfghjkl;'ASDFGHJKL:\"zxcvbnm,./ZXCVBNM<>?";
  this.s153 = "default";
  this.s154 = "ሀ-layer";
  this.s155 = "ሀ-layer";
  this.s156 = "ለ-layer";
  this.s157 = "ሐ-layer";
  this.s158 = "ሐ-layer";
  this.s159 = "መ-layer";
  this.s160 = "ሠ-layer";
  this.s161 = "ረ-layer";
  this.s162 = "ሰ-layer";
  this.s163 = "ሰ-layer";
  this.s164 = "legacy-ꬁ-extra";
  this.s165 = "ሸ-layer";
  this.s166 = "ሸ-layer";
  this.s167 = "legacy-ⶠ-extra";
  this.s168 = "ቀ-layer";
  this.s169 = "ቀ-layer";
  this.s170 = "ቐ-layer";
  this.s171 = "legacy-ⷀ-extra";
  this.s172 = "በ-layer";
  this.s173 = "ቨ-layer";
  this.s174 = "ተ-layer";
  this.s175 = "ቸ-layer";
  this.s176 = "ቸ-layer";
  this.s177 = "legacy-ⶨ-extra";
  this.s178 = "ኀ-layer";
  this.s179 = "legacy-ኀ-extra";
  this.s180 = "ነ-layer";
  this.s181 = "ኘ-layer";
  this.s182 = "አ-layer";
  this.s183 = "አ-layer";
  this.s184 = "ከ-layer";
  this.s185 = "ከ-layer";
  this.s186 = "legacy-ⷈ-extra";
  this.s187 = "ኸ-layer";
  this.s188 = "ኸ-layer";
  this.s189 = "legacy-ⷐ-extra";
  this.s190 = "ዐ-layer";
  this.s191 = "ዐ-layer";
  this.s192 = "ዐ-layer";
  this.s193 = "ወ-layer";
  this.s194 = "ዘ-layer";
  this.s195 = "ዘ-layer";
  this.s196 = "legacy-ꬑ-extra";
  this.s197 = "ዠ-layer";
  this.s198 = "ዠ-layer";
  this.s199 = "legacy-ⶰ-extra";
  this.s200 = "የ-layer";
  this.s201 = "ደ-layer";
  this.s202 = "legacy-ዸ-extra";
  this.s203 = "legacy-ዸ-extra";
  this.s204 = "legacy-ꬉ-extra";
  this.s205 = "ጀ-layer";
  this.s206 = "ገ-layer";
  this.s207 = "ገ-layer";
  this.s208 = "ጘ-layer";
  this.s209 = "legacy-ⷘ-extra";
  this.s210 = "ጠ-layer";
  this.s211 = "ጨ-layer";
  this.s212 = "ጨ-layer";
  this.s213 = "legacy-ⶸ-extra";
  this.s214 = "legacy-ꬠ-extra";
  this.s215 = "ጰ-layer";
  this.s216 = "ጸ-layer";
  this.s217 = "ጸ-layer";
  this.s218 = "legacy-ꬨ-extra";
  this.s219 = "ፀ-layer";
  this.s220 = "ፈ-layer";
  this.s221 = "ፐ-layer";
  this.s222 = "𞟠-layer";
  this.s223 = "𞟨-layer";
  this.s224 = "ᎀ-layer";
  this.s225 = "ቈ-layer";
  this.s226 = "ቘ-layer";
  this.s227 = "ᎄ-layer";
  this.s228 = "ኈ-layer";
  this.s229 = "ኰ-layer";
  this.s230 = "ዀ-layer";
  this.s231 = "ጐ-layer";
  this.s232 = "ⶓ-layer";
  this.s233 = "ᎈ-layer";
  this.s234 = "ᎌ-layer";
  this.s235 = "ቈ-layer";
  this.s236 = "ኰ-layer";
  this.s237 = "ጐ-layer";
  this.s238 = "ᎀ-layer";
  this.s239 = "ᎄ-layer";
  this.s240 = "ᎈ-layer";
  this.s241 = "ᎌ-layer";
  this.KVER = "17.0.332.0";
  this.KVS = [];
  this.gs = function (t, e) {
    return this.g0(t, e);
  };
  this.gs = function (t, e) {
    return this.g0(t, e);
  };
  this.g0 = function (t, e) {
    var k = KeymanWeb,
      r = 0,
      m = 0;
    if (k.KKM(e, 16384, 256)) {
      if (k.KFCM(1, t, ["እ"]) && k.KIFS(33, this.s182, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "አ");
      } else if (k.KFCM(1, t, ["ዕ"]) && k.KIFS(33, this.s190, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዐ");
      } else if (k.KFCM(1, t, ["ዐ"]) && k.KIFS(33, this.s191, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዐዐ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s16, 1, t);
      } else if (k.KIFS(33, this.s153, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "አ");
      } else if (k.KIFS(33, this.s154, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሀ");
      } else if (k.KIFS(33, this.s156, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ለ");
      } else if (k.KIFS(33, this.s157, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሐ");
      } else if (k.KIFS(33, this.s159, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "መ");
      } else if (k.KIFS(33, this.s160, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሠ");
      } else if (k.KIFS(33, this.s161, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ረ");
      } else if (k.KIFS(33, this.s162, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሰ");
      } else if (k.KIFS(33, this.s164, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s165, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሸ");
      } else if (k.KIFS(33, this.s167, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶠ");
      } else if (k.KIFS(33, this.s168, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቀ");
      } else if (k.KIFS(33, this.s170, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቐ");
      } else if (k.KIFS(33, this.s171, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷀ");
      } else if (k.KIFS(33, this.s172, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "በ");
      } else if (k.KIFS(33, this.s173, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቨ");
      } else if (k.KIFS(33, this.s174, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ተ");
      } else if (k.KIFS(33, this.s175, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቸ");
      } else if (k.KIFS(33, this.s177, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶨ");
      } else if (k.KIFS(33, this.s178, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኀ");
      } else if (k.KIFS(33, this.s179, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኀ");
      } else if (k.KIFS(33, this.s180, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ነ");
      } else if (k.KIFS(33, this.s181, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኘ");
      } else if (k.KIFS(33, this.s183, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "አ");
      } else if (k.KIFS(33, this.s184, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ከ");
      } else if (k.KIFS(33, this.s186, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷈ");
      } else if (k.KIFS(33, this.s187, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኸ");
      } else if (k.KIFS(33, this.s189, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷐ");
      } else if (k.KIFS(33, this.s192, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዐ");
      } else if (k.KIFS(33, this.s193, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ወ");
      } else if (k.KIFS(33, this.s194, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዘ");
      } else if (k.KIFS(33, this.s196, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s197, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዠ");
      } else if (k.KIFS(33, this.s199, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶰ");
      } else if (k.KIFS(33, this.s200, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "የ");
      } else if (k.KIFS(33, this.s201, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ደ");
      } else if (k.KIFS(33, this.s202, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዸ");
      } else if (k.KIFS(33, this.s204, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s205, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጀ");
      } else if (k.KIFS(33, this.s206, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ገ");
      } else if (k.KIFS(33, this.s208, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጘ");
      } else if (k.KIFS(33, this.s209, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷘ");
      } else if (k.KIFS(33, this.s210, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጠ");
      } else if (k.KIFS(33, this.s211, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጨ");
      } else if (k.KIFS(33, this.s213, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶸ");
      } else if (k.KIFS(33, this.s214, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬠ");
      } else if (k.KIFS(33, this.s215, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጰ");
      } else if (k.KIFS(33, this.s216, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጸ");
      } else if (k.KIFS(33, this.s218, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬨ");
      } else if (k.KIFS(33, this.s219, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፀ");
      } else if (k.KIFS(33, this.s220, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፈ");
      } else if (k.KIFS(33, this.s221, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፐ");
      } else if (k.KIFS(33, this.s222, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟠");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "እ");
      }
    } else if (k.KKM(e, 16384, 257)) {
      if (k.KFCM(1, t, ["እ"]) && k.KIFS(33, this.s182, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኤ");
      } else if (k.KFCM(1, t, ["ዕ"]) && k.KIFS(33, this.s190, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዔ");
      } else if (k.KFCM(1, t, ["ዐ"]) && k.KIFS(33, this.s191, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዐዔ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s20, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s33, 1, t);
      } else if (k.KIFS(33, this.s153, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኤ");
      } else if (k.KIFS(33, this.s154, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሄ");
      } else if (k.KIFS(33, this.s156, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሌ");
      } else if (k.KIFS(33, this.s157, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሔ");
      } else if (k.KIFS(33, this.s159, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሜ");
      } else if (k.KIFS(33, this.s160, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሤ");
      } else if (k.KIFS(33, this.s161, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሬ");
      } else if (k.KIFS(33, this.s162, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሴ");
      } else if (k.KIFS(33, this.s164, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬄ");
      } else if (k.KIFS(33, this.s165, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሼ");
      } else if (k.KIFS(33, this.s167, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶤ");
      } else if (k.KIFS(33, this.s168, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቄ");
      } else if (k.KIFS(33, this.s170, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቔ");
      } else if (k.KIFS(33, this.s171, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷄ");
      } else if (k.KIFS(33, this.s172, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቤ");
      } else if (k.KIFS(33, this.s173, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቬ");
      } else if (k.KIFS(33, this.s174, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቴ");
      } else if (k.KIFS(33, this.s175, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቼ");
      } else if (k.KIFS(33, this.s177, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶬ");
      } else if (k.KIFS(33, this.s178, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኄ");
      } else if (k.KIFS(33, this.s179, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኄ");
      } else if (k.KIFS(33, this.s180, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኔ");
      } else if (k.KIFS(33, this.s181, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኜ");
      } else if (k.KIFS(33, this.s183, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኤ");
      } else if (k.KIFS(33, this.s184, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኬ");
      } else if (k.KIFS(33, this.s186, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷌ");
      } else if (k.KIFS(33, this.s187, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኼ");
      } else if (k.KIFS(33, this.s189, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷔ");
      } else if (k.KIFS(33, this.s192, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዔ");
      } else if (k.KIFS(33, this.s193, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዌ");
      } else if (k.KIFS(33, this.s194, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዜ");
      } else if (k.KIFS(33, this.s196, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬔ");
      } else if (k.KIFS(33, this.s197, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዤ");
      } else if (k.KIFS(33, this.s199, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶴ");
      } else if (k.KIFS(33, this.s200, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዬ");
      } else if (k.KIFS(33, this.s201, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዴ");
      } else if (k.KIFS(33, this.s202, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዼ");
      } else if (k.KIFS(33, this.s204, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬌ");
      } else if (k.KIFS(33, this.s205, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጄ");
      } else if (k.KIFS(33, this.s206, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጌ");
      } else if (k.KIFS(33, this.s208, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጜ");
      } else if (k.KIFS(33, this.s209, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷜ");
      } else if (k.KIFS(33, this.s210, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጤ");
      } else if (k.KIFS(33, this.s211, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጬ");
      } else if (k.KIFS(33, this.s213, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶼ");
      } else if (k.KIFS(33, this.s214, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬤ");
      } else if (k.KIFS(33, this.s215, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጴ");
      } else if (k.KIFS(33, this.s216, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጼ");
      } else if (k.KIFS(33, this.s218, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬬ");
      } else if (k.KIFS(33, this.s219, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፄ");
      } else if (k.KIFS(33, this.s220, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፌ");
      } else if (k.KIFS(33, this.s221, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፔ");
      } else if (k.KIFS(33, this.s222, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟤");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኤ");
      }
    } else if (k.KKM(e, 16384, 258)) {
      if (k.KFCM(1, t, ["እ"]) && k.KIFS(33, this.s182, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኡ");
      } else if (k.KFCM(1, t, ["ዕ"]) && k.KIFS(33, this.s190, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዑ");
      } else if (k.KFCM(1, t, ["ዐ"]) && k.KIFS(33, this.s191, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዐዑ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s17, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s30, 1, t);
      } else if (k.KIFS(33, this.s153, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኡ");
      } else if (k.KIFS(33, this.s154, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሁ");
      } else if (k.KIFS(33, this.s156, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሉ");
      } else if (k.KIFS(33, this.s157, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሑ");
      } else if (k.KIFS(33, this.s159, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሙ");
      } else if (k.KIFS(33, this.s160, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሡ");
      } else if (k.KIFS(33, this.s161, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሩ");
      } else if (k.KIFS(33, this.s162, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሱ");
      } else if (k.KIFS(33, this.s164, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬁ");
      } else if (k.KIFS(33, this.s165, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሹ");
      } else if (k.KIFS(33, this.s167, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶡ");
      } else if (k.KIFS(33, this.s168, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቁ");
      } else if (k.KIFS(33, this.s170, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቑ");
      } else if (k.KIFS(33, this.s171, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷁ");
      } else if (k.KIFS(33, this.s172, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቡ");
      } else if (k.KIFS(33, this.s173, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቩ");
      } else if (k.KIFS(33, this.s174, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቱ");
      } else if (k.KIFS(33, this.s175, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቹ");
      } else if (k.KIFS(33, this.s177, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶩ");
      } else if (k.KIFS(33, this.s178, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኁ");
      } else if (k.KIFS(33, this.s179, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኁ");
      } else if (k.KIFS(33, this.s180, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኑ");
      } else if (k.KIFS(33, this.s181, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኙ");
      } else if (k.KIFS(33, this.s183, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኡ");
      } else if (k.KIFS(33, this.s184, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኩ");
      } else if (k.KIFS(33, this.s186, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷉ");
      } else if (k.KIFS(33, this.s187, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኹ");
      } else if (k.KIFS(33, this.s189, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷑ");
      } else if (k.KIFS(33, this.s192, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዑ");
      } else if (k.KIFS(33, this.s193, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዉ");
      } else if (k.KIFS(33, this.s194, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዙ");
      } else if (k.KIFS(33, this.s196, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬑ");
      } else if (k.KIFS(33, this.s197, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዡ");
      } else if (k.KIFS(33, this.s199, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶱ");
      } else if (k.KIFS(33, this.s200, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዩ");
      } else if (k.KIFS(33, this.s201, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዱ");
      } else if (k.KIFS(33, this.s202, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዹ");
      } else if (k.KIFS(33, this.s204, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬉ");
      } else if (k.KIFS(33, this.s205, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጁ");
      } else if (k.KIFS(33, this.s206, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጉ");
      } else if (k.KIFS(33, this.s208, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጙ");
      } else if (k.KIFS(33, this.s209, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷙ");
      } else if (k.KIFS(33, this.s210, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጡ");
      } else if (k.KIFS(33, this.s211, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጩ");
      } else if (k.KIFS(33, this.s213, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶹ");
      } else if (k.KIFS(33, this.s214, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬡ");
      } else if (k.KIFS(33, this.s215, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጱ");
      } else if (k.KIFS(33, this.s216, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጹ");
      } else if (k.KIFS(33, this.s218, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬩ");
      } else if (k.KIFS(33, this.s219, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፁ");
      } else if (k.KIFS(33, this.s220, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፉ");
      } else if (k.KIFS(33, this.s221, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፑ");
      } else if (k.KIFS(33, this.s222, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟡");
      }
    } else if (k.KKM(e, 16384, 259)) {
      if (k.KFCM(1, t, ["እ"]) && k.KIFS(33, this.s182, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኢ");
      } else if (k.KFCM(1, t, ["ዕ"]) && k.KIFS(33, this.s190, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዒ");
      } else if (k.KFCM(1, t, ["ዐ"]) && k.KIFS(33, this.s191, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዐዒ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s18, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s31, 1, t);
      } else if (k.KIFS(33, this.s153, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኢ");
      } else if (k.KIFS(33, this.s154, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሂ");
      } else if (k.KIFS(33, this.s156, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሊ");
      } else if (k.KIFS(33, this.s157, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሒ");
      } else if (k.KIFS(33, this.s159, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሚ");
      } else if (k.KIFS(33, this.s160, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሢ");
      } else if (k.KIFS(33, this.s161, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሪ");
      } else if (k.KIFS(33, this.s162, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሲ");
      } else if (k.KIFS(33, this.s164, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬂ");
      } else if (k.KIFS(33, this.s165, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሺ");
      } else if (k.KIFS(33, this.s167, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶢ");
      } else if (k.KIFS(33, this.s168, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቂ");
      } else if (k.KIFS(33, this.s170, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቒ");
      } else if (k.KIFS(33, this.s171, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷂ");
      } else if (k.KIFS(33, this.s172, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቢ");
      } else if (k.KIFS(33, this.s173, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቪ");
      } else if (k.KIFS(33, this.s174, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቲ");
      } else if (k.KIFS(33, this.s175, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቺ");
      } else if (k.KIFS(33, this.s177, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶪ");
      } else if (k.KIFS(33, this.s178, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኂ");
      } else if (k.KIFS(33, this.s179, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኂ");
      } else if (k.KIFS(33, this.s180, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኒ");
      } else if (k.KIFS(33, this.s181, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኚ");
      } else if (k.KIFS(33, this.s183, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኢ");
      } else if (k.KIFS(33, this.s184, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኪ");
      } else if (k.KIFS(33, this.s186, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷊ");
      } else if (k.KIFS(33, this.s187, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኺ");
      } else if (k.KIFS(33, this.s189, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷒ");
      } else if (k.KIFS(33, this.s192, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዒ");
      } else if (k.KIFS(33, this.s193, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዊ");
      } else if (k.KIFS(33, this.s194, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዚ");
      } else if (k.KIFS(33, this.s196, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬒ");
      } else if (k.KIFS(33, this.s197, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዢ");
      } else if (k.KIFS(33, this.s199, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶲ");
      } else if (k.KIFS(33, this.s200, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዪ");
      } else if (k.KIFS(33, this.s201, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዲ");
      } else if (k.KIFS(33, this.s202, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዺ");
      } else if (k.KIFS(33, this.s204, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬊ");
      } else if (k.KIFS(33, this.s205, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጂ");
      } else if (k.KIFS(33, this.s206, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጊ");
      } else if (k.KIFS(33, this.s208, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጚ");
      } else if (k.KIFS(33, this.s209, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷚ");
      } else if (k.KIFS(33, this.s210, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጢ");
      } else if (k.KIFS(33, this.s211, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጪ");
      } else if (k.KIFS(33, this.s213, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶺ");
      } else if (k.KIFS(33, this.s214, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬢ");
      } else if (k.KIFS(33, this.s215, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጲ");
      } else if (k.KIFS(33, this.s216, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጺ");
      } else if (k.KIFS(33, this.s218, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬪ");
      } else if (k.KIFS(33, this.s219, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፂ");
      } else if (k.KIFS(33, this.s220, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፊ");
      } else if (k.KIFS(33, this.s221, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፒ");
      } else if (k.KIFS(33, this.s222, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟢");
      }
    } else if (k.KKM(e, 16384, 260)) {
      if (k.KFCM(1, t, ["እ"]) && k.KIFS(33, this.s182, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኣ");
      } else if (k.KFCM(1, t, ["ዕ"]) && k.KIFS(33, this.s190, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዓ");
      } else if (k.KFCM(1, t, ["ዐ"]) && k.KIFS(33, this.s191, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዐዓ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s19, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s32, 1, t);
      } else if (k.KIFS(33, this.s153, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኣ");
      } else if (k.KIFS(33, this.s154, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሃ");
      } else if (k.KIFS(33, this.s156, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ላ");
      } else if (k.KIFS(33, this.s157, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሓ");
      } else if (k.KIFS(33, this.s159, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ማ");
      } else if (k.KIFS(33, this.s160, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሣ");
      } else if (k.KIFS(33, this.s161, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ራ");
      } else if (k.KIFS(33, this.s162, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሳ");
      } else if (k.KIFS(33, this.s164, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬃ");
      } else if (k.KIFS(33, this.s165, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሻ");
      } else if (k.KIFS(33, this.s167, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶣ");
      } else if (k.KIFS(33, this.s168, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቃ");
      } else if (k.KIFS(33, this.s170, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቓ");
      } else if (k.KIFS(33, this.s171, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷃ");
      } else if (k.KIFS(33, this.s172, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ባ");
      } else if (k.KIFS(33, this.s173, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቫ");
      } else if (k.KIFS(33, this.s174, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ታ");
      } else if (k.KIFS(33, this.s175, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቻ");
      } else if (k.KIFS(33, this.s177, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶫ");
      } else if (k.KIFS(33, this.s178, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኃ");
      } else if (k.KIFS(33, this.s179, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኃ");
      } else if (k.KIFS(33, this.s180, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ና");
      } else if (k.KIFS(33, this.s181, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኛ");
      } else if (k.KIFS(33, this.s183, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኣ");
      } else if (k.KIFS(33, this.s184, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ካ");
      } else if (k.KIFS(33, this.s186, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷋ");
      } else if (k.KIFS(33, this.s187, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኻ");
      } else if (k.KIFS(33, this.s189, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷓ");
      } else if (k.KIFS(33, this.s192, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዓ");
      } else if (k.KIFS(33, this.s193, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዋ");
      } else if (k.KIFS(33, this.s194, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዛ");
      } else if (k.KIFS(33, this.s196, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬓ");
      } else if (k.KIFS(33, this.s197, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዣ");
      } else if (k.KIFS(33, this.s199, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶳ");
      } else if (k.KIFS(33, this.s200, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ያ");
      } else if (k.KIFS(33, this.s201, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዳ");
      } else if (k.KIFS(33, this.s202, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዻ");
      } else if (k.KIFS(33, this.s204, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬋ");
      } else if (k.KIFS(33, this.s205, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጃ");
      } else if (k.KIFS(33, this.s206, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጋ");
      } else if (k.KIFS(33, this.s208, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጛ");
      } else if (k.KIFS(33, this.s209, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷛ");
      } else if (k.KIFS(33, this.s210, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጣ");
      } else if (k.KIFS(33, this.s211, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጫ");
      } else if (k.KIFS(33, this.s213, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶻ");
      } else if (k.KIFS(33, this.s214, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬣ");
      } else if (k.KIFS(33, this.s215, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጳ");
      } else if (k.KIFS(33, this.s216, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጻ");
      } else if (k.KIFS(33, this.s218, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬫ");
      } else if (k.KIFS(33, this.s219, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፃ");
      } else if (k.KIFS(33, this.s220, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፋ");
      } else if (k.KIFS(33, this.s221, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፓ");
      } else if (k.KIFS(33, this.s222, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟣");
      }
    } else if (k.KKM(e, 16384, 261)) {
      if (k.KFCM(1, t, ["እ"]) && k.KIFS(33, this.s182, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኦ");
      } else if (k.KFCM(1, t, ["ዕ"]) && k.KIFS(33, this.s190, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዖ");
      } else if (k.KFCM(1, t, ["ዐ"]) && k.KIFS(33, this.s191, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዐዖ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s22, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s35, 1, t);
      } else if (k.KIFS(33, this.s153, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኦ");
      } else if (k.KIFS(33, this.s154, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሆ");
      } else if (k.KIFS(33, this.s156, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሎ");
      } else if (k.KIFS(33, this.s157, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሖ");
      } else if (k.KIFS(33, this.s159, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሞ");
      } else if (k.KIFS(33, this.s160, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሦ");
      } else if (k.KIFS(33, this.s161, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሮ");
      } else if (k.KIFS(33, this.s162, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሶ");
      } else if (k.KIFS(33, this.s164, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬆ");
      } else if (k.KIFS(33, this.s165, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሾ");
      } else if (k.KIFS(33, this.s167, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶦ");
      } else if (k.KIFS(33, this.s168, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቆ");
      } else if (k.KIFS(33, this.s170, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቖ");
      } else if (k.KIFS(33, this.s171, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷆ");
      } else if (k.KIFS(33, this.s172, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቦ");
      } else if (k.KIFS(33, this.s173, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቮ");
      } else if (k.KIFS(33, this.s174, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቶ");
      } else if (k.KIFS(33, this.s175, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቾ");
      } else if (k.KIFS(33, this.s177, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶮ");
      } else if (k.KIFS(33, this.s178, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኆ");
      } else if (k.KIFS(33, this.s179, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኆ");
      } else if (k.KIFS(33, this.s180, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኖ");
      } else if (k.KIFS(33, this.s181, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኞ");
      } else if (k.KIFS(33, this.s183, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኦ");
      } else if (k.KIFS(33, this.s184, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኮ");
      } else if (k.KIFS(33, this.s186, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷍ");
      } else if (k.KIFS(33, this.s187, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኾ");
      } else if (k.KIFS(33, this.s189, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷕ");
      } else if (k.KIFS(33, this.s192, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዖ");
      } else if (k.KIFS(33, this.s193, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዎ");
      } else if (k.KIFS(33, this.s194, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዞ");
      } else if (k.KIFS(33, this.s196, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬖ");
      } else if (k.KIFS(33, this.s197, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዦ");
      } else if (k.KIFS(33, this.s199, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶶ");
      } else if (k.KIFS(33, this.s200, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዮ");
      } else if (k.KIFS(33, this.s201, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዶ");
      } else if (k.KIFS(33, this.s202, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዾ");
      } else if (k.KIFS(33, this.s204, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬎ");
      } else if (k.KIFS(33, this.s205, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጆ");
      } else if (k.KIFS(33, this.s206, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጎ");
      } else if (k.KIFS(33, this.s208, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጞ");
      } else if (k.KIFS(33, this.s209, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷞ");
      } else if (k.KIFS(33, this.s210, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጦ");
      } else if (k.KIFS(33, this.s211, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጮ");
      } else if (k.KIFS(33, this.s213, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶾ");
      } else if (k.KIFS(33, this.s214, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬦ");
      } else if (k.KIFS(33, this.s215, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጶ");
      } else if (k.KIFS(33, this.s216, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጾ");
      } else if (k.KIFS(33, this.s218, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ꬮ");
      } else if (k.KIFS(33, this.s219, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፆ");
      } else if (k.KIFS(33, this.s220, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፎ");
      } else if (k.KIFS(33, this.s221, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፖ");
      } else if (k.KIFS(33, this.s222, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟥");
      }
    } else if (k.KKM(e, 16384, 262)) {
      if (k.KFCM(1, t, ["እ"]) && k.KIFS(33, this.s182, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⶊ");
      } else if (k.KFCM(1, t, ["ዕ"]) && k.KIFS(33, this.s190, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "!");
      } else if (k.KFCM(1, t, ["ዐ"]) && k.KIFS(33, this.s191, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዐ!");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s27 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s29, 1, t);
      } else if (k.KIFS(33, this.s153, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶊ");
      } else if (k.KIFS(33, this.s154, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሇ");
      } else if (k.KIFS(33, this.s156, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶀ");
      } else if (k.KIFS(33, this.s157, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s159, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶁ");
      } else if (k.KIFS(33, this.s160, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s161, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶂ");
      } else if (k.KIFS(33, this.s162, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶃ");
      } else if (k.KIFS(33, this.s164, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s165, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶄ");
      } else if (k.KIFS(33, this.s167, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s168, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቇ");
      } else if (k.KIFS(33, this.s170, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s171, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s172, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶅ");
      } else if (k.KIFS(33, this.s173, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s174, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶆ");
      } else if (k.KIFS(33, this.s175, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶇ");
      } else if (k.KIFS(33, this.s177, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s178, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኇ");
      } else if (k.KIFS(33, this.s179, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኇ");
      } else if (k.KIFS(33, this.s180, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶈ");
      } else if (k.KIFS(33, this.s181, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶉ");
      } else if (k.KIFS(33, this.s183, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶊ");
      } else if (k.KIFS(33, this.s184, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኯ");
      } else if (k.KIFS(33, this.s186, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷎ");
      } else if (k.KIFS(33, this.s187, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s189, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⷖ");
      } else if (k.KIFS(33, this.s192, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s193, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዏ");
      } else if (k.KIFS(33, this.s194, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶋ");
      } else if (k.KIFS(33, this.s196, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s197, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s199, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s200, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዯ");
      } else if (k.KIFS(33, this.s201, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶌ");
      } else if (k.KIFS(33, this.s202, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶍ");
      } else if (k.KIFS(33, this.s204, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s205, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶎ");
      } else if (k.KIFS(33, this.s206, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጏ");
      } else if (k.KIFS(33, this.s208, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s209, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s210, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶏ");
      } else if (k.KIFS(33, this.s211, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶐ");
      } else if (k.KIFS(33, this.s213, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s214, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s215, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶑ");
      } else if (k.KIFS(33, this.s216, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s218, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s219, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፇ");
      } else if (k.KIFS(33, this.s220, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s221, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶒ");
      } else if (k.KIFS(33, this.s222, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟦");
      }
    } else if (k.KKM(e, 16384, 263)) {
      if (k.KFCM(1, t, ["እ"]) && k.KIFS(33, this.s182, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኧ");
      } else if (k.KFCM(1, t, ["ዕ"]) && k.KIFS(33, this.s190, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "!");
      } else if (k.KFCM(1, t, ["ዐ"]) && k.KIFS(33, this.s191, t)) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዐ!");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s49 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s51, 1, t);
      } else if (k.KIFS(33, this.s153, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኧ");
      } else if (k.KIFS(33, this.s154, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኋ");
      } else if (k.KIFS(33, this.s156, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሏ");
      } else if (k.KIFS(33, this.s157, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሗ");
      } else if (k.KIFS(33, this.s159, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሟ");
      } else if (k.KIFS(33, this.s160, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሧ");
      } else if (k.KIFS(33, this.s161, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሯ");
      } else if (k.KIFS(33, this.s162, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሷ");
      } else if (k.KIFS(33, this.s164, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s165, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሿ");
      } else if (k.KIFS(33, this.s167, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s168, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s170, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s171, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s172, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቧ");
      } else if (k.KIFS(33, this.s173, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቯ");
      } else if (k.KIFS(33, this.s174, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቷ");
      } else if (k.KIFS(33, this.s175, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቿ");
      } else if (k.KIFS(33, this.s177, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s178, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s179, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s180, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኗ");
      } else if (k.KIFS(33, this.s181, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኟ");
      } else if (k.KIFS(33, this.s183, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኧ");
      } else if (k.KIFS(33, this.s184, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s186, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s187, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s189, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s192, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s193, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s194, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዟ");
      } else if (k.KIFS(33, this.s196, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s197, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዧ");
      } else if (k.KIFS(33, this.s199, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s200, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶌ");
      } else if (k.KIFS(33, this.s201, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዷ");
      } else if (k.KIFS(33, this.s202, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዿ");
      } else if (k.KIFS(33, this.s204, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s205, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጇ");
      } else if (k.KIFS(33, this.s206, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s208, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s209, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s210, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጧ");
      } else if (k.KIFS(33, this.s211, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጯ");
      } else if (k.KIFS(33, this.s213, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s214, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s215, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጷ");
      } else if (k.KIFS(33, this.s216, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጿ");
      } else if (k.KIFS(33, this.s218, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s219, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      } else if (k.KIFS(33, this.s220, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፏ");
      } else if (k.KIFS(33, this.s221, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፗ");
      } else if (k.KIFS(33, this.s222, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "!");
      }
    } else if (k.KKM(e, 16384, 274)) {
      if (k.KFCM(1, t, ["፞"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፟");
      } else if (k.KFCM(1, t, ["፟"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፝");
      } else if (k.KFCM(1, t, ["፝"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፝");
        k.KB(t);
      }
    } else if (k.KKM(e, 16384, 275)) {
      if (k.KFCM(1, t, ["፞"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፝");
      } else if (k.KFCM(1, t, ["፟"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፟");
        k.KB(t);
      } else if (k.KFCM(1, t, ["፝"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፝");
        k.KB(t);
      }
    } else if (k.KKM(e, 16384, 276)) {
      if (k.KFCM(1, t, ["፞"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፞");
        k.KB(t);
      } else if (k.KFCM(1, t, ["፟"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፟");
        k.KB(t);
      } else if (k.KFCM(1, t, ["፝"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፝");
        k.KB(t);
      }
    } else if (k.KKM(e, 16384, 264)) {
      if (k.KFCM(1, t, [{ t: "a", a: this.s53 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s54, 1, t);
      } else if (k.KIFS(33, this.s223, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟨");
      } else if (k.KIFS(33, this.s224, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎀ");
      } else if (k.KIFS(33, this.s225, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቈ");
      } else if (k.KIFS(33, this.s226, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቘ");
      } else if (k.KIFS(33, this.s227, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎄ");
      } else if (k.KIFS(33, this.s228, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኈ");
      } else if (k.KIFS(33, this.s229, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኰ");
      } else if (k.KIFS(33, this.s230, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዀ");
      } else if (k.KIFS(33, this.s231, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጐ");
      } else if (k.KIFS(33, this.s232, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶓ");
      } else if (k.KIFS(33, this.s233, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎈ");
      } else if (k.KIFS(33, this.s234, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎌ");
      }
    } else if (k.KKM(e, 16384, 266)) {
      if (k.KFCM(1, t, [{ t: "a", a: this.s53 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s56, 1, t);
      } else if (k.KIFS(33, this.s223, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟩");
      } else if (k.KIFS(33, this.s224, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟭");
      } else if (k.KIFS(33, this.s225, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቊ");
      } else if (k.KIFS(33, this.s226, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቚ");
      } else if (k.KIFS(33, this.s227, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟳");
      } else if (k.KIFS(33, this.s228, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኊ");
      } else if (k.KIFS(33, this.s229, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኲ");
      } else if (k.KIFS(33, this.s230, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዂ");
      } else if (k.KIFS(33, this.s231, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጒ");
      } else if (k.KIFS(33, this.s232, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶔ");
      } else if (k.KIFS(33, this.s233, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟻");
      } else if (k.KIFS(33, this.s234, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟽");
      }
    } else if (k.KKM(e, 16384, 267)) {
      if (k.KFCM(1, t, [{ t: "a", a: this.s53 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s57, 1, t);
      } else if (k.KIFS(33, this.s223, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሗ");
      } else if (k.KIFS(33, this.s224, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሟ");
      } else if (k.KIFS(33, this.s225, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቋ");
      } else if (k.KIFS(33, this.s226, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቛ");
      } else if (k.KIFS(33, this.s227, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቧ");
      } else if (k.KIFS(33, this.s228, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኋ");
      } else if (k.KIFS(33, this.s229, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኳ");
      } else if (k.KIFS(33, this.s230, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዃ");
      } else if (k.KIFS(33, this.s231, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጓ");
      } else if (k.KIFS(33, this.s232, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጟ");
      } else if (k.KIFS(33, this.s233, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፏ");
      } else if (k.KIFS(33, this.s234, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፗ");
      }
    } else if (k.KKM(e, 16384, 268)) {
      if (k.KFCM(1, t, [{ t: "a", a: this.s53 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s58, 1, t);
      } else if (k.KIFS(33, this.s223, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟪");
      } else if (k.KIFS(33, this.s224, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟮");
      } else if (k.KIFS(33, this.s225, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቌ");
      } else if (k.KIFS(33, this.s226, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቜ");
      } else if (k.KIFS(33, this.s227, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟴");
      } else if (k.KIFS(33, this.s228, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኌ");
      } else if (k.KIFS(33, this.s229, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኴ");
      } else if (k.KIFS(33, this.s230, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዄ");
      } else if (k.KIFS(33, this.s231, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጔ");
      } else if (k.KIFS(33, this.s232, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶕ");
      } else if (k.KIFS(33, this.s233, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟼");
      } else if (k.KIFS(33, this.s234, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟾");
      }
    } else if (k.KKM(e, 16384, 265)) {
      if (k.KFCM(1, t, [{ t: "a", a: this.s53 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s55, 1, t);
      } else if (k.KIFS(33, this.s223, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟫");
      } else if (k.KIFS(33, this.s224, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎃ");
      } else if (k.KIFS(33, this.s225, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቍ");
      } else if (k.KIFS(33, this.s226, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቝ");
      } else if (k.KIFS(33, this.s227, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎇ");
      } else if (k.KIFS(33, this.s228, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኍ");
      } else if (k.KIFS(33, this.s229, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኵ");
      } else if (k.KIFS(33, this.s230, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዅ");
      } else if (k.KIFS(33, this.s231, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጕ");
      } else if (k.KIFS(33, this.s232, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ⶖ");
      } else if (k.KIFS(33, this.s233, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎋ");
      } else if (k.KIFS(33, this.s234, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎏ");
      }
    } else if (k.KKM(e, 16384, 269)) {
      if (k.KFCM(1, t, [{ t: "a", a: this.s36 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s40, 1, t);
      } else if (k.KIFS(33, this.s235, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟲");
      } else if (k.KIFS(33, this.s236, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟷");
      } else if (k.KIFS(33, this.s237, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟺");
      }
    } else if (k.KKM(e, 16384, 270)) {
      if (k.KFCM(1, t, [{ t: "a", a: this.s36 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s41, 1, t);
      } else if (k.KIFS(33, this.s235, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟰");
      } else if (k.KIFS(33, this.s236, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟵");
      } else if (k.KIFS(33, this.s237, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟸");
      }
    } else if (k.KKM(e, 16384, 271)) {
      if (k.KFCM(1, t, [{ t: "a", a: this.s36 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s42, 1, t);
      } else if (k.KIFS(33, this.s235, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟱");
      } else if (k.KIFS(33, this.s236, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟶");
      } else if (k.KIFS(33, this.s237, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "𞟹");
      }
    } else if (k.KKM(e, 16384, 272)) {
      if (k.KIFS(33, this.s238, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎁ");
      } else if (k.KIFS(33, this.s239, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎅ");
      } else if (k.KIFS(33, this.s240, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎉ");
      } else if (k.KIFS(33, this.s241, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎍ");
      }
    } else if (k.KKM(e, 16384, 273)) {
      if (k.KIFS(33, this.s238, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎂ");
      } else if (k.KIFS(33, this.s239, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎆ");
      } else if (k.KIFS(33, this.s240, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎊ");
      } else if (k.KIFS(33, this.s241, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ᎎ");
      }
    } else if (k.KKM(e, 16384, 277)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "፲፻");
      }
    } else if (k.KKM(e, 16384, 278)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KDO(-1, t, 1);
      }
    } else if (k.KKM(e, 16384, 279)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KB(t);
      }
    } else if (k.KKM(e, 16384, 32)) {
      if (k.KFCM(2, t, [{ t: "a", a: this.s64 }, ":"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KO(-1, t, "፡ ");
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64 }, "."])) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KO(-1, t, "። ");
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64 }, ","])) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KO(-1, t, "፣ ");
      }
    } else if (k.KKM(e, 16400, 49)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 222)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 51)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["፡"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፨");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "#");
      }
    } else if (k.KKM(e, 16400, 52)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 53)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 55)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16384, 222)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s48 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s48, 1, t);
        k.KDO(-1, t, 0);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s21, 1, t);
        k.KDO(-1, t, 1);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s50 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s50, 1, t);
        k.KDO(-1, t, 1);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s52 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s52, 1, t);
        k.KDO(-1, t, 1);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s56 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s56, 1, t);
        k.KDO(-1, t, 1);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s18 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s18, 1, t);
        k.KDO(-1, t, 1);
      }
    } else if (k.KKM(e, 16400, 57)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 48)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 56)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 187)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["፡"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፠");
      }
    } else if (k.KKM(e, 16384, 188)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s64 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s64, 1, t);
        k.KO(-1, t, ",");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፥");
      } else if (k.KFCM(1, t, ["፥"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",");
      } else if (k.KFCM(1, t, [","])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፣");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "፣");
      }
    } else if (k.KKM(e, 16384, 189)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["፡"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፦");
      }
    } else if (k.KKM(e, 16384, 190)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s15 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s15, 1, t);
        k.KO(-1, t, "።");
      }
    } else if (k.KKM(e, 16384, 191)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16384, 48)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(3, t, ["፲", "፻", "፼"])) {
        r = m = 1;
        k.KDC(3, t);
        k.KO(-1, t, "፼፼");
      } else if (k.KFCM(3, t, [{ t: "a", a: this.s60 }, "፻", "፼"])) {
        r = m = 1;
        k.KDC(3, t);
        k.KIO(-1, this.s61, 1, t);
        k.KO(-1, t, "፻፼");
      } else if (k.KFCM(3, t, [{ t: "a", a: this.s61 }, "፻", "፼"])) {
        r = m = 1;
        k.KDC(3, t);
        k.KIO(-1, this.s60, 1, t);
        k.KO(-1, t, "፼፼");
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣0");
      } else if (k.KFCM(2, t, ["፲", "፻"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KO(-1, t, "፼");
      } else if (k.KFCM(2, t, ["፲", "፼"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KO(-1, t, "፻፼");
      } else if (k.KFCM(2, t, ["፻", "፼"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KO(-1, t, "፲፻፼");
      } else if (k.KFCM(2, t, ["፼", "፼"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KO(-1, t, "፼፼");
        k.KB(t);
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s60 }, "፻"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s61, 1, t);
        k.KO(-1, t, "፻");
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s61 }, "፻"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s60, 1, t);
        k.KO(-1, t, "፼");
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s60 }, "፼"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s61, 1, t);
        k.KO(-1, t, "፼");
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s61 }, "፼"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s60, 1, t);
        k.KO(-1, t, "፻፼");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".0");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",0");
      } else if (k.KFCM(1, t, ["፩"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፲");
      } else if (k.KFCM(1, t, ["፲"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፻");
      } else if (k.KFCM(1, t, ["፻"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፲፻");
      } else if (k.KFCM(1, t, ["፼"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፲፼");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s60 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s61, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s61 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s60, 1, t);
        k.KO(-1, t, "፻");
      }
    } else if (k.KKM(e, 16384, 49)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣1");
      } else if (
        k.KFCM(2, t, [
          { t: "a", a: this.s64 },
          { t: "a", a: this.s66 },
        ])
      ) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KIO(-1, this.s65, 2, t);
        k.KO(-1, t, "1");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".1");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",1");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፩");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s63 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s63, 1, t);
        k.KO(-1, t, "፩");
      }
    } else if (k.KKM(e, 16384, 50)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣2");
      } else if (
        k.KFCM(2, t, [
          { t: "a", a: this.s64 },
          { t: "a", a: this.s66 },
        ])
      ) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KIO(-1, this.s65, 2, t);
        k.KO(-1, t, "2");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".2");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",2");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፪");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s63 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s63, 1, t);
        k.KO(-1, t, "፪");
      }
    } else if (k.KKM(e, 16384, 51)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣3");
      } else if (
        k.KFCM(2, t, [
          { t: "a", a: this.s64 },
          { t: "a", a: this.s66 },
        ])
      ) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KIO(-1, this.s65, 2, t);
        k.KO(-1, t, "3");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".3");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",3");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፫");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s63 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s63, 1, t);
        k.KO(-1, t, "፫");
      }
    } else if (k.KKM(e, 16384, 52)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣4");
      } else if (
        k.KFCM(2, t, [
          { t: "a", a: this.s64 },
          { t: "a", a: this.s66 },
        ])
      ) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KIO(-1, this.s65, 2, t);
        k.KO(-1, t, "4");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".4");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",4");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፬");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s63 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s63, 1, t);
        k.KO(-1, t, "፬");
      }
    } else if (k.KKM(e, 16384, 53)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣5");
      } else if (
        k.KFCM(2, t, [
          { t: "a", a: this.s64 },
          { t: "a", a: this.s66 },
        ])
      ) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KIO(-1, this.s65, 2, t);
        k.KO(-1, t, "5");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".5");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",5");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፭");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s63 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s63, 1, t);
        k.KO(-1, t, "፭");
      }
    } else if (k.KKM(e, 16384, 54)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣6");
      } else if (
        k.KFCM(2, t, [
          { t: "a", a: this.s64 },
          { t: "a", a: this.s66 },
        ])
      ) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KIO(-1, this.s65, 2, t);
        k.KO(-1, t, "6");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".6");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",6");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፮");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s63 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s63, 1, t);
        k.KO(-1, t, "፮");
      }
    } else if (k.KKM(e, 16384, 55)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣7");
      } else if (
        k.KFCM(2, t, [
          { t: "a", a: this.s64 },
          { t: "a", a: this.s66 },
        ])
      ) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KIO(-1, this.s65, 2, t);
        k.KO(-1, t, "7");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".7");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",7");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፯");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s63 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s63, 1, t);
        k.KO(-1, t, "፯");
      }
    } else if (k.KKM(e, 16384, 56)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣8");
      } else if (
        k.KFCM(2, t, [
          { t: "a", a: this.s64 },
          { t: "a", a: this.s66 },
        ])
      ) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KIO(-1, this.s65, 2, t);
        k.KO(-1, t, "8");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".8");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",8");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፰");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s63 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s63, 1, t);
        k.KO(-1, t, "፰");
      }
    } else if (k.KKM(e, 16384, 57)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(2, t, [{ t: "a", a: this.s64, n: 1 }, "፣"])) {
        r = m = 1;
        k.KDC(2, t);
        k.KCXO(-1, t, 2, 1);
        k.KO(-1, t, "፣9");
      } else if (
        k.KFCM(2, t, [
          { t: "a", a: this.s64 },
          { t: "a", a: this.s66 },
        ])
      ) {
        r = m = 1;
        k.KDC(2, t);
        k.KIO(-1, this.s64, 1, t);
        k.KIO(-1, this.s65, 2, t);
        k.KO(-1, t, "9");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ".9");
      } else if (k.KFCM(1, t, ["፣"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ",9");
      } else if (k.KFCM(1, t, ["#"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፱");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s63 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s63, 1, t);
        k.KO(-1, t, "፱");
      }
    } else if (k.KKM(e, 16400, 186)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s64 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s64, 1, t);
        k.KO(-1, t, ":");
      } else if (k.KFCM(1, t, ["፡"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "።");
      } else if (k.KFCM(1, t, ["።"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ":");
      } else if (k.KFCM(1, t, [":"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፡");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "፡");
      }
    } else if (k.KKM(e, 16384, 186)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["፤"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ";");
      } else if (k.KFCM(1, t, [";"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፤");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "፤");
      }
    } else if (k.KKM(e, 16400, 188)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["‹"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "«");
      } else if (k.KFCM(1, t, ["«"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "<");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "‹");
      }
    } else if (k.KKM(e, 16384, 187)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 190)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["›"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "»");
      } else if (k.KFCM(1, t, ["»"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, ">");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "›");
      }
    } else if (k.KKM(e, 16400, 191)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["?"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "፧");
      }
    } else if (k.KKM(e, 16400, 50)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 65)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["አ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኣ");
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዓ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s19, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s32, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s50 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s51, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s52 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s57, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዐ");
      }
    } else if (k.KKM(e, 16400, 66)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ብ");
      }
    } else if (k.KKM(e, 16400, 67)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s212, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጭ");
      } else if (k.KFCM(1, t, ["ጭ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⶽ");
      } else if (k.KFCM(1, t, ["ⶽ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ꬥ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጭ");
      }
    } else if (k.KKM(e, 16400, 68)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s203, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዽ");
      } else if (k.KFCM(1, t, ["ዽ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ꬍ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዽ");
      }
    } else if (k.KKM(e, 16400, 69)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["እ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኧ");
      } else if (k.KFCM(1, t, ["ኢ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኤ");
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዕ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s16, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s18 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s20, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s34, 1, t);
        k.KB(t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s31 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s33, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s39 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s42, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s41 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s42, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s42 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s39, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s52 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s54, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s56 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s58, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዕ");
      }
    } else if (k.KKM(e, 16400, 70)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፍ");
      }
    } else if (k.KKM(e, 16400, 71)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጝ");
      }
    } else if (k.KKM(e, 16400, 72)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s158, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሕ");
      } else if (k.KFCM(1, t, ["ሕ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "𞟥");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሕ");
      }
    } else if (k.KKM(e, 16400, 73)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዒ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s18, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s31, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s38 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s41, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s41 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s38, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s52 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s56, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዒ");
      }
    } else if (k.KKM(e, 16400, 74)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጅ");
      }
    } else if (k.KKM(e, 16400, 75)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s188, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኽ");
      } else if (k.KFCM(1, t, ["ኽ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⷕ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኽ");
      }
    } else if (k.KKM(e, 16400, 76)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ል");
      }
    } else if (k.KKM(e, 16400, 77)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ም");
      }
    } else if (k.KKM(e, 16400, 78)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኝ");
      }
    } else if (k.KKM(e, 16400, 79)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዖ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s22, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s28 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s29, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s35, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዖ");
      }
    } else if (k.KKM(e, 16400, 80)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጵ");
      }
    } else if (k.KKM(e, 16400, 81)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቕ");
      }
    } else if (k.KKM(e, 16400, 82)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ር");
      }
    } else if (k.KKM(e, 16400, 83)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s217, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጽ");
      } else if (k.KFCM(1, t, ["ጽ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ፅ");
      } else if (k.KFCM(1, t, ["ፅ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ꬭ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጽ");
      }
    } else if (k.KKM(e, 16400, 84)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጥ");
      }
    } else if (k.KKM(e, 16400, 85)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዑ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s17, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s30, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s37 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s40, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s52 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s55, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዑ");
      }
    } else if (k.KKM(e, 16400, 86)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቭ");
      }
    } else if (k.KKM(e, 16400, 87)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ው");
      }
    } else if (k.KKM(e, 16400, 88)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["ሽ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⶥ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሽ");
      }
    } else if (k.KKM(e, 16400, 89)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s43 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s44, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ይ");
      }
    } else if (k.KKM(e, 16400, 90)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s198, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዥ");
      } else if (k.KFCM(1, t, ["ዥ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⶵ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዥ");
      }
    } else if (k.KKM(e, 16384, 219)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16384, 220)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16384, 221)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 54)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 189)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "[1᎐2᎓3᎒4᎙5᎑6᎔7᎖8᎕9᎗0᎘]");
      }
    } else if (k.KKM(e, 16384, 192)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16384, 65)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["አ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኣ");
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዓ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s19, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s32, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s50 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s51, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s52 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s57, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "አ");
      }
    } else if (k.KKM(e, 16384, 66)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ብ");
      }
    } else if (k.KKM(e, 16384, 67)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s176, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ች");
      } else if (k.KFCM(1, t, ["ች"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⶭ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ች");
      }
    } else if (k.KKM(e, 16384, 68)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ድ");
      }
    } else if (k.KKM(e, 16384, 69)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["እ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኧ");
      } else if (k.KFCM(1, t, ["ኢ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኤ");
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዕ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s16, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s18 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s20, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s34, 1, t);
        k.KB(t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s31 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s33, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s39 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s42, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s41 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s42, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s42 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s39, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s52 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s54, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s56 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s58, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "እ");
      }
    } else if (k.KKM(e, 16384, 70)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፍ");
      }
    } else if (k.KKM(e, 16384, 71)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s207, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ግ");
      } else if (k.KFCM(1, t, ["ግ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⷝ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ግ");
      }
    } else if (k.KKM(e, 16384, 72)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s155, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ህ");
      } else if (k.KFCM(1, t, ["ህ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ኅ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ህ");
      }
    } else if (k.KKM(e, 16384, 73)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዒ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s18, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s31, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s38 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s41, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s41 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s38, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s52 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s56, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኢ");
      }
    } else if (k.KKM(e, 16384, 74)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ጅ");
      }
    } else if (k.KKM(e, 16384, 75)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s185, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ክ");
      } else if (k.KFCM(1, t, ["ክ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⷍ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ክ");
      }
    }
    if (m) {
    } else if (k.KKM(e, 16384, 76)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ል");
      }
    } else if (k.KKM(e, 16384, 77)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ም");
      }
    } else if (k.KKM(e, 16384, 78)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ን");
      }
    } else if (k.KKM(e, 16384, 79)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዖ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s22, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s28 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s29, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s35, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኦ");
      }
    } else if (k.KKM(e, 16384, 80)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ፕ");
      }
    } else if (k.KKM(e, 16384, 81)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s169, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቅ");
      } else if (k.KFCM(1, t, ["ቅ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⷅ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቅ");
      }
    } else if (k.KKM(e, 16384, 82)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ር");
      }
    } else if (k.KKM(e, 16384, 83)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s163, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ስ");
      } else if (k.KFCM(1, t, ["ስ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ሥ");
      } else if (k.KFCM(1, t, ["ሥ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ꬅ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ስ");
      }
    } else if (k.KKM(e, 16384, 84)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ት");
      }
    } else if (k.KKM(e, 16384, 85)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KFCM(1, t, ["ዐ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ዑ");
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s21 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s17, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s34 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s30, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s37 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s40, 1, t);
      } else if (k.KFCM(1, t, [{ t: "a", a: this.s52 }])) {
        r = m = 1;
        k.KDC(1, t);
        k.KIO(-1, this.s55, 1, t);
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ኡ");
      }
    } else if (k.KKM(e, 16384, 86)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ቭ");
      }
    } else if (k.KKM(e, 16384, 87)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ው");
      }
    } else if (k.KKM(e, 16384, 88)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s166, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሽ");
      } else if (k.KFCM(1, t, ["ሽ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ⶥ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ሽ");
      }
    } else if (k.KKM(e, 16384, 89)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ይ");
      }
    } else if (k.KKM(e, 16384, 90)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      } else if (k.KIFS(33, this.s195, t)) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዝ");
      } else if (k.KFCM(1, t, ["ዝ"])) {
        r = m = 1;
        k.KDC(1, t);
        k.KO(-1, t, "ꬕ");
      } else if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "ዝ");
      }
    } else if (k.KKM(e, 16400, 219)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 220)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 221)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    } else if (k.KKM(e, 16400, 192)) {
      if (
        k.KFCM(22, t, [
          "[",
          "1",
          "᎐",
          "2",
          "᎓",
          "3",
          "᎒",
          "4",
          "᎙",
          "5",
          "᎑",
          "6",
          "᎔",
          "7",
          "᎖",
          "8",
          "᎕",
          "9",
          "᎗",
          "0",
          "᎘",
          "]",
        ])
      ) {
        r = m = 1;
        k.KDC(22, t);
        r = this.g1(t, e);
        m = 2;
      }
    }
    return r;
  };
  this.g1 = function (t, e) {
    var k = KeymanWeb,
      r = 0,
      m = 0;
    if (k.KKM(e, 16384, 48)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎘");
      }
    } else if (k.KKM(e, 16384, 49)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎐");
      }
    } else if (k.KKM(e, 16384, 50)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎓");
      }
    } else if (k.KKM(e, 16384, 51)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎒");
      }
    } else if (k.KKM(e, 16384, 52)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎙");
      }
    } else if (k.KKM(e, 16384, 53)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎑");
      }
    } else if (k.KKM(e, 16384, 54)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎔");
      }
    } else if (k.KKM(e, 16384, 55)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎖");
      }
    } else if (k.KKM(e, 16384, 56)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎕");
      }
    } else if (k.KKM(e, 16384, 57)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "᎗");
      }
    } else if (k.KKM(e, 16400, 189)) {
      if (1) {
        r = m = 1;
        k.KDC(0, t);
        k.KO(-1, t, "_");
      }
    }
    if (!m && k.KIK(e)) {
      r = 1;
      k.KDC(-1, t);
      r = this.g0(t, e);
      m = 2;
    }
    return r;
  };
}
