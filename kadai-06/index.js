const fs = require('fs')
const json = fs.readFileSync('./kadai-06/data.json').toString()

let object
try {
    object = JSON.parse(json)
} catch (error) {
    console.log('不正なJSONフォーマットです')
    process.exit(1)
}

object.count = object.count + 1
object.updateAt = new Date().toISOString()
console.log(JSON.stringify(object))
fs.writeFileSync('./kadai-06/data.json',JSON.stringify(object))