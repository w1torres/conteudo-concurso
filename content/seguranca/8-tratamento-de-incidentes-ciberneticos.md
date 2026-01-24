---
title: "8. Tratamento de Incidentes Cibernéticos"
date: 2026-01-24T20:31:28.031Z
---

# 8. Tratamento de Incidentes Cibernéticos

## 1. Especificações Técnicas e Arquitetura

O tratamento de incidentes cibernéticos envolve a identificação, análise, contenção, erradicação e recuperação de incidentes que ameacem a segurança da informação. Componentes principais incluem:

- **Sistema de Detecção de Intrusões (IDS)**: Monitora o tráfego de rede para atividades suspeitas.
- **Sistema de Gerenciamento de Incidentes**: Ferramenta para registro e gestão de incidentes.
- **Equipe de Resposta a Incidentes (CERT ou CSIRT)**: Grupo especializado na resposta e análise de incidentes.

Conceitos fundamentais:

- **Identificação**: Detectar e reportar o incidente.
- **Contenção**: Limitar o impacto do incidente.
- **Erradicação**: Remover a causa raiz do incidente.
- **Recuperação**: Restaurar os sistemas afetados à operação normal.
- **Aprendizado**: Analisar o incidente para prevenir futuras ocorrências.

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **Identificação de Incidentes**: Uso de SIEM (Security Information and Event Management) para correlacionar eventos e identificar incidentes.
- **Análise Forense**: Utilização de ferramentas como Volatility para análise de memória e Wireshark para análise de tráfego de rede.
- **Comunicação**: Protocolo de comunicação deve seguir o RFC 2350, definindo procedimentos e contatos.

Boas práticas:

- Implementação de uma política de resposta a incidentes.
- Treinamento regular da equipe de resposta a incidentes.
- Simulações periódicas de incidentes para aprimoramento das habilidades e processos.

## 3. Implementação e Operação (O "Mão na Massa")

**Comandos/Scripts:**

- **Wireshark**: `tshark -i eth0 -f 'port 80'` para capturar tráfego HTTP na interface eth0.
- **Volatility**: `vol.py -f memory.dmp --profile=Win7SP1x64 pslist` para listar processos em uma imagem de memória do Windows 7.

**Protocolos e Regras:**

- **RFC 2350**: Define expectativas para provedores de resposta a incidentes.
- **NIST SP 800-61**: Guia para tratamento de incidentes.

**Exemplos de Output/Logs:**

- **Logs de IDS**: Alerta de tentativa de SQL Injection: `ALERT: SQL Injection attempt detected from IP 192.168.1.100`.

**Contexto TCU:**

- Adoção de políticas de resposta a incidentes conforme melhores práticas do NIST e orientações do GSI/PR.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE costuma cobrar:

- Detalhes sobre procedimentos específicos de resposta a incidentes.
- Diferenciação entre termos como "mitigação" e "contenção".
- Importância da documentação e análise post-mortem de incidentes.

Pegadinhas comuns:

- Confundir etapas de resposta a incidentes.
- Subestimar a importância da comunicação durante um incidente.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras            | O que faz/O que valida                 | Observação Técnica                    |
|----------------------------|---------------------------------------|---------------------------------------|
| `tshark -i eth0 -f 'port 80'` | Captura tráfego HTTP na interface eth0 | Útil para análise inicial de tráfego. |
| RFC 2350                   | Protocolo de comunicação para CSIRTs  | Importante para padronização da resposta. |
| NIST SP 800-61             | Guia para tratamento de incidentes    | Base para políticas de resposta a incidentes. |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(Certo ou Errado)** O NIST SP 800-61 recomenda a realização de simulações de incidentes como parte do treinamento da equipe de resposta.
2. **(Certo ou Errado)** A análise forense digital deve ser iniciada imediatamente após a identificação de um incidente, sem a necessidade de preservação de evidências.
3. **(Certo ou Errado)** A comunicação durante um incidente cibernético deve ser restrita à equipe de TI para evitar pânico.
4. **(Certo ou Errado)** A erradicação de um incidente envolve a remoção do agente da ameaça e a recuperação dos sistemas afetados para o estado operacional normal.
5. **(Certo ou Errado)** A documentação detalhada de um incidente cibernético é opcional se o incidente for resolvido rapidamente.

**Gabarito Comentado:**

1. Certo. O NIST SP 800-61 de fato recomenda simulações de incidentes como método de treinamento.
2. Errado. A preservação de evidências é crucial antes de iniciar qualquer análise forense para garantir a integridade da investigação.
3. Errado. A comunicação eficaz durante um incidente deve incluir partes relevantes além da equipe de TI, seguindo o plano de comunicação estabelecido.
4. Certo. A erradicação envolve a remoção da causa raiz do incidente, enquanto a recuperação foca na restauração dos sistemas.
5. Errado. A documentação é uma parte essencial do processo de resposta a incidentes, independentemente da rapidez da resolução.

## 7. Bibliografia e Documentação Oficial

- **NIST SP 800-61**: [Computer Security Incident Handling Guide](https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final)
- **RFC 2350**: [Expectations for Computer Security Incident Response](https://tools.ietf.org/html/rfc2350)
- **GSI/PR**: [Guia de Segurança para Internet](https://www.gsi.gov.br/legislacao/legislacao-especifica)
