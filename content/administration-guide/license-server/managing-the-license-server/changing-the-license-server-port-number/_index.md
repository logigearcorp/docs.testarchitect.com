--- 
title: "Changing the license server port number"
linktitle: "Changing the license server port number"
weight: 2
aliases: 
    - TA_Administration/Topics/LS_TA_managing_changing_port.html
---

You can change the connection port on which a license server listens and grants license connection requests.

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  Select **Change Port…** from the **Tools** menu.

    The License Server - Communication Port dialog box appears:

    ![](/images/TA_Administration/Images/licenseserver_14.png)

    **Tip:** The **Use Default Port** button is enabled if the current port number is not the default port number.

3.  In the **New Communication Port** text field, enter a new port number, or, if available, click the **Use Default port** button to use the default port number.

4.  Click **OK**.


**Parent topic:**[Managing the license server](../../TA_Administration/Topics/LS_TA_managing_license_server.md)

**Previous topic:**[Starting and stopping the server](../../TA_Administration/Topics/LS_TA_managing_start_stop.md)

**Next topic:**[Creating a redundant license server](../../TA_Administration/Topics/LS_TA_managing_creating_redundant_license.md)

**Related information**  


[Default port numbers and port ranges](../../TA_Administration/Topics/adm_port_number_port_ranges.md)

