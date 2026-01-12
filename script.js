/*// Existing Code...
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let loginForm = document.querySelector('.login-form-container');
let user = document.querySelector('#login-btn');
let money = document.querySelector('.moneyOptions');
let signUpMoney = document.querySelector('#signUpMoney');

let cancelBtn = document.querySelector('#form-close');

let videoBtn = document.querySelector('.controls');
let videoBackground = document.getElementById("vid-back");

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = function () {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
};

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

user.addEventListener('click', () => {
  loginForm.classList.toggle('showLogin');
});
money.addEventListener('click', () => {
  loginForm.classList.toggle('showLogin');
});
signUpMoney.addEventListener('click', () => {
  loginForm.classList.toggle('showLogin');
});

cancelBtn.addEventListener('click', () => {
  loginForm.classList.remove('showLogin');
});

document.getElementById('bookingForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const place = document.querySelector('input[placeholder="Place name"]').value;
  const guests = document.querySelector('input[placeholder="No. of Guests"]').value;
  const arrivalDate = document.querySelector('input[type="date"]:nth-child(1)').value;
  const leavingDate = document.querySelector('input[type="date"]:nth-child(2)').value;

  const bookingData = { place, guests, arrivalDate, leavingDate };

  try {
    const res = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });

    const result = await res.json();
    alert('Booking successful!');
    console.log(result);
  } catch (err) {
    alert('Failed to book!');
    console.error(err);
  }
});

videoBtn.childNodes.forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelector('.vid-btn.active').classList.remove('active');
    e.target.classList.add('active');
    let src = btn.getAttribute('data-src');
    if (src === "./clip-1-Indo.mp4") {
      videoBackground.src = "./img1.png";
    } else {
      videoBackground.src = "./img2.png";
    }
    document.querySelector('#video-slider').src = src;
  });
});

// --- ADMIN LOGIN
document.getElementById("adminLoginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  try {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.success) {
      localStorage.setItem("adminToken", data.token);
      window.location.href = "admin-dashboard.html";
    } else {
      alert("Login failed: " + data.message);
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong.");
  }
});

// --- PLACE SUBMIT (Admin Dashboard)
document.getElementById("addPlaceForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("placeName").value;
  const description = document.getElementById("placeDescription").value;
  const image = document.getElementById("placeImage").value;

  try {
    const res = await fetch("http://localhost:5000/api/admin/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
      },
      body: JSON.stringify({ name, description, image }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Place added successfully!");
      document.getElementById("addPlaceForm").reset();
    } else {
      alert("Error: " + data.message);
    }
  } catch (err) {
    console.error("Error adding place:", err);
    alert("Failed to add place.");
  }
});
*/
/*
// ========================
// Existing code
// ========================
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let loginForm = document.querySelector('.login-form-container');
let user = document.querySelector('#login-btn');
let money = document.querySelector('.moneyOptions');
let signUpMoney = document.querySelector('#signUpMoney');

let cancelBtn = document.querySelector('#form-close');

let videoBtn = document.querySelector('.controls');
let videoBackground = document.getElementById("vid-back");

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = function () {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
};

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

user.addEventListener('click', () => {
  loginForm.classList.toggle('showLogin');
});
money.addEventListener('click', () => {
  loginForm.classList.toggle('showLogin');
});
signUpMoney.addEventListener('click', () => {
  loginForm.classList.toggle('showLogin');
});

cancelBtn.addEventListener('click', () => {
  loginForm.classList.remove('showLogin');
});

// ========================
// BUTTON LOGIN CHECK LOGIC
// ========================

// Generic function to handle login redirect
function handleLoginRedirect(targetPage) {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    localStorage.setItem('redirectAfterLogin', targetPage);
    alert('Please login first to continue.');
    window.location.href = 'login.html';
  } else {
    window.location.href = targetPage;
  }
}

// Attach login check to homepage buttons
document.querySelectorAll('.bookNowBtn').forEach(btn => {
  btn.addEventListener('click', () => handleLoginRedirect('book-now.html'));
});

document.querySelectorAll('.planTripBtn').forEach(btn => {
  btn.addEventListener('click', () => handleLoginRedirect('plan.html'));
});

document.querySelectorAll('.hotelBookingBtn').forEach(btn => {
  btn.addEventListener('click', () => handleLoginRedirect('Hotel-Booking.html'));
});

// ========================
// VIDEO BUTTONS (unchanged)
// ========================
videoBtn.childNodes.forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelector('.vid-btn.active').classList.remove('active');
    e.target.classList.add('active');
    let src = btn.getAttribute('data-src');
    if (src === "./clip-1-Indo.mp4") {
      videoBackground.src = "./img1.png";
    } else {
      videoBackground.src = "./img2.png";
    }
    document.querySelector('#video-slider').src = src;
  });
});

// ========================
// BOOKING FORM SUBMIT
// ========================
document.getElementById('bookingForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const place = document.querySelector('input[placeholder="Place name"]').value;
  const guests = document.querySelector('input[placeholder="No. of Guests"]').value;
  const arrivalDate = document.querySelector('input[type="date"]:nth-child(1)').value;
  const leavingDate = document.querySelector('input[type="date"]:nth-child(2)').value;

  const name = localStorage.getItem("userName") || "Guest User";
  const email = localStorage.getItem("userEmail") || "test@example.com";

  const bookingData = { name, email, place, guests, arrivalDate, leavingDate };

  try {
    const res = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });

    const result = await res.json();

    if (result.success) {
      alert('✅ Booking successful! A confirmation email has been sent.');
      console.log("Booking result:", result);
      document.getElementById("bookingForm").reset();
    } else {
      alert('❌ Booking failed: ' + result.message);
    }

  } catch (err) {
    alert('⚠️ Failed to book! Check your internet or backend server.');
    console.error("Booking error:", err);
  }
});

// ========================
// ADMIN LOGIN
// ========================
document.getElementById("adminLoginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  try {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.success) {
      localStorage.setItem("adminToken", data.token);
      window.location.href = "admin-dashboard.html";
    } else {
      alert("Login failed: " + data.message);
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong.");
  }
});

// ========================
// ADMIN PLACE SUBMIT
// ========================
document.getElementById("addPlaceForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("placeName").value;
  const description = document.getElementById("placeDescription").value;
  const image = document.getElementById("placeImage").value;

  try {
    const res = await fetch("http://localhost:5000/api/admin/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
      },
      body: JSON.stringify({ name, description, image }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Place added successfully!");
      document.getElementById("addPlaceForm").reset();
    } else {
      alert("Error: " + data.message);
    }
  } catch (err) {
    console.error("Error adding place:", err);
    alert("Failed to add place.");
  }
});

// Auto-generated submit for bookingForm
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('bookingForm');
  if (!form) return;
  form.addEventListener('submit', async (ev)=>{
    ev.preventDefault();
    const token = localStorage.getItem('jwt_token');
    if (!token) { window.location.href='login.html'; return; }
    const data = {};
    data['hotel_name'] = form['hotel_name'] ? form['hotel_name'].value : (form.elements['hotel_name'] ? form.elements['hotel_name'].value : '');
    data['checkin'] = form['checkin'] ? form['checkin'].value : (form.elements['checkin'] ? form.elements['checkin'].value : '');
    data['checkout'] = form['checkout'] ? form['checkout'].value : (form.elements['checkout'] ? form.elements['checkout'].value : '');
    data['guests'] = form['guests'] ? form['guests'].value : (form.elements['guests'] ? form.elements['guests'].value : '');
    data['user_id'] = form['user_id'] ? form['user_id'].value : (form.elements['user_id'] ? form.elements['user_id'].value : '');
    try {
      const res = await fetch('http://127.0.0.1:5000/bookings', {
        method: 'POST', headers: {'Content-Type':'application/json','Authorization':'Bearer '+token}, body: JSON.stringify(data)
      });
      const j = await res.json();
      if (res.ok) { alert('Submitted successfully'); } else { alert('Submission failed: '+(j.message||JSON.stringify(j))); }
    } catch (err) { console.error(err); alert('Network error'); }
  });
});

// Auto-generated submit for planForm
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('planForm');
  if (!form) return;
  form.addEventListener('submit', async (ev)=>{
    ev.preventDefault();
    const token = localStorage.getItem('jwt_token');
    if (!token) { window.location.href='login.html'; return; }
    const data = {};
    data['options'] = form['options'] ? form['options'].value : (form.elements['options'] ? form.elements['options'].value : '');
    data['notes'] = form['notes'] ? form['notes'].value : (form.elements['notes'] ? form.elements['notes'].value : '');
    try {
      const res = await fetch('http://127.0.0.1:5000/plan', {
        method: 'POST', headers: {'Content-Type':'application/json','Authorization':'Bearer '+token}, body: JSON.stringify(data)
      });
      const j = await res.json();
      if (res.ok) { alert('Submitted successfully'); } else { alert('Submission failed: '+(j.message||JSON.stringify(j))); }
    } catch (err) { console.error(err); alert('Network error'); }
  });
});
*/

