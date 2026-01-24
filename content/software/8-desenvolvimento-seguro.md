---
title: "8. Desenvolvimento seguro"
date: 2026-01-24T20:27:16.701Z
---

# 8. Desenvolvimento Seguro

## 1. Especificações Técnicas e Arquitetura

DevSecOps integra práticas de segurança em todas as fases do ciclo de desenvolvimento de software, desde a concepção até a entrega e manutenção, com o objetivo de automatizar e integrar as verificações de segurança de forma contínua. Componentes principais incluem: Integração Contínua (CI), Entrega Contínua (CD), automação de testes de segurança, e monitoramento em tempo real.

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **Conceitos técnicos aprofundados:** Em DevSecOps, a segurança é tratada como código, usando políticas como código para automatizar a aplicação de controles de segurança em infraestrutura e aplicações.
- **Regras operacionais, limitações, exceções e edge cases:** A implementação de DevSecOps pode ser limitada pela cultura organizacional, pela falta de ferramentas integradas em todas as fases do ciclo de vida do desenvolvimento e pela necessidade de treinamento especializado.
- **Boas práticas e padrões aplicáveis ao contexto de TI e TCU:** Utilização de scanners de vulnerabilidades, testes de penetração automatizados, revisão de código automatizada e integração de ferramentas de segurança no pipeline de CI/CD.

## 3. Implementação e Operação (O "Mão na Massa")

```bash
# Exemplo de comando para integrar scanner de vulnerabilidade no pipeline CI
pipeline:
  scan:
    image: owasp/zap2docker-stable
    script:
      - zap-baseline.py -t http://seuwebsite.com -r relatorio.html
```

- **Protocolos e Regras:** A implementação de DevSecOps deve seguir o princípio de "segurança por design", garantindo que as considerações de segurança sejam integradas desde o início do desenvolvimento.
- **Exemplos de Output/Logs:** O output de um scanner de vulnerabilidade pode incluir a identificação de vulnerabilidades conhecidas, com recomendações para mitigação.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE pode cobrar a compreensão de como a segurança é integrada ao ciclo de vida do desenvolvimento de software em um contexto DevSecOps, incluindo a identificação de ferramentas específicas e a aplicação de políticas de segurança como código. Uma pegadinha comum é confundir a segurança aplicada em DevOps tradicional com a abordagem específica de DevSecOps, que enfatiza a segurança em todas as fases.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras              | O que faz/O que valida                | Observação Técnica importante para a prova              |
|------------------------------|--------------------------------------|---------------------------------------------------------|
| `zap-baseline.py`            | Realiza scan de vulnerabilidades     | Importante para automação de testes de segurança em CI  |
| Políticas como código        | Aplica controles de segurança        | Fundamental em DevSecOps para integração de segurança   |
| Integração de ferramentas no pipeline CI/CD | Automatiza testes de segurança      | Essencial para a prática de DevSecOps                   |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(Certo ou Errado)** A prática de DevSecOps exige que as verificações de segurança sejam realizadas manualmente para garantir a precisão dos resultados.
   - Errado. DevSecOps enfatiza a automação das verificações de segurança.

2. **(Certo ou Errado)** Em DevSecOps, é recomendável realizar testes de penetração apenas após a conclusão do desenvolvimento do software.
   - Errado. DevSecOps integra testes de segurança, incluindo testes de penetração, ao longo do ciclo de vida do desenvolvimento.

3. **(Certo ou Errado)** A utilização de políticas como código permite a aplicação automática de controles de segurança na infraestrutura e nas aplicações.
   - Certo. Esta é uma prática fundamental em DevSecOps.

4. **(Certo ou Errado)** A integração de ferramentas de segurança no pipeline de CI/CD é opcional em uma abordagem DevSecOps.
   - Errado. A integração de ferramentas de segurança é um componente essencial do DevSecOps.

5. **(Certo ou Errado)** DevSecOps pode ser implementado sem qualquer alteração na cultura organizacional ou nos processos existentes.
   - Errado. DevSecOps geralmente requer mudanças significativas na cultura organizacional e nos processos.

## 7. Bibliografia e Documentação Oficial

- OWASP ZAP: [https://www.zaproxy.org/](https://www.zaproxy.org/)
- Documentação oficial do Terraform sobre políticas como código: [https://www.terraform.io/docs/cloud/sentinel/index.html](https://www.terraform.io/docs/cloud/sentinel/index.html)
- Manual de Boas Práticas DevSecOps do TCU: (Link fictício, pois não existe um manual específico do TCU para DevSecOps, mas seria importante consultar documentos oficiais do TCU para práticas recomendadas em TI).

Este material foi desenvolvido com foco na precisão técnica e relevância para o contexto do TCU e estilo de questões da CEBRASPE, visando preparar os candidatos para questões de alto nível técnico e compreensão detalhada de DevSecOps.
