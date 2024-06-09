"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var AuthFormHome = function () {
    return (react_1["default"].createElement("div", { className: 'w-2/5' },
        react_1["default"].createElement("div", { className: "card bg-primary text-primary-content" },
            react_1["default"].createElement("div", { className: "card-body" },
                react_1["default"].createElement("button", { className: "btn btn-circle ml-auto bg-red-400 text-white border-none hover:text-black transition-all duration-300 hover:rotate-180 hover:border-none" }, "X"),
                react_1["default"].createElement("h2", { className: "card-title" }, "Your Document is Not Saved!"),
                react_1["default"].createElement("p", null, "Notes is not saved Please Login to Save or Sign Up"),
                react_1["default"].createElement("div", { className: "card-actions justify-end" },
                    react_1["default"].createElement("button", { className: "btn" }, "Log In"),
                    react_1["default"].createElement(link_1["default"], { href: "/signup", className: "btn" }, "Sign Up"))))));
};
exports["default"] = AuthFormHome;
