/* =========================
   GLOBAL FAKE BACKEND DELAY
========================= */
function fakeApi(callback) {
  setTimeout(callback, 800); // backend delay feel
}

/* =========================
   SIGN IN (FAKE LOGIN)
========================= */
const signInBtn = document.querySelector(".header .btn");

signInBtn.addEventListener("click", () => {
  const username = prompt("Enter Username:");
  const password = prompt("Enter Password:");

  if (!username || !password) {
    alert("Login failed! Please enter credentials.");
    return;
  }

  fakeApi(() => {
    alert("✅ Login Successful!\nWelcome " + username);
    signInBtn.innerText = "Logged In";
    signInBtn.style.background = "#27ae60";
  });
});

/* =========================
   HERO FORM SUBMIT
========================= */
const heroBtn = document.querySelector(".hero-right .btn");

heroBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".hero-right input");
  let data = {};
  let valid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
      valid = false;
    } else {
      input.style.border = "none";
      data[input.placeholder] = input.value;
    }
  });

  if (!valid) {
    alert("Please fill all fields!");
    return;
  }

  heroBtn.innerText = "Submitting...";
  heroBtn.disabled = true;

  fakeApi(() => {
    console.log("Hero Form Data:", data);
    alert("✅ Request Submitted Successfully!\nOur team will contact you soon.");
    inputs.forEach(i => i.value = "");
    heroBtn.innerText = "Get Quick Quote";
    heroBtn.disabled = false;
  });
});

/* =========================
   READ MORE (PROJECTS)
========================= */
document.querySelectorAll(".project-card button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    fakeApi(() => {
      alert(
        "📌 Project Details\n\n" +
        "Project " + (index + 1) +
        " is a premium service designed to help businesses grow.\n\n(Backend coming soon)"
      );
    });
  });
});

/* =========================
   NEWSLETTER SUBSCRIBE
========================= */
const subscribeBtn = document.querySelector(".newsletter .btn");
const emailInput = document.querySelector(".newsletter input");

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email address!");
    return;
  }

  subscribeBtn.innerText = "Subscribing...";
  subscribeBtn.disabled = true;

  fakeApi(() => {
    console.log("Subscribed Email:", email);
    alert("🎉 Subscription Successful!\nThank you for joining us.");
    emailInput.value = "";
    subscribeBtn.innerText = "Subscribe";
    subscribeBtn.disabled = false;
  });
});

/* =========================
   NAVBAR SMOOTH SCROLL
========================= */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const text = link.innerText.toLowerCase();
    let section = null;

    if (text.includes("project")) section = document.querySelector(".projects");
    else if (text.includes("testimonial")) section = document.querySelector(".clients");
    else if (text.includes("contact")) section = document.querySelector(".hero");
    else if (text.includes("about")) section = document.querySelector(".why-us");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Section coming soon!");
    }
  });
});

/* =========================
   PAGE LOAD CONFIRMATION
========================= */
window.addEventListener("load", () => {
  console.log("✅ UI Loaded Successfully (Fake Backend Active)");
});


let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
contacts.push(data);
localStorage.setItem("contacts", JSON.stringify(contacts));


let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
subscribers.push(email);
localStorage.setItem("subscribers", JSON.stringify(subscribers));
