// mobile nav drop down toggle
const mobileOpenbtn = document.getElementById("mobile-openbtn");
const mobileClosebtn = document.getElementById("mobile-closebtn");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("mobile-bar-container");

// Function to disable body scroll
function disableScroll() {
  document.body.style.overflow = "hidden";
}

// Function to enable body scroll
function enableScroll() {
  document.body.style.overflow = "auto";
}

navToggle.addEventListener("click", () => {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
    mobileClosebtn.style.display = "none";
    mobileOpenbtn.style.display = "block";
    enableScroll(); // Re-enable scrolling when the menu is closed
  } else {
    navMenu.style.display = "block";
    mobileClosebtn.style.display = "block";
    mobileOpenbtn.style.display = "none";
    disableScroll(); // Disable scrolling when the menu is open
  }
});

const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
  const body = document.body;
  body.classList.toggle("dark-mode", toggle.checked);
});
// side bar collapse function
const collapseButton = document.getElementById("collapse-button");
const aside = document.querySelector(".aside");

const iconsCollapsed = {
  "logo-icon": "/components/icons/logo2.svg",
  "home-icon": "/components/icons/home.svg",
  "events-icon": "/components/icons/events2.svg",
  "speaker-icon": "/components/icons/speaker2.svg",
  "reports-icon": "/components/icons/reports2.svg",
  "notification-icon": "/components/icons/notification2.svg",
  "messages-icon": "/components/icons/messages2.svg",
  "settings-icon": "/components/icons/settings.svg",
  "collapse-icon": "/components/icons/expand.svg",
};

const iconsExpanded = {
  "logo-icon": "/components/icons/logo.svg",
  "home-icon": "/components/icons/home.svg",
  "events-icon": "/components/icons/events.svg",
  "speaker-icon": "/components/icons/speaker.svg",
  "reports-icon": "/components/icons/reports.svg",
  "notification-icon": "/components/icons/notification.svg",
  "messages-icon": "/components/icons/messages.svg",
  "settings-icon": "/components/icons/settings.svg",
  "collapse-icon": "/components/icons/collapse.svg",
  // Add other icons with their expanded versions
};

collapseButton.addEventListener("click", () => {
  aside.classList.toggle("collapsed");

  // Change icons based on collapsed state
  if (aside.classList.contains("collapsed")) {
    for (const id in iconsCollapsed) {
      document.getElementById(id).src = iconsCollapsed[id];
    }
  } else {
    for (const id in iconsExpanded) {
      document.getElementById(id).src = iconsExpanded[id];
    }
  }
});

// chart function
const chart = document.getElementById("registrationChart").getContext("2d");

const data = {
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

const options = {
  scales: {
    x: {
      grid: {
        color: "#555",
        display: true,
        lineWidth: 0.3,
      },

      ticks: {
        color: "#64748B",
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "#555",
        lineWidth: 0.3,
      },
      ticks: {
        color: "#64748B",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

new Chart(chart, {
  type: "bar",
  data: data,
  options: options,
});

// carousel
let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");

  // Hide all slides
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.opacity = 0; // Set opacity to 0
  });

  // Show the current slide
  slides[index].classList.add("active");
  slides[index].style.opacity = 1; // Set opacity to 1

  // Update dots
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
// select date functionality
const dateButton = document.getElementById("date-button");
const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("month-year");
const calendarGrid = document.getElementById("calendar-grid");
let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear(),
    month = currentDate.getMonth();
  monthYear.textContent =
    currentDate.toLocaleString("default", { month: "long" }) + " " + year;
  calendarGrid.innerHTML = "";

  for (let i = 0; i < new Date(year, month, 1).getDay(); i++) {
    calendarGrid.appendChild(document.createElement("div")); // Empty cells
  }
  for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.className = "day";
    dayElement.onclick = () => selectDate(year, month, day);
    calendarGrid.appendChild(dayElement);
  }
}

function selectDate(year, month, day) {
  const selectedDate = new Date(year, month, day);
  dateButton.textContent = selectedDate.toDateString(); // Update button text
  calendar.style.display = "none";
}

dateButton.onclick = () => {
  calendar.style.display =
    calendar.style.display === "block" ? "none" : "block";
  renderCalendar();
};
document.getElementById("prev-month").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};
document.getElementById("next-month").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};
window.onclick = (event) => {
  if (!dateButton.contains(event.target) && !calendar.contains(event.target))
    calendar.style.display = "none";
};

