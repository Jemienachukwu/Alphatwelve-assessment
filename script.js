// Mobile nav dropdown toggle
const mobileOpenbtn = document.getElementById("sidebar-openbtn");
const mobileClosebtn = document.getElementById("sidebar-closebtn");
const Mobiletoggle = document.getElementById("sidebar-toggle");
const mobileMenu = document.getElementById("mobile-sidebar-content");

const toggleScroll = (enable) => {
  document.body.style.overflow = enable ? "auto" : "hidden";
};

Mobiletoggle.addEventListener("click", () => {
  const isOpen = mobileMenu.style.display === "block";
  mobileMenu.style.display = isOpen ? "none" : "block";
  mobileClosebtn.style.display = isOpen ? "none" : "block";
  mobileOpenbtn.style.display = isOpen ? "block" : "none";
  toggleScroll(!isOpen);
});

// Dark mode toggle
const toggle = document.getElementById("toggle");
const mobileToggle = document.getElementById("mobile-toggle");

const handleToggleChange = () => {
  document.body.classList.toggle(
    "dark-mode",
    toggle.checked || mobileToggle.checked
  );
};

toggle.addEventListener("change", handleToggleChange);
mobileToggle.addEventListener("change", handleToggleChange);

// Collapse functionality
const collapseButton = document.getElementById("collapse-button");
const aside = document.querySelector(".aside");

const icons = {
  collapsed: {
    "logo-icon": "/components/icons/logo2.svg",
    "home-icon": "/components/icons/home.svg",
    "events-icon": "/components/icons/events2.svg",
    "speaker-icon": "/components/icons/speaker2.svg",
    "reports-icon": "/components/icons/reports2.svg",
    "notification-icon": "/components/icons/notification2.svg",
    "messages-icon": "/components/icons/messages2.svg",
    "settings-icon": "/components/icons/settings.svg",
    "collapse-icon": "/components/icons/expand.svg",
  },
  expanded: {
    "logo-icon": "/components/icons/logo.svg",
    "home-icon": "/components/icons/home.svg",
    "events-icon": "/components/icons/events.svg",
    "speaker-icon": "/components/icons/speaker.svg",
    "reports-icon": "/components/icons/reports.svg",
    "notification-icon": "/components/icons/notification.svg",
    "messages-icon": "/components/icons/messages.svg",
    "settings-icon": "/components/icons/settings.svg",
    "collapse-icon": "/components/icons/collapse.svg",
  },
};

collapseButton.addEventListener("click", () => {
  aside.classList.toggle("collapsed");
  const iconSet = aside.classList.contains("collapsed")
    ? icons.collapsed
    : icons.expanded;
  for (const id in iconSet) {
    document.getElementById(id).src = iconSet[id];
  }
});

// Chart function
const chartContext = document
  .getElementById("registrationChart")
  .getContext("2d");

const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Registrations",
      data: [650, 900, 750, 400, 1000, 600, 700, 500, 650, 850, 950, 600],
      backgroundColor: "#8576FF",
      borderSkipped: false,
    },
  ],
};

const chartOptions = {
  scales: {
    x: {
      grid: { color: "#555", display: true, lineWidth: 0.3 },
      ticks: { color: "#64748B" },
    },
    y: {
      beginAtZero: true,
      grid: { color: "#555", lineWidth: 0.3 },
      ticks: { color: "#64748B" },
    },
  },
  plugins: { legend: { display: false } },
};

new Chart(chartContext, {
  type: "bar",
  data: chartData,
  options: chartOptions,
});

// Carousel functionality
let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.style.opacity = i === index ? 1 : 0;
  });

  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

