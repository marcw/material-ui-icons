'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('material-ui-next/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIconCustom = global.__MUI_SvgIcon__ || _SvgIcon2.default;

var _ref = _react2.default.createElement('path', { d: 'M6 6h2v12H6zm3.5 6l8.5 6V6z' });

var SkipPrevious = function SkipPrevious(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref
  );
};

SkipPrevious = (0, _pure2.default)(SkipPrevious);
SkipPrevious.muiName = 'SvgIcon';

exports.default = SkipPrevious;