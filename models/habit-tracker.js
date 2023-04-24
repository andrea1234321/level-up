import mongoose from 'mongoose'

const Schema = mongoose.Schema

const habitTrackerSchema = new Schema({
  oldHabit: String,
  newHabit: String,
  amount: Number,
  period: {type: String, enum: ['days', 'weeks', 'months', 'years']},
  reward: String,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const HabitTracker = mongoose.model('HabitTracker', habitTrackerSchema)

export {
  HabitTracker
}