// Date selection functionality
const dateButton = document.getElementById("date-button");
const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("month-year");
const calendarGrid = document.getElementById("calendar-grid");
let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  monthYear.textContent = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${year}`;
  calendarGrid.innerHTML = "";

  // Fill empty cells
  const emptyCells = new Date(year, month, 1).getDay();
  calendarGrid.append(
    ...Array.from({ length: emptyCells }, () => document.createElement("div"))
  );

  // Create calendar days
  for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.className = "day";
    dayElement.onclick = () => selectDate(year, month, day);
    calendarGrid.appendChild(dayElement);
  }
}

function selectDate(year, month, day) {
  dateButton.textContent = new Date(year, month, day).toDateString();
  calendar.style.display = "none";
}

dateButton.onclick = () => {
  calendar.style.display =
    calendar.style.display === "block" ? "none" : "block";
  renderCalendar();
};

// Navigation buttons for calendar
document.getElementById("prev-month").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};
document.getElementById("next-month").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};
window.onclick = (event) => {
  if (!dateButton.contains(event.target) && !calendar.contains(event.target)) {
    calendar.style.display = "none";
  }
};

// Functions for carousel
function nextSlide() {
  slideIndex =
    (slideIndex + 1) % document.querySelectorAll(".carousel-item").length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex =
    (slideIndex - 1 + document.querySelectorAll(".carousel-item").length) %
    document.querySelectorAll(".carousel-item").length;
  showSlide(slideIndex);
}

function currentSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

// Table functionality
const tableData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In-Progress",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In-Progress",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In-Progress",
  },
  {
    name: "Founders Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In-Progress",
  },
  {
    name: "Tech Leadership Summit",
    date: "2024-12-10",
    speaker: "Alex Thompson",
    status: "in-Progress",
  },
  {
    name: "Digital Marketing Expo",
    date: "2024-11-28",
    speaker: "Samantha Clark",
    status: "in-Progress",
  },
  {
    name: "Green Technology Symposium",
    date: "2024-10-22",
    speaker: "Dr. Leo Carter",
    status: "Completed",
  },
  {
    name: "Cloud Computing Workshop",
    date: "2024-11-03",
    speaker: "Martha White",
    status: "In-Progress",
  },
  {
    name: "IoT Innovations Conference",
    date: "2024-12-15",
    speaker: "Prof. Susan Parker",
    status: "in-Progress",
  },
  {
    name: "E-Commerce Strategies Forum",
    date: "2024-10-29",
    speaker: "Chris Green",
    status: "Completed",
  },
  {
    name: "Next-Gen AI Conference",
    date: "2024-12-05",
    speaker: "Dr. Daniel Kim",
    status: "in-Progress",
  },
  {
    name: "Autonomous Vehicles Summit",
    date: "2024-11-09",
    speaker: "Sarah Johnson",
    status: "In-Progress",
  },
  {
    name: "Quantum Computing Meetup",
    date: "2024-10-27",
    speaker: "Dr. Mark Evans",
    status: "Completed",
  },
  {
    name: "Digital Transformation Forum",
    date: "2024-11-22",
    speaker: "David Harris",
    status: "in-Progress",
  },
];
const dropdownSelect = document.getElementById("dropdown-select");

let rowsPerPage = parseInt(dropdownSelect.value);
let currentPage = 1;

function populateTable(page) {
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const tableBody = document.getElementById("event-table-body");
  tableBody.innerHTML = "";

  const currentData = tableData.slice(start, end);
  currentData.forEach((event) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.date}</td>
      <td>${event.speaker}</td>
      <td><span class="status ${
        event.status === "Completed" ? "completed" : "in-progress"
      }">
        <span class="status-circle"></span> ${event.status.replace(
          "-",
          " "
        )}</span></td>`;
    tableBody.appendChild(row);
  });

  updatePagination(page);
}

function updatePagination(page) {
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const pagesContainer = document.getElementById("page-numbers");
  pagesContainer.innerHTML = "";

  Array.from({ length: totalPages }).forEach((_, i) => {
    const number = document.createElement("div");
    number.textContent = i + 1;
    number.className = page === i + 1 ? "page active" : "page";
    number.addEventListener("click", () => {
      currentPage = i + 1;
      populateTable(currentPage);
    });
    pagesContainer.appendChild(number);
  });
}

// Modal functionality
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("modal");
const closebtn = document.getElementById("closebtn");
const modalBtn = document.getElementById("modal-btn");

const closeModal = () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
};

document.querySelectorAll("table tr").forEach((row, i) => {
  row.addEventListener("click", () => {
    const data = tableData[i - 1];
    modal.style.display = "block";
    backdrop.style.display = "block";

    document.getElementById("event-name").textContent = data.name;
    document.getElementById("event-date").textContent = data.date;
    document.getElementById("speakers").textContent = data.speaker;
    document.getElementById("event-status").textContent = data.status;
    document.getElementById("event-description").textContent = data.description;
  });
});

closebtn.addEventListener("click", closeModal);
modalBtn.addEventListener("click", closeModal);

// Initialize table population
dropdownSelect.addEventListener("change", () => {
  rowsPerPage = parseInt(dropdownSelect.value);
  currentPage = 1;
  populateTable(currentPage);
});

// Initial rendering
populateTable(currentPage);
