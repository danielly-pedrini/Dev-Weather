# ☁️ Dev Weather

> Previsão do Tempo para Programadores 👨‍💻

Uma aplicação web que traduz dados meteorológicos em termos de desenvolvimento de software, transformando temperatura, umidade e outros indicadores climáticos em métricas familiares para devs.



<img src="./assets/Dev Weather 1.png" alt="imagem 1">
<br>
<img src="./assets/Dev Weather 1.png" alt="imagem 2">


![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-orange?style=for-the-badge&logo=openweathermap&logoColor=white)

## 🎯 Sobre o Projeto

O **Dev Weather** é uma aplicação web que apresenta informações climáticas de forma criativa e divertida para programadores. Em vez de mostrar dados meteorológicos tradicionais, o app traduz essas informações para o contexto do desenvolvimento de software:

- ☀️ **"Código Compilando"** em vez de "Céu Limpo"
- 🌧️ **"Bugs Conhecidos"** em vez de "Chuva"
- ❄️ **"Sistema Travado"** em vez de "Neve"

## ✨ Funcionalidades

- 🔍 **Busca por cidade**: Pesquise o clima de qualquer cidade do mundo
- 🎨 **Interface temática**: Design dark com fundo de código e efeito glassmorphism
- 📊 **Métricas traduzidas**:
  - **Risco de Bugs**: Baseado na umidade do ar
  - **Débito Técnico**: Calculado pela umidade
  - **Tráfego de Requisições**: Derivado da velocidade do vento
  - **Qualidade do Código**: Determinada pela pressão atmosférica
  - **Status da CPU**: Relacionado à temperatura
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- 🌐 **Idioma**: Interface em português (PT-BR)

## 🖼️ Preview

A interface apresenta:
- Card principal com condição climática traduzida
- 4 cards de métricas em linha horizontal
- Informações adicionais (temperatura min/max, visibilidade, nascer/pôr do sol)
- Esquema de cores dinâmico baseado nas condições climáticas

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização com gradientes, backdrop-filter e grid layout
- **JavaScript (Vanilla)**: Lógica da aplicação e manipulação do DOM
- **OpenWeatherMap API**: Fonte dos dados meteorológicos em tempo real
- **Unsplash**: Imagem de fundo com código de programação

## 📦 Estrutura do Projeto

```
dev-weather/
│
├── index.html       # Estrutura HTML da aplicação
├── style.css        # Estilos e design responsivo
├── script.js        # Lógica JavaScript e integração com API
└── README.md        # Documentação do projeto
```

## 🛠️ Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexão com a internet

### Instalação Local

1. Clone este repositório:
```bash
git clone https://github.com/danielly-pedrini/Dev-Weather.git
```

2. Navegue até a pasta do projeto:
```bash
cd Dev-Weather
```

3. Abra o arquivo `index.html` no seu navegador

**Ou** use um servidor local:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server
```

4. Acesse `http://localhost:8000` no navegador

### Uso Online

Acesse a versão hospedada: [https://danielly-pedrini.github.io/Dev-Weather/](https://danielly-pedrini.github.io/Dev-Weather/)

## 🔑 Configuração da API

Este projeto usa a [OpenWeatherMap API](https://openweathermap.org/api) para obter dados climáticos em tempo real.

A chave de API já está configurada no código para fins de demonstração. Para uso próprio:

1. Crie uma conta gratuita em: https://openweathermap.org/api
2. Gere sua API key
3. Substitua a chave no arquivo `script.js`:
```javascript
const API_KEY = 'SUA_CHAVE_AQUI';
```

**Nota**: A chave está exposta no código por ser um projeto educacional com API gratuita. Para projetos comerciais, use variáveis de ambiente ou backend proxy.

## 🎨 Funcionalidades Técnicas

### Tradução de Condições Climáticas

O sistema identifica condições meteorológicas pelo código de ícone da API:
- `01`: Céu limpo → "Código Compilando"
- `02`: Poucas nuvens → "Testes Passando"
- `03/04`: Nublado → "Refatoração Necessária"
- `09/10`: Chuva → "Bugs Conhecidos"
- `11`: Tempestade → "Sistema Instável"
- `13`: Neve → "Sistema Travado"

### Cálculo de Métricas

```javascript
// Risco de Bugs (baseado na umidade)
Umidade ≤ 40%  → Baixo
Umidade ≤ 60%  → Moderado
Umidade ≤ 80%  → Alto
Umidade > 80%  → Crítico

// Qualidade do Código (baseado na pressão)
Pressão ≥ 1020 hPa → Excelente
Pressão ≥ 1010 hPa → Boa
Pressão ≥ 1000 hPa → Precisa Refatorar
Pressão < 1000 hPa → Legacy Critical
```

## 🎯 Aprendizados

Este projeto demonstra:
- ✅ Consumo de APIs REST
- ✅ Manipulação assíncrona com `async/await`
- ✅ Design responsivo com CSS Grid
- ✅ Tratamento de erros e validações
- ✅ Experiência do usuário (UX) temática
- ✅ Versionamento com Git/GitHub

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📝 Ideias para Melhorias Futuras

- [ ] Previsão para os próximos dias
- [ ] Gráficos de tendência
- [ ] Mais traduções criativas
- [ ] Temas claro/escuro
- [ ] Favoritar cidades
- [ ] Geolocalização automática
- [ ] PWA (Progressive Web App)

## 👩‍💻 Autora

**Danielly Pedrini**

- GitHub: [Danielly Pedrini](https://github.com/danielly-pedrini)
- LinkedIn: [[Danielly Pedrini](https://www.linkedin.com/in/daniellypedrini/)]

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [OpenWeatherMap](https://openweathermap.org/) pelos dados climáticos
- [Unsplash](https://unsplash.com/) pelas imagens de alta qualidade
- Comunidade dev pela inspiração

---

⭐ Se este projeto te ajudou, deixe uma estrela!

**Feito com ❤️ e ☕ por uma dev iniciante**
