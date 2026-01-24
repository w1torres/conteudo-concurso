---
title: "5. DevOps, CI/CD e IaC"
date: 2026-01-24T20:35:29.438Z
---

# 5. DevOps, CI/CD e IaC

## 1. Especificações Técnicas e Arquitetura

DevOps, CI/CD (Continuous Integration/Continuous Deployment), e IaC (Infrastructure as Code) são práticas fundamentais para a automação e eficiência no desenvolvimento de software e gerenciamento de infraestrutura. Terraform permite a criação, modificação e versionamento seguro e eficiente de infraestrutura na nuvem usando código. Jenkins e GitHub Actions são ferramentas de integração contínua que automatizam o processo de build e deploy de aplicações. Observabilidade, através de ferramentas como CloudWatch (AWS), Azure Monitor e GCloud Monitoring, permite o monitoramento e análise de aplicações e infraestrutura na nuvem.

## 2. Detalhamento Técnico Avançado (Deep Dive)

Terraform utiliza uma linguagem declarativa para definir infraestrutura como código, permitindo a criação de recursos de forma idempotente. Jenkins, baseado em Java, utiliza pipelines definidos em Jenkinsfiles para automação de CI/CD. GitHub Actions utiliza workflows definidos em arquivos YAML para automação baseada em eventos. Observabilidade combina logs, métricas e traces para fornecer insights sobre o desempenho e saúde das aplicações e infraestrutura.

## 3. Implementação e Operação (O "Mão na Massa")

**Terraform:**

```hcl
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```

**Jenkins Pipeline:**

```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Building..."'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Testing..."'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying..."'
            }
        }
    }
}
```

**GitHub Actions Workflow:**

```yaml
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Build
      run: echo "Building..."
```

**Observabilidade com CloudWatch:**

```bash
aws cloudwatch put-metric-data --metric-name MyMetrics --namespace MyNamespace --value 123
```

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE costuma cobrar a compreensão da sintaxe específica e o entendimento profundo dos conceitos de Terraform, Jenkins, GitHub Actions e ferramentas de observabilidade. É comum haver pegadinhas relacionadas à sintaxe específica de declaração de recursos no Terraform, a configuração de pipelines no Jenkins e GitHub Actions, e a interpretação de métricas e logs nas ferramentas de observabilidade.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras                 | O que faz/O que valida               | Observação Técnica                      |
|---------------------------------|--------------------------------------|-----------------------------------------|
| `terraform apply`               | Aplica as configurações do Terraform | Requer revisão do plano antes da execução |
| `Jenkinsfile`                   | Define um pipeline Jenkins           | Sintaxe Groovy                          |
| `actions/checkout@v2`           | Checkout de código no GitHub Actions | Versão pode variar                      |
| `aws cloudwatch put-metric-data`| Envia métricas personalizadas para CloudWatch | Requer permissões adequadas            |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. Terraform permite a alteração da infraestrutura em tempo real sem a necessidade de aplicar as mudanças previamente em um ambiente de teste. (Errado)
   
2. Jenkins e GitHub Actions podem ser utilizados simultaneamente em um projeto para otimizar o processo de CI/CD. (Certo)

3. CloudWatch, Azure Monitor e GCloud Monitoring são capazes de coletar automaticamente todos os tipos de logs sem configuração prévia. (Errado)

4. É possível definir políticas de retenção de logs e métricas específicas diretamente nas configurações do Terraform para serviços de observabilidade na nuvem. (Certo)

5. GitHub Actions não suporta a execução de workflows em máquinas virtuais privadas ou em ambientes on-premise. (Errado)

## 7. Bibliografia e Documentação Oficial

- Terraform: [Terraform Documentation](https://www.terraform.io/docs)
- Jenkins: [Jenkins User Documentation](https://www.jenkins.io/doc/)
- GitHub Actions: [GitHub Actions Documentation](https://docs.github.com/en/actions)
- AWS CloudWatch: [Amazon CloudWatch Documentation](https://docs.aws.amazon.com/cloudwatch/index.html)
- Azure Monitor: [Azure Monitor Documentation](https://docs.microsoft.com/en-us/azure/azure-monitor/)
- Google Cloud Monitoring: [Google Cloud Monitoring Documentation](https://cloud.google.com/monitoring/docs)
