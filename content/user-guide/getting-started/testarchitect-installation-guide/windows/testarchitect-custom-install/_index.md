--- 
title: "TestArchitect Custom Install"
linktitle: "TestArchitect Custom Install"
weight: 2
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/inst_TA_Windows_custom_install.html
---

The Custom Install option allows you to choose the components you wish to install, and select other options.

To perform a custom installation of TestArchitect, follow these steps:

1.  On the Installation Options dialog box, select the Custom Install option, and then click **Next**.

    The Select Components dialog box appears, allowing you to choose what components of TestArchitect are to be installed. If the check box next to a component is selected, that component is installed during this process. Conversely, if the check box is cleared, that component is not installed.

    ![](/images//Images/install_TA_Windows_5.png)

2.  Click **Next** to continue with the installation.

3.  In the Configuration dialog box, use the **Browse** buttons to choose the program and data locations for TestArchitect. Alternatively, just accept the default locations.

    ![](/images//Images/install_TA_Windows_6.png)

4.  Click **Next**.

5.  If you have installed TestArchitect previously, a confirmation message appears asking whether you wish to replace the sample repository named SampleRepository.

    -   Click **Yes** to replace your existing SampleRepository with a fresh copy, thus losing any changes or additions you may have made.
    -   Click **No** if you wish to continue working with your existing sample repository.
    ![](/images//Images/install_TA_Windows_7.png)

    The Create desktop shortcuts dialog box allows you to choose which components of TestArchitect are to have shortcuts available on your computer desktop.

    ![](/images//Images/install_TA_Windows_8.png)

6.  Click **Next** to continue with the installation.

    The Installation Summary dialog box appears.

    ![](/images//Images/install_TA_Windows_9.png)

    The installation settings which you have selected \(or accepted\) are displayed in the **Current Settings** text box as follows:

    -   The path to the TestArchitect executable.
    -   The path to TestArchitect's data directory.
    -   The components to be installed.
7.  Click **Install** to begin the installation process.

    A message box appears to display the tasks being performed, along with a progress bar presenting the installation's degree of completion.

8.  In the Server Configuration dialog box, you may choose between two types of accounts under which the repository server is to be started.

    ![](/../TA_Administration/Topics//images//Images/changing_user_account.png)

    -   Local System Account: \(Default\) A predefined local account used by the service control manager. This account has privileges on the local computer, acts as the computer on the network, but might have limited network access rights \([Learn more](https://msdn.microsoft.com/en-us/library/windows/desktop/ms684190(v=vs.85).aspx).\)
    -   This account: Specify a local user account, or a domain user account. Ensure that the account belongs to the administrator group of the given machine to allow the Repository Server service to start successfully.

        **Note:**

        -   A local user account has the following name format: ".\\username"\). For example:

            ![](/../TA_Administration/Topics//images//Images/change_local_user_account.png)

        -   A domain user account has two possible name formats: the distinguished name of the user object in the directory, and the "<domain\>\\<username\>". For example:

            ![](/../TA_Administration/Topics//images//Images/change_domain_user_account_installation_2.png)

            ![](/../TA_Administration/Topics//images//Images/change_domain_user_account_installation.png)

        -   Password: Type in the appropriate password for the account provided.
9.  Click **Next**.

    Upon completion, the TestArchitect Installation Complete dialog box appears.

    ![](/images//Images/install_TA_Windows_4.png)

    Using the check boxes of this dialog box, you may opt to launch TestArchitect immediately and/or open the TestArchitect Quick Start Guide.

10. Click **Finish**.

    TestArchitect setup is complete.


**Parent topic:**[Installing TestArchitect on Windows](/../TA_InstallationGuide/DITA_source/Topics/inst_TA_Windows.html)

**Previous topic:**[TestArchitect Quick Install](/../TA_InstallationGuide/DITA_source/Topics/inst_TA_Windows_quick_install.html)

