const t = window.TrelloPowerUp.iframe();

document.querySelector('.api #key').addEventListener('change', (e) => {
    t.set('board', 'public', 'key', e.target.value);
});
document.querySelector('.api #secret-key').addEventListener('change', (e) => {
    t.set('board', 'public', 'secret', e.target.value);
});
document.querySelector('.api #bought-key').addEventListener('change', (e) => {
    t.set('board', 'public', 'bought', e.target.value);
});
document.querySelector('.api #customFields').addEventListener('change', (e) => {
    t.set('board', 'public', 'customFields', e.target.value);
});

t.render(() => {
  return t.getAll().then((data) => {
    t.board("all").then(function (board) {
        let arrays = board.customFields;
        for (let i = 0; i < arrays.length; i++) {
            jQuery('.api #customFields').append(jQuery("<option></option>", {value: arrays[i]['id'], text: arrays[i]['name']}));
            if (data.board.public.customFields == arrays[i]['id']) {
                jQuery('.api #customFields option')[i].selected = true;
            }
        }
    });
    if (data && data.board.public.key) {
      document.querySelector('.api #key').value = data.board.public.key;
    }
    if (data && data.board.public.secret) {
        document.querySelector(`.api #secret-key`).value = data.board.public.secret;
    }
    if (data && data.board.public.bought) {
        document.querySelector(`.api #bought-key`).value = data.board.public.bought;
    }
    var context = t.getContext();
    document.querySelector(`b.id-bord`).textContent = context.board;
  });
});