---
title: "2. Plataformas e Serviços"
date: 2026-01-24T20:34:04.387Z
---

# 2. Plataformas e Serviços

## 1. Especificações Técnicas e Arquitetura

AWS, Microsoft Azure e Google Cloud Platform (GCP) são as principais plataformas de computação em nuvem, oferecendo uma ampla gama de serviços que permitem a execução de aplicações e o armazenamento de dados na nuvem. Cada uma dessas plataformas tem sua própria arquitetura, conjunto de serviços e modelo de gerenciamento.

- **AWS:** Amazon Web Services oferece serviços como EC2 para computação, S3 para armazenamento, e RDS para bancos de dados. Utiliza a AWS Management Console para gerenciamento.
  
- **Azure:** Microsoft Azure fornece serviços como Virtual Machines, Azure SQL Database, e Blob Storage. Gerenciado através do Azure Portal.
  
- **GCP:** Google Cloud Platform disponibiliza serviços como Compute Engine, Cloud Storage e BigQuery. Usa o Google Cloud Console para gerenciamento.

## 2. Detalhamento Técnico Avançado (Deep Dive)

### AWS
- **EC2:** Permite escalar capacidade computacional usando virtualização. 
- **S3:** Armazenamento de objetos com alta disponibilidade e durabilidade.
- **RDS:** Serviço de banco de dados relacional que facilita configuração, operação e escalabilidade.

### Azure
- **Virtual Machines:** Para implementação de servidores virtuais.
- **Azure SQL Database:** Banco de dados como serviço baseado no SQL Server.
- **Blob Storage:** Armazenamento de objetos para grandes quantidades de dados não estruturados.

### GCP
- **Compute Engine:** VMs que rodam em data centers do Google.
- **Cloud Storage:** Armazenamento de objetos altamente escalável.
- **BigQuery:** Armazenamento de dados para análise em larga escala.

## 3. Implementação e Operação (O "Mão na Massa")

### AWS CLI
```bash
# Criar uma instância EC2
aws ec2 run-instances --image-id ami-0abcdef1234567890 --count 1 --instance-type t2.micro

# Listar buckets S3
aws s3 ls

# Criar um banco de dados RDS PostgreSQL
aws rds create-db-instance --db-instance-identifier MeuPostgres --db-instance-class db.t2.micro --engine postgres --allocated-storage 20 --master-username admin --master-user-password senha123
```

### Azure CLI
```bash
# Criar uma VM
az vm create --resource-group MeuGrupoDeRecursos --name MinhaVM --image UbuntuLTS --generate-ssh-keys

# Criar um banco de dados SQL
az sql db create --resource-group MeuGrupoDeRecursos --server meuServidor --name MeuBancoDeDados --service-objective S0

# Criar um container no Blob Storage
az storage container create --account-name minhaconta --name meucontainer
```

### GCP CLI (gcloud)
```bash
# Criar uma VM no Compute Engine
gcloud compute instances create minha-vm --zone us-central1-a

# Criar um bucket no Cloud Storage
gsutil mb gs://meu-bucket

# Carregar dados para o BigQuery
bq load --source_format=CSV meu_dataset.minha_tabela gs://meu-bucket/arquivo.csv
```

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE costuma cobrar o entendimento prático dos serviços em nuvem, focando em comandos específicos e suas sintaxes. É comum encontrar questões que testam o conhecimento sobre a seleção correta do serviço para determinado cenário, além de pegadinhas relacionadas à nomenclatura e funcionalidades específicas de cada plataforma.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comando/Regra                     | O que faz/O que valida                  | Observação Técnica importante para a prova |
|-----------------------------------|-----------------------------------------|---------------------------------------------|
| `aws ec2 run-instances`           | Cria uma instância EC2 na AWS           | Verificar a AMI e o tipo de instância      |
| `az vm create`                    | Cria uma VM no Azure                    | Necessário grupo de recursos e imagem       |
| `gcloud compute instances create` | Cria uma VM no GCP                      | Zona deve ser especificada                  |
| `aws s3 ls`                       | Lista buckets S3                        | Comando básico de listagem no S3            |
| `az storage container create`     | Cria um container no Azure Blob Storage | Conta de armazenamento necessária           |
| `gsutil mb`                       | Cria um bucket no Cloud Storage         | Prefixo gs:// é obrigatório                 |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. O comando `aws rds create-db-instance` permite especificar o tipo de instância para um banco de dados não relacional no AWS RDS. (Errado)
2. No Azure, o comando `az sql db create` pode ser utilizado para criar uma instância de banco de dados SQL Server, incluindo a definição do tamanho do serviço. (Certo)
3. O GCP não oferece um serviço equivalente ao AWS S3 e Azure Blob Storage para armazenamento de objetos. (Errado)
4. Utilizar o comando `gsutil mb` sem o prefixo `gs://` é válido para criar um bucket no Google Cloud Storage. (Errado)
5. A criação de uma máquina virtual no Azure requer, obrigatoriamente, a geração de chaves SSH através do comando `az vm create`. (Errado)

## 7. Bibliografia e Documentação Oficial

- AWS CLI Command Reference: https://awscli.amazonaws.com/v2/documentation/api/latest/reference/index.html
- Azure CLI Documentation: https://docs.microsoft.com/en-us/cli/azure/
- Google Cloud CLI (gcloud) Reference: https://cloud.google.com/sdk/gcloud/reference
- Documentação oficial AWS: https://docs.aws.amazon.com/
- Documentação oficial Azure: https://docs.microsoft.com/en-us/azure/
- Documentação oficial GCP: https://cloud.google.com/docs
