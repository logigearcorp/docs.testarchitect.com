--- 
title: "Configuring connection backlog size for a repository server"
linktitle: "Configuring connection backlog size for a repository server"
weight: 11
aliases: 
    - /TA_Administration/Topics/Repo_connection_backlog.html
---

TestArchitect enables you to specify the maximum size of the queue used for holding pending connections to a repository server

**Note:** Applies to TestArchitect 8.4 Update 2 and higher

1.  Exit the repository server if it is running.

2.  Open the abt.ini file in the following location with a text editor:

    -   On Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\RS.
    -   On Linux: /usr/local/logigear/testarchitect/data/rs.
    -   On MacOS: Applications/TestArchitect/data/rs.
3.  Find the connection backlog size parameter and change its value to the desired number.

    **Note:**

    -   The default value is 50.
    -   In case you utilize TA Queue to submit jobs, the value of 1000 is recommended.
4.  Save the file


**Parent topic:**[Repository Server Management](/TA_Administration/Topics/Repo_server_management.html)

**Previous topic:**[Changing repository server port number](/TA_Administration/Topics/Repo_changing_port.html)

**Next topic:**[Replication repositories](/TA_Administration/Topics/Repo_server_management_replication_repo.html)

