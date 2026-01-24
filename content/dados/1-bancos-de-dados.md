---
title: "1. Bancos de Dados"
date: 2026-01-24T20:20:38.770Z
---

# 1. Bancos de Dados

## 1. Especificações Técnicas e Arquitetura

Bancos de dados relacionais, como Oracle e SQL Server, utilizam um modelo baseado em tabelas, onde os dados são armazenados em linhas e colunas, permitindo a execução de operações complexas de consulta e manipulação através da linguagem SQL. Eles seguem o princípio ACID (Atomicidade, Consistência, Isolamento, Durabilidade) para garantir a integridade dos dados.

Bancos de dados NoSQL, como Elasticsearch e MongoDB, são projetados para armazenar, distribuir e acessar dados de maneiras que não se encaixam perfeitamente no modelo relacional. Eles podem ser categorizados em quatro tipos principais: chave-valor, documentos, colunas largas e grafos. Esses bancos de dados são conhecidos por sua alta escalabilidade, performance e flexibilidade na modelagem de dados.

## 2. Detalhamento Técnico Avançado (Deep Dive)

### Normalização de Dados:
- **1FN (Primeira Forma Normal):** Garante que os valores em cada coluna de uma tabela sejam atômicos e que a tabela contenha uma chave única.
- **2FN (Segunda Forma Normal):** Além de atender à 1FN, garante que todos os atributos não-chave sejam totalmente funcionais e dependentes da chave primária.
- **3FN (Terceira Forma Normal):** Além de atender à 2FN, todos os seus campos devem ser dependentes apenas da chave primária, eliminando assim as dependências transitivas.

### Modelagem de Dados NoSQL:
- **Documentos (MongoDB):** Armazenam dados em documentos JSON, facilitando a modelagem de dados semiestruturados.
- **Pesquisa de Texto (Elasticsearch):** Otimizado para pesquisas de texto completo, armazenando dados de forma que facilita a indexação e recuperação rápida.

## 3. Implementação e Operação (O "Mão na Massa")

### Comandos/Scripts:

**SQL Server:**
```sql
SELECT * FROM Usuarios WHERE Nome LIKE '%Silva%';
```

**MongoDB:**
```javascript
db.usuarios.find({nome: /Silva/});
```

**Elasticsearch:**
```json
GET /usuarios/_search
{
  "query": {
    "match": {
      "nome": "Silva"
    }
  }
}
```

### Protocolos e Regras:

- **Transações SQL:** O comando `BEGIN TRANSACTION` inicia uma transação, seguido por uma série de operações SQL, e é finalizado com `COMMIT` para aplicar as alterações ou `ROLLBACK` para desfazê-las.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE costuma cobrar a sintaxe exata em comandos SQL e características específicas dos bancos de dados NoSQL, como a natureza schema-less do MongoDB ou a capacidade de busca full-text do Elasticsearch. Uma pegadinha comum é questionar sobre a aplicação de conceitos de normalização em bancos de dados NoSQL, onde a modelagem de dados é frequentemente denormalizada para otimizar o desempenho.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras               | O que faz/O que valida            | Observação Técnica                         |
|-------------------------------|-----------------------------------|--------------------------------------------|
| `SELECT * FROM`               | Seleciona dados de uma tabela     | SQL padrão, mas evite `*` em produção      |
| `db.collection.find()`        | Busca documentos no MongoDB       | Use índices para melhorar a performance    |
| `GET /_search`                | Realiza uma busca no Elasticsearch| Ajuste o mapeamento para otimizar buscas   |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(Certo ou Errado)** Em um banco de dados relacional, a normalização até a 3FN é suficiente para eliminar todas as redundâncias de dados.
2. **(Certo ou Errado)** O MongoDB permite a realização de transações ACID em múltiplas coleções desde a versão 4.0.
3. **(Certo ou Errado)** No Elasticsearch, o mapeamento de campos não precisa ser definido previamente, pois ele pode inferir o tipo de dados automaticamente.
4. **(Certo ou Errado)** Consultas que utilizam o comando `LIKE` no SQL Server são otimizadas automaticamente com o uso de índices.
5. **(Certo ou Errado)** Em bancos de dados NoSQL, a denormalização é uma prática comum para otimizar a performance de leitura.

**Gabarito:**
1. Errado. A normalização até a 3FN reduz muitas redundâncias, mas não todas. A BCNF e outras formas normais podem ser necessárias em alguns casos.
2. Certo. A partir da versão 4.0, o MongoDB introduziu suporte a transações multi-documentos, estendendo as propriedades ACID.
3. Certo. O Elasticsearch pode inferir tipos de dados, mas a definição explícita de mapeamentos é uma prática recomendada para otimizar buscas.
4. Errado. O uso de `LIKE`, especialmente com wildcards no início da string, pode evitar o uso de índices e degradar a performance.
5. Certo. A denormalização é frequentemente utilizada em bancos de dados NoSQL para otimizar consultas, reduzindo a necessidade de joins.

## 7. Bibliografia e Documentação Oficial

- SQL Server Documentation: [https://docs.microsoft.com/en-us/sql/sql-server/](https://docs.microsoft.com/en-us/sql/sql-server/)
- MongoDB Documentation: [https://docs.mongodb.com/](https://docs.mongodb.com/)
- Elasticsearch Reference: [https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
- Date, C. J. (2003). An Introduction to Database Systems (8th ed.). Addison-Wesley Longman.
