# 📋 CHANGELOG — Borracharia América

Registro de todas as alterações feitas no site da **Borracharia América**.  
Toda mudança, por menor que seja, **deve** ser documentada aqui.

> **Formato:** As entradas seguem o padrão [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).  
> **Versionamento:** [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.3.0] — 2026-05-05

### Adicionado
- 💬 Formulário de feedback para clientes reais na seção de Avaliações
  - **Arquivos:** `index.html`, `style.css`, `script.js`
  - **Detalhe:** Caixinha "Deixe sua Avaliação" com campo de nome, seletor de estrelas interativo (hover preview + click), textarea com contador de caracteres (0/300), botão de envio, mensagem de sucesso animada. Feedbacks salvos no localStorage e renderizados como cards com badge "Via Site" e borda vermelha lateral, posicionados acima dos depoimentos de exemplo. Inclui responsividade mobile completa.

---

## [1.2.0] — 2026-05-05

### Adicionado
- 📋 Criação do `CHANGELOG.md` — registro completo de todas as mudanças do projeto
  - **Arquivo:** `CHANGELOG.md`
  - **Detalhe:** Changelog com histórico reconstruído a partir dos commits Git, guia de registro, categorias e template para novas entradas

- 🤖 Criação do `AGENTS.md` — regras e skills obrigatórios do agente
  - **Arquivo:** `AGENTS.md`
  - **Detalhe:** Regras fundamentais do projeto: changelog obrigatório, uma tarefa por vez, modularização, lógica entre etapas, workflow padronizado (Entender → Planejar → Executar → Verificar → Documentar → Reportar), design system documentado, proibições

- 🧠 Knowledge Item persistente criado para regras do projeto
  - **Arquivo:** `.gemini/antigravity/knowledge/borracharia-rules/`
  - **Detalhe:** Permite que as regras sejam lembradas automaticamente em conversas futuras

---

## [1.1.0] — 2026-05-04

### Corrigido
- 🔗 Links do WhatsApp atualizados com DDD 19 correto (`49df4ff`)
  - **Arquivo:** `index.html`
  - **Detalhe:** Todos os links `wa.me/` corrigidos para incluir o código de área `19` — formato `5519996899750`

### Alterado
- 🎨 Logo "S.O.S" centralizado com "BORRACHARIA AMÉRICA" no header (`79674f8`)
  - **Arquivo:** `style.css`, `index.html`
  - **Detalhe:** Ajuste visual do componente `.logo-placa` para alinhar o "S.O.S" ao centro junto com o nome principal

### Removido
- 🗑️ Serviços de Balanceamento e Alinhamento removidos (`3047bc5`)
  - **Arquivo:** `index.html`
  - **Detalhe:** Cards de serviço removidos pois a borracharia não oferece esses serviços atualmente

---

## [1.0.0] — 2026-05-04

### Adicionado
- 🚀 Lançamento inicial do site (`eddf0ab`)
  - **Arquivos:** `index.html`, `style.css`, `script.js`, `logo.svg`
  - **Funcionalidades:**
    - Landing page completa com seções: Hero, Serviços, Sobre, Avaliações, Contato
    - Design profissional com identidade visual fiel à placa original
    - Logo em CSS puro (`.logo-placa`) replicando a placa real da borracharia
    - Responsividade completa — desktop, tablet e mobile
    - Menu hamburger funcional para mobile
    - Botão flutuante do WhatsApp com animação
    - Google Maps embed com localização real
    - Scroll reveal animations (IntersectionObserver)
    - Header fixo com efeito blur/glassmorphism
    - Banner animado "24 HORAS"
    - Seção de depoimentos com avaliações reais do Google
    - CTA final para WhatsApp
    - SEO otimizado — meta tags, semântica HTML5, heading hierarchy
    - Tipografia com Google Fonts (Inter + Bebas Neue)
    - Paleta de cores: azul escuro (#0b1a5c), vermelho (#e31e24), amarelo (#ffd700)

---

## Guia de Registro

### Categorias de mudança:
| Categoria       | Emoji | Quando usar                                     |
|-----------------|-------|------------------------------------------------|
| **Adicionado**  | ✨     | Nova funcionalidade, seção, componente          |
| **Alterado**    | 🎨     | Mudança visual, refatoração, atualização        |
| **Corrigido**   | 🐛     | Bug fix, correção de link, typo                 |
| **Removido**    | 🗑️     | Remoção de feature, seção, código               |
| **Segurança**   | 🔒     | Correção de vulnerabilidade                     |
| **Performance** | ⚡     | Otimização de carregamento, tamanho de arquivo  |

### Template para nova entrada:
```markdown
## [X.Y.Z] — AAAA-MM-DD

### Categoria
- EMOJI Descrição curta da mudança (`hash do commit`)
  - **Arquivo(s):** `arquivo.ext`
  - **Detalhe:** Explicação do que mudou e por quê
```

### Regras:
1. **Toda** alteração deve ser registrada — sem exceção
2. Sempre incluir o(s) arquivo(s) afetado(s)
3. Sempre incluir hash do commit quando disponível
4. Data no formato `AAAA-MM-DD`
5. Versão nova no topo do arquivo
6. Major (X) = redesign ou breaking change
7. Minor (Y) = nova funcionalidade ou seção
8. Patch (Z) = correção, ajuste visual, typo
