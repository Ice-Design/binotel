const call_lists = function(t) {
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

const call_list = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c67ccb9eff2798ee75b5599b4899ff4b`)
    .then(function(response) {
        response.json();
    });
const list = fetch(`https://burov.fdesign.space/binotel.php?phone=0969597771&key=ad063f-bc3c065&secret=2c33b5-b39283-10b289-7e5eea-9bc4ff0c`)
    .then(function(response) {
        return response.json();
    });
const btnCallback = function (t, opts) {
    console.log(call_list);
    console.log(list);
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
