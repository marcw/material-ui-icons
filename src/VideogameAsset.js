import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui-next/SvgIcon';

const SvgIconCustom = global.__MUI_SvgIcon__ || SvgIcon;

let VideogameAsset = props =>
  <SvgIconCustom {...props}>
    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </SvgIconCustom>;

VideogameAsset = pure(VideogameAsset);
VideogameAsset.muiName = 'SvgIcon';

export default VideogameAsset;
