const routes = require('express').Router()
const { register, login, logout, forgetpassword, resetpassword } = require('../controller/auth/authControllers')
const { me } = require("../controller/auth/userControllers")
const { refresh } = require("../controller/auth/refreshControllers")
const { create, update, destroy, index, show } = require("../controller/postController")
const { category } = require("../controller/categoryController")
const comments = require("../controller/commentController")
const auth = require('../middlewares/auth')

routes.post('/register',register)
routes.post('/login',login)
routes.post('/forgetpassword',forgetpassword)
routes.post('/resetpassword/:resetToken',resetpassword)
routes.get('/me', auth, me)
routes.post('/logout',auth ,logout)
routes.get('/refresh', refresh)

routes.post("/category",auth, category)

routes.post('/post',auth, create)
routes.put('/post/:id',auth, update)
routes.delete('/post/:id',auth, destroy)
routes.get('/post/', index)
routes.get('/post/:id', show)

routes.post("/post/:id/comments/create", auth, comments.create)
routes.delete("/post/:comments_id/comments/delete", auth, comments.destroy)
routes.put("/post/:comments_id/comments/update", auth, comments.update)
routes.get("/post/comments", comments.index)

module.exports = routes

