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

var _ref = _react2.default.createElement('path', { d: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z' });

var AssistantPhoto = function AssistantPhoto(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref
  );
};

AssistantPhoto = (0, _pure2.default)(AssistantPhoto);
AssistantPhoto.muiName = 'SvgIcon';

exports.default = AssistantPhoto;