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
    title: 'New Entry'
  })
}

function create(req,res){
  Journal.create(req.body)
  .then(journal=> {
    console.log(req.body, 'LOOK AT THIS')
    res.redirect('/journals')
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

function deleteJournalEntry(req,res){
  Journal.findByIdAndDelete(req.params.journalId)
  .then(()=> {
    res.redirect('/journals')
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

export{
  index,
  newJournal as new,
  create,
  deleteJournalEntry as delete
}