const Router = require("koa-router");
const {
  createAboutInfo,
  getAbout,
  createExperience,
  getAllExperiences,
  createContacts,
} = require("../controller/portfolio");
const router = new Router();

router.post("/addabout", createAboutInfo);
router.get("/getaboutInfo/:id", getAbout);
router.post("/addexperience", createExperience);
router.get("/experience", getAllExperiences);
router.post("/contact", createContacts);

module.exports = router;
