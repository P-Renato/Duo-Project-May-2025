function showDestination(name) {
    const sections = document.querySelectorAll('.destination');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(name).style.display = 'flex';
  }

  
  
  function openChat() {
    document.getElementById('chat-box').style.display = 'block';
  }

  function closeChat() {
    document.getElementById('chat-box').style.display = 'none';
  }