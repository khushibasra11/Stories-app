const express = require('express')
const passport = require('passport')
const axios = require('axios')
const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    req.session.googleToken = req.user.googleToken;
    res.redirect('/dashboard')
  }
)

router.get('/logout', (req, res, next) => {
  req.logout((error) => {
      if (error) {return next(error)}
      res.redirect('/')
  })
})


/*router.get('/logout', function(req, res){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect('/');
  });
});*/


module.exports = router;