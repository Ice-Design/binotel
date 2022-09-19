const call_list = function(t) {
    return t.card("all").then(function (card) {
        let phone = card.customFieldItems[0].value.text;
        console.log(phone);
        return phone;
    });
};

var btnCallback = function (t, opts) {
    return t.popup({
        title: 'Call list Binotel',
        url: './call-list.html',
        height: 278,
        args: { myArgs: call_list(t) },
    });
};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return [{
            icon: 'https://burov.fdesign.space/bin.svg',
            text: 'Binotel',
            callback: btnCallback(t)
        }];
    }
});
