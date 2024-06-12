document.getElementById('votingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const votes = {};
    
    for (let [category, player] of formData.entries()) {
        votes[category] = player;
    }
    
    fetch('https://script.google.com/macros/s/AKfycbxY1BhDR2DMMTcqALu_1oL6a846aryfqzLp3IVqmg/dev', {
        method: 'POST',
        body: JSON.stringify(votes),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          if (data.result === 'success') {
              alert('Gracias por votar!');
          } else {
              alert('Error: ' + data.message);
          }
          console.log(data);
      }).catch(error => {
          console.error('Error:', error);
      });
});
