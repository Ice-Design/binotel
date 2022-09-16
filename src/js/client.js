const call_list = function(t) {
    return t.card('customFieldItems').then(function(card) {
        if (card.customFieldItems[0].value.text) {
            const number = card.customFieldItems[0].value.text;
            return fetch(`https://burov.fdesign.space/binotel.php?phone=${number}&key=ad063f-bc3c065&secret=2c33b5-b39283-10b289-7e5eea-9bc4ff0c`)
                .then(function(response) {
                    console.log(response.json());
                    return response.json();
                })
        }
        return null;
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
            icon: 'https://burov.fdesign.space/icons.svg',
            text: 'Binotel',
            callback: btnCallback
        }];
    }
});