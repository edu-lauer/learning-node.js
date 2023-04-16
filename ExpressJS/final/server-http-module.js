const http = require('http')
const {readFileSync} = require('fs')

const port = 5000

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/style.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    const url = req.url
    // home page
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    } 
    // home page style
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyle)
        res.end()
    }
    // home page logo
    else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    // logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    } 
    // 404 page not found
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>404 - Page not found</h1>')
        res.end()
    }

})

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})