

window.TrelloPowerUp.initialize({
   

    'card-badges': function(t, options) {
    // Obtém a prioridade que se encontra no storage do card
    return t.get('card', 'shared', 'priority')
      .then(function(priority) {
        if (!priority) priority = 'Sem prioridade'; 

        var iconMap = {
          'Urgent': t.util.relativeUrl('./icons/urgent.png'),
          'Important': t.util.relativeUrl('./icons/important.png'),
          'Medium': t.util.relativeUrl('./icons/medium.png'),
          'Low': t.util.relativeUrl('./icons/low.png'),
          'Sem prioridade': t.util.relativeUrl('./icons/sem-prioridade.png')
        };

        return [{
          icon: iconMap[priority],
          refresh: 10 // backup, atualização imediata é feita pelo popup
        }];
      });
  },

  'card-detail-badges': function(t, options) {
  return t.get('card', 'shared', 'priority')
    .then(function(priority) {
      if (!priority) priority = 'Sem prioridade';

      var colorMap = {
          'Urgent': 'red',    
          'Important': 'orange',  
          'Medium': 'yellow',     
          'Low': 'blue',
          'Sem prioridade': 'light-gray'
        };
        
      return [{
        text: priority, 
        title: 'Prioridade',
        color: colorMap[priority],            
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
});