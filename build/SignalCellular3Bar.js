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

var _ref = _react2.default.createElement('path', { fillOpacity: '.3', d: 'M2 22h20V2z' });

var _ref2 = _react2.default.createElement('path', { d: 'M17 7L2 22h15z' });

var SignalCellular3Bar = function SignalCellular3Bar(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref,
    _ref2
  );
};

SignalCellular3Bar = (0, _pure2.default)(SignalCellular3Bar);
SignalCellular3Bar.muiName = 'SvgIcon';

exports.default = SignalCellular3Bar;