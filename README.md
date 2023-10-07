# DESAFIO ESCREVENDO A CLASSE DE UM JOGO DIO 

## INSTRUÇÕES
### 3️⃣ Escrevendo as classes de um Jogo
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

# Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

## 🎮 DESENVOLVIMENTO
Para desenvolver este desafio foi criado a classe do personagem que será utilizada tanto para o herói como para o inimigo, criado também um json onde contem os tipos de personagens que podem ser usados.
A batalha funciona da seguinte forma, o herói deve ser informado diretamente no código, já no caso do inimigo o próprio script sorteia algum tipo para ele, cada um tem 100 de vida e vai baixando a medida que vai sendo realizado os ataques, informando no terminal as caracteristicas de quem atacou, após a vida de algum personagem zerar é informado no terminal quem venceu !!

## COMO EXECUTAR O PROJETO
Para executar o projeto você precisa clonar este repositório, abrir o terminal na pasta e digitar **"node scripts.js"**

## **📈 OBJETIVO:**
### 📚 Aprendizado
### 🧠 Conhecimento
### ⭐ Sucesso
<br>

# **🛠 LINGUAGENS UTILIZADAS:**
[![AGPL License](https://img.shields.io/badge/JAVASCRIPT-yellow.svg)](http://www.gnu.org/licenses/agpl-3.0)
<br><br>