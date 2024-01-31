const express = require("express"); 
const router = express.Router();
const ClassesController = require("../controllers/classes_controllers.js");

router.get("/:number", (req, res) => {
    const classesController = new ClassesController();
    classesController.show(req, res);
});

router.post("/", (req, res) => {
    const classesController = new ClassesController();
    classesController.addCourse(req, res);
}); 

router.put("/:id", (req, res) => {
    const classesController = new ClassesController();
    classesController.updateCourse(req, res);
}); 

module.exports = router;