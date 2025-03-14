// Mapping data for BS to AD conversion (similar to your database data)
const bsadMapping = [
    { id: 1, bs_month: 1, bs_year: 2081, ad_month_start: new Date(2024, 3, 13) }, // April 13, 2024
    { id: 2, bs_month: 2, bs_year: 2081, ad_month_start: new Date(2024, 4, 14) }, // May 14, 2024
    { id: 3, bs_month: 3, bs_year: 2081, ad_month_start: new Date(2024, 5, 15) }, // June 15, 2024
    { id: 4, bs_month: 4, bs_year: 2081, ad_month_start: new Date(2024, 6, 16) }, // July 16, 2024
    { id: 5, bs_month: 5, bs_year: 2081, ad_month_start: new Date(2024, 7, 17) }, // August 17, 2024
    { id: 6, bs_month: 6, bs_year: 2081, ad_month_start: new Date(2024, 8, 17) }, // September 17, 2024
    { id: 7, bs_month: 7, bs_year: 2081, ad_month_start: new Date(2024, 9, 17) }, // October 17, 2024
    { id: 8, bs_month: 8, bs_year: 2081, ad_month_start: new Date(2024, 10, 16) }, // November 16, 2024
    { id: 9, bs_month: 9, bs_year: 2081, ad_month_start: new Date(2024, 11, 16) }, // December 16, 2024
    { id: 10, bs_month: 10, bs_year: 2081, ad_month_start: new Date(2025, 0, 14) }, // January 14, 2025
    { id: 11, bs_month: 11, bs_year: 2081, ad_month_start: new Date(2025, 1, 13) }, // February 13, 2025
    { id: 12, bs_month: 12, bs_year: 2081, ad_month_start: new Date(2025, 2, 14) }, // March 14, 2025
    { id: 13, bs_month: 1, bs_year: 2082, ad_month_start: new Date(2025, 3, 14) }  // April 14, 2025
];

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

function getDaysInBSMonth(bs_month, bs_year) {
    const mapping = bsadMapping.find(m => m.bs_month === bs_month && m.bs_year === bs_year);
    if (!mapping) return null;
    
    // Find the next month's mapping
    const nextMonth = bs_month % 12 + 1;
    const nextYear = bs_month < 12 ? bs_year : bs_year + 1;
    const nextMapping = bsadMapping.find(m => m.bs_month === nextMonth && m.bs_year === nextYear);
    
    if (nextMapping) {
        // Calculate the difference in days
        const diffTime = nextMapping.ad_month_start - mapping.ad_month_start;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    } else {
        // Default to 30 days if next month mapping isn't available
        return 30;
    }
}

function bsToAD(bs_year, bs_month, bs_day) {
    // Get the mapping for the requested BS date
    const mapping = bsadMapping.find(m => m.bs_month === bs_month && m.bs_year === bs_year);
    if (!mapping) return null;
    
    // Calculate the AD date
    const adDate = new Date(mapping.ad_month_start);
    adDate.setDate(adDate.getDate() + bs_day - 1);
    return adDate;
}

function adToBS(adDate) {
    // Find the latest mapping where ad_month_start is before or equal to the given date
    const mappingArray = [...bsadMapping];
    mappingArray.sort((a, b) => b.ad_month_start - a.ad_month_start);
    
    const mapping = mappingArray.find(m => m.ad_month_start <= adDate);
    if (!mapping) return null;
    
    // Calculate the BS day
    const diffTime = adDate - mapping.ad_month_start;
    const bs_day = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    return {
        bs_day: bs_day,
        bs_month: mapping.bs_month,
        bs_year: mapping.bs_year
    };
}

function getADDateRangeForBSMonth(bs_year, bs_month) {
    const mapping = bsadMapping.find(m => m.bs_month === bs_month && m.bs_year === bs_year);
    if (!mapping) return { start: null, end: null };
    
    const start = new Date(mapping.ad_month_start);
    
    // Find the next month's mapping
    const nextMonth = bs_month % 12 + 1;
    const nextYear = bs_month < 12 ? bs_year : bs_year + 1;
    const nextMapping = bsadMapping.find(m => m.bs_month === nextMonth && m.bs_year === nextYear);
    
    let end;
    if (nextMapping) {
        end = new Date(nextMapping.ad_month_start);
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