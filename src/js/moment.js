const t = window.TrelloPowerUp.iframe();
let number = t.arg('arg');

const btnCallback = function (arg) {
    let arrays = [];
    fetch(`https://work.ice-design.pp.ua/binotel.php?phone=${arg}&key=ad063f-bc3c065&secret=2c33b5-b39283-10b289-7e5eea-9bc4ff0c`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        arrays = Object.values(data);
        for (let i = 0; i < arrays.length; i++) {
            if (arrays[i]['callType'] != 0){
                var minutes = parseInt((arrays[i]['billsec'] * 1000) % (1000 * 60 * 60) / (1000 * 60));
                var seconds = ((arrays[i]['billsec'] * 1000) % (1000 * 60)) / 1000;
                $('.title_list').after('<li class="num_'+[i]+'"></li>');
                if (arrays[i]['disposition'] == 'ANSWER'){
                    $('.num_'+[i]).append($('<b class="yes">Прийнятий</b>'));
                }else if(arrays[i]['disposition'] == 'CANCEL'){
                    $('.num_'+[i]).append($('<b class="no">Відхиленний</b>'));
                }
                $('.num_'+[i]).append($('<span>', {'text': '🕐'+minutes+':'+seconds+' хв.'}));
                $('.num_'+[i]+' span').append($('<span>', { 'text': new Date(arrays[i]['startTime']*1000).toLocaleString("ro-RO")}));
                $('.num_'+[i]).append($('<button id="'+arrays[i]['callID']+'">📞</button>'));
            }
        }
    });

};
console.log(btnCallback(number));
$('.call_list li button').on('click', function() {
    let call_id = $(this).attr('id');
    fetch(`https://work.ice-design.pp.ua/binotel.php?callid=${call_id}&key=ad063f-bc3c065&secret=2c33b5-b39283-10b289-7e5eea-9bc4ff0c`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        window.open(data, '_blank');
        console.log(data);
    });
});