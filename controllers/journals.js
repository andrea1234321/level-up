import { Journal } from "../models/journal.js";

function index(req,res){
  Journal.find({})
  .then(journals=> {
    res.render('journals/index', {
      title: 'Journal Entries',
      journals: journals
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

function newJournal(req,res){
  res.render('journals/new', {
    title: 'Journal Entry'
  })
}

export{
  index,
  newJournal as new
}