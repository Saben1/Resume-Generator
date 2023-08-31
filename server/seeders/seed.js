const mongoose = require('mongoose');
const Resume = require('../models/resume'); // Adjust the path based on your project structure
const resumeSeeds = require('./resumeSeeds.json'); // Adjust the path based on your project structure

mongoose.connect('mongodb://localhost/resume_generator_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function seedResumes() {
    try {
        await Resume.deleteMany(); // Clear existing resume data

        for (const resumeData of resumeSeeds) {
            await Resume.create(resumeData);
        }

        console.log('Resumes seeded successfully');
    } catch (error) {
        console.error('Error seeding resumes:', error);
    } finally {
        mongoose.connection.close();
    }
}

seedResumes();
