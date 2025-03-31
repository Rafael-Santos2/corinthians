# Exercício 11: Galeria de Arte Urbana com Bootstrap

**Objetivo:** Criar uma página web responsiva para exibir uma galeria de arte urbana, utilizando Bootstrap para estruturação e CSS personalizado para estilização.

---

## Descrição:

Este exercício consiste em desenvolver uma página web que exibe uma galeria de arte urbana, com destaque para obras de diferentes artistas. A página inclui um cabeçalho, uma imagem principal, uma seção de galeria com várias obras e um rodapé com links para redes sociais. O Bootstrap é utilizado para garantir a responsividade, enquanto o CSS personalizado é aplicado para estilização avançada.

---

## Passo 1: Estrutura HTML

1. **Configuração do Documento:**
   - Crie um documento HTML básico com a estrutura `<!DOCTYPE html>`.
   - Adicione as meta tags necessárias, como `charset`, `viewport` e `X-UA-Compatible`.
   - Inclua um favicon e links para o CSS do Bootstrap, ícones do Bootstrap Icons e um arquivo CSS personalizado (`styles.css`).

2. **Cabeçalho (`header`):**
   - Adicione um `header` com um logotipo, título e uma breve descrição.
   - Utilize classes do Bootstrap para centralizar o conteúdo e adicionar espaçamento.

3. **Navegação (`navbar`):**
   - Crie uma barra de navegação simples com links para "Home", "Projetos", "Artistas" e "Contato".
   - Use classes do Bootstrap para alinhar os links horizontalmente e adicionar espaçamento.

4. **Imagem Principal:**
   - Adicione uma imagem principal com um título, data e um botão "Detalhes".
   - Utilize classes do Bootstrap para posicionar o texto e o botão sobre a imagem.

5. **Galeria:**
   - Crie uma seção de galeria com várias obras de arte.
   - Use o sistema de grid do Bootstrap para organizar as imagens em linhas e colunas.
   - Adicione títulos, datas e botões "Detalhes" para cada obra.

6. **Rodapé (`footer`):**
   - Inclua um rodapé com links para redes sociais (Facebook, Instagram, Twitter) e uma mensagem de direitos autorais.
   - Utilize ícones do Bootstrap Icons para representar as redes sociais.

---

## Passo 2: Funcionalidade com Bootstrap

1. **Responsividade:**
   - O sistema de grid do Bootstrap (`row` e `col-*`) garante que a galeria e outros elementos se ajustem corretamente em diferentes tamanhos de tela.
   - Classes como `col-xs-12` e `col-md-6` definem o layout para dispositivos móveis e desktops.

2. **Imagens de Fundo:**
   - As imagens são aplicadas como fundo de divs utilizando CSS (`background-image`), com classes como `center-image` para garantir que as imagens cubram o espaço disponível e sejam centralizadas.

3. **Ícones:**
   - A biblioteca Bootstrap Icons é usada para adicionar ícones de redes sociais no rodapé.

4. **Botões:**
   - Botões estilizados com classes do Bootstrap (`btn`) e CSS personalizado para efeitos de hover.

---

## Passo 3: Estilização com CSS Personalizado

1. **Cores e Tipografia:**
   - Defina cores padrão para textos e links.
   - Utilize a classe `secondary-color` para textos secundários.

2. **Efeitos de Hover:**
   - Adicione transições suaves para links e ícones ao passar o mouse.
   - Altere a cor dos ícones e links ao interagir com eles.

3. **Imagens:**
   - Utilize a classe `center-image` para garantir que as imagens de fundo cubram o espaço disponível e sejam centralizadas.
   - Adicione margens e espaçamentos para melhorar a organização visual.

4. **Botões:**
   - Estilize botões com cores de fundo, bordas arredondadas e efeitos de hover.
   - Utilize a classe `btn` do Bootstrap como base e adicione estilos personalizados.

5. **Rodapé:**
   - Adicione uma borda superior e centralize o conteúdo do rodapé.
   - Estilize os ícones das redes sociais com tamanho e cores personalizados.

---

## Passo 4: Interatividade e Feedback Visual

1. **Navegação:**
   - Os links da barra de navegação mudam de cor ao passar o mouse, fornecendo feedback visual ao usuário.

2. **Galeria:**
   - Cada obra de arte é exibida com uma imagem de fundo, título, data e um botão "Detalhes".
   - O layout responsivo garante que a galeria seja bem organizada em dispositivos móveis e desktops.

3. **Rodapé:**
   - Os ícones das redes sociais mudam de cor ao passar o mouse, incentivando a interação do usuário.

---

## Explicação:

Este exercício demonstra como criar uma página web responsiva e estilizada para uma galeria de arte urbana, utilizando o Bootstrap para estruturação e CSS personalizado para estilização avançada. O foco é na organização do conteúdo, responsividade e interatividade.

- **Bootstrap:** Fornece a estrutura básica e a responsividade da página.
- **CSS Personalizado:** Adiciona estilos avançados, como cores, efeitos de hover e posicionamento de imagens.
- **Ícones:** Melhoram a usabilidade e a aparência do rodapé.

---

Este exercício é uma introdução prática à criação de páginas web responsivas e estilizadas, combinando o poder do Bootstrap com a flexibilidade do CSS personalizado.