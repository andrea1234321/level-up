import { Router } from 'express'
import * as journalsCtrl from '../controllers/journals.js'

const router = Router()

router.get('/', journalsCtrl.index)
router.get('/new', journalsCtrl.new)
router.post('/', journalsCtrl.create)
router.delete('/:journalId', journalsCtrl.delete)

export {
  router
}
