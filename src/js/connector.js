window.TrelloPowerUp.initialize({

  // Badges nos cards
  'card-badges': function(t, options) {
    // Obtém a prioridade que se encontra no storage do card
    return t.get('card', 'shared', 'priority')
      .then(function(priority) {
        if (!priority) return []; 

        var iconMap = {
          'Urgent': 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png',    
          'Important': 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',  
          'Medium': 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',     
          'Low': 'https://cdn-icons-png.flaticon.com/512/1828/1828961.png',
        };

        return [{
          icon: {
            url: iconMap[priority]
          },
          refresh: 10 // backup, atualização imediata é feita pelo popup
        }];
      });
  },

  'card-detail-badges': function(t, options) {
  return t.get('card', 'shared', 'priority')
    .then(function(priority) {
      if (!priority) priority = 'Sem prioridade';

      var iconMap = {
        'Urgent': 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png',
        'Important': 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
        'Medium': 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
        'Low': 'https://cdn-icons-png.flaticon.com/512/1828/1828961.png',
        'Sem prioridade': ''
      };

      return [{
        text: priority,             
        icon: {
          url: iconMap[priority]
        },
        callback: function(t) {     
          return t.popup({
            title: 'Alterar prioridade',
            url: './priority-popup.html',
            height: 220
          });
        }
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