const fetch = require('node-fetch');

exports.getCurrentRepos = async (req, res) => {
    try{
        const res = await fetch('https://api.github.com/users/B0urg/repos', {
            headers: new Headers({
                'Authorization': `Bearer ${process.env.GH_ACCESS_TOKEN}`
            })
        });
        if(res.status !== 200){
            console.error("Something went wrong, status code: " + res.status);
        }

        return await res.json();
    }catch (err){
        console.error(err);
    }
}
