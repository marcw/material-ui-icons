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

var _ref = _react2.default.createElement('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' });

var _ref2 = _react2.default.createElement('path', { d: 'M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z' });

var SignalCellularConnectedNoInternet1Bar = function SignalCellularConnectedNoInternet1Bar(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref,
    _ref2
  );
};

SignalCellularConnectedNoInternet1Bar = (0, _pure2.default)(SignalCellularConnectedNoInternet1Bar);
SignalCellularConnectedNoInternet1Bar.muiName = 'SvgIcon';

exports.default = SignalCellularConnectedNoInternet1Bar;