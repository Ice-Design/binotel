var btnCallback = function (t, opts) {
    let number = 0;
    t.card("all").then(function (card) {
        number = card.customFieldItems[0].value.text;
        console.log(number);
    });
    setTimeout(function() {
        console.log(number);
        return t.popup({
            title: 'Call list Binotel',
            url: './call-list.html',
            args: { phone: number},
            height: 278
        });
    }, 2000);
};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return [{
            icon: './images/icon.svg',
            text: 'Binotel',
            callback: btnCallback
        }];
    }
});