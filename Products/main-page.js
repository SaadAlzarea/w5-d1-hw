let cards = document.getElementById("cards");

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    data.map((item) => {
      let card = document.createElement("div");
      let img = document.createElement("img");
      let productName = document.createElement("p");
      let description = document.createElement("p");
      let category = document.createElement("p");
      let rating = document.createElement("p");
      let price = document.createElement("p");

      img.src = item.image;
      productName.innerHTML = item.title;
      description.innerHTML = item.description;
      category.innerHTML = item.category;
      price.innerHTML = `${item.price}$`;
      rating.innerHTML = `${item.rating.rate} ★`;

      productName.classList.add("productName");
      img.classList.add("image");
      cards.classList.add("cards");
      card.classList.add("card");

      card.appendChild(img);
      card.appendChild(productName);
      // card.appendChild(description);
      // card.appendChild(category);
      card.appendChild(price);
      card.appendChild(rating);
      cards.appendChild(card);
    });

    const storedFullName = localStorage.getItem("fullName");
    let userName = document.getElementById("userName");
    userName.innerHTML = `Welcome ${storedFullName}!`;
    
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
fetchProducts();