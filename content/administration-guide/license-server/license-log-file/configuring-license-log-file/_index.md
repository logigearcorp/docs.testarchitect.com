--- 
title: "Configuring license log file"
linktitle: "Configuring license log file"
description: "How to configure the number of retained license log files."
weight: 1
aliases: 
    - /TA_Administration/Topics/adm_License_server_log_file_configuration.html
keywords: "licenses, log file entry, configuration, log file entry, licenses, configuration"
---

How to configure the number of retained license log files.

TestArchitect starts a new license log file every month. It retains as many of the past log files as you specify. To configure the number of retained license log files, carry out the following steps:

1.  Using your favorite text editor, open the setting file abt.ini. This file, created during TestArchitect License Server installation, defaults to the following locations:

    -   Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\LicenseServer\\abt.ini
    -   Linux: /usr/local/logigear/testarchitect/data/ls/abt.ini
    -   macOS: Note that the TestArchitect License Server is not currently supported on macOS.
2.  Set the value of retained license log files to specify the number of log files to keep.

    ![](/images/TA_Administration/Images/config_license_log_files.png)

    3 is the default value, meaning that TestArchitect stores the most recent three log files, corresponding to the most recent three months.

    {{<remember>}}

    -   Valid values are in the range of 1 to 12.
    -   A value of 0 or less deactivates the logging mechanism. That is, it tells TestArchitect License Server not to log license-related transactions.
    -   A value greater than 12 is treated as a value of 12. TestArchitect License Server does not store log files for longer than 12 months.


