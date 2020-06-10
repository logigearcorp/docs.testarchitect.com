--- 
title: "Troubleshooting power outage-related problems"
linktitle: "Troubleshooting power outage-related problems"
weight: 26
aliases: 
    - /TA_Administration/Topics/adm_troubleshooting_power_blackout.html
---

A discussion of typical issues you may experience after a power outage, and their solutions.

## Repository problems

-   **Unable to connect to a repository**

    **Problem**: A power outage causes data synchronization between a primary and replication repository server to be interrupted. When you attempt to connect to a TestArchitect repository, you receive one of the following error messages:

    -   Case \#1:

        ![](/images//Images/repo_connect_error_1.png)

    -   Case \#2:

        Cannot access repository <name of repository\>. Server: TATCPIPReceiver.receiveData\(\): The TCPIP Receiver received a number of read bytes < 0. In particular, number of read bytes has value is ‘-1’. This means that the socket was timeout or was closed by another thread or remote client. So we break here.

    **Solution**: The repository is corrupted and should be deleted:

    1.  [Stop](/TA_Administration/Topics/Stopping_repository_server.html) the repository server.
    2.  Go to the following location:
        -   Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\RS\\database\\
        -   Linux: /usr/local/logigear/testarchitect/data/rs/database/
        -   macOS: /Application/TestArchitect/data/rs/database/
    3.  Delete the folder containing the corrupted repository.
    4.  [Start](/TA_Administration/Topics/Starting_repository_server.html) the repository server.
-   **Data synchronization no longer works**

    **Problem**: Data synchronization between a primary and replication repository server no longer functions after recovery from a power outage.

    **Solution**: To remedy this problem, do the following:

    1.  [Re-setup](/TA_Administration/Topics/adm_Setting_up_primary_replication_repository.html) the primary/replication repositories.
    2.  Restart the primary and replication repository server machines.

## License Server

**Unable to start TestArchitect License Server**

**Problem**: After a power outage, TestArchitect License Server cannot be started, even though the [**Start**](/TA_Administration/Topics/LS_TA_managing_start_stop.html) button ![](/images//Images/btn.RS_start_repo.png) is enabled on the License Server Control Panel.

**Solution**: Perform a clean installation of the license server:

1.  Uninstall TestArchitect License Server.
2.  Reinstall TestArchitect License Server.

## TestArchitect Client

-   **Unable to start TestArchitect**

    **Problem**: After a power outage, TestArchitect occasionally cannot be launched.

    **Solution**: Perform a clean installation of TestArchitect:

    1.  Uninstall TestArchitect.
    2.  Restart your machine.
    3.  Reinstall TestArchitect.
-   **Unable to show content on a test module editor**

    **Problem**: A power outage occurs during the [check-out process](/TA_Help/Topics/Project_items_checkout.html) of a test module. Upon opening the test module in the editor, the file appears to be empty.

    **Solution**: The data file is most likely corrupt. To resolve this issue:

    1.  In TestArchitect, [disconnect](/TA_Help/Topics/ug_Repository_disconnecting.html) from the repository containing the test module.
    2.  [Reconnect](/TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client_connecting.html) to the repository.

**Parent topic:**[Frequently asked questions](/TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[Unable to use the Interface Viewer's Auto Highlight tool on Android devices](/TA_FAQ/Topics/faq.tshoot.Android_viewer_not_working.html)

**Next topic:**[TestArchitect runs out of memory](/TA_FAQ/Topics/faq.tshoot.TA_out_of_memory.html)