renderCalendar();

// Functions for  navigation
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

// tabe function
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
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const currentData = tableData.slice(start, end);
  currentData.forEach((event) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${event.name}</td>
          <td>${event.date}</td>
          <td>${event.speaker}</td>
          <td><span class="status ${
            event.status === "Completed" ? "completed" : "in-progress"
          }"> <span class="status-circle"></span> ${event.status.replace(
      "-",
      " "
    )}</span></td>
      `;
    tableBody.appendChild(row);
  });
  currentData.forEach((event) => {
    const mobileRow = document.createElement("div");
    mobileRow.innerHTML = `
      <div class="top-item">
          <span class="event-name">
            <span class="icon">
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                class='icon'
                  d="M0.75 0.75L4.25 4L0.75 7.25"
                  stroke="#334155"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span> ${event.name}</span>
            <span class="status ${
              event.status === "Completed" ? "completed" : "in-progress"
            }"> 
              <span class="status-circle"></span> ${event.status.replace(
                "-",
                " "
              )}
            </span>
            </div>

            <div class="bottom-item" >
              <span class="speaker">${event.speaker}</span>
              <span class="date">${event.date} </span>
            </div>
 `;
    document.getElementById("tester").appendChild(mobileRow);
  });
  const backdrop = document.getElementById("backdrop");
  const modal = document.getElementById("modal");
  const closebtn = document.getElementById("closebtn");
  const modalBtn = document.getElementById("modal-btn");

  const closeModal = () => {
    modal.style.display = "none";
    backdrop.style.display = "none";
  };

  const rows = document.querySelectorAll("table tr");
  // add modal
  rows.forEach((row, i) => {
    row.addEventListener("click", () => {
      const data = tableData[i - 1];
      modal.style.display = "block";
      backdrop.style.display = "block";

      const eventName = document.getElementById("event-name");
      const eventDate = document.getElementById("event-date");
      const eventSpeaker = document.getElementById("speakers");

      eventName.textContent = data.name;
      eventDate.textContent = data.date;
      eventSpeaker.textContent = `3 Guest Speakers: ${data.speaker},  ${data.speaker},  ${data.speaker}.
300 Attendees`;
    });
  });

  const topMobileRow = document.querySelectorAll("#tester .top-item");
  topMobileRow.forEach((item, i) => {
    item.addEventListener("click", () => {
      const bottomItems = document.getElementsByClassName("bottom-item");
      if (bottomItems[i]) {
        if (bottomItems[i].style.display === "flex") {
          bottomItems[i].style.display = "none";
        } else {
          bottomItems[i].style.display = "flex";
        }
      }
    });
  });
  const bottomMobileRows = document.querySelectorAll(".bottom-item");

  bottomMobileRows.forEach((item, i) => {
    item.addEventListener("click", () => {
      const data = tableData[i];

      modal.style.display = "block";
      backdrop.style.display = "block";

      const eventName = document.getElementById("event-name");
      const eventDate = document.getElementById("event-date");
      const eventSpeaker = document.getElementById("speakers");

      eventName.textContent = data.name;
      eventDate.textContent = data.date;
      eventSpeaker.textContent = `3 Guest Speakers: ${data.speaker}, ${data.speaker}, ${data.speaker}. 300 Attendees`;
    });
  });

  closebtn.addEventListener("click", function () {
    closeModal();
  });
  modalBtn.addEventListener("click", function () {
    closeModal();
  });

  backdrop.addEventListener("click", function () {
    closeModal();
  });
  dropdownSelect.addEventListener("change", () => {
    const selectedValue = dropdownSelect.value;
    rowsPerPage = selectedValue;
    populateTable(1);
  });

  const noOfPage = Math.ceil(totalPages);
  const pages = document.getElementById("page-numbers");

  pages.innerHTML = "";
  Array.from({ length: noOfPage }).forEach((_, i) => {
    const number = document.createElement("div");
    number.textContent = i + 1;

    number.addEventListener("click", () => {
      currentPage = i + 1;
      populateTable(currentPage);
    });

    if (page === i + 1) {
      number.className = "page active";
    } else {
      number.className = "page";
    }
    pages.appendChild(number);
  });
}

document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    populateTable(currentPage);
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  if (currentPage < totalPages) {
    currentPage++;
    populateTable(currentPage);
  }
});

// Initialize
populateTable(currentPage);
