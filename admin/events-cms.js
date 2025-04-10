const eventList = document.querySelector("#events-list");

fetch('http://localhost:8000/events')
  .then(res => res.json())
  .then(events => {
    events.forEach(event => {
      const item = document.createElement("div");
      item.classList.add("content-item");

      item.innerHTML = `
        <p class="content-item-title">${event.title}</p>
        <div class="content-item-actions">
          <span class="content-date">${event.date}</span>
          <span class="content-location">${event.place}</span>
        </div>
      `;

      eventList.appendChild(item);
    });
  })
  .catch(err => {
    console.error("Error loading events:", err);
    eventList.innerHTML = `<p class="error-message">Failed to load events data.</p>`;
  });
