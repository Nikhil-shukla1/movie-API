const express =require("express")
const {UserLogin,registerUser,currentUser} = require("../controller/userContoller")
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/current').get(currentUser);
router.route('/login').post(UserLogin);


module.exports = router;