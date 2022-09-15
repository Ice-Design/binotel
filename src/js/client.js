var ICON = 'https://binotel.netlify.app/images/bin.png';

var btnCallback = function (t, opts) {
    t.card("all").then(function (card) {
        console.log(card.customFieldItems);
        console.log(card.customFieldItems[0].value.text);
        let number = card.customFieldItems[0].value.text;
        return t.popup({
            title: 'Call list Binotel',
            url: './call-list.html',
            args: { phone: number},
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