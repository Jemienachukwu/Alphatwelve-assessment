// mobile nav drop down toggle
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

// collapse
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
};

collapseButton.addEventListener("click", () => {
  aside.classList.toggle("collapsed");

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
    slide.style.opacity = 0;
  });

  // Show the current slide
  slides[index].classList.add("active");
  slides[index].style.opacity = 1;

  // Update dots
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Functions for carousel navigation
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
setInterval(nextSlide, 3000);

// table data
const tableData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    name: "Blockchain Revolution",
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
    name: "E-Commerce Strategies",
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
// Select date functionality
const dateButton = document.getElementById("date-button");
const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("month-year");
const calendarGrid = document.getElementById("calendar-grid");
let currentDate = new Date();
let selectedDate = null;

let filteredData = [...tableData];
let rowsPerPage = parseInt(document.getElementById("dropdown-select").value);
let currentPage = 1;

const filterInput = document.getElementById("filter-input");
const dropdownSelect = document.getElementById("dropdown-select");
const selectStatus = document.getElementById("select-status");

// Function to render the calendar
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

// Function to select a date
function selectDate(year, month, day) {
  selectedDate = new Date(year, month, day);
  dateButton.textContent = selectedDate.toDateString();
  calendar.style.display = "none";
  filterBySelectedDate();
}

// Toggle calendar visibility
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

// Close calendar if clicked outside
window.onclick = (event) => {
  if (!dateButton.contains(event.target) && !calendar.contains(event.target)) {
    calendar.style.display = "none";
  }
};

// Function to filter tableData by the selected date
function filterBySelectedDate() {
  filteredData = [...tableData];

  if (selectedDate) {
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0"); //
    const formattedSelectedDate = `${year}-${month}-${day}`;

    filteredData = filteredData.filter((event) => {
      const eventDate = event.date;
      return eventDate === formattedSelectedDate;
    });
  }

  currentPage = 1;
  populateTable(currentPage);
}

// Function to filter data based on search term
function filterData(searchTerm) {
  filteredData = filteredData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  currentPage = 1;
  populateTable(currentPage);
}

// Function to filter data based on status
function filterStatusData(statusResult) {
  filteredData = tableData.filter((item) => {
    return item.status === statusResult;
  });
  currentPage = 1;
  populateTable(currentPage);
}

// Event listener for status select dropdown
selectStatus.addEventListener("change", (event) => {
  const statusResult = event.target.value;

  if (statusResult === "Completed" || statusResult === "In-Progress") {
    filterStatusData(statusResult);
  } else {
    filteredData = [...tableData];
    populateTable(currentPage);
  }
});

// Function to populate the table based on the current page and filtered data
function populateTable(page) {
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const tableBody = document.getElementById("event-table-body");
  const mobileContainer = document.getElementById("tester");
  tableBody.innerHTML = "";
  mobileContainer.innerHTML = "";

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice(start, end);

  // Populate desktop table rows
  currentData.forEach((event) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.date}</td>
      <td>${event.speaker}</td>
      <td>
        <span class="status ${
          event.status === "Completed" ? "completed" : "in-progress"
        }">
          <span class="status-circle"></span> ${event.status.replace("-", " ")}
        </span>
      </td>`;
    tableBody.appendChild(row);
  });

  // Handle trigger modal for desktop rows
  const rows = document.querySelectorAll("table tr:not(:first-child)"); // Skipping the header row if it exists
  rows.forEach((row, index) => {
    row.addEventListener("click", () => {
      const data = currentData[index]; // Use index to access the corresponding data
      showModal(data);
    });
  });
  // Populate mobile rows
  currentData.forEach((event) => {
    const mobileRow = document.createElement("div");
    mobileRow.classList.add("mobile-row");
    mobileRow.innerHTML = `
      <div class="top-item">
        <span class="event-name">
          <span class="icon">
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class='icon' d="M0.75 0.75L4.25 4L0.75 7.25" stroke="#334155" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span> ${event.name}
        </span>
        <span class="status ${
          event.status === "Completed" ? "completed" : "in-progress"
        }">
          <span class="status-circle"></span> ${event.status.replace("-", " ")}
        </span>
      </div>
      <div class="bottom-item" style="display: none;">
        <span class="speaker">${event.speaker}</span>
        <span class="date">${event.date}</span>
      </div>`;
    mobileContainer.appendChild(mobileRow);
  });

  // Handle trigger modal for mobile rows
  const bottomMobileRows = document.querySelectorAll("#tester .bottom-item");
  bottomMobileRows.forEach((item, i) => {
    item.addEventListener("click", () => {
      const data = currentData[i];
      showModal(data);
    });
  });

  // Handle the expand/collapse for mobile rows
  const topMobileRows = document.querySelectorAll("#tester .top-item");
  topMobileRows.forEach((item, i) => {
    item.addEventListener("click", () => {
      const bottomItem = item.nextElementSibling;
      const icon = item.querySelector(".icon svg");

      if (bottomItem) {
        const isExpanded = bottomItem.style.display === "flex";
        bottomItem.style.display = isExpanded ? "none" : "flex";

        icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(90deg)";
        icon.style.transition = "transform 0.3s ease";
      }
    });
  });

  // Update pagination controls
  updatePaginationControls(page, totalPages);
}

// Function to show the modal with the event details
function showModal(data) {
  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");
  const eventName = document.getElementById("event-name");
  const eventDate = document.getElementById("event-date");
  const eventSpeaker = document.getElementById("speakers");

  modal.style.display = "block";
  backdrop.style.display = "block";

  eventName.textContent = data.name;
  eventDate.textContent = data.date;
  eventSpeaker.textContent = `3 Guest Speakers: ${data.speaker}, ${data.speaker}, ${data.speaker}. 300 Attendees`;

  // Close modal events
  document.getElementById("closebtn").onclick = closeModal;
  document.getElementById("edit-modal-btn").onclick = closeModal;
  document.getElementById("delete-modal-btn").onclick = closeModal;
  document.getElementById("complete-modal-btn").onclick = closeModal;
  backdrop.onclick = closeModal;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("backdrop").style.display = "none";
}

// Function to update pagination controls
function updatePaginationControls(currentPage, totalPages) {
  const pages = document.getElementById("page-numbers");
  pages.innerHTML = "";

  Array.from({ length: totalPages }).forEach((_, i) => {
    const number = document.createElement("div");
    number.textContent = i + 1;

    number.addEventListener("click", () => {
      populateTable(i + 1);
    });

    number.className = currentPage === i + 1 ? "page active" : "page";
    pages.appendChild(number);

    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // Check if the previous button should be disabled
    if (currentPage <= 1) {
      prevButton.style.backgroundColor = " #E2E8F0";
      prevButton.style.cursor = "not-allowed";

      prevButton.style.opacity = "1";
    } else {
      prevButton.style.backgroundColor = "#fff";
      prevButton.style.cursor = "pointer";

      prevButton.style.opacity = "1";
    }

    if (currentPage >= totalPages) {
      nextButton.style.backgroundColor = "#E2E8F0";
      nextButton.style.cursor = "not-allowed";

      nextButton.style.opacity = "1";
    } else {
      nextButton.style.backgroundColor = "#fff";
      nextButton.style.opacity = "1";
      nextButton.style.cursor = "pointer";
    }
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
// Event listener for search input
filterInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  filterData(searchTerm);
});

// Event listener for rows per page dropdown
dropdownSelect.addEventListener("change", (event) => {
  rowsPerPage = parseInt(event.target.value);
  currentPage = 1;
  populateTable(currentPage);
});

// Initial population of the table
populateTable(currentPage);
