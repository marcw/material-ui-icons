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

var _ref = _react2.default.createElement('path', { d: 'M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z' });

var CallMissedOutgoing = function CallMissedOutgoing(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref
  );
};

CallMissedOutgoing = (0, _pure2.default)(CallMissedOutgoing);
CallMissedOutgoing.muiName = 'SvgIcon';

exports.default = CallMissedOutgoing;