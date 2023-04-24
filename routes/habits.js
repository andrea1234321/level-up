import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as habitsCtrl from '../controllers/habits.js'

const router = Router()

router.get('/', isLoggedIn, habitsCtrl.index)
router.get('/new', isLoggedIn, habitsCtrl.new)
router.post('/', isLoggedIn, habitsCtrl.create)

export {
  router
}
