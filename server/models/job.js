const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A job title is required."],
    },
    company: {
        type: String,
        required: [true, "You must add the company."]
    },
    location: {
        type: String,
        required: [true, "You must enter a location for the position."]
    },
    description: {
        type: String,
        minlength: [3, "3 Characters are required for minimum length."]
    },
    updateOne: {
        type: String,
        minlength: [3, "3 Characters are required for minimum length."]
    },
    updateTwo: {
        type: String,
        minlength: [3, "3 Characters are required for minimum length."]
    }
});

mongoose.model("Job", JobSchema);