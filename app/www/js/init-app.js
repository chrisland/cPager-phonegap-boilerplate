"use strict";

window.app = window.app || {} ;         // there should only be one of these...

app.initialize = function() {


    app.cPager = new cPager({
        container: 'page',
        start: {
            page: 'home',
            task: false,
            content: false,
            param: {
                history: true
            }
        },
        animate: {
            timing: false, // string; css animate easing function
            direction: false, // string; direction
            duration: 0.6 // integer; duration in seconds
        },
        handler: 'pageBtn',
        handlerOff: 'disable',
        tmpl: ['home'],
        tasks: cPagerTasks,
        ctrlPath: './ctrl',
        ctrl: ['myCtrl','mySecondCtrl'],
        debug: app.LOG || false,
        onReady: function () {}
    });
}


