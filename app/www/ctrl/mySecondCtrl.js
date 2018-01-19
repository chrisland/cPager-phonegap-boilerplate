"use strict";

app.cPager.ctrl('mySecondCtrl', {

    mySecondTask: function () {
        console.log('---> mySecondTask 1. ');

        // Your Code here...

        return function () {
            console.log('---> mySecondTask 2. ');

            // Your Code here...

        };
    },

});