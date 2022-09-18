const call_list = function(t) {
    return t.card('customFieldItems').then(function(card) {
        if (card.customFieldItems[0].value.text) {
            return JSON.stringify(card.customFieldItems[0].value.text, null, 2);
        }
    });
};

const btnCallback = function (t, opts) {
    return t.popup({
        title: 'Call list Binotel',
        url: './call-list.html',
        height: 278,
        args: { myArgs: call_list },
    });
};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return [{
            icon: 'https://burov.fdesign.space/bin.svg',
            text: 'Binotel',
            callback: btnCallback
        }];
    }
});
