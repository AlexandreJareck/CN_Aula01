function mudouValor() {
    //instancia um elemento do DOM através do respectivo id, que nesse caso é "COMBOFAB"
    var elemento = document.getElementById('country');
    //com o elemento instanciado, é possível capturar o valor da label
    var texto = elemento.options[elemento.selectedIndex].innerHTML;
    switch (texto) {                              
          case "Brasil":
          document.getElementById("pSelecionado").value = "Você mora no Brasil";
          document.getElementById("descricao").value = "O Brasil é um país localizado no subcontinente da América do Sul. O território brasileiro é banhado pelo oceano Atlântico, limitando-se ao norte, com a Guiana Francesa, Suriname, Guiana, Venezuela e Colômbia; a noroeste, com o Peru; a oeste, com a Bolívia, Paraguai e Argentina; e ao sul, com o Uruguai.";                   
            break;
          case "Canada":
          document.getElementById("pSelecionado").value = "Você mora no Canada";
          document.getElementById("descricao").value = "O Canadá é um país localizado na América do Norte ou América Anglo-Saxônica, seu território encontra-se no hemisfério norte ocidental. Na costa oeste é banhado pelo Oceano Pacífico, na costa leste, pelo Oceano Atlântico e mar do Labrador e ao norte, pelo mar de Beaufort.";              
            break;
          case "USA":
          document.getElementById("pSelecionado").value = "Você mora nos Estados Unidos";
          document.getElementById("descricao").value = "Os estados dos Estados Unidos são as unidades federativas que compõem o território estadunidense. Cada estado possui um poder soberano limitado, tendo a obrigação de, segundo a Constituição do país, partilhar parte de seus poderes com o Governo Federal. Aos estados cabe a responsabilidade de investir nos setores da educação, saúde, infraestrutura, segurança, transporte.";                           
            break;      
        default:
            break;
    }        

    
}