//HEX CODES FOR SKIN TONES
// LIGHTEST= #ffdbac
//const LIGHT= #f1c27d
//const MED= #E0AC69
//const DARK= #c68642
//const DARKEST= #8d5524

var smallcanvas
var sctx
var lrgcanvas
var lctx
var chinIndex
var noseIndex
var eyeIndex
var earIndex
var FHIndex
var headIndex

var colors = {
  LIGHTEST: "#ffdbac",
  LIGHT: "#f1c27d",
  MED: "#E0AC69",
  DARK: "#c68642",
  DARKEST: "#8d5524",
}

var coloradjustment = {
  border: -0.1,
  base: 0,
  shadow1: -0.5,
  shadow2: -1,
}

var chins = {
  //chins 5x9
  chin1: [
    [0, 0, 0, 0, 1, 2, 2, 2, 2],
    [0, 0, 0, 0, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  chin2: [
    [0, 0, 0, 1, 2, 2, 2, 2, 2],
    [0, 0, 1, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  chin3: [
    [0, 0, 0, 0, 0, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
}

var noses = {
  //noses 11 rows x 8 columns
  nose1: [
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 1, 2],
    [0, 0, 0, 0, 0, 1, 2],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
  ],
  nose2: [
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 1, 2],
    [0, 0, 0, 0, 0, 1, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 1, 2, 2, 2],
    [0, 0, 0, 1, 2, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
  ],
  nose3: [
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 1, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 1, 2, 2, 2],
    [0, 0, 1, 2, 2, 2, 2],
    [0, 0, 0, 1, 2, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 1, 2, 2],
  ],
}

var foreHeads = {
  FH1: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2],
  ],
  FH2: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2],
  ],
  FH3: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2],
  ],
  FH4: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2],
  ],
}

var Heads = {
  Head1: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 3, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 1, 1, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 1, 1, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 1, 0, 0],
  ],

  Head2: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 3, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 1, 1, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 1, 1, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 1, 0, 0],
  ],
  Head3: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 1, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 1, 0, 0],
  ],
}

var Eyes = {
  Eye1: [
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 3, 3, 2, 3, 3, 2, 2],
    [2, 2, 3, 3, 3, 3, 3, 2, 2],
    [2, 3, 3, 2, 5, 5, 3, 2, 2],
    [2, 3, 3, 6, 6, 5, 3, 2, 2],
    [2, 3, 3, 6, 6, 5, 3, 2, 2],
    [1, 2, 3, 6, 5, 5, 3, 2, 2],
    [1, 2, 2, 2, 5, 3, 3, 2, 2],
    [2, 2, 2, 2, 2, 3, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
  ],
  Eye2: [
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 3, 3, 2, 3, 3, 2, 2],
    [2, 2, 3, 3, 3, 3, 3, 2, 2],
    [2, 3, 3, 2, 5, 5, 3, 2, 2],
    [2, 3, 3, 6, 6, 6, 5, 2, 2],
    [2, 3, 3, 6, 6, 5, 3, 2, 2],
    [1, 2, 3, 5, 5, 5, 3, 2, 2],
    [1, 2, 2, 2, 2, 3, 3, 2, 2],
    [2, 2, 2, 2, 2, 3, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
  ],
  Eye3: [
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 3, 3, 2, 3, 3, 2, 2],
    [2, 2, 3, 3, 3, 3, 3, 2, 2],
    [2, 3, 3, 5, 5, 5, 3, 2, 2],
    [2, 3, 3, 6, 6, 5, 5, 2, 2],
    [2, 3, 3, 6, 6, 5, 3, 2, 2],
    [1, 2, 3, 6, 6, 5, 3, 2, 2],
    [1, 2, 2, 5, 5, 5, 3, 2, 2],
    [2, 2, 2, 2, 2, 3, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
  ],
}

