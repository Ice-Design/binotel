const btnCallback = function (t, opts) {
    return t.card("all").then(function (card) {
        for (let i = 0; i < card.customFieldItems.length; i++) {
            let customFields;
            t.get('board', 'shared', 'customFields').then(function (data) { customFields = data; });
            if (card.customFieldItems[i]['idCustomField'] == customFields){
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
    },
    'show-settings': function(t, options){
        return t.popup({
            title: 'Binotel API Settings',
            url: './settings.html',
            height: 350
        });
    }
});
