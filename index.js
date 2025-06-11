document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guest-form');
    const input = document.getElementById('guest-name');
    const list = document.getElementById('guest-list');
    const categorySelect = document.getElementById('guest-category');
    const MAX_GUESTS = 10;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = input.value.trim();
      const category = categorySelect.value;
  
      if (!name) return;
      if (list.children.length >= MAX_GUESTS) {
        alert('Guest limit reached (10)');
        return;
      }
  
      const li = document.createElement('li');
      li.className = `guest-item ${category.toLowerCase()}`;
  
      const span = document.createElement('span');
      span.textContent = `${name} (${category}) - Added at ${new Date().toLocaleTimeString()}`;
  
      const rsvpBtn = document.createElement('button');
      rsvpBtn.textContent = 'Attending';
      rsvpBtn.className = 'rsvp';
      rsvpBtn.addEventListener('click', () => {
        rsvpBtn.textContent =
          rsvpBtn.textContent === 'Attending' ? 'Not Attending' : 'Attending';
      });
  
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => {
        const newName = prompt('Enter new name:', name);
        if (newName) span.textContent = `${newName} (${category}) - Edited at ${new Date().toLocaleTimeString()}`;
      });
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => li.remove());
  
      li.append(span, rsvpBtn, editBtn, removeBtn);
      list.appendChild(li);
  
      form.reset();
    });
  });