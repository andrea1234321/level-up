import mongoose from 'mongoose'

const Schema = mongoose.Schema

const checkInSchema= new Schema({
  date: {type: Date, default: function(){
    return new Date()
  }},
  notes: {type: String, required: true},
})

const goalSchema = new Schema({
  category: {type: String, enum: ['Career', 'Health', 'Finance', 'Relationship', 'Spiritual', 'Other']},
  title: {type: String, required: true},
  deadline: {type: Date, default: function(){
    return new Date()
  }},
  content: {type: String, required: true},
  // completed: Boolean,
  checkIns: [checkInSchema],
}, {
  timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

export {
  Goal
}
