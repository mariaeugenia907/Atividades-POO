class Produt 
{
private _id: number
private _descricao: string
private _quantidade: number
private _valor: number

constructor (_id, _descricao, _quantidade, _valor){


this._id = _id
this._descricao = _descricao
this._quantidade = _quantidade
this._valor = _valor
}

repor(produto: number)
{
 
    this._quantidade += produto
    
}

darbaixa(produto: number)
{
    this._quantidade -= produto
}
}

class ProdutoPerecivel extends Produt
{

private _dataValidade: Date

constructor (_id, _descricao, _quantidade, _valor, _dataValidade)

 {

super(_id, _descricao, _quantidade, _valor)

this._dataValidade = _dataValidade
}

valido() {

return this._dataValidade < new Date()

}
   
}

class Estoque 
{
    let arr = ['maca', 'soro', 'banana'];

inserir(produto: Produto)
{
  

}

consultar(produto: number)
{

}
excluir(produto: number)
{

} 
}

function test()
{
    const product = new Produt()
    const product = new ProdutoPerecivel()
    

    console.log(product.())
    console.log(product.())

}
test()