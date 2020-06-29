--- 
title: "HP Quality Center"
linktitle: "HP Quality Center"
description: "TestArchitect's Quality Center integration solution allows for test designs to be seamlessly imported from Quality Center, and for tests and test results to be uploaded to it, minimizing the manual workload."
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_QC_intro.html
keywords: "Quality Center, integration, HP Quality Center"
---

Many organizations rely on HP Quality Center to design test plans and track test results. TestArchitect's Quality Center integration solution allows for test designs to be seamlessly imported from Quality Center, and for tests and test results to be uploaded to it, minimizing the manual workload.

The integration approach involves establishing a connection between a TestArchitect repository and a Quality Center database. First, the connection must be activated. TestArchitect then communicates with the Quality Center server using Quality Center's Open Test API \(OTA\).

In general terms, data integration between a project in TestArchitect and its counterpart in Quality Center involves the following two processes:

1.  One-time setup:
    -   [Connecting a TestArchitect repository to a Quality Center server](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/configuring-the-quality-center-connection).
    -   [Mapping a TestArchitect project to a Quality Center project.](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/mapping-a-testarchitect-project-to-a-quality-center-project)
2.  Continuous workflow
    -   [Importing Quality Center test cases to the TestArchitect repository.](/user-guide/integration-with-third-party-tools/hp-quality-center/features/importing-quality-center-tests-into-a-testarchitect-test-module/)
    -   [Uploading TestArchitect test modules to the Quality Center server.](/user-guide/integration-with-third-party-tools/hp-quality-center/features/uploading-testarchitect-test-modules-test-cases-to-quality-center/)
    -   [Configuring Quality Center to allow it to direct TestArchitect, to run tests, and then executing tests from Quality Center.](/user-guide/integration-with-third-party-tools/hp-quality-center/features/executing-tests-from-quality-center)

{{<note>}} The HP Quality Center server supports a limited number of browsers. Specifically, versions 11 and 12 of Quality Center support Internet Explorer versions 8 thru 10. To ensure that you have the most recent information on Quality Center support for browsers, operating systems, hardware, etc., please refer to [HP's system requirement guide](https://hpln.hp.com/page/alm-qc-enterprise-technical-specifications). \(Note that Quality Center limitations on browser clients have no bearing on which browsers may be used as target platforms for TestArchitect automated testing.\)

1.  [Configuring integration with HP Quality Center](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/)  
The following topics cover the establishment and termination of a connection between TestArchitect and HP Quality Center.
2.  [Features](/user-guide/integration-with-third-party-tools/hp-quality-center/features/)  
A discussion of the key functionalities of TestArchitect and Quality Center integration.




**Related information**  


[Default port numbers and port ranges](/administration-guide/default-port-numbers-and-port-ranges)

