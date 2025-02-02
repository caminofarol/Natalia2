// Preload images and sound
let objects = [];
let song;
let sparkles = [];
let soundEnabled = false;

function preload() {
  // Load objects (you can replace these with actual images)
  objects.push({ type: "text", content: "✈️", x: 0, y: 0, vx: 0, vy: 0 }); // Airplane
  objects.push({ type: "text", content: "✈️", x: 0, y: 0, vx: 0, vy: 0 }); // Airplane
  objects.push({ type: "text", content: "✈️", x: 0, y: 0, vx: 0, vy: 0 }); // Airplane
  objects.push({ type: "text", content: "🗺️", x: 0, y: 0, vx: 0, vy: 0 }); // Map of Mexico
  objects.push({ type: "text", content: "💵", x: 0, y: 0, vx: 0, vy: 0 }); // Money
  objects.push({ type: "text", content: "🎓", x: 0, y: 0, vx: 0, vy: 0 }); // Diploma
  objects.push({ type: "text", content: "🎓", x: 0, y: 0, vx: 0, vy: 0 }); // Diploma
  objects.push({ type: "text", content: "🎓", x: 0, y: 0, vx: 0, vy: 0 }); // Diploma
  objects.push({ type: "text", content: "💻", x: 0, y: 0, vx: 0, vy: 0 }); // Mac Laptop
  objects.push({ type: "text", content: "🍄", x: 0, y: 0, vx: 0, vy: 0 }); // Mushrooms
  objects.push({ type: "text", content: "🍕", x: 0, y: 0, vx: 0, vy: 0 }); // Pizza
  objects.push({ type: "text", content: "❤️", x: 0, y: 0, vx: 0, vy: 0 }); // Hearts
  objects.push({ type: "text", content: "❤️", x: 0, y: 0, vx: 0, vy: 0 }); // Hearts
  objects.push({ type: "text", content: "❤️", x: 0, y: 0, vx: 0, vy: 0 }); // Hearts
  objects.push({ type: "text", content: "❤️", x: 0, y: 0, vx: 0, vy: 0 }); // Hearts
  objects.push({ type: "text", content: "🐈‍⬛", x: 0, y: 0, vx: 0, vy: 0 }); // Black Cat
  objects.push({ type: "text", content: "🐈‍⬛", x: 0, y: 0, vx: 0, vy: 0 }); // Black Cat
  objects.push({ type: "text", content: "🐈‍⬛", x: 0, y: 0, vx: 0, vy: 0 }); // Black Cat
  objects.push({ type: "text", content: "🐈‍⬛", x: 0, y: 0, vx: 0, vy: 0 }); // Black Cat
  objects.push({ type: "text", content: "🐈‍⬛", x: 0, y: 0, vx: 0, vy: 0 }); // Black Cat
  objects.push({ type: "text", content: "🎈", x: 0, y: 0, vx: 0, vy: 0 }); // Balloon
  objects.push({ type: "text", content: "🏢", x: 0, y: 0, vx: 0, vy: 0 }); // Building
  objects.push({ type: "text", content: "🇲🇽", x: 0, y: 0, vx: 1, vy: 1 }); // Mexican flag
  objects.push({ type: "text", content: "🇲🇽", x: 0, y: 0, vx: 1, vy: 1 }); // Mexican flag
  objects.push({ type: "text", content: "🌮", x: 0, y: 0, vx: -1, vy: 1 }); // Taco
  objects.push({ type: "text", content: "🎉", x: 0, y: 0, vx: 1, vy: -1 }); // Party popper
  objects.push({ type: "text", content: "🎈", x: 0, y: 0, vx: 1, vy: 1 }); // Balloon
  objects.push({ type: "text", content: "🐦", x: 0, y: 0, vx: -1, vy: 1 }); // Bird
  objects.push({ type: "text", content: "💙", x: 0, y: 0, vx: 1, vy: 1 }); // Blue Heart
  objects.push({ type: "text", content: "💚", x: 0, y: 0, vx: -1, vy: 1 }); // Green Heart
  objects.push({ type: "text", content: "💛", x: 0, y: 0, vx: 1, vy: -1 }); // Yellow Heart
  objects.push({ type: "text", content: "💜", x: 0, y: 0, vx: -1, vy: -1 }); // Purple Heart
  objects.push({ type: "text", content: "🛌", x: 0, y: 0, vx: 1, vy: 1 }); // Resting
  objects.push({ type: "text", content: "😘", x: 0, y: 0, vx: -1, vy: 1 }); // Kisses
  objects.push({ type: "text", content: "🩹", x: 0, y: 0, vx: 1, vy: -1 }); // Band-Aid
  objects.push({ type: "text", content: "💭", x: 0, y: 0, vx: -1, vy: -1 }); // Dreams
  objects.push({ type: "text", content: "🤗", x: 0, y: 0, vx: 1, vy: 1 }); // Hugs
  objects.push({ type: "text", content: "🌿", x: 0, y: 0, vx: 1, vy: -1 }); // Wellbeing
  objects.push({ type: "text", content: "⚡", x: 0, y: 0, vx: -1, vy: -1 }); // Energy
  objects.push({ type: "text", content: "💪", x: 0, y: 0, vx: 1, vy: 1 }); // Strength

  // Load background song (replace with your own file)
  song = loadSound("test.opus");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textFont("Wingdings");

  // Initialize object positions and velocities
  for (let obj of objects) {
    obj.x = random(width);
    obj.y = random(height);
    obj.vx = random(-2, 2);
    obj.vy = random(-2, 2);
  }

  // Initialize sparkles
  for (let i = 0; i < 100; i++) {
    sparkles.push({
      x: random(width),
      y: random(height),
      size: random(2, 5),
      alpha: random(100, 255),
    });
  }

  // Add event listener for the button
  const soundButton = document.getElementById("sound-button");
  soundButton.addEventListener("click", function () {
    if (!soundEnabled) {
      song.loop(); // Start playing the song
      soundEnabled = true;
      soundButton.textContent = "Sound On 🎵";
      soundButton.style.backgroundColor = "limegreen";
    }
  });
}

function draw() {
  background(0);

  // Draw sparkles
  for (let sparkle of sparkles) {
    fill(255, 255, 255, sparkle.alpha);
    noStroke();
    ellipse(sparkle.x, sparkle.y, sparkle.size, sparkle.size);
    sparkle.x += random(-1, 1);
    sparkle.y += random(-1, 1);
    sparkle.alpha = random(100, 255);
  }

  // Draw flying objects (icons) with fixed color
  fill(255); // Set icons to white (or use default emoji colors)
  for (let obj of objects) {
    textSize(32);
    text(obj.content, obj.x, obj.y);
    obj.x += obj.vx;
    obj.y += obj.vy;

    // Bounce off edges
    if (obj.x < 0 || obj.x > width) obj.vx *= -1;
    if (obj.y < 0 || obj.y > height) obj.vy *= -1;
  }

  // Draw blinking title
  let blink = floor(frameCount / 30) % 2 === 0;
  if (blink) {
    fill(random(255), random(255), random(255)); // Random color for title
  } else {
    fill(255); // White for title
  }
  textSize(64);
  textFont("Arial");
  textAlign(CENTER, CENTER);
  text("Illas Natalia 2025", width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}