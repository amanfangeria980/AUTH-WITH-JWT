const { register, login } = require("../Controllers/AuthControllers");
const router = require("express").Router();
const { checkUser } = require("../Middlewares/AuthMiddlewares");
router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
