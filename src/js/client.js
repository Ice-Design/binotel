var ICON = 'https://binotel.netlify.app/images/bin.png';

var btnCallback = function (t, opts) {
    console.log(t.card('all'));
    return t.popup({
        title: 'Change Snooze Time',
        url: './call-list.html',
        args: { phone: 'You can access these with t.arg()' },
        height: 278
    });
};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return [{
            icon: ICON,
            text: 'Binotel',
            callback: btnCallback
        }];
    }
});