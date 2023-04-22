import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  goals: {type: Schema.Types.ObjectId, ref: 'Goal' },
  journals: {type: Schema.Types.ObjectId, ref: 'Journal' },
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
