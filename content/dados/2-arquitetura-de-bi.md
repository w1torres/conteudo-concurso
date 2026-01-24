---
title: "2. Arquitetura de BI"
date: 2026-01-24T20:21:18.838Z
---

# 2. Arquitetura de BI

## 1. Especificações Técnicas e Arquitetura

### DataWarehouse (DW)
- **Tecnologia/Norma:** Repositório centralizado de dados integrados de diversas fontes.
- **Componentes Principais:** Banco de dados central, ETL (Extract, Transform, Load), ferramentas de consulta e análise.
- **Conceitos Fundamentais:** Armazenamento de dados históricos, suporte à tomada de decisão, estruturado em esquemas dimensionais (estrela, floco de neve).

### DataMart
- **Tecnologia/Norma:** Subconjunto de um DataWarehouse focado em uma área específica.
- **Componentes Principais:** Banco de dados, ETL, ferramentas de consulta e análise específicas da área.
- **Conceitos Fundamentais:** Facilita o acesso a dados relevantes para um departamento específico, implementação mais rápida e barata que um DW completo.

### DataLake
- **Tecnologia/Norma:** Repositório para armazenamento de grandes volumes de dados brutos em seu formato nativo.
- **Componentes Principais:** Plataforma de armazenamento (ex: Hadoop HDFS, Amazon S3), ferramentas de processamento e análise de dados (ex: Apache Spark).
- **Conceitos Fundamentais:** Suporta dados estruturados e não estruturados, escalável, análise de big data, machine learning.

### DataMesh
- **Tecnologia/Norma:** Arquitetura descentralizada focada na democratização dos dados e na responsabilidade compartilhada.
- **Componentes Principais:** Domínios de dados auto-soberanos, plataforma de interoperabilidade, governança de dados.
- **Conceitos Fundamentais:** Promove a propriedade dos dados pelos domínios de negócio, facilita a descoberta e o acesso aos dados, enfatiza a governança federada.

## 2. Detalhamento Técnico Avançado (Deep Dive)

### DataWarehouse
- **Conceitos Técnicos Aprofundados:** Normalização até 3FN para eliminar redundâncias, seguida de denormalização para otimizar consultas.
- **Regras Operacionais:** Utilização de esquemas dimensionais para facilitar análises OLAP.
- **Boas Práticas:** Separação do ambiente de ETL do ambiente de consultas para otimizar o desempenho.

### DataMart
- **Conceitos Técnicos Aprofundados:** Implementação pode seguir o modelo dependente (derivado de um DW existente) ou independente.
- **Regras Operacionais:** Foco em uma área específica de negócio para otimizar o desempenho e a relevância dos dados.
- **Boas Práticas:** Alinhamento com os requisitos de negócio para garantir a relevância dos dados.

### DataLake
- **Conceitos Técnicos Aprofundados:** Armazenamento de dados em formato bruto, sem esquema definido até o momento da consulta (schema-on-read).
- **Regras Operacionais:** Governança de dados para garantir a qualidade e a segurança dos dados armazenados.
- **Boas Práticas:** Catalogação de dados para facilitar a descoberta e o acesso.

### DataMesh
- **Conceitos Técnicos Aprofundados:** Descentralização da gestão de dados, com domínios de negócio atuando como produtores e consumidores de dados.
- **Regras Operacionais:** Interoperabilidade entre domínios para compartilhamento de dados.
- **Boas Práticas:** Governança federada para manter a qualidade e a segurança dos dados.

## 3. Implementação e Operação (O "Mão na Massa")

### Comandos/Scripts

#### DataWarehouse
```sql
-- Exemplo de query SQL para consulta em um modelo de esquema estrela
SELECT f.measure, d.dimension_attribute
FROM fact_table f
JOIN dimension_table d ON f.dimension_key = d.dimension_key;
```

#### DataLake
```bash
# Exemplo de comando para armazenar dados no Hadoop HDFS
hadoop fs -put local_file.txt /path/in/hdfs
```

### Protocolos e Regras

#### DataMesh
- **Governança Federada:** Estabelecimento de políticas de qualidade de dados, segurança e acesso entre domínios.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

- A CEBRASPE costuma cobrar a compreensão das diferenças fundamentais entre DataWarehouse, DataMart, DataLake e DataMesh, especialmente em questões que pedem a identificação da solução mais adequada para um cenário descrito.
- Uma pegadinha comum é confundir DataLake com DataWarehouse, especialmente no que tange à estruturação de dados e ao propósito de uso (análise histórica x big data e análise em tempo real).

## 5. Tabela de Referência Técnica (Quick Lookup)

| Tecnologia     | O que faz/O que valida        | Observação Técnica importante |
|----------------|-------------------------------|-------------------------------|
| DataWarehouse  | Armazenamento de dados históricos para análise | Estruturado, esquemas dimensionais |
| DataMart       | Foco em departamento específico para análise | Pode ser dependente ou independente de um DW |
| DataLake       | Armazenamento de grandes volumes de dados brutos | Suporta dados estruturados e não estruturados |
| DataMesh       | Arquitetura descentralizada para democratização dos dados | Enfatiza governança federada e domínios de dados auto-soberanos |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(Certo ou Errado)** DataLakes são recomendados para armazenar dados estruturados em esquemas dimensionais para análise OLAP.
   - **Errado.** DataLakes são recomendados para armazenar grandes volumes de dados brutos, incluindo dados não estruturados, e não são otimizados especificamente para esquemas dimensionais ou análise OLAP.

2. **(Certo ou Errado)** DataMesh promove a centralização da governança de dados como meio para garantir a qualidade e segurança dos dados.
   - **Errado.** DataMesh promove uma governança federada e descentralizada, com domínios de negócio atuando como produtores e consumidores de dados, responsáveis pela qualidade e segurança dos seus dados.

3. **(Certo ou Errado)** DataMarts podem ser implementados de forma independente, sem necessidade de um DataWarehouse existente.
   - **Certo.** DataMarts podem seguir um modelo independente, sendo projetados para atender às necessidades específicas de um departamento sem depender de um DataWarehouse.

4. **(Certo ou Errado)** Em um DataLake, os dados são estruturados e organizados antes de serem armazenados.
   - **Errado.** Em um DataLake, os dados são armazenados em seu formato bruto e a estruturação (schema-on-read) ocorre apenas no momento da consulta ou análise.

5. **(Certo ou Errado)** A arquitetura de DataWarehouse não suporta o armazenamento de dados não estruturados.
   - **Certo.** Tradicionalmente, DataWarehouses são projetados para armazenar e analisar dados estruturados, seguindo um esquema definido, e não são otimizados para dados não estruturados.

## 7. Bibliografia e Documentação Oficial

- **DataWarehouse:**
  - Kimball, R., & Ross, M. (2013). The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling. Wiley.
- **DataLake:**
  - Dixon, J. (2010). "Data Lakes" [Blog post]. Retrieved from http://jamesdixon.wordpress.com/
- **DataMesh:**
  - Zhamak, D. (2019). "Data Mesh Principles and Logical Architecture" [Blog post]. Retrieved from https://martinfowler.com/articles/data-mesh-principles.html
- **Documentação Oficial AWS:** https://aws.amazon.com/pt/big-data/datalakes-and-analytics/what-is-a-data-lake/
- **Documentação Oficial Apache Hadoop:** https://hadoop.apache.org/docs/stable/
