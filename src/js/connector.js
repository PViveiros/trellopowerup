

window.TrelloPowerUp.initialize({
   

    'card-badges': function(t, options) {
    // Obtém a prioridade que se encontra no storage do card
    return t.get('card', 'shared', 'priority')
      .then(function(priority) {
        if (!priority) priority = 'Sem prioridade'; 

        var iconMap = {
          'Urgent': t.signUrl(TrelloPowerUp.util.relativeUrl('./icons/urgent.png')),
          'Important': t.signUrl(TrelloPowerUp.util.relativeUrl('./icons/important.png')),
          'High': t.signUrl(TrelloPowerUp.util.relativeUrl('./icons/high.png')),
          'Medium': t.signUrl(TrelloPowerUp.util.relativeUrl('./icons/medium.png')),
          'Low': t.signUrl(TrelloPowerUp.util.relativeUrl('./icons/low.png')),
          'Sem prioridade': t.signUrl(TrelloPowerUp.util.relativeUrl('./icons/sem-prioridade.png'))
        };

        var colorMap = {
          'Urgent': 'purple',    
          'Important': 'red',  
          'High': 'orange',
          'Medium': 'yellow',     
          'Low': 'blue',
          'Sem prioridade': 'light-gray'
        };

        return [{
          color: colorMap[priority],
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
          'Urgent': 'purple',    
          'Important': 'red',  
          'High': 'orange',
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