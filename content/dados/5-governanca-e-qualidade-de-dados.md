---
title: "5. Governança e Qualidade de Dados"
date: 2026-01-24T20:22:45.883Z
---

# 5. Governança e Qualidade de Dados

## 1. Especificações Técnicas e Arquitetura

Governança e qualidade de dados envolvem a gestão estratégica de dados, assegurando sua precisão, disponibilidade, responsabilidade e segurança. Componentes principais incluem:

- **Linhagem de Dados:** Rastreamento da origem, movimento, características e uso dos dados.
- **Catalogação de Dados:** Organização e classificação dos dados para facilitar a busca e o acesso.
- **Validação de Dados:** Processo de garantir que os dados atendam a critérios específicos de qualidade e formato.
- **Deduplicação de Dados:** Identificação e remoção de cópias exatas ou quase exatas de dados.
- **Metadados:** Dados sobre os dados, que descrevem características, conteúdo, qualidade, condição e outras características.
- **Glossários de Dados:** Dicionários que definem termos e conceitos de dados relevantes para a organização.
- **Políticas de Acesso:** Regras que definem quem pode acessar, modificar ou visualizar determinados conjuntos de dados.

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **Linhagem de Dados:** Utiliza metadados para rastrear a origem dos dados, transformações aplicadas e onde são utilizados, crucial para a auditoria e conformidade.
- **Catalogação de Dados:** Emprega sistemas de gerenciamento de metadados para facilitar a descoberta e o acesso aos dados.
- **Validação de Dados:** Inclui verificações de integridade, como a conformidade com expressões regulares, intervalos de valores e unicidade.
- **Deduplicação de Dados:** Utiliza algoritmos de correspondência e hashing para identificar duplicatas, melhorando a eficiência do armazenamento e processamento.
- **Metadados:** Classificam-se em descritivos, estruturais e administrativos, essenciais para a gestão eficaz dos dados.
- **Glossários de Dados:** Facilitam a comunicação e compreensão entre diferentes partes interessadas, promovendo a consistência.
- **Políticas de Acesso:** Baseiam-se em princípios de menor privilégio e necessidade de conhecer, essenciais para a segurança dos dados.

## 3. Implementação e Operação (O "Mão na Massa")

**Exemplo de Comando/Script:**

```sql
-- Validação de Dados com SQL
SELECT * FROM tabela WHERE NOT REGEXP_LIKE(campo, '^[0-9]{4}-[0-9]{2}-[0-9]{2}$');
```

Este comando SQL identifica registros que não atendem ao formato de data YYYY-MM-DD, um exemplo comum de validação de dados.

**Contexto TCU:**

A linhagem de dados é crucial para auditorias do TCU, permitindo rastrear a origem e as transformações dos dados para verificar sua integridade e conformidade com as políticas de governança de dados.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE pode cobrar a compreensão de que a deduplicação de dados não se aplica apenas a registros completamente idênticos, mas também a registros que são considerados duplicatas com base em critérios específicos de negócio.

**Dica de Prova:** Esteja atento a questões que confundem metadados descritivos com estruturais, uma distinção importante na gestão de metadados.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras                | O que faz/O que valida              | Observação Técnica                          |
|--------------------------------|-------------------------------------|---------------------------------------------|
| REGEXP_LIKE(campo, 'regex')    | Valida formato de dados com regex   | Útil para validação de dados em SQL        |
| Deduplicação de Dados          | Remove ou identifica dados duplicados| Importante para eficiência de armazenamento |
| Políticas de Acesso            | Define regras de acesso a dados     | Crucial para segurança e conformidade       |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. A linhagem de dados é utilizada apenas para fins de auditoria interna. (Errado)
2. Metadados estruturais descrevem o conteúdo do dado, como título ou autor. (Errado)
3. A deduplicação de dados pode ser realizada com base em critérios específicos de negócio, além de identificadores únicos. (Certo)
4. Glossários de dados são irrelevantes para a governança de dados, pois servem apenas como documentação auxiliar. (Errado)
5. Políticas de acesso baseadas no princípio de menor privilégio são recomendadas para a gestão de segurança de dados. (Certo)

## 7. Bibliografia e Documentação Oficial

- DAMA-DMBOK (Data Management Body of Knowledge)
- ISO/IEC 25012:2008 - Data Quality model
- NIST Special Publication 800-53 (Security and Privacy Controls for Federal Information Systems and Organizations)

Este material é baseado em padrões reconhecidos internacionalmente e práticas recomendadas para a governança e qualidade de dados, relevantes para a preparação de concursos públicos, especialmente aqueles aplicados pela CEBRASPE.
