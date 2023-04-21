import { Goal } from "../models/goal.js"

function index(req,res){
  Goal.find({})
  .then(goals=> {
    res.render('goals/index', {
      title: 'Current Goals',
      goals: goals
    })
  })
}

function newGoal(req,res){
  const todaysDate= new Date().toISOString().slice(0, 10)
  res.render('goals/new', {
    title: "New Goal",
    todaysDate
  })
}

function create(req,res){
  Goal.create(req.body)
  .then(goal=> {
    res.redirect('/goals')
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/goals')
  })
}

function deleteGoal(req,res){
  Goal.findByIdAndDelete(req.params.goalId)
  .then(()=> {
    res.redirect('/goals')
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  }) 
}

function show(req,res){
  Goal.findById(req.params.goalId)
  .then(goal=> {
    console.log(goal)
    res.render('goals/show', {
      title: goal.title,
      goal: goal
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  }) 
}

function edit(req,res){
  const todaysDate= new Date().toISOString().slice(0, 10)
  Goal.findById(req.params.goalId)
  .then(goal=> {
    res.render('goals/edit', {
      title: goal.title,
      goal: goal,
      todaysDate
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/goals')
  }) 
}

function update(req,res){
  Goal.findByIdAndUpdate(req.params.goalId, req.body, {new: true})
  .then(goal=> {
    res.redirect(`/goals/${goal._id}`)
  })
}

function newCheckIn(req,res){
  const todaysDate= new Date().toISOString().slice(0, 10)
  Goal.findById(req.params.goalId)
  .then(goal=> {
    res.render('goals/check-in', {
      title: 'Check-In',
      goal: goal,
      todaysDate
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/goals')
  }) 
}

function createCheckIn(req,res){
  Goal.findById(req.params.goalId)
  .then(goal=> {
    goal.checkIns.push(req.body)
    goal.save()
    .then(()=> {
      res.redirect(`/goals/${goal._id}`)
    })
    .catch(err=> {
      console.log(err)
      res.redirect('/goals')
    }) 
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/goals')
  }) 
}

export{
  index,
  newGoal as new,
  create,
  deleteGoal as delete,
  show,
  edit,
  update,
  newCheckIn,
  createCheckIn
}