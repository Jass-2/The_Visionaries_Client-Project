const list = document.querySelector("#news-list");

fetch('http://localhost:8000/news')
  .then(res => res.json())
  .then(newsItems => {
    newsItems.forEach(news => {
      const item = document.createElement("div");
      item.classList.add("content-item");

      item.innerHTML = `
        <p class="content-item-title">${news.title}</p>
        <div class="content-item-actions">
          <span class="content-date">${news.date}</span>
          <span class="content-location">${news.place}</span>
        </div>
      `;

      list.appendChild(item);
    });
  })
  .catch(err => {
    console.error("Error loading news:", err);
    list.innerHTML = `<p class="error-message">Failed to load news data.</p>`;
  });