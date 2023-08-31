const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contact_information: { type: String, required: true },
    education: { type: String, required: true },
    work_experience: { type: String, required: true },
    skills: { type: String, required: true },
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
