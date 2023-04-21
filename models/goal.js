import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({
  category: {type: String, enum: ['Career', 'Health', 'Finance', 'Relationships', 'Spiritual', 'Other']},
  title: String,
  deadline: {type: Date, function(){
    return new Date()
  }},
  content: String,
  // completed: Boolean,
  // checkIn: [weeklyCheckIn],
}, {
  timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

export {
  Goal
}
