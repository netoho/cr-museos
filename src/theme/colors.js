export const colors = {
  primary: "#360202",
  gray: "#4D4D57",
  lightGray: "#A4A4BA",
  lighterGray: "#F3F3F3",
  calendarText: "#A8A8A8",
  calendarBorder: "#DFDFDF",
  border: "#D9D9D9",
  textColor: "#4D4D57",
  white: "white"
};

export const styleGuideColors = {
  indianRed: "#850c0b",
  slateGrey: "#6c6c76",
  slateGreyTwo: "#4d4d57",
  deepBrown: "#360202",
  emeraldGreen: "#00891f",
  white: "#d9d9d9",
  paleTeal: "#89d399",
  charcoalGrey: "#2d2d30",
  milkChocolate: "#782b2b",
  charcoalGreyTwo: "#424247",
  whiteTwo: "#f3f3f3",
  coolGrey: "#9e9ea7",
  blackTwo: "#191919",
  pinkishGrey: "#c7c7c7",
  charcoalGreyThree: "#424245",
  pumpkin: "#e89100",
  burple: "#6342da",
  darkSkyBlue: "#528ce0",
  purpley: "#775ee0",
  greenyBlue: "#45bf9a",
  greenyBlueTwo: "#3bb689",
  cornflowerBlue: "#4277da",
  pumpkinTwo: "#e27f06",
  whiteThree: "#e0e0e0",
  whiteFour: "#ffffff"
};

const r = Math.round;

const sbcRip = d => {
  let l = d.length,
    RGB = {},
    i = parseInt;
  if (l > 9) {
    d = d.split(",");
    if (d.length < 3 || d.length > 4) return null; //ErrorCheck
    (RGB[0] = i(d[0].slice(4))),
      (RGB[1] = i(d[1])),
      (RGB[2] = i(d[2])),
      (RGB[3] = d[3] ? parseFloat(d[3]) : -1);
  } else {
    if (l === 8 || l === 6 || l < 4) return null; //ErrorCheck
    if (l < 6)
      d =
        "#" +
        d[1] +
        d[1] +
        d[2] +
        d[2] +
        d[3] +
        d[3] +
        (l > 4 ? d[4] + "" + d[4] : ""); //3 digit
    (d = i(d.slice(1), 16)),
      (RGB[0] = (d >> 16) & 255),
      (RGB[1] = (d >> 8) & 255),
      (RGB[2] = d & 255),
      (RGB[3] =
        l === 9 || l === 5 ? r(((d >> 24) & 255) / 255 * 10000) / 10000 : -1);
  }
  return RGB;
};

export function shadeBlendConvert(p, from, to) {
  if (
    typeof p !== "number" ||
    p < -1 ||
    p > 1 ||
    typeof from !== "string" ||
    (from[0] !== "r" && from[0] !== "#") ||
    (typeof to !== "string" && typeof to !== "undefined")
  )
    return null; //ErrorCheck
  var h = from.length > 9,
    h =
      typeof to === "string"
        ? to.length > 9 ? true : to === "c" ? !h : false
        : h,
    b = p < 0,
    p = b ? p * -1 : p,
    to = to && to !== "c" ? to : b ? "#000000" : "#FFFFFF",
    f = sbcRip(from),
    t = sbcRip(to);
  if (!f || !t) return null; //ErrorCheck
  if (h)
    return (
      "rgb(" +
      r((t[0] - f[0]) * p + f[0]) +
      "," +
      r((t[1] - f[1]) * p + f[1]) +
      "," +
      r((t[2] - f[2]) * p + f[2]) +
      (f[3] < 0 && t[3] < 0
        ? ")"
        : "," +
          (f[3] > -1 && t[3] > -1
            ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000
            : t[3] < 0 ? f[3] : t[3]) +
          ")")
    );
  else
    return (
      "#" +
      (0x100000000 +
        (f[3] > -1 && t[3] > -1
          ? r(((t[3] - f[3]) * p + f[3]) * 255)
          : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) *
          0x1000000 +
        r((t[0] - f[0]) * p + f[0]) * 0x10000 +
        r((t[1] - f[1]) * p + f[1]) * 0x100 +
        r((t[2] - f[2]) * p + f[2])
      )
        .toString(16)
        .slice(f[3] > -1 || t[3] > -1 ? 1 : 3)
    );
}
