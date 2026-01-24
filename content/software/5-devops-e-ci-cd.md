---
title: "5. DevOps e CI/CD"
date: 2026-01-24T20:25:45.992Z
---

# 5. DevOps e CI/CD

## 1. Especificações Técnicas e Arquitetura

DevOps é uma abordagem que combina práticas de desenvolvimento de software (Dev) com operações de TI (Ops) para encurtar o ciclo de vida do desenvolvimento de sistemas e fornecer entrega contínua com alta qualidade de software. CI/CD, parte integral do DevOps, refere-se à integração contínua (CI) e entrega ou implantação contínua (CD), facilitando a automação nos estágios de desenvolvimento de software.

- **GitHub Actions**: Permite a automação de workflows dentro do repositório GitHub, facilitando a CI/CD.
- **Docker/Kubernetes**: Docker é uma plataforma de contêineres que permite empacotar aplicações em contêineres, enquanto Kubernetes é um orquestrador de contêineres para gerenciar aplicações em contêineres em larga escala.
- **Monitoramento (Grafana, New Relic)**: Grafana é uma ferramenta de visualização e análise que permite monitorar e visualizar métricas. New Relic é uma plataforma de observabilidade que oferece análise em tempo real de performance de aplicações.

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **GitHub Actions**: Utiliza arquivos YAML para definir o workflow de CI/CD. O arquivo `.github/workflows/main.yml` pode conter definições para build, teste, e deploy.
- **Docker**: Utiliza o `Dockerfile` para definir o ambiente de uma aplicação. Comandos como `docker build` e `docker run` são usados para criar e rodar contêineres.
- **Kubernetes**: Utiliza manifestos YAML para definir o estado desejado de aplicações em contêineres. Comandos como `kubectl apply` são usados para aplicar esses manifestos.
- **Grafana/New Relic**: Configuração de dashboards em Grafana requer conexão com fontes de dados e definição de queries para visualização. New Relic oferece agentes que são instalados nas aplicações para coletar métricas.

## 3. Implementação e Operação (O "Mão na Massa")

```yaml
# Exemplo de GitHub Actions para CI/CD
name: CI/CD Pipeline

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Build Docker image
      run: docker build . --tag my-application:$(date +%s)
    - name: Deploy to Kubernetes
      run: kubectl apply -f k8s/
```

```Dockerfile
# Exemplo de Dockerfile
FROM python:3.8-slim
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```

```bash
# Comando para criar um dashboard no Grafana via API
curl -X POST -H "Content-Type: application/json" -d '{
  "dashboard": {
    "title": "Performance",
    "panels": [...]
  }
}' http://GRAFANA_HOST/api/dashboards/db
```

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

- A banca CEBRASPE pode cobrar a sintaxe exata dos arquivos de configuração do GitHub Actions e Dockerfile, além de comandos específicos do kubectl para Kubernetes.
- Uma pegadinha comum é confundir as responsabilidades e funcionalidades entre Docker e Kubernetes, ou entre as ferramentas de monitoramento Grafana e New Relic.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras              | O que faz/O que valida         | Observação Técnica importante para a prova         |
|------------------------------|--------------------------------|----------------------------------------------------|
| `actions/checkout@v2`        | Checa o repositório Git        | Essencial para iniciar qualquer workflow no GitHub Actions |
| `docker build . --tag my-app`| Constrói uma imagem Docker     | Tag é crucial para versionamento e deploy          |
| `kubectl apply -f k8s/`      | Aplica configurações no Kubernetes | Diretório `k8s/` deve conter manifestos YAML válidos |
| `Grafana API`                | Cria dashboards via API        | Requer autenticação e conhecimento da API          |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(C)** No GitHub Actions, é possível definir workflows dependentes que só são executados após a conclusão bem-sucedida de outros.
2. **(E)** Docker e Kubernetes são tecnologias mutuamente exclusivas e não podem ser utilizadas em conjunto para gerenciamento de contêineres.
3. **(C)** Grafana pode ser utilizado para visualizar métricas coletadas tanto por agentes do New Relic quanto por outras fontes de dados, como Prometheus.
4. **(E)** Arquivos de configuração do Kubernetes não suportam a definição de políticas de auto-scaling para as aplicações.
5. **(C)** GitHub Actions suporta a execução de jobs em ambientes Windows, Linux e macOS.

## 7. Bibliografia e Documentação Oficial

- GitHub Actions Documentation: https://docs.github.com/en/actions
- Docker Documentation: https://docs.docker.com/
- Kubernetes Documentation: https://kubernetes.io/docs/
- Grafana Documentation: https://grafana.com/docs/
- New Relic Documentation: https://docs.newrelic.com/
