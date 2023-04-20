import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({
  category: {type: String, enum: ['career', 'health', 'finance', 'relationships', 'spiritual', 'other']},
  title: String,
  deadline: Date,
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
