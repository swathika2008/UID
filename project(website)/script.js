// CART STORAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// TOAST
function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ADD TO CART
function addToCart(name, price, val, img) {
  let item = {
    name: name,
    price: price,
    value: val,
    img: img,
    qty: 1
  };

  // check if already exists
  let existing = cart.find(p => p.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  showToast(name + " added to cart 🛒");
}

// SHOP NOW
function shopNow(name, price, img) {
  addToCart(name, price, 0, img);
  window.location.href = "cart.html";
}

// FILTER (optional basic)
function setFilter(btn, type) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  let cards = document.querySelectorAll(".pcard");

  cards.forEach(card => {
    let tags = card.getAttribute("data-tag");
    if (type === "all" || tags.includes(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}