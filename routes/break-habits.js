import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as breakHabitsCtrl from '../controllers/break-habits.js'

const router = Router()

router.get('/', isLoggedIn, breakHabitsCtrl.index)
router.get('/new', isLoggedIn, breakHabitsCtrl.new)
router.get('/:breakHabitId', isLoggedIn, breakHabitsCtrl.show)
router.post('/', isLoggedIn, breakHabitsCtrl.create)

export {
  router
}
