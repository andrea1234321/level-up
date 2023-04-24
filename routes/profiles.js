import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'


const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:profileId/show', isLoggedIn, profilesCtrl.show)
router.post('/:profileId/requestFriend', isLoggedIn, profilesCtrl.requestFriend)
router.post('/:profileId/acceptFriend', isLoggedIn, profilesCtrl.acceptFriend)
router.post('/:profileId/declineFriend', isLoggedIn, profilesCtrl.declineFriend)

export {
  router
}
