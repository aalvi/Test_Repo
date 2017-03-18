// this is the code for masters


function showHMenu() {
    var currentForm = kony.application.getCurrentForm();
    var animObj = kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    var animConfig = {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1,
    };
    var callbackObj = {
        "animationStart": function() {},
        "animationEnd": function() {}
    };
    currentForm.flxMasterHMenu.animate(animObj, animConfig, callbackObj);
    currentForm.flxMasterHMenu.zIndex = 1000;
}

function hideHMenu() {
    var currentForm = kony.application.getCurrentForm();
    var animObj = kony.ui.createAnimation({
        "100": {
            "left": "-90%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    var animConfig = {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1,
    };
    var callbackObj = {
        "animationStart": function() {},
        "animationEnd": function() {}
    };
    currentForm.flxMasterHMenu.animate(animObj, animConfig, callbackObj);
    currentForm.flxMasterHMenu.zIndex = 0;
}