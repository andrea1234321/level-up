import mongoose from 'mongoose'

const Schema = mongoose.Schema

const isolateCueSchema= new Schema({
  location: String,
  time: String,
  emotionalState: String,
  otherPeople: String,
  preceedingAction: String
})

const possibleRewardsSchema= new Schema({
  reward: String,
  notes: String
})

const breakHabitSchema = new Schema({
  routine: String,
  cue: String,
  reward: String,
  possibleRewards: [possibleRewardsSchema],
  isolateCue: [isolateCueSchema],
  // actionPlan: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})


const BreakHabit = mongoose.model('BreakHabit', breakHabitSchema)

export {
  BreakHabit
}