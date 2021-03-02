const router = require("express").Router()
const db = require("../../models")
var ObjectID = require('mongodb').ObjectID;


// router.get("/", function (req, res) {
//     db.Workout.find({})
//         .then(function (dbResult) {
//             res.json(dbResult)
//         })
//         .catch(function (error) {
//             res.status(500).send(error.message)
//         })
// })

router.get("/", function (req, res) {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: {
                "$sum" : "$exercises.duration"
            }
        }
    }])
        .then(function (dbResult) {
            res.json(dbResult)
        })
        .catch(function (error) {
            res.status(500).send(error.message)
        })
})


router.put("/:id", function (req, res) {
    db.Workout.findByIdAndUpdate(
        req.params.id, 
        { 
            $push: { 
                exercises: req.body
            }
        },(err,data)=>{
            if(err) return err;
            else res.json(data);
        })
});





router.post("/", (req, res) =>{
    db.Workout.create({})
    .then(function (dbResult) {  
        res.json(dbResult)    
    })


})

router.get("/range", (req, res)=> {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: {
                "$sum" : "$exercises.duration"
            }
        }
    }])
    .sort({'day': -1})
    .limit(7)
    .exec((err,data) => {
        if (err){
            res.send(error)
        }   else{
            res.json(data)
        }
    })
})

module.exports = router


// localhost:3000/api/workouts/abcdefg?id=123&name=Ben&hello=goodbye
// GET /api/workouts/:id
/**
 * req.params.id === abcdefg
 * req.query = {
 *  id: 123,
 *  name: Ben,
 *  hello: goodbye
 * }
 */