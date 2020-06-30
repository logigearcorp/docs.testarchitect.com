--- 
title: "Supported extensibility methods offered by TAIntegrationExtensibility.cs"
linktitle: "Supported extensibility methods offered by TAIntegrationExtensibility.cs"
description: "Lists the extensibility methods exposed by the TAIntegrationExtensibility.cs class."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_TA_TFS_Extensibility_supported_methods.html
keywords: "integration, TFS, extensibility methods, extensibility methods, Team Foundation Server, TAIntegrationExtensibility"
---

Lists the extensibility methods exposed by the TAIntegrationExtensibility.cs class.

|No|Method|Order of invocation|
|--|------|-------------------|
|1|ClassInitializing\(\)|When applied, this method is invoked before execution of the [ClassInitialize\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.classinitializeattribute.aspx) method.\*|
|2|ClassInitialized\(\)|When applied, this method is invoked after execution of the [ClassInitialize\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.classinitializeattribute.aspx) method.\*|
|3|ClassCleaning\(\)|When applied, this method is invoked before execution of the [ClassCleanup\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.classcleanupattribute.aspx) method.\*|
|4|ClassCleaned\(\)|When applied, this method is invoked after execution of the [ClassCleanup\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.classcleanupattribute.aspx) method.\*|
|5|TestInitializing\(\)|When applied, this method is invoked before execution of the [TestInitialize\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.testinitializeattribute.aspx) method.\*|
|6|TestInitialized\(\)|When applied, this method is invoked after execution of the [TestInitialize\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.testinitializeattribute.aspx) method.\*|
|7|TestCleaning\(\)|When applied, this method is invoked before execution of the [TestCleanup\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.testcleanupattribute.aspx) method.\*|
|8|TestCleaned\(\)|When applied, this method is invoked after execution of the [TestCleanup\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.testcleanupattribute.aspx) method.\*|
|9|RunTestCaseInitialize\(\)|When applied, this method is invoked before execution of the [RunTestCase\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.testmethodattribute.aspx) method.\*|
|10|RunTestCaseCleanup\(\)|When applied, this method is invoked after execution of the [RunTestCase\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.testmethodattribute.aspx) method.\*|
|11|AssemblyInitializing\(\)|When applied, this method is invoked before execution of the [AssemblyInitialize\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.assemblyinitializeattribute.aspx) method.\*|
|12|AssemblyInitialized\(\)|When applied, this method is invoked after execution of the [AssemblyInitialize\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.assemblyinitializeattribute.aspx) method.\*|
|13|AssemblyCleaning\(\)|When applied, this method is invoked before execution of the [AssemblyCleanup\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.assemblycleanupattribute.aspx) method.\*|
|14|AssemblyCleaned\(\)|When applied, this method is invoked after execution of the [AssemblyCleanup\(\)](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.assemblycleanupattribute.aspx) method.\*|

{{<note>}} \* ClassInitialize\(\), ClassCleanup\(\), TestInitialize\(\), TestCleanup\(\), RunTestCase\(\), AssemblyInitialize\(\), and AssemblyCleanup\(\) are all built-in methods, and are generated once you successfully associate TestArchitect test cases with TFS test cases \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/associating-ta-and-tfs-test-cases).\)

![](/images/TA_Help/Images/ug_MTM_TAIntegrationExtensibility_3.png)




