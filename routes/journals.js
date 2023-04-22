import { Router } from 'express'
import * as journalsCtrl from '../controllers/journals.js'

const router = Router()

router.get('/', journalsCtrl.index)

export {
  router
}
