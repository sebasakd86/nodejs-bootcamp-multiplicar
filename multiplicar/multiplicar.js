let multiplicarHastaDiez = async(base, limite = 10) => {
        if (!Number(base))
            throw Error('La base no es un numero');
        let cnt = ''
        for (let i = 1; i <= limite; i++)
            cnt += `${base} * ${i} = ${i*base}\n`
        return cnt
    }
    //: this.multiplicarHastaDiez //Desde ECMA6 no hace falta
module.exports = {
    multiplicarHastaDiez
}