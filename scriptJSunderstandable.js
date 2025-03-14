const bsadMapping = {
    2078: {
        1: [2021, 4, 14],
        2: [2021, 5, 15],
        3: [2021, 6, 15],
        4: [2021, 7, 16],
        5: [2021, 8, 17],
        6: [2021, 9, 17],
        7: [2021, 10, 18],
        8: [2021, 11, 17],
        9: [2021, 12, 16],
        10: [2022, 1, 15],
        11: [2022, 2, 13],
        12: [2022, 3, 15],
    },
    2079: {
        1: [2022, 4, 14],
        2: [2022, 5, 15],
        3: [2022, 6, 15],
        4: [2022, 7, 17],
        5: [2022, 8, 17],
        6: [2022, 9, 17],
        7: [2022, 10, 18],
        8: [2022, 11, 17],
        9: [2022, 12, 16],
        10: [2023, 1, 15],
        11: [2023, 2, 13],
        12: [2023, 3, 15],
    },
    2080: {
        1: [2023, 4, 14],
        2: [2023, 5, 15],
        3: [2023, 6, 16],
        4: [2023, 7, 17],
        5: [2023, 8, 18],
        6: [2023, 9, 18],
        7: [2023, 10, 18],
        8: [2023, 11, 17],
        9: [2023, 12, 17],
        10: [2024, 1, 15],
        11: [2024, 2, 13],
        12: [2024, 3, 14],
    },
    2081: {
        1: [2024, 4, 13],
        2: [2024, 5, 14],
        3: [2024, 6, 15],
        4: [2024, 7, 16],
        5: [2024, 8, 17],
        6: [2024, 9, 17],
        7: [2024, 10, 17],
        8: [2024, 11, 16],
        9: [2024, 12, 16],
        10: [2025, 1, 14],
        11: [2025, 2, 13],
        12: [2025, 3, 14],
    },
    2082: {
        1: [2025, 4, 14],
        2: [2025, 5, 15],
        3: [2025, 6, 15],
        4: [2025, 7, 17],
        5: [2025, 8, 17],
        6: [2025, 9, 17],
        7: [2025, 10, 18],
        8: [2025, 11, 17],
        9: [2025, 12, 16],
        10: [2026, 1, 15],
        11: [2026, 2, 13],
        12: [2026, 3, 15],
    },
    2083: {
        1: [2026, 4, 14],
        2: [2026, 5, 15],
        3: [2026, 6, 15],
        4: [2026, 7, 17],
        5: [2026, 8, 17],
        6: [2026, 9, 17],
        7: [2026, 10, 18],
        8: [2026, 11, 17],
        9: [2026, 12, 16],
        10: [2027, 1, 15],
        11: [2027, 2, 13],
        12: [2027, 3, 15],
    },
    2084: {
        1: [2027, 4, 14],
        2: [2027, 5, 15],
        3: [2027, 6, 15],
        4: [2027, 7, 17],
        5: [2027, 8, 17],
        6: [2027, 9, 17],
        7: [2027, 10, 17],
        8: [2027, 11, 16],
        9: [2027, 12, 16],
        10: [2028, 1, 14],
        11: [2028, 2, 13],
        12: [2028, 3, 14],
    },
    2085: {
        1: [2028, 4, 13],
        2: [2028, 5, 14],
        3: [2028, 6, 15],
        4: [2028, 7, 16],
        5: [2028, 8, 17],
        6: [2028, 9, 16],
        7: [2028, 10, 17],
        8: [2028, 11, 16],
        9: [2028, 12, 16],
        10: [2029, 1, 14],
        11: [2029, 2, 13],
        12: [2029, 3, 15],
    },
    2086: {
        1: [2029, 4, 14],
        2: [2029, 5, 14],
        3: [2029, 6, 15],
        4: [2029, 7, 16],
        5: [2029, 8, 17],
        6: [2029, 9, 17],
        7: [2029, 10, 17],
        8: [2029, 11, 16],
        9: [2029, 12, 16],
        10: [2030, 1, 14],
        11: [2030, 2, 13],
        12: [2030, 3, 15],
    },
    2087: {
        1: [2030, 4, 14],
        2: [2030, 5, 15],
        3: [2030, 6, 15],
        4: [2030, 7, 17],
        5: [2030, 8, 17],
        6: [2030, 9, 17],
        7: [2030, 10, 18],
        8: [2030, 11, 17],
        9: [2030, 12, 17],
        10: [2031, 1, 16],
        11: [2031, 2, 15],
        12: [2031, 3, 17],
    },
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
    if (!bsadMapping[bs_year] || !bsadMapping[bs_year][bs_month]) {
        return null;
    }
    
    const [year, month, day] = bsadMapping[bs_year][bs_month];
    const adDate = new Date(year, month, day);
    adDate.setDate(adDate.getDate() + bs_day - 1);
    return adDate;
}

