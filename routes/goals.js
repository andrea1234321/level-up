import { Router } from 'express'
import * as goalsCtrl from '../controllers/goals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, goalsCtrl.index)
router.get('/new', isLoggedIn, goalsCtrl.new)
router.get('/:goalId', isLoggedIn, goalsCtrl.show)
router.get('/:goalId/edit', goalsCtrl.edit)
router.get('/:goalId/checkIn/new', goalsCtrl.newCheckIn)
router.post('/', goalsCtrl.create)
router.post('/:goalId', goalsCtrl.createCheckIn)
router.delete('/:goalId', goalsCtrl.delete)
router.put('/:goalId', goalsCtrl.update)

export {
  router
}
