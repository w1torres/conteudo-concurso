---
title: "3. Conectores e integração"
date: 2026-01-24T20:21:48.518Z
---

# 3. Conectores e integração

## 1. Especificações Técnicas e Arquitetura

### APIs REST/SOAP
- **REST (Representational State Transfer):** Protocolo baseado em HTTP para comunicação web, utilizando métodos como GET, POST, PUT, DELETE para operações CRUD. Utiliza formatos como JSON ou XML para transferência de dados.
- **SOAP (Simple Object Access Protocol):** Protocolo baseado em XML para troca de mensagens entre sistemas, independente de linguagem ou plataforma, com suporte a funcionalidades como segurança, transações e mensagens com resposta.

### Web Services
- **Componentes:** WSDL (Web Services Description Language) para descrição do serviço, UDDI (Universal Description, Discovery, and Integration) para listagem de serviços disponíveis, e SOAP para comunicação.

### Arquivos Planos
- **Formatos:** CSV (valores separados por vírgula), JSON (JavaScript Object Notation), XML (eXtensible Markup Language), Parquet (formato colunar otimizado para armazenamento).

### Mensageria
- **Conceitos:** Troca de mensagens de forma assíncrona entre sistemas, utilizando filas ou tópicos para gerenciar o fluxo de mensagens.

### Segurança
- **TLS (Transport Layer Security):** Protocolo para criptografia e segurança na comunicação entre aplicativos.
- **Autenticação:** Métodos como OAuth2, JWT (JSON Web Tokens) para controle de acesso e identificação.

## 2. Detalhamento Técnico Avançado (Deep Dive)

### REST vs SOAP
- **REST:** Mais simples, usa HTTP/HTTPS, sem estado, ideal para web services públicos.
- **SOAP:** Mais estruturado, com suporte a transações, segurança avançada, ideal para empresas.

### Segurança em APIs
- **TLS:** Utiliza handshake para estabelecer uma conexão segura, trocando chaves para criptografia.
- **Autenticação:** OAuth2 utiliza tokens de acesso para autenticar e autorizar usuários.

## 3. Implementação e Operação (O "Mão na Massa")

### Comandos/Scripts
```bash
# Exemplo de curl para API REST
curl -X GET "https://api.exemplo.com/v1/recurso" -H "Authorization: Bearer TOKEN_AQUI"

# Exemplo de comando para verificar a configuração TLS
openssl s_client -connect exemplo.com:443
```

### Protocolos e Regras
- **Handshake TLS:** Inicia com `ClientHello`, seguido por `ServerHello`, troca de certificados, chave secreta e finaliza com `Finished`.
- **Processo OAuth2:** Inicia com a solicitação de autorização, usuário autentica, servidor autoriza e emite token de acesso.

### Exemplos de Output/Logs
```
# Exemplo de resposta de API REST
{
  "id": 1,
  "nome": "Exemplo",
  "status": "ativo"
}
```

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

- A CEBRASPE pode cobrar a diferença entre métodos HTTP utilizados em REST (GET para leitura, POST para criação, PUT/PATCH para atualização, DELETE para exclusão) e a estrutura de uma mensagem SOAP (Envelope, Header, Body).
- Pegadinhas comuns incluem confundir autenticação e autorização, ou não reconhecer a importância da criptografia TLS em APIs públicas.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras              | O que faz/O que valida             | Observação Técnica                  |
|-----------------------------|------------------------------------|-------------------------------------|
| `curl -X GET`               | Realiza uma requisição HTTP GET    | Usado para testar endpoints de API  |
| `openssl s_client -connect` | Testa a conexão TLS de um servidor | Verifica a configuração de segurança|

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **( )** O protocolo SOAP não suporta a transferência de dados em formato JSON.
2. **( )** Em uma arquitetura RESTful, é recomendado o uso de URLs significativas e a manipulação de recursos utilizando os métodos HTTP.
3. **( )** O handshake TLS inicia com a troca de chaves públicas entre o cliente e o servidor.
4. **( )** Arquivos no formato Parquet são otimizados para operações de leitura e escrita sequencial, não sendo adequados para consultas analíticas.
5. **( )** OAuth2 é um protocolo que permite a um serviço terceiro acessar recursos do usuário sem expor suas credenciais de acesso.

### Gabarito
1. Certo. SOAP é baseado em XML e não foi projetado nativamente para suportar JSON.
2. Certo. Este é um princípio fundamental do design RESTful.
3. Errado. O handshake TLS começa com `ClientHello`, não com a troca de chaves públicas diretamente.
4. Errado. Parquet é otimizado para consultas analíticas devido à sua eficiência em operações de leitura.
5. Certo. OAuth2 permite acesso a recursos sem expor credenciais, utilizando tokens de acesso.

## 7. Bibliografia e Documentação Oficial

- RFC 7231 - Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content
- RFC 5246 - The Transport Layer Security (TLS) Protocol Version 1.2
- RFC 6749 - The OAuth 2.0 Authorization Framework
- JSON.org - Introdução ao JSON
- Apache Parquet - Documentação oficial

Este material foi elaborado com base nas especificações e documentações oficiais, focando nas exigências técnicas e operacionais para a preparação para concursos do TCU, com ênfase nas questões frequentemente abordadas pela banca CEBRASPE.
