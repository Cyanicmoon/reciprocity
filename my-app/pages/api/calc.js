const time = [
    0.000125,   // 1/8000s
    0.00025,    // 1/4000s
    0.0005,     // 1/2000s
    0.001,      // 1/1000s
    0.002,      // 1/500s
    0.004,      // 1/250s
    0.008,      // 1/125s
    0.0166667,  // 1/60s
    0.0333333,  // 1/30s
    0.0666667,  // 1/15s    
    0.125,      // 1/8s
    0.25,       // 1/4s
    0.5,        // 1/2s
    1,          // 1s
    2,          // 2s
    4,          // 4s
    8,          // 8s
    15,         // 15s
    30,         // 30s
    60,         // 1mn
    120,        // 2mn
    240,        // 4mn
    480,        // 8mn
    960,        // 16mn
    1920,       // 32mn
    3840,       // 1h4mn = 1*3600 + 4*60 = 3840s
    7680,       // 2h8mn = 2*3600 + 8*60 = 7680s
    15360,      // 4h16mn = 4*3600 + 16*60 = 15360s
    30720,      // 8h32mn = 8*3600 + 32*60 = 30720s
    61440       // 17h4mn = 17*3600 + 4*60 = 61440s
];
const ttime = [
    "1/8000초",
    "1/4000초",
    "1/2000초",
    "1/1000초",
    "1/500초",
    "1/250초",
    "1/125초",
    "1/60초",
    "1/30초",
    "1/15초",
    "1/8초",
    "1/4초",
    "1/2초"
];


const aperture = [
    1.4,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22,
    32
];




// pages/api/calc.js
export default async function handler(req, res) {
    let temp = JSON.parse(req.body);
    // console.log(temp);

    let t = time[Number(temp.time)-1];
    // console.log(t);
    let a = aperture[Number(temp.aperture)-1];
    
    let result = t;

    if (t >= 2){
        // let ev = Math.log2((a * a) / t);
        // console.log(ev);
        if (temp.film == "portra"){
            let val = 0.5167 * Math.log(t) - 0.2;
            // console.log(val);
            result = t * Math.pow(2, val);
        }
        else if (temp.film == "color"){
            result = Math.pow(t, 1.3);
        }
        else if (temp.film == "velvia"){
            if (t >= 4){
                if (t == 4) result = 5;
                else if (t == 8) result = 12;
                else if (t == 15) result = 28;
                else if (t == 30) result = 66;
                else if (t == 60) result = 158;
                else {
                    result = Math.pow(t, 1.3);
                }
            }
        }




    }

    let r = t;

    if (result >= 1){
        // console.log(result);
        let hour = Math.floor(result / 3600);
        let minute = Math.floor((result % 3600) / 60);
        // console.log(result % 60);
        let second = Math.floor(result % 60);
        
        r = "";

        if (hour > 0) {
            r += String(hour).padStart(2, '0') + "시간 ";
        }

        if (minute > 0 || hour > 0) {
            r += String(minute).padStart(2, '0') + "분 ";
        }

        r += String(second).padStart(2, '0') + "초";

    }
    else{
        r = ttime[Number(temp.time)-1];
    }
    

    return res.status(200).json(r);
}  