const call_list = function(t) {
    return t.card("all").then(function (card) {
        let phone = card.customFieldItems[0].value.text;
        console.log(phone);
        return fetch(`https://work.ice-design.pp.ua/binotel.php?phone=${phone}&key=ad063f-bc3c065&secret=2c33b5-b39283-10b289-7e5eea-9bc4ff0c`)
            .then(function(response) {
                return response.json();
        });
    });
};


window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return [{
            icon: 'https://burov.fdesign.space/bin.svg',
            text: 'Binotel',
            callback: t.popup({
                title: 'Call list Binotel',
                url: './call-list.html',
                height: 278,
                args: { myArgs: call_list(t) },
            })
        }];
    }
});
