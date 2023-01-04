const aboutModel = require('../models/AboutModel');
const projectModel = require('../models/ProjectModel');

exports.renderHomePage = (req, res) => {
    res.render('index.ejs');
}
exports.renderAboutPage = (req, res) => {
    const aboutText = aboutModel.getAboutText();
    const lastUpdate = aboutModel.getLastUpdate();

    res.render('about.ejs', {
        aboutData : {
            aboutText: aboutText,
            lastUpdate: lastUpdate
        }
    });
}
exports.renderProjectsPage = (req, res) => {

    res.render('projects.ejs');
}