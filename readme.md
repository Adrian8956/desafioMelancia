**Desafio de Aposta de Peso de Melancia**

---

### Visão Geral

Este é um pequeno projeto JavaScript que permite aos usuários fazerem apostas no peso de uma melancia e posteriormente determinar o vencedor com base no peso real da melancia. As apostas são armazenadas localmente no navegador usando o `localStorage`.

### Funcionalidades Principais

1. **Formulário de Aposta:**
   - Um formulário simples onde o usuário pode inserir seu nome e o peso estimado da melancia.
   - Verifica se o peso já foi apostado anteriormente antes de salvar.

2. **Armazenamento Local:**
   - As apostas (nomes e pesos) são armazenadas no `localStorage` do navegador.
   - Verifica se há dados salvos ao carregar a página para exibir as apostas anteriores.

3. **Determinação do Vencedor:**
   - Após coletar todas as apostas, o usuário pode inserir o peso real da melancia.
   - O sistema então calcula a diferença entre o peso real e cada aposta para determinar o vencedor (aposta mais próxima do peso real).

4. **Limpeza de Apostas:**
   - Opção para limpar todas as apostas armazenadas no `localStorage`.

### Uso do Projeto

Para utilizar este projeto, basta abrir o arquivo HTML no seu navegador. Aqui estão algumas instruções:

- **Apostar:**
  - Preencha o formulário com seu nome e seu palpite para o peso da melancia.
  - Clique em "Apostar".
  - Se alguém já apostou o mesmo peso, será exibido um alerta solicitando outro valor.

- **Determinar o Vencedor:**
  - Após todos terem apostado, clique no botão "Determinar Vencedor".
  - Insira o peso real da melancia quando solicitado.
  - O sistema calculará a aposta mais próxima do peso real e exibirá o vencedor em um alerta.

- **Limpar Apostas:**
  - Para limpar todas as apostas, clique no botão "Limpar Apostas".
  - Será exibido um alerta de confirmação antes de remover todos os dados.

### Observações

- Este projeto usa apenas JavaScript e armazenamento local (`localStorage`) para manter as apostas, não requerendo nenhum servidor backend.
- Certifique-se de permitir cookies e dados de site no seu navegador para que o `localStorage` funcione corretamente.

### Contribuições

Este é um projeto simples, mas você é bem-vindo para contribuir com melhorias ou correções. Sinta-se à vontade para clonar o repositório, fazer suas alterações e enviar um pull request.

---
