--- 
title: "Supported constant values in TAExecutionConstant.cs"
linktitle: "Supported constant values"
weight: 5
aliases: 
    - /TA_Help/Topics/ug_TA_TFS_Extensibility_constants.html
---
# Supported constant values in TAExecutionConstant.cs {#reference_s3y_wty_zbb .reference}

Lists constant values of the TAExecutionConstant.cs class.

## Supported constant values in TAExecutionConstant.cs {#section_chr_bzy_zbb .section}

The following table lists constant values of the TAExecutionConstant.cs class. This class contains the constants that are used for the TAExecution object.

|Function|Constant name|Description|
|--------|-------------|-----------|
|Specifying TestArchitect's general information.This function corresponds to the [TestArchitect Information](ug_TestArchitect_execution_dialog.md#li_TA.Information.panel) panel in the TestArchitect Execution dialog box.

|LicenseServer|License server hostname or IP address|
|LicensePort|License server port|
|TrialKey|License trial key|
|RepositoryServer|Repository server hostname or IP address|
|RepositoryName|Repository name|
|RepositoryPort|Repository port|
|UserName|Repository user name to log in with|
|Password|Password to log in with|
|ProjectName|Project name|
|Specifying remote controllers and physical/cloud mobile devices.This function corresponds to the [Controllers/Devices](ug_TestArchitect_execution_dialog.md#li.Controller_Devices_panel) panel in the TestArchitect Execution dialog box.

|RemoteHost|Remote hostname or IP address|
|RemoteHostPort|Remote host port|
|Device|Physical mobile devices to run the tests|
|DesiredCapabilitiesFile|The JSON file containing desired capabilities to specify the target cloud providers.|
|Specifying the variations to be executedThis function corresponds to the [Variation Specification](ug_TestArchitect_execution_dialog.md#li_Variation.panel) panel in the TestArchitect Execution dialog box.

|Keyword|Keyword variation\(s\)|
|Version|AUT version\(s\)|
|TimeTravellingMode|-   Determine whether time traveling execution is selected? \([Learn more](ug_time_traveling.html).\)
-   Possible values:
    -   Yes/True or
    -   No/False

|
|TimeTravelling|The specified historical snapshot of the test's project items for execution|
|Configuring the capturing of screenshots of [UI-Interacting actions](../../TA_Automation/Topics/timing_classifying_actions.html) \([learn more](ug_Screenshot_recording.html).\)

 This function corresponds to the [Screenshot recording](ug_TestArchitect_execution_dialog.md#li_Screenshot.recording) panel in the TestArchitect Execution dialog box.

|ScreenRecordingMode|Determine whether screenshots of UI-Interacting actions are captured during test execution?-   Possible values:
    -   Yes/True or
    -   No/False

|
|ScreenRecordingNumberOfKeptInteraction|The number of preceding screenshot sets that are to be retained for each qualified event.|
|ScreenRecordingPassed|-   Specify the **Passed** event of the test for which associated screenshots are to be retained.
-   Possible values:
    -   Yes/True or
    -   No/False

|
|ScreenRecordingWarning|-   Specify the Warning/Error events of the test for which associated screenshots are to be retained.
-   Possible values:
    -   Yes/True or
    -   No/False

|
|ScreenRecordingFailed|-   Specify the Failed events of the test for which associated screenshots are to be retained.
-   Possible values:
    -   Yes/True or
    -   No/False

|
|Exporting test results to .TARESULTThis function corresponds to the [Export Result\(s\) to TARESULT](ug_TestArchitect_execution_dialog.md#li_Export.results.TARESULT) panel in the TestArchitect Execution dialog box.

|ExportResultToTAResult|-   Determine whether test results are exported as .TARESULT files to a specified location?
-   Possible values:
    -   Yes/True or
    -   No/False

|
|ExportResultToTAResultPath|Location to store the exported .TARESULT files.**Remember:** A path must start with an @ character.

|
|IncludeAllSubTestResultsForTAResult|-   Export all the master result, which is a [test suite result](ug_test_results_introduction.md#section.TS_results) or contains [subresults](ug_test_results_introduction.md#section.Subresults), and its subresults to .TARESULT format.
-   Possible values:
    -   Yes/True or
    -   No/False

|
|IncludeScreenshotsForTAResult|Include all captured [screenshots](ug_Screenshot_recording.html) in the exported .TARESULT files.|
|Exporting test results to .HTML This function corresponds to the [Export Result\(s\) to HTML](ug_TestArchitect_execution_dialog.md#li_Export.results.HTML) panel in the TestArchitect Execution dialog box.

|ExportResultToHtml|-   Export test results to .HTML files to a specified location?
-   Possible values:
    -   Yes/True or
    -   No/False

|
|ExportResultToHtmlPath|Location to store the exported .HTML files.**Remember:** A path must start with an @ character.

|
|CreateFolderStructure|-   Select whether folder structure or flat structure directory is created to store HTML results?
-   Possible values:
    -   0: Flat structure, that is, TestArchitect does not create subdirectories. There is a single top-level directory that contains all the HTML results.
    -   1: Folder structure, that is, TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.

|
|IncludeAllSubTestResults|-   Export all the master result, which is a [test suite result](ug_test_results_introduction.md#section.TS_results) or contains [subresults](ug_test_results_introduction.md#section.Subresults), and its subresults to .HTML format.
-   Possible values:
    -   Yes/True or
    -   No/False

|
|IncludeScreenShotsForHTML|-   Retain all [captured screenshots](ug_Screenshot_recording.html) in the exported HTML test result?
-   Possible values:
    -   0: Do not export captured screenshots.
    -   1: Screenshots are exported as thumbnail images to save space in the HTML results.
    -   2: Screenshots are exported in their original, full size resolution.

|
|ApplyCustomizedXsltForHTML|-   Determine whether the test results are exported as .HTML files with your own view layout?
-   Possible values:
    -   Yes/True or
    -   No/False

|
|XslTForHTMLPath|Location of your customized XSLT template.**Remember:** A path must start with an @ character.

|
|Exporting test results to .XML This function corresponds to the [Export result\(s\) to XML detail](ug_TestArchitect_execution_dialog.md#li_Export.results_XML) panel in the TestArchitect Execution dialog box.

|ExportResultToXmlDetail|-   Determine whether the test results are exported as .XML files to a specified location?
-   Possible values:
    -   Yes/True or
    -   No/False

|
|ExportResultToXmlPath|Location to store the exported .XML files.**Remember:** A path must start with an @ character.

|
|Exporting test results to .xUnit. Specifically, exporting results to a XML file automatically in xUnit-format for integrating into the [continuous integration tools](Integration_xUnit.html). This function corresponds to the [Export result\(s\) to xUnit](ug_TestArchitect_execution_dialog.md#li_Export.results.xUnit) panel in the TestArchitect Execution dialog box.

|ExportResultToXunit|-   Export test results to .XML files which conform to the xUnit format to a specified location?
-   Possible values:
    -   Yes/True or
    -   No/False

|
|ExportResultToXunitPath|Location to store the exported .XML files in xUnit format.**Remember:** A path must start with an @ character.

|
|Including screenshots in the results attached to TFS.This function corresponds to the [Include screenshots](ug_TestArchitect_execution_dialog.md#li_Include.scrn) panel in the TestArchitect Execution dialog box.

|IncludeScreenShots|-   Retain all [captured screenshots](ug_Screenshot_recording.html) in the results?
-   Possible values:
    -   0: Do not export captured screenshots.
    -   1: Screenshots are exported as thumbnail images to save space.
    -   2: Screenshots are exported in their original, full size resolution.

|
|Uploading test results as attachments to TFSThis function corresponds to the [Upload attachment\(s\) to Team Foundation Server](ug_TestArchitect_execution_dialog.md#li_TFS) panel in the TestArchitect Execution dialog box.

|IsUploadByTfsResultConditions|-   Upload attachments to TFS? \([Learn more](ug_MTM_upload_result_automatic.md#step.Upload_attachement_MTM).\)
-   Possible values:
    -   Yes/True or
    -   No/False

|
|UploadByTfsResultConditions|-   List of TFS test result types that accept the attachment. \([Learn more](ug_MTM_upload_result_automatic.md#step.Conditional_upload_results).\)
-   Possible values:
    -   Passed,
    -   Failed, or
    -   Inconclusive

 **Tip:** Use commas \(,\) as delimiters between possible values.

|
|UploadResultToTfsType|-   Format for test result to be added to TFS. \([Learn more](ug_MTM_upload_result_automatic.md#step.Max_size).\)
-   Possible values:

    -   HTML,
    -   ZIP, or
    -   AUTO.
**Note:** The AUTO option uploads the result as a ZIP file if the file exceeds a given size, specified in the UploadResultToTfsAutoZipSize constant below. Otherwise, the result is uploaded as an .HTML file.


|
|UploadResultToTfsAutoZipSize|Minimum size of test results to be compressed as ZIP automatically. \([Learn more](ug_MTM_upload_result_automatic.md#step.Max_size).\)|
|ApplyCustomizedXsltForTfs| |
|XslTForTfsPath|**Remember:** A path must start with an @ character.

|
|UseTestIDForUploadedResults|-   Decide whether TFS test ID is used to name the TA test results uploaded to TFS?
-   Possible values:
    -   Yes/True or
    -   No/False

|
|Storing local test results in the repository automatically.This function corresponds to the [Automatically add result\(s\) to repository](ug_TestArchitect_execution_dialog.md#li_auto.add_repo) panel in the TestArchitect Execution dialog box.

|AddResultMode|-   Automatically add test results to repository? \([Learn more](Test_result_storing_automatically.html).\)
-   Possible values:
    -   Yes/True or
    -   No/False

|
|ResultRepository|Destination on repository to store test results to. \([Learn more](Test_result_storing_automatically.md#step.Repo_location).\)|
|ByResult|-   List of result types to add to the repository. \([Learn more](Test_result_storing_automatically.md#step.Result_types).\)
-   Possible values:
    -   Passed,
    -   Passed with Warnings/Errors,
    -   Failed, or
    -   Passed with known bug

 **Tip:** Use commas \(,\) as delimiters between possible values.

|
|Startup settings|StartupSettingsMode|-   Enable startup setting? \([Learn more](../../TA_Automation/Topics/aut_startup_settings.html).\)
-   Possible values:
    -   Yes/True or
    -   No/False

|
|StartupSettings|List of startup setting\(s\). \([Learn more](../../TA_Automation/Topics/aut_startup_settings.html).\)|
|Configuring automation tools.This function corresponds to the [Automation Tools](ug_TestArchitect_execution_dialog.md#li_Automation.tools) panel in the TestArchitect Execution dialog box.

|TestTool|Name of the test playback tool.|
|TestScript|Path to a script for the test playback tool. For example: \{INSTALL\_DIR\}\\BinClient\\taplayback.exe

**Remember:** A path must start with an @ character.

|
|TestCMD|Execution command line to run test automation with a customized harness program.

 For example: \{INSTALL\_DIR\}\\BinClient\\taplayback.exe

**Remember:** A path must start with an @ character.

|
|TestPath|The executable application's path to run the test. For example: c:/Python27/python.exe

**Remember:** A path must start with an @ character.

|
|[Stopping tests on timeout](../../TA_Automation/Topics/aut_stop_tests_after_timeout.html)|AbortRemainingTestCases|-   Determine whether the remaining test cases are also aborted when the test run is aborted.
-   Possible values:
    -   Yes/True: When the duration of a test run reaches its timeout value, the test run is aborted instantly, even if some test cases have not been run.
    -   No/False: When the duration of an individual test case reaches its timeout value, the execution of that test stops. The test run continues with the subsequent test cases.
-   Applies to TestArchitect [8.3 Update 4](../../TA_Automation/Topics/../../TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3_update_4.html) and higher.

|

**Parent topic:**[TestArchitect-Team Foundation Server Extensibility](../../TA_Help/Topics/ug_MTM_Extensibility.html)

**Previous topic:**[Supported API methods in ITAExecution.cs](../../TA_Help/Topics/ug_TA_TFS_Extensibility_APIs.html)

**Next topic:**[Workflow example of using TA-TFS Extensibility](../../TA_Help/Topics/ug_TA_TFS_Extensibility_examples.html)

