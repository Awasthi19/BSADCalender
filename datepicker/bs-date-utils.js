const bsadMapping = {
    2000: [14, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 13],
    2001: [13, 14, 14, 16, 16, 16, 17, 16, 15, 14, 12, 14],
    2002: [13, 14, 14, 16, 17, 17, 17, 16, 15, 14, 12, 14],
    2003: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2004: [14, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 13],
    2005: [13, 14, 14, 16, 16, 16, 17, 16, 15, 14, 12, 14],
    2006: [13, 14, 14, 16, 17, 17, 17, 16, 15, 14, 12, 14],
    2007: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2008: [14, 15, 15, 16, 17, 17, 18, 16, 16, 15, 13, 13],
    2009: [13, 14, 14, 16, 16, 16, 17, 16, 15, 14, 12, 14],
    2010: [13, 14, 14, 16, 17, 17, 17, 16, 15, 14, 12, 14],
    2011: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2012: [14, 15, 15, 16, 17, 17, 18, 16, 16, 15, 13, 14],
    2013: [13, 14, 14, 16, 16, 16, 17, 16, 15, 14, 12, 14],
    2014: [13, 14, 14, 16, 17, 17, 17, 16, 15, 14, 12, 14],
    2015: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2016: [14, 15, 15, 16, 17, 17, 18, 16, 16, 15, 13, 14],
    2017: [13, 14, 14, 16, 16, 16, 17, 16, 15, 14, 12, 14],
    2018: [13, 14, 15, 16, 17, 17, 17, 16, 15, 14, 12, 14],
    2019: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 14],
    2020: [14, 15, 15, 16, 17, 17, 18, 17, 16, 15, 13, 14],
    2021: [13, 14, 14, 16, 16, 16, 17, 16, 15, 14, 12, 14],
    2022: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2023: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 14],
    2024: [14, 15, 15, 16, 17, 17, 18, 17, 16, 15, 13, 14],
    2025: [13, 14, 14, 16, 16, 16, 17, 16, 15, 14, 12, 14],
    2026: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2027: [14, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 14],
    2028: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 14],
    2029: [13, 14, 14, 16, 16, 17, 17, 16, 15, 14, 12, 14],
    2030: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2031: [14, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 14],
    2032: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 14],
    2033: [13, 14, 14, 16, 17, 17, 17, 16, 15, 14, 12, 14],
    2034: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2035: [14, 14, 15, 16, 17, 17, 18, 16, 16, 15, 13, 14],
    2036: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 14],
    2037: [13, 14, 14, 16, 17, 17, 17, 16, 15, 14, 12, 14],
    2038: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2039: [14, 15, 15, 16, 17, 17, 18, 16, 16, 15, 13, 15],
    2040: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 14],
    2041: [13, 14, 14, 16, 17, 17, 17, 16, 15, 14, 12, 14],
    2042: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2043: [14, 15, 15, 16, 17, 17, 18, 16, 16, 15, 13, 15],
    2044: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 14],
    2045: [13, 14, 15, 16, 17, 17, 17, 16, 15, 14, 12, 14],
    2046: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2047: [14, 15, 15, 16, 17, 17, 18, 17, 16, 15, 13, 15],
    2048: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 14],
    2049: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2050: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 14],
    2051: [14, 15, 15, 16, 17, 17, 18, 17, 16, 15, 13, 15],
    2052: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 14],
    2053: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2054: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 14],
    2055: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 15],
    2056: [14, 15, 15, 17, 17, 18, 18, 17, 16, 15, 13, 14],
    2057: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2058: [14, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 14],
    2059: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 15],
    2060: [14, 15, 15, 17, 18, 18, 18, 17, 16, 15, 13, 14],
    2061: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2062: [14, 15, 15, 16, 17, 17, 18, 16, 16, 14, 13, 14],
    2063: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 15],
    2064: [14, 15, 15, 17, 18, 18, 18, 17, 16, 15, 13, 14],
    2065: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2066: [14, 15, 15, 16, 17, 17, 18, 16, 16, 15, 13, 14],
    2067: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 15],
    2068: [14, 15, 15, 17, 18, 18, 18, 17, 16, 15, 13, 14],
    2069: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2070: [14, 15, 15, 16, 17, 17, 18, 16, 16, 15, 13, 15],
    2071: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 15],
    2072: [14, 15, 16, 17, 18, 18, 18, 17, 16, 15, 13, 14],
    2073: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 12, 14],
    2074: [14, 15, 15, 16, 17, 17, 18, 17, 16, 15, 13, 15],
    2075: [14, 15, 15, 17, 17, 17, 18, 17, 16, 15, 13, 15],
    2076: [14, 15, 16, 17, 18, 18, 18, 17, 17, 15, 13, 14],
    2077: [13, 14, 15, 16, 17, 17, 17, 16, 16, 14, 13, 14],
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
    2088: [16, 16, 16, 18, 19, 18, 19, 18, 18, 16, 15, 16],
};

const bsMonthNames = [
    "Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin",
    "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
];

function getADDateFromBSData(bs_year, bs_month, bs_day) {
    if (!bsadMapping[bs_year] || bs_month < 1 || bs_month > 12) return null;
    const baseADYear = bs_year - 57;
    const dayOfMonth = bsadMapping[bs_year][bs_month - 1];
    const adMonth = (bs_month + 2) % 12;
    const adYear = adMonth >= 3 ? baseADYear : baseADYear + 1;
    const adDate = new Date(adYear, adMonth, dayOfMonth);
    adDate.setDate(adDate.getDate() + bs_day - 1);
    return adDate;
}

function getDaysInBSMonth(bs_month, bs_year) {
    if (!bsadMapping[bs_year] || bs_month < 1 || bs_month > 12) return null;
    let nextMonth = bs_month % 12 + 1;
    let nextYear = bs_month < 12 ? bs_year : bs_year + 1;
    if (bsadMapping[nextYear] && bsadMapping[nextYear][nextMonth - 1]) {
        const currentMonthDate = getADDateFromBSData(bs_year, bs_month, 1);
        const nextMonthDate = getADDateFromBSData(nextYear, nextMonth, 1);
        if (currentMonthDate && nextMonthDate) {
            const diffTime = nextMonthDate - currentMonthDate;
            return Math.floor(diffTime / (1000 * 60 * 60 * 24));
        }
    }
    return 30;
}

function bsToAD(bs_year, bs_month, bs_day) {
    return getADDateFromBSData(bs_year, bs_month, bs_day);
}

function adToBS(adDate) {
    for (const bs_year in bsadMapping) {
        for (let bs_month = 1; bs_month <= 12; bs_month++) {
            const bsMonthStartInAD = getADDateFromBSData(bs_year, bs_month, 1);
            let nextMonth = bs_month % 12 + 1;
            let nextYear = bs_month < 12 ? parseInt(bs_year) : parseInt(bs_year) + 1 ;
            let bsMonthEndInAD;
            if (bsadMapping[nextYear] && bsadMapping[nextYear][nextMonth - 1]) {
                bsMonthEndInAD = getADDateFromBSData(nextYear, nextMonth, 1);
                bsMonthEndInAD.setDate(bsMonthEndInAD.getDate() - 1);
            } else {
                bsMonthEndInAD = new Date(bsMonthStartInAD);
                bsMonthEndInAD.setDate(bsMonthEndInAD.getDate() + 29);
            }
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

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        bsadMapping,
        bsMonthNames,
        getADDateFromBSData,
        getDaysInBSMonth,
        bsToAD,
        adToBS
    };
}