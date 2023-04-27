import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as breakHabitsCtrl from '../controllers/break-habits.js'

const router = Router()

router.get('/', isLoggedIn, breakHabitsCtrl.index)
router.get('/new', isLoggedIn, breakHabitsCtrl.new)
router.get('/:breakHabitId', isLoggedIn, breakHabitsCtrl.show)
router.get('/:breakHabitId/possible-rewards/new', isLoggedIn, breakHabitsCtrl.newPossibleReward)
router.get('/:breakHabitId/isolate-cue/new', isLoggedIn, breakHabitsCtrl.newCueLog)
router.get('/:breakHabitId/cue-reward-show', isLoggedIn, breakHabitsCtrl.showCueReward)
router.post('/', isLoggedIn, breakHabitsCtrl.create)
router.post('/:breakHabitId/possible-rewards', isLoggedIn, breakHabitsCtrl.createPossibleReward)
router.post('/:breakHabitId/isolate-cue', isLoggedIn, breakHabitsCtrl.createCueLog)
router.patch('/:breakHabitId', isLoggedIn, breakHabitsCtrl.update)
router.delete('/:breakHabitId', isLoggedIn, breakHabitsCtrl.delete)


export {
  router
}
