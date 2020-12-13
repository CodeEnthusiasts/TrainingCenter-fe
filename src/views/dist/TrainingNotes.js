"use strict";
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
var TrainingDetailsTemplate_1 = require("../templates/TrainingDetailsTemplate");
var MainTemplate_1 = require("../templates/MainTemplate");
var TrainingNote_1 = require("../components/molecules/TrainingNote");
var ExampleData_1 = require("../ExampleData");
var routes_1 = require("../routes");
var react_router_dom_1 = require("react-router-dom");
var H2_1 = require("../components/atoms/H2");
var TrainingNotesStyle_1 = require("./styles/TrainingNotesStyle");
var getTrainingNotes = function (trainingId) {
    var chosenTraining = ExampleData_1.Data.UserTrainings.find(function (_a) {
        var id = _a.id;
        return id === trainingId;
    });
    var result = chosenTraining ?
        chosenTraining.notes.map(function (note, i) { return react_1["default"].createElement(TrainingNote_1["default"], __assign({}, note, { key: i })); })
        : react_1["default"].createElement(H2_1["default"], null, "No notes");
    return result;
};
var TrainingNotes = function () {
    var history = react_router_dom_1.useHistory();
    var trainingId = react_router_dom_1.useParams().trainingId;
    return (react_1["default"].createElement(MainTemplate_1["default"], { routePath: routes_1.RoutePaths.TRAINING_NOTES, buttons: { leftBtn: "Back", rightBtn: "Edit" }, actions: { leftBtnAction: history.goBack } },
        react_1["default"].createElement(TrainingDetailsTemplate_1["default"], { trainingId: trainingId },
            react_1["default"].createElement(TrainingNotesStyle_1.TrainingNotesWrapper, null, getTrainingNotes(trainingId)))));
};
exports["default"] = TrainingNotes;
