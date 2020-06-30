--- 
title: "Configuring connection backlog size for a repository server"
linktitle: "Configuring connection backlog size for a repository server"
description: "TestArchitect enables you to specify the maximum size of the queue used for holding pending connections to a repository server"
weight: 11
aliases: 
    - /TA_Administration/Topics/Repo_connection_backlog.html
keywords: "configuration, connection retry, connect retries"
---

TestArchitect enables you to specify the maximum size of the queue used for holding pending connections to a repository server

{{<note>}} Applies to TestArchitect 8.4 Update 2 and higher

1.  Exit the repository server if it is running.

2.  Open the abt.ini file in the following location with a text editor:

    -   On Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\RS.
    -   On Linux: /usr/local/logigear/testarchitect/data/rs.
    -   On MacOS: Applications/TestArchitect/data/rs.
3.  Find the connection backlog size parameter and change its value to the desired number.

    {{<note>}}

    -   The default value is 50.
    -   In case you utilize TA Queue to submit jobs, the value of 1000 is recommended.
4.  Save the file





