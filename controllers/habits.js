import { Habit } from "../models/habit.js"
import { Profile } from "../models/profile.js"

function index(req,res){
  Habit.find({owner: req.user.profile._id})
  .then(habits=> {
    res.render('habits/index', {
      title: 'Habits',
      habits: habits
    })
  })
}

function newHabit(req,res){
  res.render('habits/new', {
    title: 'New habit'
  })
}

export{
  index,
  newHabit as new
}