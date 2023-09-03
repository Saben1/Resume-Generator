const mongoose = require('mongoose');
const db = require('../models');
const fs = require('fs/promises');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/resumeGeneratorDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const seedData = async () => {
  try {
    // Clear existing data
    await db.PersonalInformation.deleteMany({});
    await db.Education.deleteMany({});
    await db.Experience.deleteMany({});
    await db.Skills.deleteMany({});
    await db.Resume.deleteMany({});
    await db.User.deleteMany({});

    // Read data from JSON files
    const personalInfoData = JSON.parse(await fs.readFile('personalInfo.json', 'utf8'));
    const educationData = JSON.parse(await fs.readFile('education.json', 'utf8'));
    const experienceData = JSON.parse(await fs.readFile('experience.json', 'utf8'));
    const skillsData = JSON.parse(await fs.readFile('skills.json', 'utf8'));
    const userData = JSON.parse(await fs.readFile('user.json', 'utf8'));
    const resumeData = JSON.parse(await fs.readFile('resume.json', 'utf8'));

    // Insert the data into the database
    // Insert Personal Information
    const personalInformation = await db.PersonalInformation.create(personalInfoData);

    // Insert Education
    const education = await db.Education.create(educationData);

    // Insert Experience
    const experience = await db.Experience.create(experienceData);

    // Insert Skills
    const skills = await db.Skills.create(skillsData);

    // Insert User
    const user = await db.User.create(userData);

    // Insert Resume
    const resume = await db.Resume.create({
      title: 'Your Resume Title',
      education: education.map(edu => edu._id),
      experience: experience.map(exp => exp._id),
      skills: skills.map(skill => skill._id),
      user: user._id,
    });

    console.log('Sample data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
