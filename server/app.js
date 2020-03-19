const express = require('express')
const cors = require('cors')
const app = express()
const port = 3002

app.use(cors())

const streamsData = [
      {
        "title": "Coding",
        "description": "Live coding channedl",
        "id": 1
      },
      {
        "title": "Latest youtube",
        "description": "A great youtube video",
        "id": 2
      },
      {
        "title": "The Future",
        "description": "This is an stream about my future goals and ambitions.",
        "userId": "106020900133971725356",
        "id": 3
      },
      {
        "title": "Refactoring test",
        "description": "Testing after the refactor of StreamCreate",
        "userId": "106020900133971725356",
        "id": 5
      },
      {
        "title": "My great stream",
        "description": "test stream",
        "userId": "118400355051207975323",
        "id": 6
      },
      {
        "title": "My second great stream",
        "description": "streaming cards",
        "userId": "118400355051207975323",
        "id": 7
      }
    ]

app.get('/streams', (req, res) => res.send(streamsData))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))