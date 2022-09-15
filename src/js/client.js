var ICON = 'https://binotel.netlify.app/images/bin.png';

var btnCallback = function (t, opts) {
    t.card("all").then(function (card) {
        console.log(card.customFieldItems);
        console.log(JSON.stringify(card, null, 2));

        return t.popup({
            title: 'Change Snooze Time',
            url: './call-list.html',
            args: { phone: card.customFieldItems },
            height: 278
        });
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