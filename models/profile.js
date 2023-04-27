import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  outgoingFriendRequests: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  incomingFriendRequests: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  friends: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  goals: [{type: Schema.Types.ObjectId, ref: 'Goal' }],
  journals: [{type: Schema.Types.ObjectId, ref: 'Journal' }],
  breakHabits: [{type: Schema.Types.ObjectId, ref: 'BreakHabit' }],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
