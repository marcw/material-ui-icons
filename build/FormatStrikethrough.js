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

var _ref = _react2.default.createElement('path', { d: 'M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z' });

var FormatStrikethrough = function FormatStrikethrough(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref
  );
};

FormatStrikethrough = (0, _pure2.default)(FormatStrikethrough);
FormatStrikethrough.muiName = 'SvgIcon';

exports.default = FormatStrikethrough;