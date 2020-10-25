const fs = require('fs')
let guardar = async(path, content) => {
    fs.writeFile(path, content, (err) => {
        if (err) throw err;
        return ('The file has been saved!');
    })
    return 'Todo Piola'
}
module.exports = {
    guardar
}