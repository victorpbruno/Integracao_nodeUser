const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/users", userControl.funcGetUsers);
router.get("/:id", userControl.funcGetUsersById);
router.post("/", userControl.funcCreateUser);

module.exports = router;