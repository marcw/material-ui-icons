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

var _ref = _react2.default.createElement('path', { d: 'M5 4v3h5.5v12h3V7H19V4z' });

var Title = function Title(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref
  );
};

Title = (0, _pure2.default)(Title);
Title.muiName = 'SvgIcon';

exports.default = Title;