const { argv } = require('./config/yargs')
const color = require('colors')

const { multiplicarHastaDiez } = require('./multiplicar/multiplicar')
const { guardar } = require('./filesystem/guardar')

let crearTabla = (base) => {
    multiplicarHastaDiez(base).then(cnt => {
        let nArchivo = `tabla-${base}.txt`
        guardar(`tablas/${nArchivo}`, cnt).then(msg => {
            console.log(`Archivo ${color.green(nArchivo)} grabado`)
            console.log(msg.green)
        })
    }).catch(err => {
        console.log(err)
    })
}
let listarTabla = (base, limite) => {
    multiplicarHastaDiez(base, limite).then(cnt => {
        console.log(`tabla del ${base}`.blue)
        console.log(cnt.green)
    }).catch(err => {
        console.log(err)
    })
}

let cmd = argv._[0]
let base = argv.base
let limite = argv.limite

switch (cmd) {
    case 'listar':
        listarTabla(base, limite)
        break
    case 'crear':
        crearTabla(base)
        break
    default:
        console.log('Comando desconocido')
}