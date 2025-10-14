const btn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
btn?.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("animate-slide-down");
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
      mobileNav?.classList.add("hidden");
    }
  });
});

// Volunteer form validation
const form = document.getElementById("signup-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !email || !phone) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      const res = await fetch("https://jamuna-foundation-landing-page.onrender.com/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`✅ ${data.message}`);
        form.reset();
      } else {
        alert(`⚠️ ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error connecting to server.");
    }
  });
}

// Scroll-to-top button (centered bottom)
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.title = "Back to top";
topBtn.className =
  "fixed bottom-6 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-green-600 text-white shadow-lg hidden animate-bounce";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) topBtn.classList.remove("hidden");
  else topBtn.classList.add("hidden");
});

topBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// Scroll Reveal Animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach((el) => {
  observer.observe(el);
});

// Volunteer Popup Modal Logic
const openModalBtn = document.querySelectorAll(
  'a[href="#volunteer"], .open-volunteer'
);
const modal = document.getElementById("volunteer-modal");
const closeModalBtn = document.getElementById("close-modal");

openModalBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

// Close when clicking outside modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});

// Handle form submission
const popupForm = document.getElementById("popup-form");
popupForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = popupForm.name.value.trim();
  const email = popupForm.email.value.trim();
  const phone = popupForm.phone.value.trim();
  const message = popupForm.message.value.trim();

  if (!name || !email || !phone) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    const res = await fetch("http://localhost:5173/api/volunteer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Thank you! We’ve received your submission.");
      popupForm.reset();
      modal.classList.add("hidden");
    } else {
      alert(`⚠️ ${data.message}`);
    }
  } catch (err) {
    console.error("Error details:", err.message);
    res.status(500).json({ message: "Server error" });
    alert("❌ Server error. Please try again later.");
  }
});
