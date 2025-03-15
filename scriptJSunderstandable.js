// Simplified BS to AD mapping
const bsadMapping = { 
    2078: [14, 15, 15, 16, 17, 17, 18, 17, 16, 15, 13, 15],
    2079: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 15],
    2080: [14, 15, 16, 17, 18, 18, 18, 17, 17, 15, 13, 14],
    2081: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 14],
    2082: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 15],
    2083: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 15],
    2084: [14, 15, 15, 17, 17, 17, 17, 16, 16, 14, 13, 14],
    2085: [13, 14, 15, 16, 17, 16, 17, 16, 16, 14, 13, 15],
    2086: [14, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 15],
    2087: [14, 15, 15, 17, 17, 17, 18, 17, 17, 16, 15, 17],
};

// Nepali month names
const bsMonthNames = [
    "Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin",
    "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
];

// Initialize the page
window.onload = function() {
    setDefaultDates();
    updateTodayInfo();
    renderBSCalendar();
};

function setDefaultDates() {
    const today = new Date();
    document.getElementById('ad-date').valueAsDate = today;
    
    // Set the BS date selector to the current date in BS
    const bsDate = adToBS(today);
    if (bsDate) {
        document.getElementById('bs-year').value = bsDate.bs_year;
        document.getElementById('bs-month').value = bsDate.bs_month;
        document.getElementById('bs-day').value = bsDate.bs_day;
    }
}

function updateTodayInfo() {
    const today = new Date();
    const formattedAD = today.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    const bsDate = adToBS(today);
    let todayInfo = `Today: ${formattedAD}`;
    
    if (bsDate) {
        todayInfo += ` / BS ${bsDate.bs_day} ${bsMonthNames[bsDate.bs_month-1]} ${bsDate.bs_year}`;
    }
    
    document.getElementById('today-info').innerText = todayInfo;
}



function getADDateFromBSData(bs_year, bs_month, bs_day) {
    if (!bsadMapping[bs_year] || bs_month < 1 || bs_month > 12) {
        return null;
    }

    const baseADYear = bs_year - 57; // BS 2078 = AD 2021, etc.
    const dayOfMonth = bsadMapping[bs_year][bs_month - 1]; // Starting day of the BS month
    const adMonth = (bs_month + 2) % 12;
    const adYear = adMonth >= 3 ? baseADYear : baseADYear + 1; // Adjust for Jan-Mar of next year

    // Create the starting date of the BS month
    const adDate = new Date(adYear, adMonth, dayOfMonth);
    adDate.setDate(adDate.getDate() + bs_day - 1); // Add days to get the exact date
    return adDate;
}

function getDaysInBSMonth(bs_month, bs_year) {
    if (!bsadMapping[bs_year] || bs_month < 1 || bs_month > 12) {
        return null;
    }

    // Find the next month's mapping
    let nextMonth = bs_month % 12 + 1;
    let nextYear = bs_month < 12 ? bs_year : bs_year + 1;

    // If next month data is available
    if (bsadMapping[nextYear] && bsadMapping[nextYear][nextMonth - 1]) {
        const currentMonthDate = getADDateFromBSData(bs_year, bs_month, 1);
        const nextMonthDate = getADDateFromBSData(nextYear, nextMonth, 1);
        
        if (currentMonthDate && nextMonthDate) {
            const diffTime = nextMonthDate - currentMonthDate;
            return Math.floor(diffTime / (1000 * 60 * 60 * 24));
        }
    }

    // Default to 30 days if next month mapping isn't available
    return 30;
}

function bsToAD(bs_year, bs_month, bs_day) {
    return getADDateFromBSData(bs_year, bs_month, bs_day);
}

