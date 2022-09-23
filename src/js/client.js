const btnCallback = function (t, opts) {
    return t.card("all").then(function (card) {
        for (let i = 0; i < card.customFieldItems.length; i++) {
            if (card.customFieldItems[i]['idCustomField'] == '62e17ede5809d71f00acf324'){
                let phone = card.customFieldItems[i].value.text;
                phone = phone.replace(/[\D]+/g, '');
                if (phone.substr(0, 2) == '38') phone.slice(2);
                return t.popup({
                    title: 'Call list Binotel',
                    url: './call-list.html',
                    height: 278,
                    args: { arg: phone },
                });
            }
        }

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
