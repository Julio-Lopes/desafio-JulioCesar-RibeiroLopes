class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        if (metodoDePagamento !== "debito" && metodoDePagamento !== "credito" && metodoDePagamento !== "dinheiro") {
            return "Forma de pagamento inválida!";
        }

        let valorTotal = 0;
        let temCafe = false;
        let temSanduiche = false;

        for (const item of itens){
            const [nome, quantidade] = item.split(",");

            if(!cardapio.hasOwnProperty(nome)){
                return "Item inválido!";
            } else if (quantidade <= 0){
                return "Quantidade inválida!";
            }

            if (nome === "cafe"){
                temCafe = true;
            } else if (nome === "sanduiche"){
                temSanduiche = true;
            }

            if ((nome === "chantily" && !temCafe) || (nome === "queijo" && !temSanduiche)){
                return "Item extra não pode ser pedido sem o principal";
            }
                
            const valorCarrinho = cardapio[nome] * quantidade;
            valorTotal += valorCarrinho;
        }

        if (metodoDePagamento === "dinheiro") {
            valorTotal *= 0.95;
        } else if (metodoDePagamento === "credito") {
            valorTotal *= 1.03; 
        }

        return `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
    }
}

export { CaixaDaLanchonete };