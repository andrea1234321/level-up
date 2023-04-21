import mongoose from 'mongoose'

const Schema = mongoose.Schema

const checkInSchema= new Schema({
  date: Date,
  notes: String,
})

const goalSchema = new Schema({
  category: {type: String, enum: ['Career', 'Health', 'Finance', 'Relationships', 'Spiritual', 'Other']},
  title: {type: String, required: true},
  deadline: {type: Date, function(){
    return new Date()
  }},
  content: {type: String, required: true},
  // completed: Boolean,
  checkIn: [checkInSchema],
}, {
  timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

export {
  Goal
}
