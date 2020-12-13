"use strict";
exports.__esModule = true;
exports.RoutePaths = void 0;
var Home_1 = require("../views/Home");
var Account_1 = require("../views/Account");
var EditAccount_1 = require("../views/EditAccount");
var Profile_1 = require("../views/Profile");
var Registration_1 = require("../views/Registration");
var Achievements_1 = require("../views/Achievements");
var Settings_1 = require("../views/Settings");
var Statistics_1 = require("../views/Statistics");
var _404_1 = require("../views/404");
var Trainings_1 = require("../views/Trainings");
var TrainingExercises_1 = require("../views/TrainingExercises");
var TrainingBrakes_1 = require("../views/TrainingBrakes");
var TrainingNotes_1 = require("../views/TrainingNotes");
var TrainingHistory_1 = require("../views/TrainingHistory");
var ExerciseFinder_1 = require("../views/ExerciseFinder");
var SignIn_1 = require("../views/SignIn");
var Workout_1 = require("../views/Workout");
var RoutePaths;
(function (RoutePaths) {
    RoutePaths["HOME"] = "/";
    RoutePaths["TRAININGS"] = "/trainings";
    RoutePaths["TRAINING"] = "/trainings/:trainingId";
    RoutePaths["TRAINING_EXERCISES"] = "/trainings/:trainingId/exercises";
    RoutePaths["TRAINING_BRAKES"] = "/trainings/:trainingId/brakes";
    RoutePaths["TRAINING_NOTES"] = "/trainings/:trainingId/notes";
    RoutePaths["TRAINING_HISTORY"] = "/traininghistory";
    RoutePaths["EXERCISE_FINDER"] = "/exercise-finder";
    RoutePaths["ACCOUNT"] = "/account";
    RoutePaths["EDIT_ACCOUNT"] = "/edit-account";
    RoutePaths["PROFILE"] = "/profile";
    RoutePaths["REGISTRATION"] = "/registration";
    RoutePaths["ACHIEVEMENTS"] = "/achievements";
    RoutePaths["SETTINGS"] = "/settings";
    RoutePaths["STATISTICS"] = "/statistics";
    RoutePaths["SIGN_IN"] = "/sign-in";
    RoutePaths["WORKOUT"] = "/trainings/:trainingId/workout/:exerciseId";
})(RoutePaths = exports.RoutePaths || (exports.RoutePaths = {}));
var routes = [
    {
        path: RoutePaths.TRAININGS,
        exact: true,
        component: Trainings_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Trainings'
        }
    },
    {
        path: RoutePaths.EXERCISE_FINDER,
        exact: true,
        component: ExerciseFinder_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Exercise Finder'
        }
    },
    {
        path: RoutePaths.TRAINING_HISTORY,
        exact: true,
        component: TrainingHistory_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Training history'
        }
    },
    {
        path: RoutePaths.TRAINING_EXERCISES,
        exact: true,
        component: TrainingExercises_1["default"],
        signedInRequired: false,
        data: {
            'title': 'Training'
        }
    },
    {
        path: RoutePaths.TRAINING_BRAKES,
        exact: true,
        component: TrainingBrakes_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Training'
        }
    },
    {
        path: RoutePaths.TRAINING_NOTES,
        exact: true,
        component: TrainingNotes_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Training'
        }
    },
    {
        path: RoutePaths.HOME,
        exact: true,
        component: Home_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Home'
        }
    },
    {
        path: RoutePaths.ACCOUNT,
        exact: true,
        component: Account_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Account'
        }
    },
    {
        path: RoutePaths.EDIT_ACCOUNT,
        exact: true,
        component: EditAccount_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Account'
        }
    },
    {
        path: RoutePaths.PROFILE,
        exact: true,
        component: Profile_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Profile'
        }
    },
    {
        path: RoutePaths.REGISTRATION,
        exact: true,
        component: Registration_1["default"],
        signedInRequired: false,
        data: {
            'title': 'Registration'
        }
    },
    {
        path: RoutePaths.ACHIEVEMENTS,
        exact: true,
        component: Achievements_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Achievements'
        }
    },
    {
        path: RoutePaths.SETTINGS,
        exact: true,
        component: Settings_1["default"],
        signedInRequired: false,
        data: {
            'title': 'Settings'
        }
    },
    {
        path: RoutePaths.STATISTICS,
        exact: true,
        component: Statistics_1["default"],
        signedInRequired: true,
        data: {
            'title': 'Statistics'
        }
    },
    {
        path: RoutePaths.SIGN_IN,
        exact: true,
        component: SignIn_1["default"],
        signedInRequired: false,
        data: {
            'title': 'Sign in'
        }
    },
    {
        path: RoutePaths.WORKOUT,
        exact: true,
        component: Workout_1["default"],
        signedInRequired: false,
        data: {
            'title': 'Workout'
        }
    },
    {
        path: '',
        exact: false,
        component: _404_1["default"],
        signedInRequired: false,
        data: {
            title: 'Page not found :('
        }
    },
];
exports["default"] = routes;
