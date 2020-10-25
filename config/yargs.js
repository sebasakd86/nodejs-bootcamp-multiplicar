const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de la base ingresada', opt)
    .command('crear', 'Genera un archivo con la tabla de multi', opt)
    .help()
    .argv

module.exports = {
    argv
}