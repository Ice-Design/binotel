const t = window.TrelloPowerUp.iframe();
let number = t.arg('arg');
console.log(number);
const btnCallback = function (arg) {
    t.getAll().then((data) => {
        fetch(`https://work.ice-design.pp.ua/binotel.php?phone=${arg}&key=${data.board.shared.key}&secret=${data.board.shared.secretKey}&bought=${data.board.shared.bought}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let arrays = Object.values(data);
                for (let i = 0; i < arrays.length; i++) {
                    if (arrays[i]['callType'] != 0){
                        var minutes = parseInt((arrays[i]['billsec'] * 1000) % (1000 * 60 * 60) / (1000 * 60));
                        var seconds = ((arrays[i]['billsec'] * 1000) % (1000 * 60)) / 1000;
                        $('.title_list').after('<li class="num_'+[i]+'"></li>');
                        if (arrays[i]['disposition'] == 'ANSWER'){
                            $('.num_'+[i]).append($('<b class="yes">Прийнятий</b>'));
                            $('.num_'+[i]).append($('<span>', {'text': '🕐'+minutes+':'+seconds+' хв.'}));
                            $('.num_'+[i]+' span').append($('<span>', { 'text': new Date(arrays[i]['startTime']*1000).toLocaleString("ro-RO")}));
                            $('.num_'+[i]).append($('<button class="getCall" id="'+arrays[i]['callID']+'">📞</button>'));
                        }else if(arrays[i]['disposition'] == 'CANCEL'){
                            $('.num_'+[i]).append($('<b class="no">Відхиленний</b>'));
                            $('.num_'+[i]).append($('<span>', { 'text': new Date(arrays[i]['startTime']*1000).toLocaleString("ro-RO")}));
                        }else if(arrays[i]['disposition'] == 'BUSY'){
                            $('.num_'+[i]).append($('<b class="no">Зайнятий</b>'));
                            $('.num_'+[i]).append($('<span>', { 'text': new Date(arrays[i]['startTime']*1000).toLocaleString("ro-RO")}));
                        }
                    }
                }
        });
        let lineId = data.board.shared.lineId;
        lineId.forEach((element) => {
            $('hr.buttons').after($('<button class="calling" id="'+element+'">Call '+element+' 📞</button>'));
        });
    });
};
document.addEventListener( 'click', function ( el ) {
    if ( el.target && el.target.classList.contains( 'getCall' ) ) {
        let call_id = el.target.id;
        t.getAll().then((data) => {
            fetch(`https://work.ice-design.pp.ua/binotel.php?callid=${call_id}&key=${data.board.shared.key}&secret=${data.board.shared.secretKey}&bought=${data.board.shared.bought}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    window.open(data, '_blank');
                });
        });
    }
} );
document.addEventListener( 'click', function ( el ) {
    if ( el.target && el.target.classList.contains( 'calling' ) ) {
        let call_id = el.target.id;
        t.getAll().then((data) => {
            fetch(`https://work.ice-design.pp.ua/binotel.php?calling=${call_id}&callphones=${number}&key=${data.board.shared.key}&secret=${data.board.shared.secretKey}&bought=${data.board.shared.bought}`)
            .then((response) => {
                if (response == 'true'){
                    jQuery('.calling#'+call_id).css({"background-color": "green","color": "white"});
                }else{
                    jQuery('.calling#'+call_id).css({"background-color": "red","color": "white"});
                }
            });
        });
    }
} );
$(document).ready(function() {
    btnCallback(number);
});
