"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var H1_1 = require("../components/atoms/H1");
var styled_components_1 = require("styled-components");
var WorkoutMode_1 = require("../components/organisms/WorkoutMode");
var HeaderNavigation_1 = require("../components/organisms/HeaderNavigation");
var ExampleData_1 = require("../ExampleData");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("../routes");
var WorkoutWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  padding: 100px 20px 0px;\n  text-align: center;\n"], ["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  padding: 100px 20px 0px;\n  text-align: center;\n"])));
function Workout() {
    var history = react_router_dom_1.useHistory();
    var _a = react_router_dom_1.useParams(), trainingId = _a.trainingId, exerciseId = _a.exerciseId;
    var currentTraining = ExampleData_1.Data.UserTrainings.find(function (_a) {
        var id = _a.id;
        return id === trainingId;
    });
    return (react_1["default"].createElement(WorkoutWrapper, null,
        react_1["default"].createElement(HeaderNavigation_1["default"], { title: routes_1.RoutePaths.WORKOUT, buttons: { leftBtn: 'Back', rightBtn: 'Confirm' }, actions: { leftBtnAction: history.goBack } }),
        currentTraining && currentTraining.exercises[parseInt(exerciseId) - 1] ?
            // <H1>{ currentTraining.exercises[parseInt(exerciseId) - 1].name }</H1>
            react_1["default"].createElement(WorkoutMode_1["default"], __assign({}, currentTraining.exercises[parseInt(exerciseId) - 1]))
            :
                react_1["default"].createElement(H1_1["default"], null, "Exercise does not exist")));
}
exports["default"] = Workout;
var templateObject_1;
