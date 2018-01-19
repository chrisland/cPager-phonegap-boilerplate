"use strict";

app.cPager.ctrl('myCtrl', {

    myTask: function () {
        console.log('---> myTask 1. ');

        // Your Code here...

        return function () {
            console.log('---> myTask 2. ');

            // Your Code here...

        };
    },
    onlyTask: function () {
        console.log('---> Only Task; No PageChange');

        // Your Code here...

        return false;
    },
    myAnimateTask: function () {
        console.log('---> myAnimateTask 1. ');

        // Your Code here...

        return function () {
            console.log('---> myAnimateTask 2. ');

            // Your Code here...

            return function () {
                console.log('---> myAnimateTask 3. ');
    
                // Your Code here...

            };
        };
    }

});