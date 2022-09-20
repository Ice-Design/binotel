const btnCallback = function (t, opts) {
    return t.card("all").then(function (card) {
        let phone = card.customFieldItems[0].value.text;
        console.log(card.customFieldItems);
        return t.popup({
            title: 'Call list Binotel',
            url: './call-list.html',
            height: 278,
            args: { arg: phone },
        });
    });
};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return [{
            icon: 'https://work.ice-design.pp.ua/icons.svg',
            text: 'Binotel',
            callback: btnCallback
        }];
    }
});
