--- 
title: "Connection retry configuration"
linktitle: "Connection retry configuration"
weight: 1
aliases: 
    - /TA_Administration/Topics/Connection_retry_configuration.html
---
# Connection retry configuration {#Connection_retry_configuration .reference}

TestArchitect allows you to set the number of attempts for a failed connection which a TA component establishes to another component. For example, the TestArchitect Controller connects to a TestArchitect repository.

**Note:** Applies to TestArchitect 8.4 Update 2 and higher

## TestArchitect Controller {#section_q2s_jdb_yfb .section}

The procedure below describes how to define the number of connection retries for the TestArchitect Controller.

1.  Exit the TestArchitect Controller if it is running.
2.  Open the abt.ini file in the following location with a text editor:
    -   On Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\controller.
    -   On Linux: /usr/local/logigear/testarchitect/data/controller.
    -   On MacOS: Applications/TestArchitect/data/controller.
3.  Find connect retries parameter and change its value to the desired number.

    **Note:** The default number is 50

4.  Save the file.

**Parent topic:**[Connections](../../TA_Administration/Topics/Connections.html)

