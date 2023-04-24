import { Router } from 'express'
import * as goalsCtrl from '../controllers/goals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, goalsCtrl.index)
router.get('/new', isLoggedIn, goalsCtrl.new)
router.get('/:goalId', isLoggedIn, goalsCtrl.show)
router.get('/:goalId/edit', isLoggedIn, goalsCtrl.edit)
router.get('/:goalId/checkIn/new', isLoggedIn, goalsCtrl.newCheckIn)
router.post('/', isLoggedIn, goalsCtrl.create)
router.post('/:goalId', isLoggedIn, goalsCtrl.createCheckIn)
router.delete('/:goalId', isLoggedIn, goalsCtrl.delete)
router.delete('/:goalId/checkIn/:checkInId', isLoggedIn, goalsCtrl.deleteCheckIn)
router.put('/:goalId', isLoggedIn, goalsCtrl.update)

export {
  router
}
