const c = class Cliente {
    constructor(tipodocu, docu, nombre, apellido){
        this.tipodocu = tipodocu
        this.docu = docu
        this.nombre= nombre
        this.apellido= apellido
    }
    getClientes(){
        var res = {
            tipodocu: this.tipodocu,
            docu: this.docu,
            nombre: this.nombre,
            apellido: this.apellido,
        }
        return res
    }
    /* getClientes(){
        var res = {
            tipodocu: this.tipodocu,
            docu: this.docu,
            nombre: this.nombre,
            apellido: this.apellido,
        }
        return res
    } */
    /* setClientes(tipodocu, docu, nombre, apellido){
        
        return `${this.tipodocu}`
    } */
}

function getCliente(req, res){
    const tipodocu = req.params.tipodocu, docu = req.params.docu
    const cli = new c('ced', '123', 'Humberto', 'Rojas')
    const clis = cli.getClientes()
    console.log("get clis")
    console.log( req.params.docu)
    console.log( clis.docu)
    console.log( clis.tipodocu)
    console.log( req.params.tipodocu)
    var resultado = {}
    if(tipodocu==clis.tipodocu && docu==clis.docu)
    return res.status(200).json(clis);
    else
    return res.status(200).json({});
}
function crearCliente(req, res){
	console.log(req.body)
    const datas = {
        tipodocu : req.body.tipodocu,
        docu : req.body.docu,
        nombre : req.body.nombre,
        apellido : req.body.apellido
    }
    const clis = new c(datas)
    console.log("set clis")
    console.log(clis)
    return res.status(200).json(clis);
}
module.exports = {c, getCliente, crearCliente}