function adToBS(adDate) {
    for (const bs_year in bsadMapping) {
        for (let bs_month = 1; bs_month <= 12; bs_month++) {
            const bsMonthStartInAD = getADDateFromBSData(bs_year, bs_month, 1);
            
            // Find the next month's start date to determine the end of this month
            let nextMonth = bs_month % 12 + 1;
            let nextYear = bs_month < 12 ? parseInt(bs_year) : parseInt(bs_year) + 1;
            
            let bsMonthEndInAD;
            if (bsadMapping[nextYear] && bsadMapping[nextYear][nextMonth - 1]) {
                bsMonthEndInAD = getADDateFromBSData(nextYear, nextMonth, 1);
                bsMonthEndInAD.setDate(bsMonthEndInAD.getDate() - 1);
            } else {
                bsMonthEndInAD = new Date(bsMonthStartInAD);
                bsMonthEndInAD.setDate(bsMonthEndInAD.getDate() + 29);
            }
            
            // Check if adDate falls within this BS month
            if (adDate >= bsMonthStartInAD && adDate <= bsMonthEndInAD) {
                const diffTime = adDate - bsMonthStartInAD;
                const bs_day = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
                
                return {
                    bs_day: bs_day,
                    bs_month: bs_month,
                    bs_year: parseInt(bs_year)
                };
            }
        }
    }
    
    return null;
}

function getADDateRangeForBSMonth(bs_year, bs_month) {
    if (!bsadMapping[bs_year] || bs_month < 1 || bs_month > 12) {
        return { start: null, end: null };
    }
    
    // Start date
    const start = getADDateFromBSData(bs_year, bs_month, 1);
    
    // End date - find the next month's start date and subtract 1 day
    let nextMonth = bs_month % 12 + 1;
    let nextYear = bs_month < 12 ? bs_year : bs_year + 1;
    
    let end;
    if (bsadMapping[nextYear] && bsadMapping[nextYear][nextMonth - 1]) {
        end = getADDateFromBSData(nextYear, nextMonth, 1);
        end.setDate(end.getDate() - 1);
    } else {
        end = new Date(start);
        end.setDate(end.getDate() + 29);
    }
    
    return { start, end };
}

function convertBStoAD() {
    const bs_year = parseInt(document.getElementById('bs-year').value);
    const bs_month = parseInt(document.getElementById('bs-month').value);
    const bs_day = parseInt(document.getElementById('bs-day').value);
    
    // Validate input
    const daysInMonth = getDaysInBSMonth(bs_month, bs_year);
    if (bs_day < 1 || bs_day > daysInMonth) {
        document.getElementById('bs-to-ad-result').innerText = `Invalid day. ${bsMonthNames[bs_month-1]} ${bs_year} has ${daysInMonth} days.`;
        document.getElementById('bs-to-ad-result').style.display = 'block';
        return;
    }
    
    const adDate = bsToAD(bs_year, bs_month, bs_day);
    if (adDate) {
        const formattedDate = adDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        });
        document.getElementById('bs-to-ad-result').innerText = `BS ${bs_day} ${bsMonthNames[bs_month-1]} ${bs_year} = ${formattedDate}`;
        document.getElementById('bs-to-ad-result').style.display = 'block';
    } else {
        document.getElementById('bs-to-ad-result').innerText = "Conversion failed. Please check your input.";
        document.getElementById('bs-to-ad-result').style.display = 'block';
    }
}

function convertADtoBS() {
    const adDateInput = document.getElementById('ad-date').value;
    if (!adDateInput) {
        document.getElementById('ad-to-bs-result').innerText = "Please select a date.";
        document.getElementById('ad-to-bs-result').style.display = 'block';
        return;
    }
    
    const adDate = new Date(adDateInput);
    const bsDate = adToBS(adDate);
    
    if (bsDate) {
        const formattedDate = `BS ${bsDate.bs_day} ${bsMonthNames[bsDate.bs_month-1]} ${bsDate.bs_year}`;
        document.getElementById('ad-to-bs-result').innerText = `${adDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        })} = ${formattedDate}`;
        document.getElementById('ad-to-bs-result').style.display = 'block';
    } else {
        document.getElementById('ad-to-bs-result').innerText = "Conversion failed. Date may be out of supported range.";
        document.getElementById('ad-to-bs-result').style.display = 'block';
    }
}

