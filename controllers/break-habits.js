import { BreakHabit } from "../models/break-habit.js"
import { Profile } from "../models/profile.js"

function index(req,res){
  BreakHabit.find({owner: req.user.profile._id})
  .then(habits=> {
    res.render('break-habits/index', {
      title: 'Habits I want to stop',
      nav: 'break habit',
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
    title: 'Habit to break',
    nav: 'break habit',
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
      nav: 'break habit',
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
      nav: 'break habit',
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

function newCueLog(req,res){
  BreakHabit.findById(req.params.breakHabitId)
  .then(habit=> {
    res.render('break-habits/new-cue', {
      title: "Step 3: Isolate the Cue",
      nav: 'break habit',
      habit: habit
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/break-habits')
  })
}

function createCueLog(req,res){
  BreakHabit.findById(req.params.breakHabitId)
  .then(habit=> {
    habit.isolateCue.push(req.body)
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

function update(req,res){
  BreakHabit.findByIdAndUpdate(req.params.breakHabitId, req.body, {new:true})
  .then(habit=> {
    res.redirect(`/break-habits/${habit._id}`)
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/break-habits')
  })
}

function deleteBadHabit(req,res){
  BreakHabit.findByIdAndDelete(req.params.breakHabitId)
  .then(()=> {
    res.redirect('/break-habits')
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

function showCueReward(req,res){
  BreakHabit.findById(req.params.breakHabitId)
  .then(habit=> {
    res.render('break-habits/show-cue-reward', {
      title: 'Details',
      nav: 'break habit',
      habit: habit
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/break-habits')
  })
}

function edit(req,res){
  BreakHabit.findById(req.params.breakHabitId)
  .then(habit=> {
    res.render('break-habits/edit', {
      title: "Edit Habit Loop",
      nav: 'break habit',
      habit: habit
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
  createPossibleReward,
  newCueLog,
  createCueLog,
  update,
  deleteBadHabit as delete,
  showCueReward,
  edit
}