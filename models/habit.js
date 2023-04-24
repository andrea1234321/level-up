import mongoose from 'mongoose'

const Schema = mongoose.Schema

const habitSchema = new Schema({
  habit: String,
  oldCue: String,
  oldRoutine: String,
  oldReward: String,
  newCue: String,
  newRoutine: String,
  newReward: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const Habit = mongoose.model('Habit', habitSchema)

export {
  Habit
}