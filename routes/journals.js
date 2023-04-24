import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as journalsCtrl from '../controllers/journals.js'

const router = Router()

router.get('/', isLoggedIn, journalsCtrl.index)
router.get('/new', isLoggedIn, journalsCtrl.new)
router.post('/', isLoggedIn, journalsCtrl.create)
router.delete('/:journalId', isLoggedIn, journalsCtrl.delete)

export {
  router
}
