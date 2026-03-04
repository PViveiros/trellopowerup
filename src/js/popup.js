var t = window.TrelloPowerUp.iframe();

t.get('card', 'shared', 'priority')
  .then(function(currentPriority) {

    document.querySelectorAll('.priority').forEach(function(item) {

      if (item.dataset.priority === currentPriority) {
        item.classList.add('active');
      }

      item.addEventListener('click', function() {
        var selected = this.dataset.priority;

        if (!selected) {
          t.remove('card', 'shared', 'priority')
            .then(function() { return t.closePopup(); });
        } else {
          t.set('card', 'shared', 'priority', selected)
            .then(function() { return t.closePopup(); });
        }
      });

    });

  });