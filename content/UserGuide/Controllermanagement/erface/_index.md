--- 
title: "Starting TestArchitect Controller from a command line interface"
linktitle: "Starting TestArchitect Controller from a command line interface"
weight: 3
aliases: 
    - /TA_Help/Topics/Controller_starting_from_CLI.html
---
# Starting TestArchitect Controller from a command line interface {#Controller_starting_from_CLI .reference}

you are able to start TestArchitect Controller with a new port from a command line interface using either TAController or TACTRL command.

## TAController vs TACTRL {#section_enw_hsl_ggb .section}

The usage of both commands is to launch TestArchitect Controller. They are placed in the same location:

-   On Windows: <TA\_INSTALL\_DIR\>\\controller.
-   On Linux: /usr/local/logigear/testarchitect/controller.
-   On macOS: /Applications/TestArchitect/controller

**Warning:** When you run either of the commands, all the running harnesses will be terminated.

A sharp distinction between the two commands is their behavior towards the console prompt. Upon a successful execution, the TAController command will return the console prompt. On contrary, upon a successful execution, the TACTRL command will keep the console prompt. Therefore, TAController, not TACTRL, suits CI/CD testing.

## Using the TAController command {#section_uk4_44l_ggb .section}

1.  Launch a command line.
2.  Browse to the folder where the TAController command is located.
3.  Run the following command:

    -   On Windows: TAController.exe \[-port <port\_number\>\]

        For example, TAController.exe -port "53632"

    -   On Linux: TAController.sh \[-port <port\_number\>\]
    -   On macOS: TAController.sh \[-port <port\_number\>\]
    Where -port: assigns a port number to TestArchitect Controller.

    **Remember:** The port number of TestArchitect Controller must fall within a range of 53600 to 53699.


## Using the TACTRL command {#section_ekx_jrl_ggb .section}

1.  Launch a command line.
2.  Browse to the folder where the TACTRL command is located.
3.  Run the following command:

    -   On Windows: TACTRL.exe \[-port <port\_number\>\]

        For example, TACTRL.exe -port "53641"

    -   On Linux: TACTRL.sh \[-port <port\_number\>\]
    -   On macOS: TACTRL.sh \[-port <port\_number\>\]
    Where -port: assigns a port number to TestArchitect Controller.

    **Remember:** The port number of TestArchitect Controller must fall within a range of 53600 to 53699.


**Parent topic:**[Controller management](../../TA_Help/Topics/Controller_management.html)

**Previous topic:**[Starting TestArchitect Controller](../../TA_Help/Topics/Controller_starting.html)

**Next topic:**[Changing a TestArchitect Controller port number](../../TA_Help/Topics/Controller_changing_port.html)

