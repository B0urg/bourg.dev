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
exports.renderProjectsPage = async (req, res) => {
    const repoList = [];
    const repos = await projectModel.getCurrentRepos();
    for(let repo of repos){
        if(repo.name === "B0urg") continue;
        // noinspection JSUnresolvedVariable
        repoList.push({
            "name": repo.name,
            "link": repo.html_url,
            "description": repo.description,
            "created_at": repo.created_at,
            "lang": repo.language,
            "archived": repo.archived,
            "last_activity": repo.pushed_at
        });
    }

    repoList.sort((o1, o2) =>{
        return new Date(o2.last_activity).getTime() - new Date(o1.last_activity).getTime();
    });
    res.render('projects.ejs',{
        "repos": repoList,
    });
}
exports.renderContactPage = (req, res) => {
    res.render('contact.ejs');
}