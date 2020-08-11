const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const saucesCtrl = require("../controllers/sauces");

// Les routes fonction des requêtes à l'API:

router.get("/", auth, saucesCtrl.getAllSauces);
router.get("/:id", auth, saucesCtrl.getOneSauce);

router.post('/', auth, multer, saucesCtrl.CreateSauce);
router.post("/:id/like", auth, saucesCtrl.likeSauce);

router.put("/:id", auth, multer, saucesCtrl.modifySauce);

router.delete("/:id", auth, saucesCtrl.deleteSauce);


module.exports = router;