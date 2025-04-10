const contentList = document.querySelector('.content-list');

fetch('http://localhost:8000/letters')
  .then(res => res.json())
  .then(letters => {
    contentList.innerHTML = '';
    letters.forEach(letter => {
      const item = document.createElement('div');
      item.classList.add('content-item');
      item.innerHTML = `
        <p class="content-item-title">${letter.flname} — (${letter.date})</p>
      `;
      contentList.appendChild(item);
    });
  })
  .catch(err => {
    console.error("Error loading letters:", err);
    contentList.innerHTML = "<p>Failed to load letters.</p>";
  });
