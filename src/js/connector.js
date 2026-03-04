window.TrelloPowerUp.initialize({

  // Badges nos cards
  'card-badges': function(t, options) {
    // Obtém a prioridade que se encontra no storage do card
    return t.get('card', 'shared', 'priority')
      .then(function(priority) {
        if (!priority) return []; 

        var colorMap = {
          'Urgente': 'red',
          'Alta': 'orange',
          'Média': 'yellow',
          'Baixa': 'green'
        };

        return [{
          text: priority,
          color: colorMap[priority],
          refresh: 10 // backup, atualização imediata é feita pelo popup
        }];
      });
  },

  // Botão no card para alterar prioridade
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
      text: 'Prioridade',
      callback: function(t) {
        return t.popup({
          title: 'Escolher prioridade',
          url: './priority-popup.html',
          height: 150
        });
      }
    }];
  }

});