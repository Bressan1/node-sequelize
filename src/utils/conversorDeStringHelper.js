module.exports = (objetoParams) => {
    for (let propriedade in obejetoParams){
        if (/Id|id/.test(propriedade)){
            objetoParams[propriedade]= Number(objetoParams[propriedade]);
        }
    }
}