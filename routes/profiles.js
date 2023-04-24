import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'


const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:profileId/show', profilesCtrl.show)
router.post('/:profileId/requestFriend', profilesCtrl.requestFriend)
router.post('/:profileId/acceptFriend', profilesCtrl.acceptFriend)
router.post('/:profileId/declineFriend', profilesCtrl.declineFriend)

export {
  router
}
