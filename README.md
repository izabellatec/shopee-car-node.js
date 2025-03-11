Shopee Cart

Este projeto é um sistema simples de carrinho de compras desenvolvido em JavaScript, utilizando módulos para organizar os serviços relacionados ao carrinho e aos itens.

📌 Funcionalidades

Criar itens com nome, preço e quantidade.

Adicionar itens ao carrinho.

Exibir os itens do carrinho.

Remover ou diminuir a quantidade de itens no carrinho.

Excluir itens do carrinho.

Calcular o total do carrinho.

📂 Estrutura do Projeto

📁 shopee-cart
├── 📁 services
│   ├── cart.js  # Serviço para manipulação do carrinho
│   ├── item.js  # Serviço para criação de itens
├── index.js  # Arquivo principal
└── README.md  # Documentação do projeto

🚀 Como executar o projeto

1️⃣ Clonar o repositório

git clone <URL_DO_REPOSITORIO>
cd shopee-cart

2️⃣ Executar o código

O projeto utiliza ES Modules, então, para rodar o código, execute no terminal:

node index.js

📦 Serviços

📌 item.js

Este serviço permite criar um item com nome, preço e quantidade, além de calcular o subtotal com base na quantidade do item.

📌 cart.js

Este serviço contém funções para manipulação do carrinho, como adicionar, remover, exibir e calcular o total dos itens. Também permite excluir itens completamente e diminuir a quantidade de um item específico no carrinho.

🛠️ Tecnologias utilizadas

Node.js

JavaScript (ES Modules)

📌 Melhorias Futuras

Implementar uma interface web.

Salvar o carrinho em um banco de dados.


