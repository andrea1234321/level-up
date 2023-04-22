import mongoose from 'mongoose'

const Schema = mongoose.Schema

const journalSchema = new Schema({
  date: Date,
  content: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const Journal = mongoose.model('Journal', journalSchema)

export {
  Journal
}
