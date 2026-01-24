---
title: "4. Armazenamento e Backup"
date: 2026-01-24T20:18:25.342Z
---

# 4. Armazenamento e Backup

## 1. Especificações Técnicas e Arquitetura

Armazenamento e backup são componentes críticos da infraestrutura de TI, garantindo a disponibilidade, integridade e recuperação de dados. As principais tecnologias envolvidas incluem SAN (Storage Area Network), NAS (Network Attached Storage), DAS (Direct Attached Storage), além de técnicas de RAID (Redundant Array of Independent Disks) e estratégias de backup e recuperação como RPO (Recovery Point Objective), RTO (Recovery Time Objective), snapshots e deduplicação. Oracle RMAN (Recovery Manager) é uma ferramenta específica para backup e recuperação de bancos de dados Oracle.

## 2. Detalhamento Técnico Avançado (Deep Dive)

### SAN, NAS, DAS
- **SAN** opera em nível de bloco, ideal para ambientes que exigem alto desempenho, como bancos de dados e aplicações críticas. Utiliza iSCSI para transporte sobre IP.
- **NAS** opera em nível de arquivo, facilitando o compartilhamento de arquivos em redes, com protocolos como NFS (Linux/Unix) e SMB (Windows).
- **DAS** é a conexão direta entre o armazenamento e o servidor, não sendo acessível por outros servidores ou dispositivos na rede.

### RAID
- RAID é um conjunto de técnicas para distribuir dados entre múltiplos discos, visando redundância e/ou desempenho. RAID 0, 1, 5, 6 e 10 são os níveis mais comuns, cada um com suas especificidades de desempenho e tolerância a falhas.

### Backup/Recuperação
- **RPO** e **RTO** são métricas críticas na definição de estratégias de backup, indicando, respectivamente, a quantidade máxima de perda de dados aceitável e o tempo máximo para recuperação após um desastre.
- **Snapshots** oferecem uma "fotografia" do estado de um sistema em um determinado momento, úteis para recuperações rápidas.
- **Deduplicação** é a técnica de reduzir o espaço necessário para armazenamento de backups, eliminando cópias redundantes de dados.

### Oracle RMAN
- RMAN é a ferramenta de backup e recuperação para bancos de dados Oracle, permitindo backups consistentes, recuperação de desastres e otimização do espaço de armazenamento.

## 3. Implementação e Operação (O "Mão na Massa")

### Comandos/Scripts
- **iSCSI**:
  ```bash
  # Conectar a um alvo iSCSI
  iscsiadm -m discovery -t sendtargets -p [IP_DO_ALVO]
  iscsiadm -m node --login
  ```
- **NFS**:
  ```bash
  # Montar um compartilhamento NFS
  mount [IP_DO_SERVIDOR]:/[CAMINHO] /mnt/nfs
  ```
- **SMB**:
  ```bash
  # Montar um compartilhamento SMB
  mount -t cifs -o username=[USUÁRIO],password=[SENHA] //[IP_DO_SERVIDOR]/[RECURSO] /mnt/smb
  ```
- **Oracle RMAN**:
  ```sql
  # Backup do banco de dados
  RMAN> BACKUP DATABASE PLUS ARCHIVELOG;
  ```

### Protocolos e Regras
- **iSCSI** utiliza TCP/IP para transporte, permitindo o uso de infraestrutura de rede existente.
- **NFS** e **SMB** são protocolos de nível de aplicação para sistemas de arquivos distribuídos.
- **RAID** níveis e suas regras específicas determinam a configuração de discos para redundância e desempenho.
- **RMAN** opera dentro do contexto do banco de dados Oracle, integrando-se com sua arquitetura para otimizar backups.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

- A CEBRASPE costuma cobrar a compreensão das diferenças fundamentais entre SAN, NAS e DAS, bem como os protocolos específicos (iSCSI, NFS, SMB) e suas aplicações práticas.
- RAID: A banca pode apresentar cenários para testar o entendimento sobre a escolha do nível de RAID adequado, baseando-se em requisitos de desempenho e tolerância a falhas.
- Oracle RMAN: Questões podem focar em comandos específicos e cenários de recuperação, exigindo conhecimento detalhado da sintaxe e opções de configuração.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras           | O que faz/O que valida            | Observação Técnica importante para a prova |
|---------------------------|-----------------------------------|--------------------------------------------|
| iscsiadm                  | Conecta a alvos iSCSI             | Importante para SAN                        |
| mount -t nfs              | Monta compartilhamento NFS        | Uso comum em NAS                           |
| mount -t cifs             | Monta compartilhamento SMB        | Uso comum em NAS Windows                   |
| RMAN> BACKUP DATABASE     | Realiza backup do banco Oracle    | Fundamental para backup com RMAN           |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **Certo ou Errado?** O protocolo iSCSI permite que dispositivos de armazenamento sejam conectados a um servidor através da rede local, utilizando a infraestrutura Ethernet existente.
2. **Certo ou Errado?** RAID 5 requer no mínimo três discos e oferece tanto redundância quanto aumento de desempenho, mas a falha de mais de um disco simultaneamente resulta em perda de dados.
3. **Certo ou Errado?** NFS e SMB podem ser utilizados indistintamente em ambientes Linux e Windows para compartilhamento de arquivos.
4. **Certo ou Errado?** RMAN só pode ser utilizado para backup de bancos de dados Oracle, não sendo compatível com outros SGBDs.
5. **Certo ou Errado?** A deduplicação de dados é uma técnica que pode ser aplicada tanto em backups completos quanto incrementais para reduzir o espaço de armazenamento necessário.

**Gabarito:**
1. Certo.
2. Certo.
3. Errado. NFS é mais comum em ambientes Linux/Unix, enquanto SMB é predominante em Windows, apesar de ambos poderem ser utilizados em diferentes sistemas operacionais.
4. Certo.
5. Certo.

## 7. Bibliografia e Documentação Oficial

- RFC 3720 - Internet Small Computer Systems Interface (iSCSI)
- NFS: Network File System Version 4 Protocol. RFC 7530.
- SMB: [Microsoft SMB Protocol Documentation](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-smb)
- Oracle RMAN: [Oracle Backup and Recovery User's Guide](https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/index.html)
