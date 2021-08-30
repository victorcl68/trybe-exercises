const router = require('express').Router();
const crypto = require('crypto');

const {isValidUsername, isValidEmail, isValidPassword} = require('./validations');

router.post('/register', isValidUsername, isValidEmail, isValidPassword, (_req, res) =>
  res.status(201).json({ message: 'user created' }),
);


function generateToken() {
  return crypto.randomBytes(6).toString('hex');
}

router.post('/login', isValidEmail, isValidPassword, (_req, res) => 
  res.status(200).json({ token: generateToken() })
);

module.exports = router;