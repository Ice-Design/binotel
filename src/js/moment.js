const call_list = function(number) {
    return fetch(`https://work.ice-design.pp.ua/binotel.php?phone=${number}&key=ad063f-bc3c065&secret=2c33b5-b39283-10b289-7e5eea-9bc4ff0c`)
    .then(function(response) {
        return response.json();
    })
};

const t = window.TrelloPowerUp.iframe();
let phone;
t.card("all").then(function (card) {
    phone = card.customFieldItems[0].value.text;
});
console.log(call_list(phone));

document.getElementById('auth-btn').addEventListener('click', function(){
    const t = window.TrelloPowerUp.iframe();
    let phone;
    t.card("all").then(function (card) {
        phone = card.customFieldItems[0].value.text;
    });
    console.log(phone);
    console.log(call_list(phone));
});