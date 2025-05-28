require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
  "login": "developer-Manas",
  "id": 208160151,
  "node_id": "U_kgDODGhFlw",
  "avatar_url": "https://avatars.githubusercontent.com/u/208160151?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/developer-Manas",
  "html_url": "https://github.com/developer-Manas",
  "followers_url": "https://api.github.com/users/developer-Manas/followers",
  "following_url": "https://api.github.com/users/developer-Manas/following{/other_user}",
  "gists_url": "https://api.github.com/users/developer-Manas/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/developer-Manas/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/developer-Manas/subscriptions",
  "organizations_url": "https://api.github.com/users/developer-Manas/orgs",
  "repos_url": "https://api.github.com/users/developer-Manas/repos",
  "events_url": "https://api.github.com/users/developer-Manas/events{/privacy}",
  "received_events_url": "https://api.github.com/users/developer-Manas/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2025-04-18T12:52:33Z",
  "updated_at": "2025-05-27T17:26:19Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})