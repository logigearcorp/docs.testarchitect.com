--- 
title: "Supported API methods in ITAExecution.cs"
linktitle: "Supported API methods"
weight: 4
aliases: 
    - /TA_Help/Topics/ug_TA_TFS_Extensibility_APIs.html
---
# Supported API methods in ITAExecution.cs {#reference_ws4_wty_zbb .reference}

Lists supported API methods in ITAExecution.cs

The following table lists API methods of the ITAExecution.cs class.

This interface contains behaviors that are invoked to get or set execution information of TA.

|Name|Description|Parameter|Returned value|
|----|-----------|---------|--------------|
|ExecutionInfo\(\)|Get or set the current test execution environment.|A collection of key/value pairs:

-   Key: Name of the execution parameter in the dictionary.
-   Value: Value of the parameter in the dictionary.

|A dictionary containing all specified settings for the execution environment.|
|Save\(\)|Save the execution environment.|None|-   1 if successful;
-   0 if unsuccessful.

|
|FormatResultFilterString\(\)|List of result types to be uploaded|A comma-delimited list of TestResultType arguments. \{passed, failed, etc.\}|A formatted string used for selecting results to be uploaded.|

**Parent topic:**[TestArchitect-Team Foundation Server Extensibility](../../TA_Help/Topics/ug_MTM_Extensibility.html)

**Previous topic:**[How to declare customized extensibility methods](../../TA_Help/Topics/ug_TA_TFS_Extensibility_declaration.html)

**Next topic:**[Supported constant values in TAExecutionConstant.cs](../../TA_Help/Topics/ug_TA_TFS_Extensibility_constants.html)

