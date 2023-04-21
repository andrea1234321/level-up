import { Router } from 'express'
import * as goalsCtrl from '../controllers/goals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, goalsCtrl.index)
router.get('/new', isLoggedIn, goalsCtrl.new)
router.post('/', goalsCtrl.create)

export {
  router
}
