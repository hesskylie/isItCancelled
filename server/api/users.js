const router = require('express').Router()
const {User, Event} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/following', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {include: [{model: Event}]})
    res.send(user)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    const event = await Event.findByPk(req.body.id)
    await user.addEvent(event)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})
