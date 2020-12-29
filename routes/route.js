const router = require("express").Router();
const nodePractController = require("../controller/nodePract.controller.js");

module.exports = (app) => {
    //get Details  
    router.get("/", nodePractController.getDetails);

    //Insert Data
    router.post("/post", nodePractController.postDetails);

    //Update Data
    router.put("/put", nodePractController.updateDetails);

    //Delete Data
    router.delete("/delete/:id", nodePractController.deleteDetails);

    app.use("/api", router);
};