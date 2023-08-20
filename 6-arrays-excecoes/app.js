try{
    const estoqueDeProdutos = [
        'Pao',
        'Laranja',
        'Cafe',
        'Sabonete',
        'Detergente',
        'Coador de cafe',
    ];
    
    const produtosEncomendadosPeloCliente = process.argv.slice(2);
    
    
    // Verificando se os produtos solicitados estão em estoque
    const produtosEncontrados = estoqueDeProdutos.filter(produto => {
        return produtosEncomendadosPeloCliente.find(item => 
            item === produto
    )});
    

    /* Produtos encontrados no nosso estoque */
    console.log('Esses(s) produto(s) nós temos: ');
    produtosEncontrados.forEach(produto => 
        console.log(`${produto}`)
    );
    

    /* Produtos não encontrados */
    const produtosNaoEncontrados = produtosEncomendadosPeloCliente.filter(produto => {
        return !produtosEncontrados.find(item => 
            item === produto
    )});
    
    
    console.log('Esses(s) produto(s) nós NÃO temos: ');
    produtosNaoEncontrados.forEach(produto => 
        console.log(`${produto}`)
    );
    

    // Nosso estoque em ordem alfabética
    console.log('---------------------------------------------')
    console.log('Aqui está lista de produtos disponíveis em nosso estoque')
    console.log(estoqueDeProdutos.sort());
        
}
catch(error){
    console.log('Não foi possível executar esse pedido de compra');
}


