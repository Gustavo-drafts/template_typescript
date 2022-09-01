import express from 'express';
import UserController from './controllers/UserController';

const app = express();



app.get('/user', UserController.findAll)


app.get('/newuser', (req, res) => {
  req.body = {
    name: 'Gustavo',
    email: 'gu@gumail.com'
  }

  return UserController.create(req, res)
})



app.listen(2000, () => console.log('server started'))