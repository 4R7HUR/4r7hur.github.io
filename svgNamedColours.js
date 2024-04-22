let svgNamedColors = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",//51
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
  ];


let sampledColours = [

"#71a72e",//1, Vivid Lime Green, 2-4mm, Liquitex Proffessional Acrylic Marker
"#47473d",//2, Black, Berol Handwriting Pen
"#ac9500",//3, Cadmium Yellow Medium Hue, 2-4mm, Liquitex Proffessional Acrylic Marker
"#523400",//4, Red Gold, thick, Winsor & Newton Metalic Marker
"#50636a",//5, Blue 1, fine point, Sharpie Permanent Marker 
"#9f883c",//6, Yellow 1, fine point, Sharpie Permanent Marker
"#830d00",//7, Cadmium Red Medium Hue, 2-4mm, Liquitex Proffessional Acrylic Marker
"#3b0e35",//8, Purple 1, fine point, Sharpie Permanent Marker
"#251b1a",//9, Black, fine point, Sharpie Permanent Marker
"#c0bbbb",//10, White, 1.0mm, Lit-Ontnma Permanent
"#655858",//11, Gray 1, fine point, Sharpie Permanent Marker
"#8e7600",//12, Cadmium Yellow Light Hue, 8-15mm, Liquitex Proffessional Acrylic Marker
];

svgNamedColors = sampledColours;


let sampledColoursInfo = {
  "#71a72e": {
      "hex": "#71a72e",
      "colour": "Vivid Lime Green",
      "nib size": "2-4mm",
      "product": "Liquitex Professional Acrylic Marker"
  },
  "#47473d": {
      "hex": "#47473d",
      "colour": "Black",
      "nib size": "",
      "product": "Berol Handwriting Pen"
  },
  "#ac9500": {
      "hex": "#ac9500",
      "colour": "Cadmium Yellow Medium Hue",
      "nib size": "2-4mm",
      "product": "Liquitex Professional Acrylic Marker"
  },
  "#523400": {
      "hex": "#523400",
      "colour": "Red Gold",
      "nib size": "thick",
      "product": "Winsor & Newton Metallic Marker"
  },
  "#50636a": {
      "hex": "#50636a",
      "colour": "Blue 1",
      "nib size": "fine point",
      "product": "Sharpie Permanent Marker"
  },
  "#9f883c": {
      "hex": "#9f883c",
      "colour": "Yellow 1",
      "nib size": "fine point",
      "product": "Sharpie Permanent Marker"
  },
  "#830d00": {
      "hex": "#830d00",
      "colour": "Cadmium Red Medium Hue",
      "nib size": "2-4mm",
      "product": "Liquitex Professional Acrylic Marker"
  },
  "#3b0e35": {
      "hex": "#3b0e35",
      "colour": "Purple 1",
      "nib size": "fine point",
      "product": "Sharpie Permanent Marker"
  },
  "#251b1a": {
      "hex": "#251b1a",
      "colour": "Black",
      "nib size": "fine point",
      "product": "Sharpie Permanent Marker"
  },
  "#c0bbbb": {
      "hex": "#c0bbbb",
      "colour": "White",
      "nib size": "1.0mm",
      "product": "Lit-Ontnma Permanent"
  },
  "#655858": {
      "hex": "#655858",
      "colour": "Gray 1",
      "nib size": "fine point",
      "product": "Sharpie Permanent Marker"
  },
  "#8e7600": {
      "hex": "#655858",
      "colour": "Cadmium Yellow Light Hue",
      "nib size": "8-15mm",
      "product": "Liquitex Professional Acrylic Marker"
  }
};

    