var Ears = {
  Ear1: [
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 3, 3, 3, 2],
    [2, 2, 1, 1, 3, 3, 2],
    [2, 2, 2, 1, 1, 4, 2],
    [2, 2, 2, 2, 1, 4, 2],
    [2, 2, 2, 2, 1, 3, 2],
    [2, 2, 2, 2, 1, 4, 2],
    [2, 2, 2, 2, 1, 4, 2],
    [2, 2, 1, 1, 1, 2, 2],
    [2, 2, 1, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
  ],
  Ear2: [
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 1, 1, 3, 3, 2],
    [2, 2, 1, 2, 1, 3, 2],
    [2, 2, 1, 2, 1, 4, 2],
    [2, 2, 1, 2, 1, 4, 2],
    [2, 2, 2, 2, 1, 3, 2],
    [2, 2, 2, 2, 1, 4, 2],
    [2, 2, 2, 2, 1, 4, 2],
    [2, 2, 1, 1, 1, 2, 2],
    [2, 2, 1, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
  ],
  Ear3: [
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 1, 1, 1, 4, 2],
    [2, 2, 1, 2, 1, 4, 2],
    [2, 2, 2, 1, 1, 3, 2],
    [2, 2, 2, 2, 1, 4, 2],
    [2, 2, 1, 2, 1, 3, 2],
    [2, 2, 1, 1, 1, 4, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
  ],
}

var colormap = []

var Head1, Head2, Head3
var Eye1, Eye2, Eye3
var Ears1, Ears2, Ears3
var BOH, neck

function init() {
  //load ALL bitmaps for each type of facial component

  lrgcanvas = document.getElementById("lrgCnv")
  lctx = lrgcanvas.getContext("2d")

  //back of head, 8x11
  BOH = {
    BOH1: [
      [2, 2, 3, 3, 3, 3, 1, 0, 0],
      [2, 2, 3, 3, 3, 3, 1, 0, 0],
      [2, 2, 2, 3, 3, 4, 1, 0, 0],
      [2, 2, 2, 3, 3, 3, 1, 0, 0],
      [2, 2, 2, 3, 3, 4, 1, 0, 0],
      [2, 2, 2, 3, 3, 4, 1, 0, 0],
      [2, 2, 2, 3, 3, 3, 1, 0, 0],
      [2, 2, 2, 3, 3, 3, 1, 0, 0],
      [2, 2, 3, 3, 4, 1, 0, 0, 0],
      [2, 2, 3, 3, 1, 0, 0, 0, 0],
      [2, 2, 4, 1, 0, 0, 0, 0, 0],
    ],
  }

  //neck 21*6
  neck = {
    neck1: [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 1, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 1, 1, 1, 4, 3, 2, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 4, 3, 3, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 2, 3, 3, 3, 3, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  }
}

function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "")

  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += ("00" + c).substr(c.length)
  }

  return rgb
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

