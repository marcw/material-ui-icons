import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui-next/SvgIcon';

const SvgIconCustom = global.__MUI_SvgIcon__ || SvgIcon;

let FiberPin = props =>
  <SvgIconCustom {...props}>
    <path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z" />
  </SvgIconCustom>;

FiberPin = pure(FiberPin);
FiberPin.muiName = 'SvgIcon';

export default FiberPin;