// ========================
// Existing code
// ========================
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let loginForm = document.querySelector('.login-form-container');
let user = document.querySelector('#login-btn');
let money = document.querySelector('.moneyOptions');
let signUpMoney = document.querySelector('#signUpMoney');

let cancelBtn = document.querySelector('#form-close');

let videoBtn = document.querySelector('.controls');
let videoBackground = document.getElementById("vid-back");

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = function () {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
};

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

user.addEventListener('click', () => {
  loginForm.classList.toggle('showLogin');
});
money.addEventListener('click', () => {
  loginForm.classList.toggle('showLogin');
});
signUpMoney.addEventListener('click', () => {
  loginForm.classList.toggle('showLogin');
});

cancelBtn.addEventListener('click', () => {
  loginForm.classList.remove('showLogin');
});

// ========================
// BUTTON LOGIN CHECK LOGIC
// ========================

function handleLoginRedirect(targetPage) {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    localStorage.setItem('redirectAfterLogin', targetPage);
    alert('Please login first to continue.');
    window.location.href = 'login.html';
  } else {
    window.location.href = targetPage;
  }
}

document.querySelectorAll('.bookNowBtn').forEach(btn => {
  btn.addEventListener('click', () => handleLoginRedirect('book-now.html'));
});
document.querySelectorAll('.planTripBtn').forEach(btn => {
  btn.addEventListener('click', () => handleLoginRedirect('plan.html'));
});
document.querySelectorAll('.hotelBookingBtn').forEach(btn => {
  btn.addEventListener('click', () => handleLoginRedirect('Hotel-Booking.html'));
});

