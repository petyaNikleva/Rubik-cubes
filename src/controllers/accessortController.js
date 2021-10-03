const router = require('express').Router();

router.get('/create', (req, res) => {
     res.render('accessory/create');
});
router.post('/create', (req, res) => {
    let asseccory = req.body;
    console.log(asseccory);
    res.redirect('/');
})

module.exports = router;