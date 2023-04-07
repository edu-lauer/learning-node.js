const { readFile, writeFile } = require('fs') // is the same as: const fs = require('fs'); then use: fs.readFile

console.log('Start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result

        writeFile('./content/result.txt', `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('Done with this task')
        })
    })
})
console.log('Starting next task')