// ========================
// VIDEO BUTTONS (unchanged)
// ========================
videoBtn.childNodes.forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelector('.vid-btn.active').classList.remove('active');
    e.target.classList.add('active');
    let src = btn.getAttribute('data-src');
    if (src === "./clip-1-Indo.mp4") {
      videoBackground.src = "./img1.png";
    } else {
      videoBackground.src = "./img2.png";
    }
    document.querySelector('#video-slider').src = src;
  });
});

// ========================
// BOOKING FORM + PAYMENT
// ========================
document.getElementById('bookingForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const place = document.querySelector('input[placeholder="Place name"]').value;
  const guests = document.querySelector('input[placeholder="No. of Guests"]').value;
  const arrivalDate = document.querySelector('input[type="date"]:nth-child(1)').value;
  const leavingDate = document.querySelector('input[type="date"]:nth-child(2)').value;

  const name = localStorage.getItem("userName") || "Guest User";
  const email = localStorage.getItem("userEmail") || "test@example.com";

  const bookingData = { name, email, place, guests, arrivalDate, leavingDate };

  try {
    const res = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });

    const result = await res.json();

    if (result.success) {
      console.log("✅ Booking success:", result);

      // ---- Create Razorpay Order ----
      const orderRes = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 500 }), // 💰 Change 500 to your actual amount
      });

      const orderData = await orderRes.json();

      if (orderData.error) {
        alert("❌ Could not start payment. Try again later.");
        return;
      }

      // ---- Razorpay Checkout ----
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Maheshwar Tourism",
        description: "Booking Payment",
        order_id: orderData.order_id,
        handler: function (response) {
          fetch("http://localhost:5000/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          })
            .then(res => res.json())
            .then(data => {
              if (data.status === "success") {
                alert("✅ Payment Successful! Thank you for booking.");
              } else {
                alert("❌ Payment Verification Failed!");
              }
            })
            .catch(() => alert("⚠️ Payment verification failed."));
        },
        prefill: {
          name: name,
          email: email,
        },
        theme: {
          color: "#0a9396",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } else {
      alert('❌ Booking failed: ' + result.message);
    }

  } catch (err) {
    alert('⚠️ Failed to book! Check your internet or backend server.');
    console.error("Booking error:", err);
  }
});

// ========================
// ADMIN LOGIN
// ========================
document.getElementById("adminLoginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  try {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.success) {
      localStorage.setItem("adminToken", data.token);
      window.location.href = "admin-dashboard.html";
    } else {
      alert("Login failed: " + data.message);
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong.");
  }
});

// ========================
// ADMIN PLACE SUBMIT
// ========================
document.getElementById("addPlaceForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("placeName").value;
  const description = document.getElementById("placeDescription").value;
  const image = document.getElementById("placeImage").value;

  try {
    const res = await fetch("http://localhost:5000/api/admin/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
      },
      body: JSON.stringify({ name, description, image }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Place added successfully!");
      document.getElementById("addPlaceForm").reset();
    } else {
      alert("Error: " + data.message);
    }
  } catch (err) {
    console.error("Error adding place:", err);
    alert("Failed to add place.");
  }
});

// ========================
// PLAN FORM (unchanged)
// ========================
document.addEventListener('DOMContentLoaded', ()=> {
  const planForm = document.getElementById('planForm');
  if (!planForm) return;
  planForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const token = localStorage.getItem('jwt_token');
    if (!token) { window.location.href='login.html'; return; }
    const data = {};
    data['options'] = planForm['options']?.value || '';
    data['notes'] = planForm['notes']?.value || '';
    try {
      const res = await fetch('http://127.0.0.1:5000/plan', {
        method: 'POST',
        headers: {'Content-Type':'application/json','Authorization':'Bearer '+token},
        body: JSON.stringify(data)
      });
      const j = await res.json();
      if (res.ok) { alert('Submitted successfully'); } 
      else { alert('Submission failed: '+(j.message||JSON.stringify(j))); }
    } catch (err) { console.error(err); alert('Network error'); }
  });
});
