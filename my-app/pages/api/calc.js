// pages/api/calc.js
export default async function handler(req, res) {
    console.log(req.body);
    return res.status(200).json("서버 통신 성공 히히");
}  