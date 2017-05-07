module.exports = {
    deploy: {
        dev: {
            user: "root",
            host: "82.196.8.165",
            ref: "origin/master",
            repo: "git@github.com:Skakruk/lodb-mobile.git",
            path: "/opt/lodb/mobile",
            "post-deploy": "REACT_APP_API_SERVER=https://api.lodb.org.ua yarn install && yarn build",
            env: {
                NODE_ENV: "dev"
            }
        }
    }
}
