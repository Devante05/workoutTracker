const router = require("express").Router()
const db = require("../../models")
var ObjectID = require('mongodb').ObjectID;


router.get("/", function (req, res) {
    db.Workout.find({})
        .then(function (dbResult) {
            res.json(dbResult)
        })
        .catch(function (error) {
            res.status(500).send(error.message)
        })
})

router.put("/:id", function (req, res) {
    db.Workout.updateOne({ 
        _id: ObjectID(req.body._id)
    },
    {
        $set: {
            day: req.body.day,
            exercises:[{
                type: req.body.type,
                name: req.body.name,
                duration: req.body.duration,
                weight: req.body.weight,
                reps: req.body.reps,
                sets: req.body.sets,
                distance: req.body.distance,
    }]
}})
    .then(function (dbResult) {
        res.json(dbResult)    
    });
})

router.post("/", (req, res) =>{
    db.Workout.create({

        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        distance: req.body.distance,
        })
    .then(function (dbResult) {  
        res.json(dbResult)    
    })


})

router.get("/range")

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