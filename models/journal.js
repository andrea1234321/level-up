import mongoose from 'mongoose'

const Schema = mongoose.Schema

const journalSchema = new Schema({
  date: {type: Date, required: true},
  content: {type: String, required: true},
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const Journal = mongoose.model('Journal', journalSchema)

export {
  Journal
}
