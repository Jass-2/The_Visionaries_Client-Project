export function fetchNews() {

    fetch(`http://localhost:8000/news/1`)
      .then(res => res.json())
      .then(news => {
        const featuredImg = document.querySelector("#featured-news-img");
        const featuredTitle = document.querySelector(".ne-update-title");
        const featuredLocation = document.querySelector(".ne-update-location");
        const featuredDescription = document.querySelector(".ne-update-description");
        const featuredDate = document.querySelector(".ne-update-date");
  
        const img = news.media?.find(m => m.media_type === 'img');
        featuredImg.src = img ? `images/${img.media_url}` : "images/placeholder.jpg";
        featuredImg.alt = news.title;
        
        featuredTitle.textContent = news.title;
        featuredLocation.textContent = news.place;
        featuredDescription.textContent = news.description;
        featuredDate.textContent = news.date;
      })
      .catch(err => {
        console.error("Failed to load featured news:", err);
      });
  
  
    fetch("http://localhost:8000/news")
      .then(res => res.json())
      .then(newsList => {
        const cardTemplate = document.querySelector("#news-card-template");
        const cardContainer = document.querySelector(".news-cards-container");

  
        newsList
          .filter(n => n.id !== 1)
          .forEach(news => {
            const clone = cardTemplate.content.cloneNode(true);
  
            const img = news.media?.find(m => m.media_type === "img");
            const cardImg = clone.querySelector(".ne-card-img");
            cardImg.src = img ? `images/${img.media_url}` : "images/placeholder.jpg";
            cardImg.alt = news.title;
  
            clone.querySelector(".ne-card-title").textContent = news.title;
            clone.querySelector(".ne-card-date").textContent = news.date;
            clone.querySelector(".ne-card-location").textContent = news.place;
  
            cardContainer.appendChild(clone);
          });
      })
      .catch(err => {
        console.error("Failed to load news cards:", err);
      });
  }
  