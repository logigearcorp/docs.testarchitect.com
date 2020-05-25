--- 
title: "Installing the Quality Center add-in"
linktitle: "Installing the Quality Center add-in"
aliases: 
    - /TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_1.5.html
---
# Installing the Quality Center add-in {#QC_installing_plugin .task}

Interoperability between a TestArchitect project and HP Quality Center requires that the TestArchitect repository server hosting the project have the HP ALM Connectivity Add-in installed.

Contact your systems administrator if you are not certain whether the machine hosting your TestArchitect repository already has the HP ALM Connectivity Add-in installed. If it does not, and you are authorized to install to that machine, or the repository resides on your local machine, carry out the instructions that follow.

**Note:** Be sure to install the correct HP ALM Connectivity Add-in for the version of Quality Center that you are interfacing with. Upgrades of Quality Center should be accompanied by a reinstallation of the add-in on any TestArchitect clients.

**Note:** The HP ALM Connectivity Add-in is provided and supported by HP. Please note that the following instructions for locating and installing the add-in are offered for your convenience. They specifically apply to Quality Center version 12.00, and are not guaranteed to be accurate for other versions of Quality Center. For definitive guidance, please refer to the instructions provided by HP, available with your product.

1.  In a browser supported by your version of Quality Center, navigate to the URL of the Quality Center server in your organization.

    **Note:** The HP Quality Center server supports a limited number of browsers. Specifically, versions 11 and 12 of Quality Center support Internet Explorer versions 8 thru 10. To ensure that you have the most recent information on Quality Center support for browsers, operating systems, hardware, etc., please refer to [HP's system requirement guide](https://hpln.hp.com/page/alm-qc-enterprise-technical-specifications). \(Note that Quality Center limitations on browser clients have no bearing on which browsers may be used as target platforms for TestArchitect automated testing.\)

    ![](../Images/QC_install_addin.01.png)

2.  Click the **Tools** link.

3.  In the Application Lifecycle Management - Tools window, click **HP ALM Connectivity**.

4.  In the next window, click **Download HP ALM Connectivity**.

5.  When offered the option to either run or save the file, choose **Save** or **Save As**, and save the file, TDConnect.exe, to a location of your choice.

6.  Navigate to the directory containing the downloaded file TDConnect.exe.

    -   If your repository exists on your own computer, double click the file to run it.
    -   If the repository exists on another computer, transfer the file to it, and run it from that machine.
    After a few seconds, a confirmation should appear indicating that installation is complete.


**Parent topic:**[Setting up the connection with Quality Center](../../TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server.html)

**Next topic:**[Configuring the Quality Center connection](../../TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_1.html)

