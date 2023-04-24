import mongoose from 'mongoose'

const Schema = mongoose.Schema

const habitSchema = new Schema({
  routine: String,
  cue: String,
  reward: String,
  // identifyCue: [identifyCue],
  // identifyReward: [identifyReward],
  // actionPlan: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const Habit = mongoose.model('Habit', habitSchema)

export {
  Habit
}