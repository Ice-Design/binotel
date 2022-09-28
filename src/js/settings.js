const t = window.TrelloPowerUp.iframe();

document.querySelector('.api #key').addEventListener('change', (e) => {
    t.set('board', 'shared', 'key', e.target.value);
});
document.querySelector('.api #secret-key').addEventListener('change', (e) => {
    t.set('board', 'shared', 'secret', e.target.value);
});
document.querySelector('.api #bought-key').addEventListener('change', (e) => {
    t.set('board', 'shared', 'bought', e.target.value);
});
document.querySelector('.api #customFields').addEventListener('change', (e) => {
    t.set('board', 'shared', 'customFields', e.target.value);
});

t.render(() => {
  return t.getAll().then((data) => {
    t.board("all").then(function (board) {
        if(board.customFields){
            let arrays = board.customFields;
            for (let i = 0; i < arrays.length; i++) {
                jQuery('.api #customFields').append(jQuery("<option></option>", {value: arrays[i]['id'], text: arrays[i]['name']}));
                if (data && data.board.shared.customFields == arrays[i]['id']) {
                    jQuery('.api #customFields option')[i].selected = true;
                }
            }
        }
    });
    if (data && data.board.shared.key) {
      document.querySelector('.api #key').value = data.board.shared.key;
    }
    if (data && data.board.shared.secret) {
        document.querySelector(`.api #secret-key`).value = data.board.shared.secret;
    }
    if (data && data.board.shared.bought) {
        document.querySelector(`.api #bought-key`).value = data.board.shared.bought;
    }
    var context = t.getContext();
    document.querySelector(`b.id-bord`).textContent = context.board;
  });
});