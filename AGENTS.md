# 🤖 AGENTS.md — Regras do Agente | Borracharia América

Este arquivo define as **regras e comportamentos obrigatórios** do agente ao trabalhar neste projeto.  
Todas as regras aqui são **inegociáveis** e devem ser seguidas em **toda interação**.

---

## 🔒 REGRAS FUNDAMENTAIS

### 1. Uma Tarefa Por Vez
- **NUNCA** trabalhe em múltiplas tarefas simultaneamente
- Complete **100%** de uma tarefa antes de iniciar a próxima
- Cada tarefa deve seguir o fluxo: **Entender → Planejar → Executar → Verificar → Documentar**
- Se a tarefa for complexa, quebre em sub-tarefas e execute cada uma individualmente
- Sempre confirme a conclusão de uma etapa antes de avançar pra próxima

### 2. Changelog Obrigatório
- **TODA** alteração de código — por menor que seja — **DEVE** ser registrada no `CHANGELOG.md`
- O changelog deve ser atualizado **APÓS** cada modificação, nunca em lote no final
- Seguir rigorosamente o formato definido no próprio `CHANGELOG.md`
- Incluir: emoji, descrição, arquivo(s) afetado(s), detalhe do que mudou
- Se múltiplas mudanças forem feitas numa sessão, cada uma recebe sua própria entrada
- Incrementar a versão conforme Semantic Versioning:
  - **Patch (Z):** correção, ajuste visual, typo, refatoração interna
  - **Minor (Y):** nova funcionalidade, nova seção, nova feature
  - **Major (X):** redesign completo, breaking change

### 3. Modularização e Organização
- Manter o código **limpo, legível e bem comentado**
- Cada seção do HTML deve ter comentários separadores claros (`<!-- SEÇÃO -->`)
- No CSS, agrupar estilos por componente com comentários de bloco (`/* COMPONENTE */`)
- No JS, separar funcionalidades com comentários descritivos
- Evitar código duplicado — reutilizar classes e variáveis CSS
- Usar variáveis CSS (`:root`) para cores, sombras, transições e espaçamentos
- Nomes de classes devem ser semânticos e seguir o padrão BEM quando aplicável

### 4. Lógica Entre Etapas
- Antes de editar, **sempre ler o estado atual** do arquivo que será modificado
- Antes de adicionar CSS, **verificar se já existe** uma regra similar
- Antes de adicionar JS, **verificar se já existe** funcionalidade parecida
- Validar que a mudança não quebra nada existente
- Após cada edição, confirmar que o código está consistente entre HTML, CSS e JS

### 5. Comunicação Clara
- Explicar **o que** vai fazer antes de fazer
- Após fazer, resumir **o que** foi feito e **por quê**
- Se encontrar um problema, explicar o problema antes de propor solução
- Falar em português brasileiro, informal mas profissional
- Nunca assumir — perguntar quando houver dúvida

---

## 📁 ESTRUTURA DO PROJETO

```
borracharia-site/
├── index.html          # Estrutura HTML — página principal
├── style.css           # Estilos — design system completo
├── script.js           # Lógica JavaScript — interações
├── logo.svg            # Logo vetorial
├── CHANGELOG.md        # Registro de TODAS as mudanças
├── AGENTS.md           # Regras do agente (este arquivo)
└── .git/               # Controle de versão
```

### Convenções de Arquivos:
- **HTML:** Semântico, acessível, SEO-friendly
- **CSS:** Vanilla CSS com variáveis customizadas, mobile-first responsive
- **JS:** Vanilla JS, sem frameworks, código limpo e performático
- **Assets:** SVG preferido para ícones e logos

---

## 🎨 DESIGN SYSTEM

### Paleta de Cores (definida em `:root`)
| Variável        | Cor       | Uso                          |
|----------------|-----------|------------------------------|
| `--blue-dark`  | `#0b1a5c` | Backgrounds principais       |
| `--blue-mid`   | `#1a2d8a` | Gradientes, destaques        |
| `--blue-light` | `#2540b0` | Gradientes, hover states     |
| `--red`        | `#e31e24` | CTAs, destaques, marca       |
| `--red-dark`   | `#b8181d` | Hover states do vermelho     |
| `--yellow`     | `#ffd700` | Badges, estrelas, destaques  |
| `--white`      | `#ffffff` | Backgrounds claros           |
| `--gray-*`     | Variados  | Textos, bordas, backgrounds  |

### Tipografia
- **Títulos:** Bebas Neue (display)
- **Corpo:** Inter (sans-serif)

### Componentes Reutilizáveis
- `.logo-placa` — Logo em CSS puro (sm, md, lg)
- `.btn` — Botões (btn-red, btn-outline)
- `.section` — Container de seção (section-dark)
- `.service-card` — Card de serviço
- `.testimonial-card` — Card de depoimento
- `.contact-item` — Item de contato
- `.fade-in` — Animação de scroll reveal

---

## ⚡ WORKFLOW POR TAREFA

Para **qualquer** tarefa solicitada, seguir este fluxo:

```
1. 📖 ENTENDER
   └── Ler o pedido, ler os arquivos relevantes, entender o contexto

2. 📋 PLANEJAR  
   └── Explicar o que será feito, em quais arquivos, e em que ordem

3. 🔨 EXECUTAR
   └── Fazer a mudança — UMA de cada vez

4. ✅ VERIFICAR
   └── Confirmar que funciona, que não quebrou nada

5. 📝 DOCUMENTAR
   └── Atualizar CHANGELOG.md com a entrada da mudança

6. 💬 REPORTAR
   └── Resumir o que foi feito pro usuário
```

---

## 🚫 O QUE NUNCA FAZER

- ❌ Fazer múltiplas mudanças sem documentar cada uma
- ❌ Pular a leitura do estado atual dos arquivos
- ❌ Adicionar código duplicado sem verificar o existente
- ❌ Usar frameworks ou bibliotecas sem aprovação explícita
- ❌ Mudar a paleta de cores ou tipografia sem aprovação
- ❌ Remover comentários existentes no código
- ❌ Fazer mudanças "silenciosas" sem registrar
- ❌ Assumir o que o usuário quer sem perguntar
- ❌ Pular a verificação pós-edição
