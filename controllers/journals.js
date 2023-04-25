import { Journal } from "../models/journal.js";
import { Profile } from "../models/profile.js";
import moment from 'moment'

function index(req,res){
  Journal.find({owner: req.user.profile._id})
  .then(journals=> {
    res.render('journals/index', {
      title: 'Journal Entries',
      nav: 'journals',
      journals: journals,
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
  req.body.owner= req.user.profile._id
  Journal.create(req.body)
  .then(journal=> {
    Profile.findById(req.user.profile._id)
    .then(profile=> {
      profile.journals.push(journal)
      profile.save()
      .then(()=> {
        res.redirect('/journals')
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