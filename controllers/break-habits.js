import { BreakHabit } from "../models/break-habit.js"
import { Profile } from "../models/profile.js"

function index(req,res){
  BreakHabit.find({owner: req.user.profile._id})
  .then(habits=> {
    res.render('break-habits/index', {
      title: 'Break Habits',
      habits: habits
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

function newHabitToStop(req,res){
  res.render('break-habits/new', {
    title: 'Habit to break'
  })
}

function create(req,res){
  req.body.owner= req.user.profile._id
  BreakHabit.create(req.body)
  .then(habit=> {
    Profile.findById(req.user.profile._id)
    .then(profile=> {
      profile.breakHabits.push(habit)
      profile.save()
      .then(()=> {
        res.redirect('/break-habits')
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

function show(req,res){
  BreakHabit.findById(req.params.breakHabitId)
  .then(habit=> {
    res.render('break-habits/show', {
      title: `${habit.routine}`,
      habit: habit
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

function newPossibleReward(req,res){
  BreakHabit.findById(req.params.breakHabitId)
  .then(habit=> {
    res.render('break-habits/new-reward', {
      title: "Step 2: Experiment with Rewards",
      habit: habit
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/break-habits')
  })
}

function createPossibleReward(req,res){
  BreakHabit.findById(req.params.breakHabitId)
  .then(habit=> {
    habit.possibleRewards.push(req.body)
    habit.save()
    .then(()=> {
      res.redirect(`/break-habits/${habit._id}`)
    })
    .catch(err=> {
      console.log(err)
      res.redirect('/break-habits')
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/break-habits')
  })
}

export{
  index,
  newHabitToStop as new,
  create,
  show,
  newPossibleReward,
  createPossibleReward
}