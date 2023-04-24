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
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

function newHabit(req,res){
  res.render('habits/new', {
    title: 'Habit to break'
  })
}

function create(req,res){
  req.body.owner= req.user.profile._id
  Habit.create(req.body)
  .then(habit=> {
    Profile.findById(req.user.profile._id)
    .then(profile=> {
      profile.habits.push(habit)
      profile.save()
      .then(()=> {
        res.redirect('/habits')
      })
      .catch(err=> {
        console.log(err)
        res.redirect('/')
      })
    })
    .catch(err=> {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

export{
  index,
  newHabit as new,
  create
}