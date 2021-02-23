const path = require("path");

// module.exports = function (app) {

//     app.get("/exercise", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/exercise.html"))
//     });

//     app.get("/stats", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/stats.html"))
//     });

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/index.html"))
//     });
// }

const router = require("express").Router()

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router