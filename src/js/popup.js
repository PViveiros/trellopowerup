var t = window.TrelloPowerUp.iframe();

    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function(evt) {
        var priority = evt.target.dataset.priority;

        // Salva prioridade no card e atualiza badge imediatamente
        t.set('card', 'shared', 'priority', priority)
          .then(function() {
            return t.card('shared', 'priority');
          })
          .then(function() {
            t.closePopup();
          });
      });
    }