function renderBSCalendar() {
    // Get current BS date
    const today = new Date();
    const currentBSDate = adToBS(today);
    
    if (!currentBSDate) return;
    
    const bs_year = currentBSDate.bs_year;
    const bs_month = currentBSDate.bs_month;
    
    // Update calendar title
    document.getElementById('calendar-title').innerText = `BS Calendar - ${bsMonthNames[bs_month-1]} ${bs_year}`;
    
    // Get date range for this BS month
    const dateRange = getADDateRangeForBSMonth(bs_year, bs_month);
    if (!dateRange.start || !dateRange.end) return;
    
    const startDate = dateRange.start;
    const daysInMonth = getDaysInBSMonth(bs_month, bs_year);
    
    // Get the day of week the month starts on (0 = Sunday, 6 = Saturday)
    const startDay = startDate.getDay();
    
    // Create calendar grid
    let calendarHTML = '';
    let dayCount = 1;
    
    // Create rows for the calendar
    for (let i = 0; i < 6; i++) {
        if (dayCount > daysInMonth) break;
        
        calendarHTML += '<tr>';
        
        // Create cells for each day
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < startDay) || dayCount > daysInMonth) {
                // Empty cell
                calendarHTML += '<td class="other-month"></td>';
            } else {
                const isCurrentDay = dayCount === currentBSDate.bs_day;
                const cellClass = isCurrentDay ? 'current-day' : '';
                
                // Calculate the corresponding AD date
                const adDate = bsToAD(bs_year, bs_month, dayCount);
                const adDayMonth = adDate ? adDate.getDate() + '/' + (adDate.getMonth() + 1) : '';
                
                calendarHTML += `<td class="${cellClass}">
                    <div>${dayCount}</div>
                    <div style="font-size: 0.8em; color: #666;">${adDayMonth}</div>
                </td>`;
                
                dayCount++;
            }
        }
        
        calendarHTML += '</tr>';
    }
    
    document.getElementById('calendar-body').innerHTML = calendarHTML;
}

// Event listeners for changing calendar month
document.getElementById('bs-month').addEventListener('change', function() {
    const bs_year = parseInt(document.getElementById('bs-year').value);
    const bs_month = parseInt(this.value);
    updateCalendar(bs_year, bs_month);
});

document.getElementById('bs-year').addEventListener('change', function() {
    const bs_year = parseInt(this.value);
    const bs_month = parseInt(document.getElementById('bs-month').value);
    updateCalendar(bs_year, bs_month);
});
function updateCalendar(bs_year, bs_month) {
    // Update calendar title
    document.getElementById('calendar-title').innerText = `BS Calendar - ${bsMonthNames[bs_month-1]} ${bs_year}`;
    
    // Get date range for this BS month
    const dateRange = getADDateRangeForBSMonth(bs_year, bs_month);
    if (!dateRange.start || !dateRange.end) return;
    
    const startDate = dateRange.start;
    const daysInMonth = getDaysInBSMonth(bs_month, bs_year);
    
    // Get the day of week the month starts on (0 = Sunday, 6 = Saturday)
    const startDay = startDate.getDay();
    
    // Create calendar grid
    let calendarHTML = '';
    let dayCount = 1;
    
    // Get current BS date for highlighting current day
    const today = new Date();
    const currentBSDate = adToBS(today);
    const isCurrentMonth = currentBSDate && currentBSDate.bs_month === bs_month && currentBSDate.bs_year === bs_year;
    
    // Create rows for the calendar
    for (let i = 0; i < 6; i++) {
        if (dayCount > daysInMonth) break;
        
        calendarHTML += '<tr>';
        
        // Create cells for each day
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < startDay) || dayCount > daysInMonth) {
                // Empty cell
                calendarHTML += '<td class="other-month"></td>';
            } else {
                const isCurrentDay = isCurrentMonth && dayCount === currentBSDate.bs_day;
                const cellClass = isCurrentDay ? 'current-day' : '';
                
                // Calculate the corresponding AD date
                const adDate = bsToAD(bs_year, bs_month, dayCount);
                const adDayMonth = adDate ? adDate.getDate() + '/' + (adDate.getMonth() + 1) : '';
                
                calendarHTML += `<td class="${cellClass}">
                    <div>${dayCount}</div>
                    <div style="font-size: 0.8em; color: #666;">${adDayMonth}</div>
                </td>`;
                
                dayCount++;
            }
        }
        
        calendarHTML += '</tr>';
    }
    
    document.getElementById('calendar-body').innerHTML = calendarHTML;
}