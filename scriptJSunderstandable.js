// Mapping data for BS to AD conversion in nested object format
const bsadMapping = {
    2079: {
        1: [2022, 3, 14], // Baisakh 2079 = April 14, 2022
        2: [2022, 3, 14], // Jestha 2079 = April 14, 2022
        3: [2022, 4, 15], // Ashadh 2079 = May 15, 2022
        4: [2022, 5, 15], // Shrawan 2079 = June 15, 2022
        5: [2022, 6, 17], // Bhadra 2079 = July 17, 2022
        6: [2022, 7, 17], // Ashwin 2079 = August 17, 2022
        7: [2022, 8, 17], // Kartik 2079 = September 17, 2022
        8: [2022, 9, 18], // Mangsir 2079 = October 18, 2022
        9: [2022, 10, 17], // Poush 2079 = November 17, 2022
        10: [2022, 11, 16], // Magh 2079 = December 16, 2022
        11: [2023, 0, 15], // Falgun 2079 = January 15, 2023
        12: [2023, 1, 13], // Chaitra 2079 = February 13, 2023
    },
    2080: {
        1: [2023, 2, 15], // Baisakh 2080 = March 15, 2023
        2: [2023, 3, 14], // Jestha 2080 = April 14, 2023
        3: [2023, 4, 15], // Ashadh 2080 = May 15, 2023
        4: [2023, 5, 16], // Shrawan 2080 = June 16, 2023
        5: [2023, 6, 17], // Bhadra 2080 = July 17, 2023
        6: [2023, 7, 18], // Ashwin 2080 = August 18, 2023
        7: [2023, 8, 18], // Kartik 2080 = September 18, 2023
        8: [2023, 9, 18], // Mangsir 2080 = October 18, 2023
        9: [2023, 10, 17], // Poush 2080 = November 17, 2023
        10: [2023, 11, 17], // Magh 2080 = December 17, 2023
        11: [2024, 0, 15], // Falgun 2080 = January 15, 2024
        12: [2024, 1, 13], // Chaitra 2080 = February 13, 2024
    },
    2081: {
        1: [2024, 2, 14], // Baisakh 2081 = March 14, 2024
        2: [2024, 3, 13], // Jestha 2081 = April 13, 2024
        3: [2024, 4, 14], // Ashadh 2081 = May 14, 2024
        4: [2024, 5, 15], // Shrawan 2081 = June 15, 2024
        5: [2024, 6, 16], // Bhadra 2081 = July 16, 2024
        6: [2024, 7, 17], // Ashwin 2081 = August 17, 2024
        7: [2024, 8, 17], // Kartik 2081 = September 17, 2024
        8: [2024, 9, 17], // Mangsir 2081 = October 17, 2024
        9: [2024, 10, 16], // Poush 2081 = November 16, 2024
        10: [2024, 11, 16], // Magh 2081 = December 16, 2024
        11: [2025, 0, 14], // Falgun 2081 = January 14, 2025
        12: [2025, 1, 13], // Chaitra 2081 = February 13, 2025
    },
    2082: {
        1: [2025, 2, 14], // Baisakh 2082 = March 14, 2025
        2: [2025, 3, 14], // Jestha 2082 = April 14, 2025
        3: [2025, 4, 15], // Ashadh 2082 = May 15, 2025
        4: [2025, 5, 15], // Shrawan 2082 = June 15, 2025
        5: [2025, 6, 17], // Bhadra 2082 = July 17, 2025
        6: [2025, 7, 17], // Ashwin 2082 = August 17, 2025
        7: [2025, 8, 17], // Kartik 2082 = September 17, 2025
        8: [2025, 9, 18], // Mangsir 2082 = October 18, 2025
        9: [2025, 10, 17], // Poush 2082 = November 17, 2025
        10: [2025, 11, 16], // Magh 2082 = December 16, 2025
        11: [2026, 0, 15], // Falgun 2082 = January 15, 2026
        12: [2026, 1, 13], // Chaitra 2082 = February 13, 2026
    },
    2083: {
        1: [2026, 2, 15], // Baisakh 2083 = March 15, 2026
        2: [2026, 3, 14], // Jestha 2083 = April 14, 2026
        3: [2026, 4, 15], // Ashadh 2083 = May 15, 2026
        4: [2026, 5, 15], // Shrawan 2083 = June 15, 2026
        5: [2026, 6, 17], // Bhadra 2083 = July 17, 2026
        6: [2026, 7, 17], // Ashwin 2083 = August 17, 2026
        7: [2026, 8, 17], // Kartik 2083 = September 17, 2026
        8: [2026, 9, 18], // Mangsir 2083 = October 18, 2026
        9: [2026, 10, 17], // Poush 2083 = November 17, 2026
        10: [2026, 11, 16], // Magh 2083 = December 16, 2026
        11: [2027, 0, 15], // Falgun 2083 = January 15, 2027
        12: [2027, 1, 13], // Chaitra 2083 = February 13, 2027
    },
    2084: {
        1: [2027, 2, 15], // Baisakh 2084 = March 15, 2027
        2: [2027, 3, 14], // Jestha 2084 = April 14, 2027
        3: [2027, 4, 15], // Ashadh 2084 = May 15, 2027
        4: [2027, 5, 15], // Shrawan 2084 = June 15, 2027
        5: [2027, 6, 17], // Bhadra 2084 = July 17, 2027
        6: [2027, 7, 17], // Ashwin 2084 = August 17, 2027
        7: [2027, 8, 17], // Kartik 2084 = September 17, 2027
        8: [2027, 9, 17], // Mangsir 2084 = October 17, 2027
        9: [2027, 10, 16], // Poush 2084 = November 16, 2027
        10: [2027, 11, 16], // Magh 2084 = December 16, 2027
        11: [2028, 0, 14], // Falgun 2084 = January 14, 2028
        12: [2028, 1, 13], // Chaitra 2084 = February 13, 2028
    },
    2085: {
        1: [2028, 2, 14], // Baisakh 2085 = March 14, 2028
        2: [2028, 3, 13], // Jestha 2085 = April 13, 2028
        3: [2028, 4, 14], // Ashadh 2085 = May 14, 2028
        4: [2028, 5, 15], // Shrawan 2085 = June 15, 2028
        5: [2028, 6, 16], // Bhadra 2085 = July 16, 2028
        6: [2028, 7, 17], // Ashwin 2085 = August 17, 2028
        7: [2028, 8, 16], // Kartik 2085 = September 16, 2028
        8: [2028, 9, 17], // Mangsir 2085 = October 17, 2028
        9: [2028, 10, 16], // Poush 2085 = November 16, 2028
        10: [2028, 11, 16], // Magh 2085 = December 16, 2028
        11: [2029, 0, 14], // Falgun 2085 = January 14, 2029
        12: [2029, 1, 13], // Chaitra 2085 = February 13, 2029
    },
    2086: {
        1: [2029, 2, 15], // Baisakh 2086 = March 15, 2029
        2: [2029, 3, 14], // Jestha 2086 = April 14, 2029
        3: [2029, 4, 14], // Ashadh 2086 = May 14, 2029
        4: [2029, 5, 15], // Shrawan 2086 = June 15, 2029
        5: [2029, 6, 16], // Bhadra 2086 = July 16, 2029
        6: [2029, 7, 17], // Ashwin 2086 = August 17, 2029
        7: [2029, 8, 17], // Kartik 2086 = September 17, 2029
        8: [2029, 9, 17], // Mangsir 2086 = October 17, 2029
        9: [2029, 10, 16], // Poush 2086 = November 16, 2029
        10: [2029, 11, 16], // Magh 2086 = December 16, 2029
        11: [2030, 0, 14], // Falgun 2086 = January 14, 2030
        12: [2030, 1, 13], // Chaitra 2086 = February 13, 2030
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