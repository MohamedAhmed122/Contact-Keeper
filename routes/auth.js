const express = require('express');
const router = express.Router();


//@route    get  api/auth
//@desc     get logged in user
//@access   Private

router.post('/', (req, res) => res.send(' get logged in user'))

//@route    Post  api/auth
//@desc     Auth user & get token
//@access   public

router.post('/', (req, res) => res.send(' login user'))


module.exports = router;