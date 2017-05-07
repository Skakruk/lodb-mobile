module.exports = {
    deploy: {
        dev: {
            user: "root",
            host: "82.196.8.165",
            ref: "origin/master",
            repo: "git@github.com:Skakruk/lodb-mobile.git",
            path: "/opt/lodb/mobile",
            "post-deploy": "yarn install && yarn build",
            env: {
                NODE_ENV: "dev",
                REACT_APP_API_SERVER: "http://api.lodb.org.ua"
            }
        }
    }
}
