const bsadMapping={2078:{1:[2021,4,14],2:[2021,5,15],3:[2021,6,15],4:[2021,7,16],5:[2021,8,17],6:[2021,9,17],7:[2021,10,18],8:[2021,11,17],9:[2021,12,16],10:[2022,1,15],11:[2022,2,13],12:[2022,3,15]},2079:{1:[2022,4,14],2:[2022,5,15],3:[2022,6,15],4:[2022,7,17],5:[2022,8,17],6:[2022,9,17],7:[2022,10,18],8:[2022,11,17],9:[2022,12,16],10:[2023,1,15],11:[2023,2,13],12:[2023,3,15]},2080:{1:[2023,4,14],2:[2023,5,15],3:[2023,6,16],4:[2023,7,17],5:[2023,8,18],6:[2023,9,18],7:[2023,10,18],8:[2023,11,17],9:[2023,12,17],10:[2024,1,15],11:[2024,2,13],12:[2024,3,14]},2081:{1:[2024,4,13],2:[2024,5,14],3:[2024,6,15],4:[2024,7,16],5:[2024,8,17],6:[2024,9,17],7:[2024,10,17],8:[2024,11,16],9:[2024,12,16],10:[2025,1,14],11:[2025,2,13],12:[2025,3,14]},2082:{1:[2025,4,14],2:[2025,5,15],3:[2025,6,15],4:[2025,7,17],5:[2025,8,17],6:[2025,9,17],7:[2025,10,18],8:[2025,11,17],9:[2025,12,16],10:[2026,1,15],11:[2026,2,13],12:[2026,3,15]},2083:{1:[2026,4,14],2:[2026,5,15],3:[2026,6,15],4:[2026,7,17],5:[2026,8,17],6:[2026,9,17],7:[2026,10,18],8:[2026,11,17],9:[2026,12,16],10:[2027,1,15],11:[2027,2,13],12:[2027,3,15]},2084:{1:[2027,4,14],2:[2027,5,15],3:[2027,6,15],4:[2027,7,17],5:[2027,8,17],6:[2027,9,17],7:[2027,10,17],8:[2027,11,16],9:[2027,12,16],10:[2028,1,14],11:[2028,2,13],12:[2028,3,14]},2085:{1:[2028,4,13],2:[2028,5,14],3:[2028,6,15],4:[2028,7,16],5:[2028,8,17],6:[2028,9,16],7:[2028,10,17],8:[2028,11,16],9:[2028,12,16],10:[2029,1,14],11:[2029,2,13],12:[2029,3,15]},2086:{1:[2029,4,14],2:[2029,5,14],3:[2029,6,15],4:[2029,7,16],5:[2029,8,17],6:[2029,9,17],7:[2029,10,17],8:[2029,11,16],9:[2029,12,16],10:[2030,1,14],11:[2030,2,13],12:[2030,3,15]},2087:{1:[2030,4,14],2:[2030,5,15],3:[2030,6,15],4:[2030,7,17],5:[2030,8,17],6:[2030,9,17],7:[2030,10,18],8:[2030,11,17],9:[2030,12,17],10:[2031,1,16],11:[2031,2,15],12:[2031,3,17]}},bsMonthNames=["Baisakh","Jestha","Ashadh","Shrawan","Bhadra","Ashwin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"];
// Nepali month names
function setDefaultDates(){const e=new Date;document.getElementById("ad-date").valueAsDate=e;
// Set the BS date selector to the current date in BS
const t=adToBS(e);t&&(document.getElementById("bs-year").value=t.bs_year,document.getElementById("bs-month").value=t.bs_month,document.getElementById("bs-day").value=t.bs_day)}function updateTodayInfo(){const e=new Date,t=e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),n=adToBS(e);let a=`Today: ${t}`;n&&(a+=` / BS ${n.bs_day} ${bsMonthNames[n.bs_month-1]} ${n.bs_year}`),document.getElementById("today-info").innerText=a}function getADDateFromBSData(e,t,n){if(!bsadMapping[e]||!bsadMapping[e][t])return null;const[a,s,o]=bsadMapping[e][t],d=new Date(a,s-1,o);
// Subtract 1 from month to adjust for JavaScript's 0-indexed months
return d.setDate(d.getDate()+n-1),d}function getDaysInBSMonth(e,t){if(!bsadMapping[t]||!bsadMapping[t][e])return null;
// Find the next month's mapping
let n=e%12+1,a=e<12?t:t+1;
// If next month data is available
if(bsadMapping[a]&&bsadMapping[a][n]){const s=getADDateFromBSData(t,e,1),o=getADDateFromBSData(a,n,1);if(s&&o){const e=o-s;return Math.floor(e/864e5)}}
// Default to 30 days if next month mapping isn't available
return 30}function bsToAD(e,t,n){return getADDateFromBSData(e,t,n)}function adToBS(e){
// Find the BS date for the given AD date
for(const t in bsadMapping)for(const n in bsadMapping[t]){
// Get the first day of the BS month in AD calendar
const[a,s,o]=bsadMapping[t][n],d=new Date(a,s-1,o);
// Subtract 1 from month to adjust for JavaScript's 0-indexed months
// Find the next month's start date to determine the end of this month
let r,l=parseInt(n)%12+1,i=parseInt(n)<12?parseInt(t):parseInt(t)+1;if(bsadMapping[i]&&bsadMapping[i][l]){const[e,t,n]=bsadMapping[i][l];
// Subtract 1 from month to adjust for JavaScript's 0-indexed months
r=new Date(e,t-1,n),r.setDate(r.getDate()-1)}else
// If next month data isn't available, estimate with 30 days
r=new Date(d),r.setDate(r.getDate()+29);
// Check if adDate falls within this BS month
if(e>=d&&e<=r){const a=e-d;return{bs_day:Math.floor(a/864e5)+1,bs_month:parseInt(n),bs_year:parseInt(t)}}}return null}function getADDateRangeForBSMonth(e,t){if(!bsadMapping[e]||!bsadMapping[e][t])return{start:null,end:null};
// Start date
const[n,a,s]=bsadMapping[e][t],o=new Date(n,a-1,s);
// Subtract 1 from month to adjust for JavaScript's 0-indexed months
// End date - find the next month's start date and subtract 1 day
let d,r=t%12+1,l=t<12?e:e+1;if(bsadMapping[l]&&bsadMapping[l][r]){const[e,t,n]=bsadMapping[l][r];
// Subtract 1 from month to adjust for JavaScript's 0-indexed months
d=new Date(e,t-1,n),d.setDate(d.getDate()-1)}else
// Default to 30 days if next month mapping isn't available
d=new Date(o),d.setDate(d.getDate()+29);return{start:o,end:d}}function convertBStoAD(){const e=parseInt(document.getElementById("bs-year").value),t=parseInt(document.getElementById("bs-month").value),n=parseInt(document.getElementById("bs-day").value),a=getDaysInBSMonth(t,e);if(n<1||n>a)return document.getElementById("bs-to-ad-result").innerText=`Invalid day. ${bsMonthNames[t-1]} ${e} has ${a} days.`,void(document.getElementById("bs-to-ad-result").style.display="block");const s=bsToAD(e,t,n);if(s){const a=s.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",weekday:"long"});document.getElementById("bs-to-ad-result").innerText=`BS ${n} ${bsMonthNames[t-1]} ${e} = ${a}`,document.getElementById("bs-to-ad-result").style.display="block"}else document.getElementById("bs-to-ad-result").innerText="Conversion failed. Please check your input.",document.getElementById("bs-to-ad-result").style.display="block"}function convertADtoBS(){const e=document.getElementById("ad-date").value;if(!e)return document.getElementById("ad-to-bs-result").innerText="Please select a date.",void(document.getElementById("ad-to-bs-result").style.display="block");const t=new Date(e),n=adToBS(t);if(n){const e=`BS ${n.bs_day} ${bsMonthNames[n.bs_month-1]} ${n.bs_year}`;document.getElementById("ad-to-bs-result").innerText=`${t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",weekday:"long"})} = ${e}`,document.getElementById("ad-to-bs-result").style.display="block"}else document.getElementById("ad-to-bs-result").innerText="Conversion failed. Date may be out of supported range.",document.getElementById("ad-to-bs-result").style.display="block"}function renderBSCalendar(){
// Get current BS date
const e=adToBS(new Date);if(!e)return;const t=e.bs_year,n=e.bs_month;
// Update calendar title
document.getElementById("calendar-title").innerText=`BS Calendar - ${bsMonthNames[n-1]} ${t}`;
// Get date range for this BS month
const a=getADDateRangeForBSMonth(t,n);if(!a.start||!a.end)return;const s=a.start,o=getDaysInBSMonth(n,t),d=s.getDay();
// Create calendar grid
let r="",l=1;
// Create rows for the calendar
for(let a=0;a<6&&!(l>o);a++){r+="<tr>";
// Create cells for each day
for(let s=0;s<7;s++)if(0===a&&s<d||l>o)
// Empty cell
r+='<td class="other-month"></td>';else{const a=l===e.bs_day?"current-day":"",s=bsToAD(t,n,l);r+=`<td class="${a}">\n                    <div>${l}</div>\n                    <div style="font-size: 0.8em; color: #666;">${s?s.getDate()+"/"+(s.getMonth()+1):""}</div>\n                </td>`,l++}r+="</tr>"}document.getElementById("calendar-body").innerHTML=r}
// Event listeners for changing calendar month
function updateCalendar(e,t){
// Update calendar title
document.getElementById("calendar-title").innerText=`BS Calendar - ${bsMonthNames[t-1]} ${e}`;
// Get date range for this BS month
const n=getADDateRangeForBSMonth(e,t);if(!n.start||!n.end)return;const a=n.start,s=getDaysInBSMonth(t,e),o=a.getDay();
// Create calendar grid
let d="",r=1;
// Get current BS date for highlighting current day
const l=adToBS(new Date),i=l&&l.bs_month===t&&l.bs_year===e;
// Create rows for the calendar
for(let n=0;n<6&&!(r>s);n++){d+="<tr>";
// Create cells for each day
for(let a=0;a<7;a++)if(0===n&&a<o||r>s)
// Empty cell
d+='<td class="other-month"></td>';else{const n=i&&r===l.bs_day?"current-day":"",a=bsToAD(e,t,r);d+=`<td class="${n}">\n                    <div>${r}</div>\n                    <div style="font-size: 0.8em; color: #666;">${a?a.getDate()+"/"+(a.getMonth()+1):""}</div>\n                </td>`,r++}d+="</tr>"}document.getElementById("calendar-body").innerHTML=d}
// Initialize the page
window.onload=function(){setDefaultDates(),updateTodayInfo(),renderBSCalendar()},document.getElementById("bs-month").addEventListener("change",(function(){updateCalendar(parseInt(document.getElementById("bs-year").value),parseInt(this.value))})),document.getElementById("bs-year").addEventListener("change",(function(){updateCalendar(parseInt(this.value),parseInt(document.getElementById("bs-month").value))}));