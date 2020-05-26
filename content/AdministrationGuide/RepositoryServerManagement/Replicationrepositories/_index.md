--- 
title: "Replication repositories"
linktitle: "Replication repositories"
weight: 12
aliases: 
    - /TA_Administration/Topics/Repo_server_management_replication_repo.html
---
# Replication repositories {#replication_repo .concept}

Primary and replication repository relationships, associated configurations, and the synchronization process.

1.  [Introduction to replication repositories](../../TA_Administration/Topics/Repo_server_management_replication_repo_intro.html)  
A replication repository is a mirror copy of a primary repository. Data between a replication repository and its designated primary repository are automatically synchronized and maintained.
2.  [Setting up primary/replication repositories](../../TA_Administration/Topics/adm_Setting_up_primary_replication_repository.html)  
Replication repositories are created during a repository import. This process also establishes a relationship between the primary repository and replication repository.
3.  [Breaking primary-replication relationship](../../TA_Administration/Topics/adm_Removing_primary_repication_repository_main.html)  
In some instances, it may be desirable to break the primary-replication repository relationship.
4.  [Synchronizing data](../../TA_Administration/Topics/adm_Synchronizing_data.html)  
Data synchronization between the primary repository and the replication repository is a two-way process. Each modification to the primary repository is synchronized with the replication repository, and vice-versa.

**Parent topic:**[Repository Server Management](../../TA_Administration/Topics/Repo_server_management.html)

**Previous topic:**[Configuring connection backlog size for a repository server](../../TA_Administration/Topics/Repo_connection_backlog.html)

**Next topic:**[Setting Java heap size](../../TA_Administration/Topics/Repo_setting_heap_size.html)

