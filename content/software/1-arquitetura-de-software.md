---
title: "1. Arquitetura de Software"
date: 2026-01-24T20:23:51.520Z
---

# 1. Arquitetura de Software

## 1. Especificações Técnicas e Arquitetura

Arquiteturas de software definem a estrutura fundamental sobre a qual os sistemas são construídos, destacando componentes, suas interconexões e como interagem para cumprir os requisitos do sistema. As arquiteturas mais comuns incluem Monolito, Microserviços e Serverless, cada uma com seus próprios componentes, regras e práticas recomendadas. A comunicação entre serviços é frequentemente realizada através de eventos/mensageria e integrações como API Gateway e Service Mesh, enquanto padrões como CQRS (Command Query Responsibility Segregation) são utilizados para separar a leitura da escrita de dados, otimizando o desempenho e a escalabilidade.

## 2. Detalhamento Técnico Avançado (Deep Dive)

### Monolito
- **Conceito:** Aplicação como uma unidade única.
- **Limitações:** Difícil escalabilidade, acoplamento alto.
- **Boas práticas:** Modularização interna para facilitar manutenção.

### Microserviços
- **Conceito:** Aplicação dividida em serviços menores, independentes.
- **Regras:** Comunicação via APIs leves, cada serviço com seu banco de dados.
- **Boas práticas:** Deploy independente, domínio bem definido para cada serviço.

### Serverless
- **Conceito:** Execução de código em resposta a eventos, sem gerenciar servidores.
- **Limitações:** Cold start, tempo de execução limitado.
- **Boas práticas:** Manter funções leves, utilizar cache para otimizar performance.

### Eventos/Mensageria
- **Regras:** Comunicação assíncrona, desacoplamento entre produtores e consumidores.
- **Boas práticas:** Garantir idempotência, utilizar dead-letter queues para mensagens não processadas.

### Integração
- **API Gateway:** Ponto de entrada unificado para APIs, autenticação e rate limiting.
- **Service Mesh:** Gerenciamento de comunicação entre serviços, oferece resiliência e monitoramento.
- **CQRS:** Separação entre comandos (escrita) e queries (leitura), melhora performance e escalabilidade.

## 3. Implementação e Operação (O "Mão na Massa")

### Comandos/Scripts
- **Deploy de microserviço com Kubernetes:**
```bash
kubectl apply -f service.yaml
kubectl apply -f deployment.yaml
```
- **Configuração de API Gateway com Terraform:**
```terraform
resource "aws_api_gateway_rest_api" "MyDemoAPI" {
  name        = "MyDemoAPI"
  description = "This is my API for demonstration purposes"
}
```

### Protocolos e Regras
- **TLS Handshake:** Processo de negociação de criptografia entre cliente e servidor.
- **Normalização de Dados:** 1FN elimina grupos repetitivos, 2FN elimina dependências funcionais parciais, 3FN elimina dependências transitivas.

### Contexto TCU
No TCU, a arquitetura de software é crucial para sistemas de auditoria e fiscalização. Microserviços e serverless são preferidos para escalabilidade e eficiência. A integração via API Gateway e Service Mesh facilita a comunicação segura entre sistemas internos e externos, enquanto CQRS é utilizado em sistemas de grande volume de dados para separar processos de leitura e escrita, otimizando a performance.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE costuma cobrar o entendimento prático das arquiteturas, focando em como elas são aplicadas e gerenciadas no dia a dia. É comum haver questões que testam o conhecimento sobre as limitações e desafios de cada arquitetura, assim como as melhores práticas para superá-los. Pegadinhas frequentes incluem confundir características de microserviços com monolitos ou serverless, ou questões que exigem compreensão detalhada de padrões específicos como CQRS.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras            | O que faz/O que valida        | Observação Técnica importante |
|----------------------------|-------------------------------|-------------------------------|
| `kubectl apply -f`         | Deploy de configurações no Kubernetes | Usado para microserviços      |
| Terraform API Gateway      | Criação de API Gateway na AWS | Ponto de entrada unificado    |
| CQRS                       | Separação de leitura e escrita| Melhora performance           |
| Service Mesh               | Gerenciamento de comunicação | Oferece resiliência e monitoramento |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **Certo ou Errado?** No contexto de microserviços, cada serviço deve ter seu próprio banco de dados para evitar acoplamento.
   - **Resposta:** Certo. Isso garante a independência e a escalabilidade dos serviços.

2. **Certo ou Errado?** Serverless é uma arquitetura onde o desenvolvedor deve gerenciar e escalar os servidores conforme a demanda.
   - **Resposta:** Errado. Serverless abstrai a gestão de servidores, permitindo que o desenvolvedor foque no código.

3. **Certo ou Errado?** O padrão CQRS é utilizado para integrar microserviços através de um API Gateway.
   - **Resposta:** Errado. CQRS é utilizado para separar operações de leitura e escrita, não para integração direta de microserviços.

4. **Certo ou Errado?** Uma aplicação monolítica é mais fácil de escalar horizontalmente do que uma arquitetura baseada em microserviços.
   - **Resposta:** Errado. Microserviços são mais fáceis de escalar horizontalmente devido à sua independência.

5. **Certo ou Errado?** Service Mesh é utilizado para facilitar a comunicação entre serviços em uma arquitetura de microserviços, oferecendo recursos como descoberta de serviços, balanceamento de carga e monitoramento.
   - **Resposta:** Certo. Service Mesh oferece esses e outros recursos para gerenciar a comunicação entre serviços.

## 7. Bibliografia e Documentação Oficial

- Kubernetes Official Documentation: [https://kubernetes.io/docs/](https://kubernetes.io/docs/)
- AWS API Gateway Documentation: [https://docs.aws.amazon.com/apigateway/](https://docs.aws.amazon.com/apigateway/)
- Martin Fowler on Microservices: [https://martinfowler.com/articles/microservices.html](https://martinfowler.com/articles/microservices.html)
- Serverless Architecture: [https://aws.amazon.com/serverless/](https://aws.amazon.com/serverless/)
- CQRS: [https://martinfowler.com/bliki/CQRS.html](https://martinfowler.com/bliki/CQRS.html)
