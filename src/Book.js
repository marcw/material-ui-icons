import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui-next/SvgIcon';

const SvgIconCustom = global.__MUI_SvgIcon__ || SvgIcon;

let Book = props =>
  <SvgIconCustom {...props}>
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
  </SvgIconCustom>;

Book = pure(Book);
Book.muiName = 'SvgIcon';

export default Book;
