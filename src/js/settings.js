const t = window.TrelloPowerUp.iframe();

document.querySelector('.api #key').addEventListener('change', (e) => {
    t.set('board', 'shared', 'key', e.target.value);
});
document.querySelector('.api #secret-key').addEventListener('change', (e) => {
    t.set('board', 'shared', 'secretKey', e.target.value);
});
document.querySelector('.api #bought-key').addEventListener('change', (e) => {
    t.set('board', 'shared', 'bought', e.target.value);
});
document.querySelector('.api #customFields').addEventListener('change', (e) => {
    t.set('board', 'shared', 'customFields', e.target.value);
});
document.querySelector('.api #lineId').addEventListener('change', () => {
    t.set('board', 'shared', 'lineId', Array.from(document.querySelector('#lineId').selectedOptions).map(({ value }) => value));
});

t.render(() => {
  return t.getAll().then((data) => {
    if (data && data.board.shared.key) {
      document.querySelector('.api #key').value = data.board.shared.key;
    }
    if (data && data.board.shared.secretKey) {
      document.querySelector(`.api #secret-key`).value = data.board.shared.secretKey;
    }
    if (data && data.board.shared.bought) {
      document.querySelector(`.api #bought-key`).value = data.board.shared.bought;
    }
    var context = t.getContext();
    document.querySelector(`b.id-bord`).textContent = context.board;
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
    if (data && data.board.shared.key && data.board.shared.secretKey) {
        fetch(`https://work.ice-design.pp.ua/binotel.php?line=true&key=${data.board.shared.key}&secret=${data.board.shared.secretKey}`)
          .then((response) => {
              return response.json();
          })
          .then((datas) => {
              let arrays = Object.values(datas);
              for (let i = 0; i < arrays.length; i++) {
                  jQuery('.api #lineId').append(jQuery("<option></option>", {value: arrays[i], text: arrays[i]}));
                  if (data && data.board.shared.lineId) {
                      let lineId = data.board.shared.lineId;
                      lineId.forEach((element) => {
                          if (element == arrays[i]) {
                              jQuery('.api #customFields option')[i].selected = true;
                          }
                      });
                  }
              }
        });
    }
  });
});