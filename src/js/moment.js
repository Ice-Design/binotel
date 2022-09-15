const t = window.TrelloPowerUp.iframe();
const call_list = function(t) {
    return t.card('customFieldItems').then(function(card) {
        if (card.customFieldItems[0].value.text) {
            const number = card.customFieldItems[0].value.text;
            // our card has a location, let's fetch the current weather
            return fetch(`https://burov.fdesign.space/binotel.php?phone=${number}&key=ad063f-bc3c065&secret=2c33b5-b39283-10b289-7e5eea-9bc4ff0c`)
                .then(function(response) {
                    return response.json();
                })
        }
        return null;
    });
};
console.log(call_list);

document.getElementById('auth-btn').addEventListener('click', function(){
    console.log(call_list);
});