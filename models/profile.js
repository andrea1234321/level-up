import mongoose from 'mongoose'

const Schema = mongoose.Schema

// const journalSchema = new Schema({
//   date: {type: Date, required: true},
//   content: {type: String, required: true},
// }, {
//   timestamps: true,
// })

const profileSchema = new Schema({
  name: String,
  avatar: String,
  goals: [{type: Schema.Types.ObjectId, ref: 'Goal' }],
  journals: [{type: Schema.Types.ObjectId, ref: 'Journal' }],
  // journals: [journalSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