function getDaysInBSMonth(bs_month, bs_year) {
    if (!bsadMapping[bs_year] || !bsadMapping[bs_year][bs_month]) {
        return null;
    }
    
    // Find the next month's mapping
    let nextMonth = bs_month % 12 + 1;
    let nextYear = bs_month < 12 ? bs_year : bs_year + 1;
    
    // If next month data is available
    if (bsadMapping[nextYear] && bsadMapping[nextYear][nextMonth]) {
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
    // Find the BS date for the given AD date
    for (const bs_year in bsadMapping) {
        for (const bs_month in bsadMapping[bs_year]) {
            // Get the first day of the BS month in AD calendar
            const [year, month, day] = bsadMapping[bs_year][bs_month];
            const bsMonthStartInAD = new Date(year, month, day);
            
            // Find the next month's start date to determine the end of this month
            let nextMonth = parseInt(bs_month) % 12 + 1;
            let nextYear = parseInt(bs_month) < 12 ? parseInt(bs_year) : parseInt(bs_year) + 1;
            
            let bsMonthEndInAD;
            if (bsadMapping[nextYear] && bsadMapping[nextYear][nextMonth]) {
                const [nextYear_, nextMonth_, nextDay_] = bsadMapping[nextYear][nextMonth];
                bsMonthEndInAD = new Date(nextYear_, nextMonth_, nextDay_);
                bsMonthEndInAD.setDate(bsMonthEndInAD.getDate() - 1);
            } else {
                // If next month data isn't available, estimate with 30 days
                bsMonthEndInAD = new Date(bsMonthStartInAD);
                bsMonthEndInAD.setDate(bsMonthEndInAD.getDate() + 29);
            }
            
            // Check if adDate falls within this BS month
            if (adDate >= bsMonthStartInAD && adDate <= bsMonthEndInAD) {
                const diffTime = adDate - bsMonthStartInAD;
                const bs_day = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
                
                return {
                    bs_day: bs_day,
                    bs_month: parseInt(bs_month),
                    bs_year: parseInt(bs_year)
                };
            }
        }
    }
    
    return null;
}

function getADDateRangeForBSMonth(bs_year, bs_month) {
    if (!bsadMapping[bs_year] || !bsadMapping[bs_year][bs_month]) {
        return { start: null, end: null };
    }
    
    // Start date
    const [year, month, day] = bsadMapping[bs_year][bs_month];
    const start = new Date(year, month, day);
    
    // End date - find the next month's start date and subtract 1 day
    let nextMonth = bs_month % 12 + 1;
    let nextYear = bs_month < 12 ? bs_year : bs_year + 1;
    
    let end;
    if (bsadMapping[nextYear] && bsadMapping[nextYear][nextMonth]) {
        const [nextYear_, nextMonth_, nextDay_] = bsadMapping[nextYear][nextMonth];
        end = new Date(nextYear_, nextMonth_, nextDay_);
        end.setDate(end.getDate() - 1);
    } else {
        // Default to 30 days if next month mapping isn't available
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