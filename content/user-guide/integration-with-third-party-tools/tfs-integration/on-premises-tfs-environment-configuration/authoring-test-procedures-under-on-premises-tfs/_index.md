--- 
title: "Authoring test procedures under Team Foundation Server"
linktitle: "Authoring test procedures under on-premises TFS"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_set_up_TA.html
---

This section describes how to set up a TestArchitect project to allow for tests to be managed and exchanged with TFS. With your TA project integrated with TFS-MTM, you can import TFS test cases and test suites into TA and, conversely, upload TA test cases, test modules and test folders into TFS.

**Note:** To set up TestArchitect to allow for tests to be run from MTM, and/or have test results uploaded to TFS, see [Running automated tests under on-premises Team Foundation Server](/TA_Help/Topics/ug_MTM_test_execution.html).

1.  [Team Foundation Server-Microsoft Test Manager prerequisites for TestArchitect](/TA_Help/Topics/ug_MTM_test_development_prerequisites.html)  
This section describes the requirements for setting up TestArchitect to develop tests in a TFS-MTM environment.
2.  [Configuring TestArchitect for a Team Foundation Server® connection](/TA_Help/Topics/Integration_MTM_connecting_TFS.html)  
Establish a connection between TestArchitect and the Team Foundation Server \(TFS\) using an external tool provided by TestArchitect. \(Note that activating a connection to TFS automatically deactivates connections to other external tools such as HP Quality Center.\)
3.  [Mapping a TestArchitect project to a Team Foundation Server project](/TA_Help/Topics/Integration_MTM_map_proj.html)  
Mapping a TA project to TFS team project allows you to upload test results to TFS.
4.  [Importing TFS test cases to TA](/TA_Help/Topics/ug_MTM_import_TC.html)  
Test cases residing on TFS may be imported into TestArchitect, establishing one-to-one mappings between the two sets of test cases.
5.  [Importing Team Foundation Server test suites to TestArchitect](/TA_Help/Topics/ug_MTM_import_TS.html)  
Just as TFS test cases may be imported, test suites residing in TFS may be also imported into TestArchitect.
6.  [Uploading TestArchitect test modules/test cases to Team Foundation Server](/TA_Help/Topics/ug_upload_TAtest_MTM.html)  
TestArchitect test cases and test modules can be uploaded to the TFS server, which also establishes one-to-one mappings between the two sets of test cases.

**Parent topic:**[Setting up the integration environment for on-premises Team Foundation Server](/TA_Help/Topics/ug_MTM_setting_up_environment.html)

**Previous topic:**[Installing and configuring Microsoft components for on-premises Team Foundation Server](/TA_Help/Topics/ug_MTM_configuration.html)

**Next topic:**[Running automated tests under on-premises Team Foundation Server](/TA_Help/Topics/ug_MTM_test_execution.html)

