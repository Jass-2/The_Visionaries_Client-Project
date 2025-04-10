export function fetchEvents() {
  
    fetch(`http://localhost:8000/events/1`)
      .then(res => res.json())
      .then(event => {
        const featuredImg = document.querySelector("#featured-img");
        const featuredTitle = document.querySelector(".ne-event-title");
        const featuredLocation = document.querySelector(".ne-event-location");
        const featuredDescription = document.querySelector(".ne-event-description");
        const featuredDate = document.querySelector(".ne-event-date");
  
        const img = event.media?.find(m => m.media_type === 'img');
        featuredImg.src = img ? `images/${img.media_url}` : "images/placeholder.jpg";
        featuredImg.alt = event.title;
  
        featuredTitle.textContent = event.title;
        featuredLocation.textContent = event.place;
        featuredDescription.textContent = event.description;
        featuredDate.textContent = event.date;
      })
      .catch(err => {
        console.error("Failed to load featured event:", err);
      });
  

    fetch("http://localhost:8000/events")
      .then(res => res.json())
      .then(events => {
        const cardTemplate = document.querySelector("#event-card-template");
        const cardContainer = document.querySelector(".event-cards-container");
  
        events
          .filter(e => e.id !== 1)
          .forEach(event => {
            const clone = cardTemplate.content.cloneNode(true);
  
            const img = event.media?.find(m => m.media_type === "img");
            const cardImg = clone.querySelector(".ne-card-img");
            cardImg.src = img ? `images/${img.media_url}` : "images/placeholder.jpg";
            cardImg.alt = event.title;
  
            clone.querySelector(".ne-card-title").textContent = event.title;
            clone.querySelector(".ne-card-date").textContent = event.date;
            clone.querySelector(".ne-card-location").textContent = event.place;
  
            cardContainer.appendChild(clone);
          });
      })
      .catch(err => {
        console.error("Failed to load event cards:", err);
      });
  }
  