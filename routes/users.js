const express = require('express');
const router = express.Router();


//@route   Post  api/users
//@desc    registera user
//@access   public

router.post('/', (req, res) => {
    res.send('Register a user')
})

module.exports = router;

// http methods => get: when you're fetching data from server you're just getting data,
// post: when you're submitting something to the server you're adding a contact or posting data filling a form 
// put : id to update
// delete : to delete :)