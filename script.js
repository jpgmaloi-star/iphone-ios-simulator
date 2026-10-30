
function openApp(name) {
  document.getElementById("home").hidden = true;
  document.querySelector(".dock").hidden = true;
  document.getElementById("screen").hidden = false;

  document.getElementById("appTitle").textContent = name;

  const content = {
    Messages: "Welcome to Messages! 💬",
    Camera: "📷 Camera simulator",
    Gallery: "🖼️ Your photo gallery",
    Settings: "⚙️ Phone settings",
    Calculator: `
      <input id="calc" placeholder="Enter calculation">
      <button onclick="calculate()">=</button>
      <p id="result"></p>
    `,
    Notes: `
      <textarea placeholder="Write your notes here..."></textarea>
    `,
    Phone: "📞 Phone dialer simulator",
    Browser: "🌐 Your mini browser",
    Music: "🎵 Music player simulator"
  };

  document.getElementById("appContent").innerHTML =
    content[name] || "Welcome!";
}

function calculate() {
  const value = document.getElementById("calc").value;

  if (!/^[0-9+\-*/().\s]+$/.test(value)) {
    document.getElementById("result").textContent =
      "Invalid calculation";
    return;
  }

  try {
    const result = Function(
      '"use strict"; return (' + value + ')'
    )();

    document.getElementById("result").textContent = result;
  } catch {
    document.getElementById("result").textContent = "Error";
  }
}

function goHome() {
  document.getElementById("home").hidden = false;
  document.querySelector(".dock").hidden = false;
  document.getElementById("screen").hidden = true;
}

// iOS CONTROL CENTER UPDATE

function toggleNotifications() {
  $("notificationPanel").classList.toggle("hidden");
  renderNotifications();
}

// iOS BRIGHTNESS CONTROL

function setBrightness(value) {
  $("phone").style.filter =
    `brightness(${0.45 + Number(value) / 100 * 0.55})`;
}

