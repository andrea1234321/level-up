import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles=> {
    Profile.findById(req.user.profile)
    .then(userProfile=> {
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

function declineFriend(req,res){
  Profile.findById(req.params.profileId)
  .then(friendProfile=> {
    Profile.findById(req.user.profile._id)
    .then(userProfile=> {
      userProfile.incomingFriendRequests.remove(req.params.profileId)
      userProfile.save()
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

function show(req,res){
  Profile.findById(req.params.profileId)
  .populate('goals')
  .then(friendProfile=> {
    console.log(friendProfile)
    res.render('profiles/show', {
      friendProfile: friendProfile,
      title: friendProfile.name,
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  index,
  requestFriend,
  acceptFriend,
  declineFriend,
  show
}