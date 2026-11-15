
const missions = [
  {
    id: "apollo",
    area: "moon",
    category: "MOON · APOLLO PROGRAM",
    title: "Apollo Lunar Module",
    year: "1969–1972",
    emoji: "🛸",
    art: "moon-art",
    summary: "The spacecraft that carried astronauts to the Moon.",
    purpose: "The Lunar Module was designed to land astronauts on the Moon and return them to lunar orbit.",
    science: "Apollo crews collected lunar rock and soil samples and deployed scientific experiments.",
    status: "Apollo Lunar Modules used for landing remain on the Moon.",
    location: "Moon — Apollo landing sites",
    source: "https://www.nasa.gov/the-apollo-program/"
  },
  {
    id: "lr3",
    area: "moon",
    category: "MOON · SCIENCE INSTRUMENT",
    title: "Lunar Roving Vehicle",
    year: "1971–1972",
    emoji: "🚙",
    art: "moon-art",
    summary: "A battery-powered rover used by Apollo astronauts.",
    purpose: "It carried astronauts, tools and lunar samples across the Moon.",
    science: "It allowed astronauts to explore a wider area of the lunar surface.",
    status: "The three lunar rovers remain on the Moon.",
    location: "Moon — Apollo 15, 16 and 17 sites",
    source: "https://www.nasa.gov/mission/apollo-15/"
  },
  {
    id: "sojourner",
    area: "mars",
    category: "MARS · PATHFINDER",
    title: "Sojourner Rover",
    year: "1997",
    emoji: "🤖",
    art: "mars-art",
    summary: "The first successful wheeled rover to operate on Mars.",
    purpose: "It investigated the Martian surface.",
    science: "It examined rocks and soil and demonstrated mobile robotic exploration.",
    status: "The mission ended in 1997.",
    location: "Mars — Ares Vallis",
    source: "https://science.nasa.gov/mission/mars-pathfinder/"
  },
  {
    id: "opportunity",
    area: "mars",
    category: "MARS · EXPLORATION ROVER",
    title: "Opportunity Rover",
    year: "2004–2018",
    emoji: "🔭",
    art: "mars-art",
    summary: "A rover that explored Mars for nearly 15 years.",
    purpose: "It studied rocks and soils for clues about past water on Mars.",
    science: "It found evidence that liquid water had altered Martian rocks.",
    status: "NASA declared the mission complete in 2019.",
    location: "Mars — Meridiani Planum",
    source: "https://science.nasa.gov/mission/mer-op-opportunity/"
  },
  {
    id: "curiosity",
    area: "mars",
    category: "MARS · SCIENCE LABORATORY",
    title: "Curiosity Rover",
    year: "2012–present*",
    emoji: "🛰️",
    art: "mars-art",
    summary: "A mobile science laboratory exploring Mars.",
    purpose: "It investigates rocks, soil and the atmosphere of Mars.",
    science: "It found evidence that ancient Mars had environments with water and chemical ingredients important for life.",
    status: "Check NASA for current operational status.",
    location: "Mars — Gale Crater",
    source: "https://science.nasa.gov/mission/msl-curiosity/"
  },
  {
    id: "voyager",
    area: "deep",
    category: "DEEP SPACE · INTERSTELLAR",
    title: "Voyager 1 & 2",
    year: "1977–present*",
    emoji: "🛰️",
    art: "deep-art",
    summary: "Twin spacecraft exploring the outer planets and beyond.",
    purpose: "They studied Jupiter, Saturn and other outer planets.",
    science: "They transformed our knowledge of the giant planets and entered interstellar space.",
    status: "Check NASA for current spacecraft and instrument status.",
    location: "Interstellar space",
    source: "https://science.nasa.gov/mission/voyager/"
  }
];

// DISPLAY MISSIONS

const grid = document.getElementById("missionGrid");

