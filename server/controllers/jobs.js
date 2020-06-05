const mongoose = require("mongoose");
const Job = mongoose.model("Job");

class Jobs{

    
    // This function will get all jobs one has applied for
    getAll(req, res){
        Job.find( function(err, jobs){
            if(err){
                res.json({"status": "no ok", "errors": err});
            } else{
                res.json({"status": "ok", "jobs": jobs});
            }
        });
    }


    // Add a Job to List
    // create(req, res){
    //     Job.find({title: req.body.title}, function(err, jobs){
    //         if (err) {
    //             res.json({"status": "not ok", "errors": err});
    //         } else if(jobs.length > 0){
    //             res.json(
    //                 {"status": "not ok", 
    //                     "errors": {
    //                         "errors": {
    //                             "title": { 
    //                                 "message": "Choose another title"
    //                             }
    //                         }
    //                     }
    //                 });
    //         } else {
    //             let job = new Job(req.body);
    //             job.save(function(err){
    //                 if(err){
    //                     res.json({"status": "not ok", "errors": err});
    //                 }else{
    //                     res.json({"status": "ok", "id": job._id});
    //                 }
    //             });
    //         }
    //     })
    // // }

    create(req, res) {
        let job = new Job({
            title: req.body.title,
            location: req.body.location,
            company: req.body.company,
        });
        
        job.save(function(err,data) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
              }
            else { 
                res.json({"status": "ok", "data": data});
            }
        })
    }




    // Allows you to get one job posting
    getId(req, res){
        Job.findOne({_id: req.params.id}, function(err, job){
          if(err){
              res.json({"status": "not ok", "errors": err});
          }
          else{
              res.json({"status": "ok", "job": job});
          }
        })
    }


    // Allows you to update a job if you need to add notes
    update(req, res){
        Job.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err){
          if(err){
              res.json({"status": "not ok", "errors": err});
          }else{
              res.json({"status": "ok"});
          }
        })
      }


    //   Remove a job from list
    delete(req, res){
        Job.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        })
    }
}

module.exports = new Jobs();