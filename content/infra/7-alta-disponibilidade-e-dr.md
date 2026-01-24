---
title: "7. Alta Disponibilidade e DR"
date: 2026-01-24T20:20:09.221Z
---

# 7. Alta Disponibilidade e DR

## 1. Especificações Técnicas e Arquitetura

Alta Disponibilidade (HA) e Disaster Recovery (DR) são fundamentais para garantir a continuidade dos serviços de TI em caso de falhas ou desastres. HA se concentra em reduzir o tempo de inatividade, enquanto DR foca na recuperação após desastres.

- **Clusters**: Conjuntos de servidores que trabalham juntos para proporcionar maior disponibilidade.
- **Balanceamento de Carga**: Distribuição de carga de trabalho entre múltiplos recursos computacionais.
- **Failover**: Processo automático de troca para um sistema secundário em caso de falha.
- **Heartbeat**: Sinalização periódica entre sistemas para verificar sua disponibilidade.
- **Fencing**: Isolamento de um recurso com falha para proteção do cluster.

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **Clusters**: Utilizam algoritmos de consenso como Raft ou Paxos para gerenciamento de estado e liderança.
- **Balanceamento de Carga**: Pode ser implementado em nível de aplicação (ex: HAProxy) ou rede (ex: DNS round-robin).
- **Failover**: Requer configuração de prioridades e políticas de saúde para determinar quando e como a troca ocorre.
- **Heartbeat**: Implementado via pacotes ICMP ou mensagens específicas de aplicação.
- **Fencing**: Pode usar mecanismos de STONITH (Shoot The Other Node In The Head) para garantir a integridade do cluster.

## 3. Implementação e Operação (O "Mão na Massa")

**Comandos/Scripts:**

- **Heartbeat Setup** (Linux):
  ```bash
  apt-get install heartbeat
  vim /etc/heartbeat/ha.cf
  ```
- **Configuração de Failover** (Pacemaker):
  ```bash
  pcs cluster setup --name my_cluster node1 node2
  pcs cluster start --all
  ```

**Protocolos e Regras:**

- **Heartbeat**: Utiliza UDP na porta 694 para comunicação entre nós.
- **Fencing**: Configuração via `pcs` requer definição de agentes de fencing compatíveis com o hardware.

**Exemplos de Output/Logs:**

- **Cluster Status** (Pacemaker):
  ```bash
  pcs status
  ```

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

- A banca pode cobrar a diferença entre **balanceamento de carga** e **alta disponibilidade**, que embora relacionados, têm propósitos distintos.
- **Heartbeat** e **fencing** são frequentemente confundidos; o primeiro verifica a disponibilidade, enquanto o segundo isola recursos com falha.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras          | O que faz/O que valida            | Observação Técnica importante para a prova |
|--------------------------|-----------------------------------|--------------------------------------------|
| `apt-get install heartbeat` | Instala o pacote heartbeat no Linux. | Importante para configuração de HA.        |
| `pcs cluster setup`      | Configura um cluster Pacemaker.   | Essencial para failover e fencing.         |
| UDP porta 694            | Porta padrão para comunicação heartbeat. | Detalhe técnico relevante para configurações de firewall. |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **( )** O balanceamento de carga é uma estratégia que, por si só, garante a alta disponibilidade de um sistema.
2. **( )** O protocolo heartbeat pode ser implementado utilizando tanto UDP quanto TCP, dependendo da configuração do ambiente.
3. **( )** Fencing é um mecanismo utilizado para prevenir a corrupção de dados em um cluster, isolando nós que não respondem corretamente.
4. **( )** Em um ambiente de alta disponibilidade, o failover deve ser manualmente iniciado pelo administrador do sistema.
5. **( )** Clusters que utilizam o algoritmo Paxos necessariamente precisam de um número ímpar de nós para evitar divisão de cérebro (split-brain).

**Gabarito:**

1. Errado. O balanceamento de carga distribui o tráfego, mas não garante disponibilidade sem mecanismos de failover.
2. Certo. Embora o UDP seja comum para heartbeat devido à sua simplicidade e baixa sobrecarga, o TCP pode ser utilizado em ambientes que requerem confirmações de entrega.
3. Certo. Fencing é crucial para manter a integridade dos dados, evitando que nós "doentes" afetem o cluster.
4. Errado. O failover em sistemas de alta disponibilidade é tipicamente automático, sem necessidade de intervenção manual.
5. Certo. O uso de um número ímpar de nós no algoritmo Paxos ajuda a evitar condições de split-brain, garantindo que sempre haja uma maioria clara para decisões de consenso.

## 7. Bibliografia e Documentação Oficial

- **Heartbeat**: [Linux-HA](http://www.linux-ha.org/wiki/Heartbeat)
- **Pacemaker**: [ClusterLabs](https://clusterlabs.org/pacemaker/)
- **Algoritmos de Consenso**: "Paxos Made Simple" - Lamport, L. (2001)
- **Documentação AWS sobre DR**: [AWS Disaster Recovery](https://aws.amazon.com/disaster-recovery/)
