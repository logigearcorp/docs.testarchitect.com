--- 
title: "WPF Extensibility overview"
linktitle: "WPF Extensibility overview"
description: "WPF Agent is loaded inside the AUT process when the physical layer needs to obtain information on the running AUT’s controls by the hooking technique."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/WPF_extensibility_techinical_reference_overview.html
keywords: "WPF extensibility, technical reference, overview, technical reference, WPF extensibility, overview"
---

WPF Agent is loaded inside the AUT process when the physical layer needs to obtain information on the running AUT’s controls by the hooking technique.

## Components

WPF agent is divided into three components as follows:

-   Agent core: This is main part of the WPF Extension. Its tasks are to:
    -   manage controls cache,
    -   manage all extensions and load extension handlers,
    -   communicate with TAPM, and
    -   receive requests from TAPM and pass it to a handler which has the responsibility to process and return result.
-   Library:
    -   ExtensionLib contains the interfaces and abstract classes which are implemented on the extension side, such as ITAControlHandler and TAComponentHandlerBase.
    -   UtilitiesLib library exports classes which are able to be reused by extensions. For instance, WPF reflection lib.
-   Extensions: Sets of handlers which support a type of control or overwrite the behavior of available handlers such as WPF Control Support.

    ![](/images/TA_Tutorials/Images/WPF_extensiblity_components.png)


## The Extension Library

It contains interfaces and abstract classes which are implemented on the extension side.

-   Control Handler interface: Each interface defines a set of method which supports a type of TestArchitect's control. For instance:
    -   ITATableHandler supports the table control.
    -   ITAListHandler supports the list box control, etc.

        ![](/images/TA_Tutorials/Images/WPF_extensiblity_extension_library_diagram.png)

    -   GetControlSupportLevel\(Object autObject\) method:
        -   This is key method for each handler and it must be implemented if you want to overwrite the handler for a specific control.
        -   The Agent core passes the AUT runtime object to each handler through this method, and then obtains an integer number; this integer number presents the prioritized level of the handler - larger prioritized number has higher priority.
    -   Control Handler Base:

        ![](/images/TA_Tutorials/Images/WPF_extensiblity_control_handler_base.png)

        -   This is a set of abstract classes without implementing the GetControlSupportLevel method.
        -   Each control base handler implements a handler interface as a distributor. For each method, the base handler will find concrete handler instance which is best for implementing this method and recalling it.
        -   For example: Assume that there are handlers supporting TelerikTable control as follows:

            ![](/images/TA_Tutorials/Images/WPF_extensiblity_TATableHandlerBase.png)

            The figure above illustrates that the TATelerikTableHandler class does not implement the GetColumnCount method, so TATelerikTableHandler::GetColumnCount is TATableHandlerBase::GetColumnCount. On the TATableHandlerBase side, it will use the best handler \(TAStandardTableHandler for the above case\) to support this method.

            We have the following flow code:

            ![](/images/TA_Tutorials/Images/WPF_extensiblity_TATelerikTableHandler_flow_code.png)



