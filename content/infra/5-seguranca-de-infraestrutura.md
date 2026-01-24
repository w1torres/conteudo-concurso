---
title: "5. Segurança de Infraestrutura"
date: 2026-01-24T20:19:06.623Z
---

# 5. Segurança de Infraestrutura

## 1. Especificações Técnicas e Arquitetura

- **Hardening**: Refere-se ao processo de tornar um sistema mais seguro através da redução de sua superfície de ataque, desabilitando serviços desnecessários, configurando adequadamente os restantes, e aplicando patches e atualizações de segurança.
- **Firewalls (NGFW - Next-Generation Firewall)**: Dispositivos de segurança de rede que vão além das capacidades dos firewalls tradicionais, incorporando funcionalidades como inspeção profunda de pacotes (DPI), prevenção contra invasões (IPS), e filtragem de aplicativos.
- **IDS/IPS (Sistema de Detecção/Prevenção de Intrusão)**: Soluções de segurança que monitoram o tráfego de rede para detectar e/ou prevenir atividades maliciosas.
- **Proxies**: Servidores que atuam como intermediários para requisições de recursos por parte de um cliente, buscando recursos de outro servidor.
- **NAC (Network Access Control)**: Tecnologia que permite apenas dispositivos autorizados e em conformidade com a política de segurança a acessarem a rede.
- **VPNs (Virtual Private Networks)**: Tecnologias que criam um canal seguro sobre uma rede insegura, como a Internet, utilizando protocolos como SSL/TLS.
- **SSL/TLS (Secure Sockets Layer / Transport Layer Security)**: Protocolos de segurança que fornecem comunicações seguras por uma rede de computadores.
- **PKI (Public Key Infrastructure)**: Conjunto de políticas, hardware, software e procedimentos necessários para criar, gerenciar, distribuir, usar, armazenar e revogar certificados digitais.
- **Segmentação de Rede**: Prática de dividir uma rede em sub-redes menores para melhorar o desempenho e a segurança.

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **Hardening**: Inclui a desativação de protocolos inseguros (como SSLv3, TLS 1.0), remoção de contas de usuário desnecessárias, e a aplicação de princípios de menor privilégio.
- **NGFW**: Utiliza a identificação de aplicativos para permitir ou bloquear tráfego, independentemente da porta ou protocolo.
- **IDS/IPS**: O IPS é colocado in-line para bloquear tráfego malicioso identificado, enquanto o IDS opera em modo de detecção, gerando alertas.
- **Proxies**: Podem ser transparentes ou não-transparentes, afetando como os clientes configuram suas conexões.
- **NAC**: Pode integrar-se com soluções de gerenciamento de identidade para fornecer controle de acesso baseado em função.
- **VPNs**: O uso de SSL/TLS para VPNs é comumente referido como SSL VPN.
- **SSL/TLS**: A negociação de uma sessão SSL/TLS envolve um handshake que estabelece parâmetros criptográficos.
- **PKI**: Envolve o uso de uma Autoridade Certificadora (CA) para emitir certificados digitais.
- **Segmentação de Rede**: Pode ser realizada através de VLANs, ACLs, ou firewalls para controlar o tráfego entre sub-redes.

## 3. Implementação e Operação (O "Mão na Massa")

### Comandos/Scripts:

- **Hardening de SSH em Linux**:
  ```bash
  # Desativar login como root
  echo "PermitRootLogin no" >> /etc/ssh/sshd_config
  # Desativar autenticação baseada em senha
  echo "PasswordAuthentication no" >> /etc/ssh/sshd_config
  systemctl restart sshd
  ```

### Protocolos e Regras:

- **Handshake TLS**:
  1. Cliente envia um "ClientHello" com versões de TLS suportadas, métodos de criptografia, etc.
  2. Servidor responde com um "ServerHello", escolhendo a criptografia.
  3. Troca de chaves e estabelecimento de sessão segura.

### Exemplos de Output/Logs:

- **Logs de IDS**:
  ```
  ALERT: "ET SCAN Suspicious inbound to MSSQL port 1433"
  ```

### Contexto TCU:

- A aplicação de hardening é fundamental para a segurança de infraestrutura em órgãos governamentais, seguindo diretrizes do TCU para minimizar vulnerabilidades.
- NGFWs são recomendados para proteger a rede contra ameaças avançadas, com o TCU enfatizando a importância da inspeção profunda de pacotes.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

- A CEBRASPE pode apresentar afirmações que misturam conceitos de IDS e IPS, testando a compreensão do candidato sobre a diferença entre detecção e prevenção.
- Questões sobre SSL/TLS podem tentar confundir com versões obsoletas e inseguras, como SSLv3.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras                   | O que faz/O que valida                  | Observação Técnica                           |
|-----------------------------------|-----------------------------------------|---------------------------------------------|
| `PermitRootLogin no`              | Desativa login SSH como root            | Hardening essencial para segurança          |
| Handshake TLS                     | Estabelece sessão segura                | Importante para VPNs e comunicações seguras |
| `ET SCAN Suspicious inbound`      | Alerta de IDS para tráfego suspeito     | Identificação de possíveis ataques         |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(C)** A desativação de protocolos inseguros, como SSLv3 e TLS 1.0, é uma prática recomendada no processo de hardening.
2. **(E)** Um IDS é colocado in-line no fluxo de tráfego para bloquear ativamente tráfego malicioso identificado.
3. **(C)** NGFWs diferem dos firewalls tradicionais por incorporarem funcionalidades como inspeção profunda de pacotes e prevenção contra invasões.
4. **(E)** VPNs que utilizam SSL/TLS são comumente referidas como IPSec VPNs.
5. **(C)** A segmentação de rede pode ser efetivamente realizada através do uso de VLANs, ACLs, ou firewalls.

## 7. Bibliografia e Documentação Oficial

- RFC 5246 - The Transport Layer Security (TLS) Protocol Version 1.2
- Documentação oficial do OpenSSL para configuração de TLS: https://www.openssl.org/
- Manual de boas práticas de segurança para hardening de sistemas operacionais: https://www.cisecurity.org/
- Documentação oficial NGFW da Cisco: https://www.cisco.com/
- Normativos e manuais do TCU sobre auditoria e governança de TI: https://portal.tcu.gov.br/
