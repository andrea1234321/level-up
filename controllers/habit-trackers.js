import { HabitTracker } from "../models/habit-tracker.js"
import { Profile } from "../models/profile.js"

function index(req,res){
  HabitTracker.find({owner: req.user.profile._id})
  .then(habitTrackers=> {
    res.render('habit-trackers/index', {
      title: 'Habits',
      habitTrackers: habitTrackers
    })
  })
}

export{
  index
}