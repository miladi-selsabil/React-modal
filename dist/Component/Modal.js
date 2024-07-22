"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Renders a modal component with the given properties.
 *
 * @param {boolean} isOpen - Indicates whether the modal is open or not.
 * @param {function} onClose - The function to be called when the modal is closed.
 * @param {ReactNode} children - The content to be displayed in the modal.
 * @return {ReactNode} The rendered modal component.
 */
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose
  }, "Close"), children));
};
var _default = exports["default"] = Modal;