const timelineList = document.querySelector("#timeline-list");

fetch('http://localhost:8000/timeline')
  .then(res => res.json())
  .then(timeline => {
    timeline.forEach(item => {
      const block = document.createElement("div");
      block.classList.add("content-item");

      block.innerHTML = `
        <p class="content-item-title">${item.title}</p>
        <div class="content-item-actions">
          <span class="content-date">${item.timespan}</span>
        </div>
      `;

      timelineList.appendChild(block);
    });
  })
  .catch(err => {
    console.error("Error loading timeline:", err);
    timelineList.innerHTML = `<p class="error-message">Failed to load timeline data.</p>`;
  });
