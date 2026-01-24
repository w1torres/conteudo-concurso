---
title: "7. Frameworks"
date: 2026-01-24T20:30:52.204Z
---

# 7. Frameworks

## 1. Especificações Técnicas e Arquitetura

### MITRE ATT&CK
- **Tecnologia/Norma:** Framework de conhecimento globalmente acessível que é usado para descrever as táticas e técnicas usadas por cibercriminosos e APTs.
- **Componentes Principais:** Táticas, Técnicas, Subtécnicas.
- **Conceitos Fundamentais:** Fornece uma linguagem comum para a comunidade de segurança cibernética para descrever as ações dos adversários.

### CIS Controls
- **Tecnologia/Norma:** Conjunto de práticas de segurança cibernética recomendadas para organizações destinadas a prevenir, detectar e responder a ameaças cibernéticas.
- **Componentes Principais:** Controles e Subcontroles.
- **Conceitos Fundamentais:** Divididos em controles básicos, fundamentais e organizacionais, visam a proteção eficaz através de práticas bem estabelecidas.

### NIST CSF
- **Tecnologia/Norma:** Framework voluntário consistindo em padrões, diretrizes e práticas para ajudar organizações a gerenciar e reduzir riscos de cibersegurança.
- **Componentes Principais:** Funções (Identificar, Proteger, Detectar, Responder, Recuperar).
- **Conceitos Fundamentais:** Promove a proteção e resiliência de infraestruturas críticas através de um conjunto de atividades alinhadas ao risco.

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **MITRE ATT&CK:** Detalha técnicas específicas como "Spear Phishing" (T1566) sob a tática "Initial Access" (TA0001), permitindo organizações a simular ataques e preparar defesas específicas.
  
- **CIS Controls:** O controle 1, "Inventário e Controle de Ativos de Hardware", exige que todas as organizações mantenham um inventário preciso e atualizado de todos os dispositivos autorizados e não autorizados dentro da rede.

- **NIST CSF:** A função "Identificar" inclui atividades como a categorização de ativos de informação com base em seu valor para a organização e a identificação de ameaças relevantes.

## 3. Implementação e Operação (O "Mão na Massa")

### Contexto TCU
- **MITRE ATT&CK:** Utilizado para avaliar a postura de segurança de entidades fiscalizadas, identificando lacunas na detecção e resposta a ataques simulados.
- **CIS Controls:** Adotado como um benchmark para avaliar a maturidade da segurança cibernética em órgãos governamentais, com ênfase nos controles básicos para uma fundação sólida de segurança.
- **NIST CSF:** Serve como um guia para o desenvolvimento de políticas de segurança cibernética dentro de agências governamentais, alinhando práticas de segurança com objetivos estratégicos.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

- A CEBRASPE pode apresentar questões que exigem a distinção entre as funções e categorias dos frameworks, como confundir técnicas do MITRE ATT&CK com controles do CIS.
- Pode haver questões que testem o entendimento do candidato sobre a aplicabilidade dos frameworks em cenários específicos, como a implementação de controles CIS em infraestruturas cloud.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Framework       | Função/Controle          | Observação Técnica                          |
|-----------------|--------------------------|---------------------------------------------|
| MITRE ATT&CK    | T1566 - Spear Phishing   | Técnica de "Initial Access"                 |
| CIS Controls    | Controle 1               | Inventário de Ativos de Hardware            |
| NIST CSF        | Identificar              | Categorização de ativos e identificação de ameaças |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(Certo ou Errado)** O framework MITRE ATT&CK pode ser utilizado para criar um inventário de ativos de hardware dentro de uma organização.
   - **Resposta:** Errado. O MITRE ATT&CK é utilizado para descrever as táticas e técnicas de adversários, não para inventariar ativos.

2. **(Certo ou Errado)** Os CIS Controls são divididos em três categorias: básicos, fundamentais e organizacionais, cada um focando em aspectos diferentes da segurança cibernética.
   - **Resposta:** Certo. Essa é a divisão correta dos CIS Controls.

3. **(Certo ou Errado)** A função "Proteger" do NIST CSF inclui a implementação de firewalls e sistemas de detecção de intrusão.
   - **Resposta:** Certo. A função "Proteger" abrange atividades destinadas a garantir a capacidade de uma organização de limitar ou conter o impacto de um potencial incidente de segurança.

4. **(Certo ou Errado)** O NIST CSF é um conjunto obrigatório de práticas de segurança cibernética para todas as organizações governamentais dos Estados Unidos.
   - **Resposta:** Errado. O NIST CSF é voluntário, mesmo que amplamente adotado.

5. **(Certo ou Errado)** Uma técnica listada sob a tática "Execution" no MITRE ATT&CK é diretamente comparável a um controle do CIS focado em "Data Protection".
   - **Resposta:** Errado. Técnicas do MITRE ATT&CK e controles do CIS servem a propósitos diferentes, com o primeiro descrevendo métodos de ataque e o segundo recomendando práticas de segurança.

## 7. Bibliografia e Documentação Oficial

- **MITRE ATT&CK:** [https://attack.mitre.org](https://attack.mitre.org)
- **CIS Controls:** [https://www.cisecurity.org/controls/](https://www.cisecurity.org/controls/)
- **NIST CSF:** [https://www.nist.gov/cyberframework](https://www.nist.gov/cyberframework)
