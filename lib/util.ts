
function glob<Ext extends Extension>(ext: Ext): `**/*${Ext}` {
  return `**/*${ext}`;
}

enum Extension {
  JS = '.js',
  MJS = '.mjs',
  CJS = '.cjs',
  JSX = '.jsx',
  TS = '.ts',
  MTS = '.mts',
  CTS = '.cts',
  TSX = '.tsx',
}

const JS = Extension.JS;
const MJS = Extension.MJS;
const CJS = Extension.CJS;
const JSX = Extension.JSX;
const TS = Extension.TS;
const MTS = Extension.MTS;
const CTS = Extension.CTS;
const TSX = Extension.TSX;

const ALL_JS = [ JS, MJS, CJS, JSX ];
const ALL_TS = [ TS, MTS, CTS, TSX ];
const ALL_MS = [ JS, TS, MJS, MTS ];
const ALL_CS = [ JS, TS, CJS, CTS ];
const ALL_SX = [ JSX, TSX ];

const ALL = [ ...ALL_JS, ...ALL_TS ];

export {
  glob,
  Extension,
  JS,
  MJS,
  CJS,
  JSX,
  TS,
  MTS,
  CTS,
  TSX,
  ALL_JS,
  ALL_TS,
  ALL_MS,
  ALL_CS,
  ALL_SX,
  ALL,
};
