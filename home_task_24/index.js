const http = require('http')
const hostname = 'localhost'
const port = 4000


const exampleUsers = [
  {
    name: "John",
    age: 30
  },
  {
    name: "Sara",
    age: 18
  },
  {
    name: "Robert",
    age: 40
  }
]

const exampleErorr = {
  description: "Не верный url запроса"
}

const server = http.createServer((req, res) => {
  if (req.url === '/users') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(exampleUsers))
  }else{
    res.statusCode = 400
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(exampleErorr))
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})