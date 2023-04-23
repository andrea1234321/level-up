import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles=> {
    Profile.findById(req.user.profile)
    .then(userProfile=> {
      // console.log(req.user.profile)
      // console.log(req.user.profile._id)
      // console.log(profiles[0]._id)
      res.render('profiles/index', {
        profiles: profiles,
        userProfile,
        title: 'Friends'
      })
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

function requestFriend(req, res){
  // console.log('work')
  Profile.findById(req.params.profileId)
  .then(friendProfile=> {
    Profile.findById(req.user.profile._id)
    .then(userProfile=> {
      userProfile.outgoingFriendRequests.push(friendProfile)
      userProfile.save()
      friendProfile.incomingFriendRequests.push(userProfile)
      friendProfile.save()
      .then(()=> {
        console.log(userProfile)
        console.log(friendProfile)
        res.redirect('/profiles')
      })
      .catch(err=> {
        console.log(err)
        res.redirect('/')
      })
    })
    .catch(err=> {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

function acceptFriend(req,res){
  // console.log('working')
  Profile.findById(req.params.profileId)
  .then(friendProfile=> {
    Profile.findById(req.user.profile._id)
    .then(userProfile=> {
      userProfile.friends.push(friendProfile)
      userProfile.incomingFriendRequests.remove(req.params.profileId)
      userProfile.save()
      friendProfile.friends.push(userProfile)
      friendProfile.outgoingFriendRequests.remove(req.user.profile._id)
      friendProfile.save()
      .then(()=> {
        res.redirect('/profiles')
      })
      .catch(err=> {
        console.log(err)
        res.redirect('/')
      })
    })
    .catch(err=> {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  requestFriend,
  acceptFriend
}