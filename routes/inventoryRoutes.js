const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const middleware=require("../middlewares/authMiddleware")
const { createInventoryController, getInventoryController, getDonarsController,getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes

// ADD InVENTORY || Post
router.post('/create-inventory',authMiddleware,createInventoryController)

// get all blood records
router.get('/get-inventory',authMiddleware,getInventoryController )

// get Hospital blood records
router.get('/get-inventory-hospital',authMiddleware,getInventoryHospitalController)


//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET CURRENT USER || GET
router.get("/current-user", currentUserController);

// GET DONAR RECORDS
router.get('/get-donars',authMiddleware,getDonarsController);

// GET Hospital RECORDS
router.get('/get-hospitals',authMiddleware,getHospitalController);


// GET Organisation RECORDS
router.get('/get-organisation',authMiddleware,getOrgnaisationController);

//GET Organisation RECORDS
router.get('/get-organisation-for-hospital',authMiddleware,getOrgnaisationForHospitalController);


//GET RECENT BLOOD RECORDS
router.get('/get-recent-inventory',authMiddleware,getRecentInventoryController);




module.exports = router;