const bsadMapping={2078:{1:[2021,4,14],2:[2021,5,15],3:[2021,6,15],4:[2021,7,16],5:[2021,8,17],6:[2021,9,17],7:[2021,10,18],8:[2021,11,17],9:[2021,12,16],10:[2022,1,15],11:[2022,2,13],12:[2022,3,15]},2079:{1:[2022,4,14],2:[2022,5,15],3:[2022,6,15],4:[2022,7,17],5:[2022,8,17],6:[2022,9,17],7:[2022,10,18],8:[2022,11,17],9:[2022,12,16],10:[2023,1,15],11:[2023,2,13],12:[2023,3,15]},2080:{1:[2023,4,14],2:[2023,5,15],3:[2023,6,16],4:[2023,7,17],5:[2023,8,18],6:[2023,9,18],7:[2023,10,18],8:[2023,11,17],9:[2023,12,17],10:[2024,1,15],11:[2024,2,13],12:[2024,3,14]},2081:{1:[2024,4,13],2:[2024,5,14],3:[2024,6,15],4:[2024,7,16],5:[2024,8,17],6:[2024,9,17],7:[2024,10,17],8:[2024,11,16],9:[2024,12,16],10:[2025,1,14],11:[2025,2,13],12:[2025,3,14]},2082:{1:[2025,4,14],2:[2025,5,15],3:[2025,6,15],4:[2025,7,17],5:[2025,8,17],6:[2025,9,17],7:[2025,10,18],8:[2025,11,17],9:[2025,12,16],10:[2026,1,15],11:[2026,2,13],12:[2026,3,15]},2083:{1:[2026,4,14],2:[2026,5,15],3:[2026,6,15],4:[2026,7,17],5:[2026,8,17],6:[2026,9,17],7:[2026,10,18],8:[2026,11,17],9:[2026,12,16],10:[2027,1,15],11:[2027,2,13],12:[2027,3,15]},2084:{1:[2027,4,14],2:[2027,5,15],3:[2027,6,15],4:[2027,7,17],5:[2027,8,17],6:[2027,9,17],7:[2027,10,17],8:[2027,11,16],9:[2027,12,16],10:[2028,1,14],11:[2028,2,13],12:[2028,3,14]},2085:{1:[2028,4,13],2:[2028,5,14],3:[2028,6,15],4:[2028,7,16],5:[2028,8,17],6:[2028,9,16],7:[2028,10,17],8:[2028,11,16],9:[2028,12,16],10:[2029,1,14],11:[2029,2,13],12:[2029,3,15]},2086:{1:[2029,4,14],2:[2029,5,14],3:[2029,6,15],4:[2029,7,16],5:[2029,8,17],6:[2029,9,17],7:[2029,10,17],8:[2029,11,16],9:[2029,12,16],10:[2030,1,14],11:[2030,2,13],12:[2030,3,15]},2087:{1:[2030,4,14],2:[2030,5,15],3:[2030,6,15],4:[2030,7,17],5:[2030,8,17],6:[2030,9,17],7:[2030,10,18],8:[2030,11,17],9:[2030,12,17],10:[2031,1,16],11:[2031,2,15],12:[2031,3,17]}},bsMonthNames=["Baisakh","Jestha","Ashadh","Shrawan","Bhadra","Ashwin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"];function setDefaultDates(){let e=new Date;document.getElementById("ad-date").valueAsDate=e;let t=adToBS(e);t&&(document.getElementById("bs-year").value=t.bs_year,document.getElementById("bs-month").value=t.bs_month,document.getElementById("bs-day").value=t.bs_day)}function updateTodayInfo(){let e=new Date,t=e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),_=adToBS(e),a=`Today: ${t}`;_&&(a+=` / BS ${_.bs_day} ${bsMonthNames[_.bs_month-1]} ${_.bs_year}`),document.getElementById("today-info").innerText=a}function getADDateFromBSData(e,t,_){if(!bsadMapping[e]||!bsadMapping[e][t])return null;let[a,n,$]=bsadMapping[e][t],l=new Date(a,n-1,$);return l.setDate(l.getDate()+_-1),l}function getDaysInBSMonth(e,t){if(!bsadMapping[t]||!bsadMapping[t][e])return null;let _=e%12+1,a=e<12?t:t+1;if(bsadMapping[a]&&bsadMapping[a][_]){let n=getADDateFromBSData(t,e,1),$=getADDateFromBSData(a,_,1);if(n&&$)return Math.floor(($-n)/864e5)}return 30}function bsToAD(e,t,_){return getADDateFromBSData(e,t,_)}function adToBS(e){for(let t in bsadMapping)for(let _ in bsadMapping[t]){let[a,n,$]=bsadMapping[t][_],l=new Date(a,n-1,$),s=parseInt(_)%12+1,d=12>parseInt(_)?parseInt(t):parseInt(t)+1,r;if(bsadMapping[d]&&bsadMapping[d][s]){let[o,i,g]=bsadMapping[d][s];(r=new Date(o,i-1,g)).setDate(r.getDate()-1)}else(r=new Date(l)).setDate(r.getDate()+29);if(e>=l&&e<=r){let y=e-l,b=Math.floor(y/864e5)+1;return{bs_day:b,bs_month:parseInt(_),bs_year:parseInt(t)}}}return null}function getADDateRangeForBSMonth(e,t){if(!bsadMapping[e]||!bsadMapping[e][t])return{start:null,end:null};let[_,a,n]=bsadMapping[e][t],$=new Date(_,a-1,n),l=t%12+1,s=t<12?e:e+1,d;if(bsadMapping[s]&&bsadMapping[s][l]){let[r,o,i]=bsadMapping[s][l];(d=new Date(r,o-1,i)).setDate(d.getDate()-1)}else(d=new Date($)).setDate(d.getDate()+29);return{start:$,end:d}}function convertBStoAD(){let e=parseInt(document.getElementById("bs-year").value),t=parseInt(document.getElementById("bs-month").value),_=parseInt(document.getElementById("bs-day").value),a=getDaysInBSMonth(t,e);if(_<1||_>a){document.getElementById("bs-to-ad-result").innerText=`Invalid day. ${bsMonthNames[t-1]} ${e} has ${a} days.`,document.getElementById("bs-to-ad-result").style.display="block";return}let n=bsToAD(e,t,_);if(n){let $=n.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",weekday:"long"});document.getElementById("bs-to-ad-result").innerText=`BS ${_} ${bsMonthNames[t-1]} ${e} = ${$}`,document.getElementById("bs-to-ad-result").style.display="block"}else document.getElementById("bs-to-ad-result").innerText="Conversion failed. Please check your input.",document.getElementById("bs-to-ad-result").style.display="block"}function convertADtoBS(){let e=document.getElementById("ad-date").value;if(!e){document.getElementById("ad-to-bs-result").innerText="Please select a date.",document.getElementById("ad-to-bs-result").style.display="block";return}let t=new Date(e),_=adToBS(t);if(_){let a=`BS ${_.bs_day} ${bsMonthNames[_.bs_month-1]} ${_.bs_year}`;document.getElementById("ad-to-bs-result").innerText=`${t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",weekday:"long"})} = ${a}`,document.getElementById("ad-to-bs-result").style.display="block"}else document.getElementById("ad-to-bs-result").innerText="Conversion failed. Date may be out of supported range.",document.getElementById("ad-to-bs-result").style.display="block"}function renderBSCalendar(){let e=new Date,t=adToBS(e);if(!t)return;let _=t.bs_year,a=t.bs_month;document.getElementById("calendar-title").innerText=`BS Calendar - ${bsMonthNames[a-1]} ${_}`;let n=getADDateRangeForBSMonth(_,a);if(!n.start||!n.end)return;let $=n.start,l=getDaysInBSMonth(a,_),s=$.getDay(),d="",r=1;for(let o=0;o<6&&!(r>l);o++){d+="<tr>";for(let i=0;i<7;i++)if(0===o&&i<s||r>l)d+='<td class="other-month"></td>';else{let g=r===t.bs_day,y=g?"current-day":"",b=bsToAD(_,a,r),u=b?b.getDate()+"/"+(b.getMonth()+1):"";d+=`<td class="${y}">
                    <div>${r}</div>
                    <div style="font-size: 0.8em; color: #666;">${u}</div>
                </td>`,r++}d+="</tr>"}document.getElementById("calendar-body").innerHTML=d}function updateCalendar(e,t){document.getElementById("calendar-title").innerText=`BS Calendar - ${bsMonthNames[t-1]} ${e}`;let _=getADDateRangeForBSMonth(e,t);if(!_.start||!_.end)return;let a=_.start,n=getDaysInBSMonth(t,e),$=a.getDay(),l="",s=1,d=new Date,r=adToBS(d),o=r&&r.bs_month===t&&r.bs_year===e;for(let i=0;i<6&&!(s>n);i++){l+="<tr>";for(let g=0;g<7;g++)if(0===i&&g<$||s>n)l+='<td class="other-month"></td>';else{let y=o&&s===r.bs_day,b=y?"current-day":"",u=bsToAD(e,t,s),m=u?u.getDate()+"/"+(u.getMonth()+1):"";l+=`<td class="${b}">
                    <div>${s}</div>
                    <div style="font-size: 0.8em; color: #666;">${m}</div>
                </td>`,s++}l+="</tr>"}document.getElementById("calendar-body").innerHTML=l}window.onload=function(){setDefaultDates(),updateTodayInfo(),renderBSCalendar()},document.getElementById("bs-month").addEventListener("change",function(){let e=parseInt(document.getElementById("bs-year").value),t=parseInt(this.value);updateCalendar(e,t)}),document.getElementById("bs-year").addEventListener("change",function(){let e=parseInt(this.value),t=parseInt(document.getElementById("bs-month").value);updateCalendar(e,t)});