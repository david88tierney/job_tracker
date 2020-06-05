const Jobs = require("../controllers/jobs");


module.exports = function(app){
    app.get("/jobs", Jobs.getAll);
    app.post("/job", Jobs.create);
    app.get("/job/:id", Jobs.getId);
    app.put("/job/:id", Jobs.update);
    app.delete("/job/:id", Jobs.delete);
}