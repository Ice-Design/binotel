const btnCallback = function (t, opts) {
    return t.card("all").then(function (card) {
        for (let i = 0; i < card.customFieldItems.length; i++) {
            if (card.customFieldItems[i]['idCustomField'] == '6323289097e72700a118e186'){
                let phone = card.customFieldItems[i].value.text;
                return t.popup({
                    title: 'Call list Binotel',
                    url: './call-list.html',
                    height: 278,
                    args: { arg: phone },
                });
                console.log(card.customFieldItems[i].value.text);
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
