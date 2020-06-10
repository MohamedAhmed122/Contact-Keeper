const express = require('express');
const router = express.Router();


//@route    get  api/contact
//@desc     get all user contacts
//@access   Private

router.get('/', (req, res) => res.send(' get all user contacts'))

//@route    Post  api/contact
//@desc     Add new contacts
//@access   Private

router.post('/', (req, res) => res.send('Add new contacts'))

//@route    Put  api/contact/:id
//@desc     Update contacts
//@access   Private

router.put('/:id', (req, res) => res.send('Aupdate contacts'))

//@route    Delete  api/contact/:id
//@desc     Delete contacts
//@access   Private

router.delete('/:id', (req, res) => res.send('Delete contacts'))


module.exports = router;