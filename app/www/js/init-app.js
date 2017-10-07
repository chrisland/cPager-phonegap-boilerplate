window.app = window.app || {} ;         // there should only be one of these...


app.param = {
    start: 'home'
    //,startTask: 'home'
}


app.initialize = function(param) {

    if (param) {
        for (var i in param) {
            if(param.hasOwnProperty(i)){
              app.param[i] = param[i];
            }
        }
    }

    app.cPager = new cPager({
        container: 'page',
        start: {
            page: app.param.start || false,
            task: app.param.startTask || false,
            content: false,
            param: {
                history: true
            }
        },
        handler: 'pageBtn',
        handlerOff: 'disable',
        tmpl: ['home'],
        tasks: myTask,
        ctrlPath: './task',
        ctrl: [],
        debug: app.LOG || false,
        onReady: function () {}
    });
}


