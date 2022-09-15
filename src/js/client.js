var ICON = 'https://binotel.netlify.app/images/icon.svg';

var btnCallback = function (t, opts) {
    let number = 0;
    return t.popup({
        title: 'Call list Binotel',
        url: './call-list.html',
        args: { phone: t.card("customFieldItems").then(function (card) {
                return card.customFieldItems[0].value.text;
            })
        },
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