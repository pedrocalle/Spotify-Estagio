const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/login", (request, response ) => {
    const code = request.body.code;

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'localhost:3000',
        clientId: '7b7e1ae1282142f7b6ee029f881dba0e',
        clientSecret: '99d3461a094747f5b64b7f83772df3d7'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        response.json({ 
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        console.log(err)
        response.sendStatus(400)
    })
})

app.listen(3001)