function generateHead() {
  //capture all random numbers
  //first random is skin base
  //2nd is skin tone
  //third is chin
  //4th is eyes
  //5th is forehead
  //6th is headsize
  //7th is ear
  //8th is nose

  //**************************
  //Seed Random Generator
  //**************************
  var inputString = document.getElementById("inputStr")
  var output = document.getElementById("output")
  var outputString = ""
  output.innerHTML = ""
  var scaling = parseInt(document.getElementById("scale").value)

  lctx.clearRect(0, 0, 300, 300)

  if (inputString.value == "") {
    rndString = Date.now()
  } else {
    rndString = inputString.value
  }

  output.innerHTML = `Seed string for this head is: ${rndString}`
  Math.seedrandom(rndString)

  //**************************
  //capture all random numbers
  //**************************
  var rndSkinBase, rndSkinTone, rndChin, rndEyes, rndForeHead, rndHeadSize, rndEar, rndNose
  rndSkinBase = Math.random()
  rndSkinTone = Math.random()
  rndChin = Math.random()
  rndEyes = Math.random()
  rndForeHead = Math.random()
  rndHeadSize = Math.random()
  rndEar = Math.random()
  rndNose = Math.random()

  if (rndSkinTone < 0.5) {
    //negative value
    rndSkinTone = rndSkinTone * -1 // if 0 to .5, convert to -.5 to 0
  } else {
    rndSkinTone = rndSkinTone - 0.5 // if .50001 to 1, convert to 0 to .5
  }

  //**************************
  //establish base color
  //**************************
  var colorIndex = Math.floor(rndSkinBase * 5)
  var skinColor

  // convert object to key's array
  var keys = Object.keys(colors)
  // iterate over object
  keys.forEach((key, index) => {
    if (index == colorIndex) skinColor = key
  })

  //**************************
  //establish tones for border, and shadows
  //**************************
  //color[0] = transparent, no touchy

  colormap[2] = ColorLuminance(colors[skinColor], rndSkinTone)
  colormap[1] = ColorLuminance(colormap[2], -0.2)
  colormap[3] = ColorLuminance(colormap[2], -0.025)
  colormap[4] = ColorLuminance(colormap[2], -0.075)
  colormap[5] = "#ffffff"
  do {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    var colorString = "#" + randomColor
    var result = /^#[0-9A-F]{6}$/i.test(colorString)
  } while (!result)

  colormap[6] = colorString

  console.clear()
  console.log(colormap[6])

  //**************************
  //Pick Chin,Nose, Eyes, Ears, FH, Headsize...
  //**************************
  chinIndex = Math.floor(rndChin * 3)
  noseIndex = Math.floor(rndNose * 3)
  eyeIndex = Math.floor(rndEyes * 3)
  earIndex = Math.floor(rndEar * 3)
  FHIndex = Math.floor(rndForeHead * 4)
  headIndex = Math.floor(rndHeadSize * 3)

  //chins
  //drawSmall(sctx, chins, 0, 24, 9, 5, chinIndex)
  draw(lctx, scaling, chins, 0, 24, 9, 5, noseIndex)
  //noses
  //drawSmall(sctx, noses, 0, 13, 7, 11, noseIndex)
  draw(lctx, scaling, noses, 0, 13, 7, 11, noseIndex)
  //FH
  //drawSmall(sctx, foreHeads, 0, 0, 12, 13, FHIndex)
  draw(lctx, scaling, foreHeads, 0, 0, 12, 13, FHIndex)
  //Heads
  //drawSmall(sctx, Heads, 12, 0, 18, 13, headIndex)
  draw(lctx, scaling, Heads, 12, 0, 18, 13, headIndex)
  //Eyes
  // drawSmall(sctx, Eyes, 6, 13, 9, 11, eyeIndex)
  draw(lctx, scaling, Eyes, 6, 13, 9, 11, eyeIndex)
  //Ears
  //drawSmall(sctx, Ears, 14, 13, 7, 11, earIndex)
  draw(lctx, scaling, Ears, 14, 13, 7, 11, earIndex)
  //BOH
  //drawSmall(sctx, BOH, 21, 13, 9, 11, 0)
  draw(lctx, scaling, BOH, 21, 13, 9, 11, 0)

  //neck
  //drawSmall(sctx, neck, 9, 24, 21, 6, 0)
  draw(lctx, scaling, neck, 9, 24, 21, 6, 0)
}

function draw(context, scale, partToDraw, start_locx, start_locy, width, height, partindex) {
  //Create Image Data to start filling by each part
  //chin

  var drawData = context.createImageData(width * scale, height * scale)
  var dataindex = 0
  const keys = Object.keys(partToDraw)

  keys.forEach((key, index) => {
    //pick out the right  matrix
    if (index == partindex) {
      //now loop through each row in matrix
      partToDraw[key].forEach((row, rowindex) => {
        //this is each row
        for (let r = 0; r < scale; r++) {
          //10 pixels for each row (y)

          partToDraw[key][rowindex].forEach((element, i) => {
            //each element in row

            for (let j = 0; j < scale; j++) {
              //10pixels for each element (x)

              if (element) {
                //colored pixel

                drawData.data[dataindex] = hexToRgb(colormap[element]).r
                dataindex++
                drawData.data[dataindex] = hexToRgb(colormap[element]).g
                dataindex++
                drawData.data[dataindex] = hexToRgb(colormap[element]).b
                dataindex++
                drawData.data[dataindex] = 255
                dataindex++
              } else {
                //transparent pixel
                drawData.data[dataindex] = 255 // R value
                dataindex++
                drawData.data[dataindex] = 255 // G value
                dataindex++
                drawData.data[dataindex] = 255 // B value
                dataindex++
                drawData.data[dataindex] = 0 // A value
                dataindex++
              }
              //console.log(dataindex)
            }
          })
        }
      })
    }
  })

  context.putImageData(drawData, start_locx * scale, start_locy * scale)
}
