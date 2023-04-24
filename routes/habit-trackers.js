import { Router } from 'express'
import * as habitTrackersCtrl from '../controllers/habit-trackers.js'

const router = Router()

router.get('/', habitTrackersCtrl.index)

export {
  router
}
