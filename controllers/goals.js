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
  res.render('goals/new', {
    title: "New Goal"
  })
}

function create(req,res){
  for (let key in req.body){
    if (req.body[key]=== ''){
      delete req.body[key]
    }
  }
  Goal.create(req.body)
  .then(goal=> {
    res.redirect('/goals')
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
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

export{
  index,
  newGoal as new,
  create,
  deleteGoal as delete
}