function initializeBSDatepicker(inputId, callback) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const template = document.createElement("template");
  template.innerHTML = `
        <div class="bs-datepicker" style="display: none;">
<div class="datepicker-header">
<button class="toggle-view">
    <span class="month-year-text">March 2025</span>
    <span class="dropdown-icon" data-symbol="▾"></span>
</button>
    <div class="navigation-controls">
<button class="nav-button prev-year" data-symbol="«"></button>
<button class="nav-button prev-month" data-symbol="‹"></button>
<button class="nav-button next-month" data-symbol="›"></button>
<button class="nav-button next-year" data-symbol="»"></button>
    </div>
</div>
            <div class="view-container">
                <div class="calendar-view">
                    <table class="datepicker-table">
                        <thead><tr><th>AI</th><th>SO</th><th>MA</th><th>BU</th><th>BI</th><th>SU</th><th>SA</th></tr></thead>
                        <tbody class="datepicker-body"></tbody>
                    </table>
                </div>
                <div class="year-month-view" style="display: none;">
                    <div class="year-month-content"></div>
                </div>

                
            </div>
            <div class="datepicker-footer">
                    <button class="clear-button">Clear</button>
                    <button class="today-button">Today</button>
                </div>
        </div>`;

  const datepicker = template.content.firstElementChild.cloneNode(true);
  document.body.appendChild(datepicker);

  let currentBSDate = adToBS(new Date()) || {
    bs_year: 2081,
    bs_month: 1,
    bs_day: 1,
  };
  let isYearMonthView = false;

  const toggleButton = datepicker.querySelector(".toggle-view");
  const monthYearText = datepicker.querySelector(".month-year-text");
  const calendarView = datepicker.querySelector(".calendar-view");
  const yearMonthView = datepicker.querySelector(".year-month-view");
  const yearMonthContent = datepicker.querySelector(".year-month-content");
  const clearButton = datepicker.querySelector(".clear-button");
  const todayButton = datepicker.querySelector(".today-button");

  // Update header text
  function updateHeaderText() {
    monthYearText.textContent = `${bsMonthNames[currentBSDate.bs_month - 1]} ${
      currentBSDate.bs_year
    }`;
  }

  // Render Calendar View
  function renderCalendar(bs_year, bs_month) {
    const tbody = datepicker.querySelector(".datepicker-body");
    tbody.innerHTML = "";

    const startDate = getADDateFromBSData(bs_year, bs_month, 1);
    const daysInMonth = getDaysInBSMonth(bs_month, bs_year);
    const startDay = startDate.getDay();

    let dayCount = 1;
    for (let i = 0; i < 6 && dayCount <= daysInMonth; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");
        if ((i === 0 && j < startDay) || dayCount > daysInMonth) {
          cell.className = "other-month";
        } else {
          cell.textContent = dayCount;
          cell.className =
            dayCount === currentBSDate.bs_day &&
            bs_month === currentBSDate.bs_month &&
            bs_year === currentBSDate.bs_year
              ? "current-day"
              : "";
          let currentDay = dayCount;
          cell.addEventListener("click", () => {
            currentBSDate = { bs_year, bs_month, bs_day: currentDay };
            const adDate = bsToAD(bs_year, bs_month, currentDay);
            input.value = `${bs_year}-${String(bs_month).padStart(
              2,
              "0"
            )}-${String(currentDay).padStart(2, "0")}`;
            datepicker.style.display = "none";
            if (callback) callback({ ...currentBSDate, adDate });
          });
          dayCount++;
        }
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
    updateHeaderText();
  }

  // Render Year/Month View
  function renderYearMonthView() {
    yearMonthContent.innerHTML = "";

    const years = Object.keys(bsadMapping).map(Number);
    years.forEach((year) => {
      const yearDiv = document.createElement("div");
      yearDiv.className = "year-item";
      yearDiv.textContent = year;
      yearDiv.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent click from bubbling up to document
        const existingMonths = yearDiv.querySelector(".month-list");
        if (existingMonths) {
          existingMonths.remove();
          return;
        }
        // Remove other month lists
        yearMonthContent
          .querySelectorAll(".month-list")
          .forEach((list) => list.remove());

        const monthList = document.createElement("div");
        monthList.className = "month-list";
        bsMonthNames.forEach((month, index) => {
          const monthItem = document.createElement("div");
          monthItem.className = "month-item";
          monthItem.textContent = month;
          monthItem.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent click from bubbling up to document
            currentBSDate.bs_year = year;
            currentBSDate.bs_month = index + 1;
            isYearMonthView = false;
            calendarView.style.display = "block";
            yearMonthView.style.display = "none";
            renderCalendar(currentBSDate.bs_year, currentBSDate.bs_month);
          });
          monthList.appendChild(monthItem);
        });
        yearDiv.appendChild(monthList);
      });
      yearMonthContent.appendChild(yearDiv);
    });
  }

  // Toggle between views
  toggleButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    isYearMonthView = !isYearMonthView;
    if (isYearMonthView) {
      calendarView.style.display = "none";
      yearMonthView.style.display = "block";
      renderYearMonthView();
    } else {
      calendarView.style.display = "block";
      yearMonthView.style.display = "none";
      renderCalendar(currentBSDate.bs_year, currentBSDate.bs_month);
    }
  });

  // Navigation via buttons (enabled for both views)
  datepicker.querySelector(".prev-year").addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    currentBSDate.bs_year--;
    if (isYearMonthView) {
      renderYearMonthView();
    } else {
      renderCalendar(currentBSDate.bs_year, currentBSDate.bs_month);
    }
  });

  datepicker.querySelector(".next-year").addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    currentBSDate.bs_year++;
    if (isYearMonthView) {
      renderYearMonthView();
    } else {
      renderCalendar(currentBSDate.bs_year, currentBSDate.bs_month);
    }
  });

  datepicker.querySelector(".prev-month").addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    if (!isYearMonthView) {
      currentBSDate.bs_month--;
      if (currentBSDate.bs_month < 1) {
        currentBSDate.bs_month = 12;
        currentBSDate.bs_year--;
      }
      renderCalendar(currentBSDate.bs_year, currentBSDate.bs_month);
    }
  });

  datepicker.querySelector(".next-month").addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    if (!isYearMonthView) {
      currentBSDate.bs_month++;
      if (currentBSDate.bs_month > 12) {
        currentBSDate.bs_month = 1;
        currentBSDate.bs_year++;
      }
      renderCalendar(currentBSDate.bs_year, currentBSDate.bs_month);
    }
  });

  // Today button functionality
  todayButton.addEventListener("click", (e) => {
    e.stopPropagation();
    currentBSDate = adToBS(new Date());
    const adDate = bsToAD(
      currentBSDate.bs_year,
      currentBSDate.bs_month,
      currentBSDate.bs_day
    );
    input.value = `${currentBSDate.bs_year}-${String(
      currentBSDate.bs_month
    ).padStart(2, "0")}-${String(currentBSDate.bs_day).padStart(2, "0")}`;
    datepicker.style.display = "none";
    renderCalendar(currentBSDate.bs_year, currentBSDate.bs_month);
    if (callback) callback({ ...currentBSDate, adDate });
  });

  // Clear button functionality
  clearButton.addEventListener("click", (e) => {
    e.stopPropagation();
    input.value = "";
    datepicker.style.display = "none";
    if (callback) callback(null); // Send null to indicate cleared selection
  });

  // Show/hide datepicker
  input.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    const rect = input.getBoundingClientRect();
    datepicker.style.top = `${rect.bottom + window.scrollY}px`;
    datepicker.style.left = `${rect.left + window.scrollX}px`;
    datepicker.style.display = "block";
    isYearMonthView = false;
    calendarView.style.display = "block";
    yearMonthView.style.display = "none";
    renderCalendar(currentBSDate.bs_year, currentBSDate.bs_month);
  });

  // Close datepicker only when clicking outside both the input and datepicker
  document.addEventListener("click", (e) => {
    if (!datepicker.contains(e.target) && e.target !== input) {
      datepicker.style.display = "none";
    }
  });

  // Initial render
  renderCalendar(currentBSDate.bs_year, currentBSDate.bs_month);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { initializeBSDatepicker };
}