function renderMissions(filter = "all") {
  const shown = missions.filter(m =>
    filter === "all" || m.area === filter
  );

  grid.innerHTML = shown.map(m => `
    <article class="mission-card"
      tabindex="0"
      role="button"
      data-id="${m.id}">

      <div class="card-art ${m.art}">
        <span class="card-top">${m.category}</span>
        <span class="emoji">${m.emoji}</span>
      </div>

      <div class="card-content">
        <h3>${m.title}</h3>
        <p>${m.summary}</p>

        <div class="card-meta">
          <span>${m.year}</span>
          <span>Explore story ↗</span>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".mission-card").forEach(card => {
    card.addEventListener("click", () => {
      openMission(card.dataset.id);
    });

    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMission(card.dataset.id);
      }
    });
  });
}

renderMissions();

// MISSION DETAILS

function openMission(id) {
  const m = missions.find(x => x.id === id);
  if (!m) return;

  document.getElementById("dialogContent").innerHTML = `
    <div class="dialog-content">

      <div class="dialog-kicker">${m.category}</div>

      <h2>${m.emoji} ${m.title}</h2>

      <p>${m.summary}</p>

      <div class="dialog-facts">

        <div class="fact">
          <small>MISSION ERA</small>
          <strong>${m.year}</strong>
        </div>

        <div class="fact">
          <small>LOCATION</small>
          <strong>${m.location}</strong>
        </div>

        <div class="fact">
          <small>WHAT IT DID</small>
          <strong>${m.purpose}</strong>
        </div>

        <div class="fact">
          <small>STATUS</small>
          <strong>${m.status}</strong>
        </div>

      </div>

      <h3>What did we learn?</h3>

      <p>${m.science}</p>

      <a class="source-link"
        href="${m.source}"
        target="_blank"
        rel="noopener">
        Read more at NASA ↗
      </a>

    </div>
  `;

  document.getElementById("missionDialog").showModal();
}

// FILTER BUTTONS

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelectorAll(".filter")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    renderMissions(btn.dataset.filter);
  });
});

// CLOSE POPUP

document.getElementById("dialogClose")
  .addEventListener("click", () => {
    document.getElementById("missionDialog").close();
  });

document.getElementById("missionDialog")
  .addEventListener("click", e => {
    if (e.target.id === "missionDialog") {
      e.target.close();
    }
  });

// TIMELINE

const timeline = [
  ["1969", "Apollo 11", "Humans first land on the Moon."],
  ["1971", "Lunar Rover", "Apollo 15 uses the first Lunar Roving Vehicle."],
  ["1977", "Voyager Launches", "Voyager 1 and 2 begin their journeys."],
  ["1997", "Sojourner", "The first successful Mars rover explores Mars."],
  ["2004", "Opportunity", "Twin Mars rovers begin exploring."],
  ["2012", "Curiosity", "A mobile science laboratory lands on Mars."],
  ["2021", "Perseverance", "NASA's rover begins exploring Jezero Crater."]
];

document.getElementById("timelineItems").innerHTML =
  timeline.map(t => `
    <article class="timeline-item">
      <strong>${t[0]}</strong>
      <h3>${t[1]}</h3>
      <p>${t[2]}</p>
    </article>
  `).join("");

// SPACE QUIZ

const questions = [
  {
    q: "Which spacecraft carried astronauts to the Moon?",
    a: ["Voyager", "Apollo Lunar Module", "Sojourner"],
    correct: 1,
    why: "The Apollo Lunar Module landed astronauts on the Moon."
  },
  {
    q: "What was Sojourner famous for?",
    a: [
      "First successful Mars rover",
      "Visiting Saturn",
      "Taking humans to the Moon"
    ],
    correct: 0,
    why: "Sojourner explored Mars in 1997."
  },
  {
    q: "Which rover explores Gale Crater?",
    a: ["Lunar Rover", "Curiosity", "Voyager"],
    correct: 1,
    why: "Curiosity investigates Gale Crater on Mars."
  },
  {
    q: "Where did Voyager spacecraft travel?",
    a: [
      "Interstellar space",
      "The Sun",
      "The Moon"
    ],
    correct: 0,
    why: "Voyager spacecraft entered interstellar space."
  }
];

let qIndex = 0;
let score = 0;
let answered = false;

function showQuestion() {

  const q = questions[qIndex];
  answered = false;

  document.getElementById("quizProgress").style.width =
    ((qIndex + 1) / questions.length * 100) + "%";

  document.getElementById("questionCount").textContent =
    `QUESTION ${qIndex + 1} OF ${questions.length}`;

  document.getElementById("quizCard").innerHTML = `
    <div class="q-label">QUESTION ${qIndex + 1}</div>

    <h3>${q.q}</h3>

    <div class="answers">
      ${q.a.map((a, i) => `
        <button class="answer" data-answer="${i}">
          ${String.fromCharCode(65 + i)}. ${a}
        </button>
      `).join("")}
    </div>

    <p class="feedback" aria-live="polite"></p>

    <button class="quiz-next" disabled>
      ${qIndex === questions.length - 1
        ? "See my result"
        : "Next question →"}
    </button>
  `;

  const card = document.getElementById("quizCard");

  card.querySelectorAll(".answer").forEach(button => {

    button.addEventListener("click", () => {

      if (answered) return;

      answered = true;

      const selected = Number(button.dataset.answer);

      if (selected === q.correct) {
        score++;
      }

      card.querySelectorAll(".answer").forEach((b, i) => {

        b.disabled = true;

        if (i === q.correct) {
          b.classList.add("correct");
        } else if (i === selected) {
          b.classList.add("wrong");
        }

      });

      card.querySelector(".feedback").textContent =
        (selected === q.correct ? "Correct! " : "Not quite. ") + q.why;

      card.querySelector(".quiz-next").disabled = false;

    });

  });

  card.querySelector(".quiz-next").addEventListener("click", () => {

    if (!answered) return;

    if (qIndex < questions.length - 1) {
      qIndex++;
      showQuestion();
    } else {
      showResult();
    }

  });
}

// QUIZ RESULT

function showResult() {

  document.getElementById("questionCount").textContent =
    "MISSION COMPLETE";

  document.getElementById("quizProgress").style.width = "100%";

  document.getElementById("quizCard").innerHTML = `
    <div class="q-label">YOUR MISSION REPORT</div>

    <h3>You scored ${score} out of ${questions.length}!</h3>

    <p>
      ${score === 4
        ? "Outstanding, Space Explorer!"
        : score >= 2
        ? "Great work! Keep exploring."
        : "Keep learning, young explorer!"}
    </p>

    <button class="quiz-next" id="retryQuiz">
      Try again ↻
    </button>
  `;

  document.getElementById("retryQuiz")
    .addEventListener("click", () => {
      qIndex = 0;
      score = 0;
      showQuestion();
    });
}

showQuestion();

// MOBILE NAVIGATION

const menu = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

menu.addEventListener("click", () => {

  const open = nav.classList.toggle("open");

  menu.setAttribute("aria-expanded", String(open));

});

nav.querySelectorAll("a").forEach(a => {

  a.addEventListener("click", () => {

    nav.classList.remove("open");

    menu.setAttribute("aria-expanded", "false");

  });

});

