const router = require('express').Router()
const {Event} = require('../db/models')
module.exports = router

router.get('/:category', async (req, res, next) => {
  try {
    const events = await Event.findAll({where: {category: req.params.category}})
    res.json(events)
  } catch (err) {
    next(err)
  }
})
