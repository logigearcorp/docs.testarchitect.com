--- 
title: "Introduction to replication repositories"
linktitle: "Introduction to replication repositories"
weight: 1
aliases: 
    - TA_Administration/Topics/Repo_server_management_replication_repo_intro.html
---

A replication repository is a mirror copy of a primary repository. Data between a replication repository and its designated primary repository are automatically synchronized and maintained.

A primary repository may have multiple replication repositories associated with it, while a replication repository only corresponds to a single primary repository.

The primary/replication-repository architecture offers two advantages: high visibility and speed.

In a large or medium-scale test setup, multiple controllers may be set to run unattended tests over night. If all controllers rely on a single repository and that repository server fails or goes offline, testing stops. With a primary/replication-repository configuration, the replication server monitors the health and availability of the primary repository, and takes over if it detects any problems. All controllers are redirected to a replication server automatically.

In an outsourcing arrangement, tests may be developed by different teams in different regions. Having a single repository server for all teams to work from can introduce latency issues. One solution is to transfer the repository using the Repository Server Control Panel's import/export functions, and let each team work from a local copy of the primary repository. Frequent changes to tests and data sets may make this solution undesirable, however. And frequent manual export/import is both inefficient and error-prone.

A primary/replication-repository configuration offers a better solution: Each team has a local repository server that is a replication of the primary repository. Data can be synchronized between the primary and replication repositories, so all team members can work off of their local repositories as if they are working from the same repository.

The significant functions related to primary/replication-repositories are:

-   **Establishing a repository as a replication repository**: Importing a repository to create a replication repository.
-   **Synchronizing data**: The synchronization process between primary and replication repositories is a two-way process. Each modification made on the primary repository is synchronized with the replication repository, and vice-versa.
-   **Breaking a primary/replication-repository relationship**: There are two categories of disconnections:
    -   Removing a replication repository from a primary/replication-repository relationship
    -   Removing a primary repository from a primary/replication-repository relationship

**Parent topic:**[Replication repositories](../../TA_Administration/Topics/Repo_server_management_replication_repo.md)

**Next topic:**[Setting up primary/replication repositories](../../TA_Administration/Topics/adm_Setting_up_primary_replication_repository.md)

