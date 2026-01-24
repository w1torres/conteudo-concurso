---
title: "3. APIs e Integrações"
date: 2026-01-24T20:24:45.682Z
---

# 3. APIs e Integrações

## 1. Especificações Técnicas e Arquitetura

RESTful é um estilo arquitetônico para sistemas distribuídos, como a World Wide Web. As principais diretrizes incluem a utilização de métodos HTTP de forma explícita, a não manutenção de estado do cliente (stateless), e uma interface uniforme. O versionamento de APIs RESTful pode ser realizado através da URL, parâmetros de query, cabeçalhos HTTP ou no corpo da requisição.

OAuth2 é um protocolo de autorização que permite a uma aplicação obter acesso limitado a um serviço HTTP em nome de um usuário. JWT (JSON Web Tokens) é um padrão aberto (RFC 7519) que define uma maneira compacta e independente de transmitir informações de forma segura entre as partes como um objeto JSON. OpenID Connect é uma camada de identidade construída em cima do OAuth2, permitindo autenticação.

## 2. Detalhamento Técnico Avançado (Deep Dive)

RESTful APIs devem seguir princípios como a utilização de métodos HTTP (GET, POST, PUT, DELETE) de forma semântica, recursos identificados por URIs, e comunicação sem estado. O versionamento pode ser feito incluindo a versão na URI (`/api/v1/resource`) ou utilizando cabeçalhos HTTP customizados.

OAuth2 utiliza fluxos de autorização como o Authorization Code, Implicit, Resource Owner Password Credentials, e Client Credentials, dependendo do cenário de uso. JWTs são usados em OAuth2 como tokens de acesso, permitindo a representação de afirmações entre duas partes. OpenID Connect adiciona uma camada de identidade, fornecendo um ID Token junto ao token de acesso.

## 3. Implementação e Operação (O "Mão na Massa")

**OAuth2 com JWT:**

```bash
# Obter token de acesso usando o fluxo de credenciais do cliente
curl -X POST "https://authorization-server.com/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"

# Resposta esperada: {"access_token":"eyJ...","token_type":"Bearer","expires_in":3600}
```

**Versionamento de API RESTful:**

- Via URI: `/api/v1/resource`
- Via cabeçalho HTTP: `Accept: application/vnd.myapi.v1+json`

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE pode cobrar o entendimento correto dos fluxos de autorização OAuth2 e a aplicação correta dos métodos HTTP em APIs RESTful. Uma pegadinha comum é confundir o fluxo de autorização adequado para um determinado cenário ou a utilização incorreta de status HTTP.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras               | O que faz/O que valida                      | Observação Técnica importante para a prova  |
|-------------------------------|---------------------------------------------|---------------------------------------------|
| `GET /api/v1/resource`        | Recupera um recurso                         | Uso correto do método GET                   |
| `POST /api/resource`          | Cria um novo recurso                        | Uso correto do método POST                  |
| OAuth2 Authorization Code     | Fluxo para apps confidenciais               | Adequado para servidores de aplicação       |
| JWT                           | Representa afirmações entre duas partes     | Utilizado como token de acesso em OAuth2    |
| OpenID Connect                | Adiciona autenticação ao OAuth2             | Fornece ID Token junto ao token de acesso   |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. O OAuth2 permite a emissão de tokens de acesso que podem ser utilizados para autenticar e autorizar usuários em diferentes serviços sem que as credenciais do usuário sejam compartilhadas. (Certo)
2. Em uma API RESTful, o uso do método HTTP DELETE deve ser evitado por questões de segurança. (Errado)
3. JWTs não podem ser utilizados como mecanismo de autenticação em APIs RESTful. (Errado)
4. O versionamento de APIs RESTful deve ser feito exclusivamente através da URL para garantir a compatibilidade com versões anteriores. (Errado)
5. OpenID Connect é uma extensão do OAuth2 que permite a autenticação de usuários, mas não a autorização de acesso a recursos. (Errado)

## 7. Bibliografia e Documentação Oficial

- RFC 6749 (The OAuth 2.0 Authorization Framework): https://tools.ietf.org/html/rfc6749
- RFC 7519 (JSON Web Token): https://tools.ietf.org/html/rfc7519
- OpenID Connect Core 1.0: https://openid.net/specs/openid-connect-core-1_0.html
- Fielding, R. T. (2000). Architectural Styles and the Design of Network-based Software Architectures. University of California, Irvine.
