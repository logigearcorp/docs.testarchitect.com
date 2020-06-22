--- 
title: "Supported API methods in ITAExecution.cs"
linktitle: "Supported API methods in ITAExecution.cs"
description: "Lists supported API methods in ITAExecution.cs"
weight: 4
aliases: 
    - /TA_Help/Topics/ug_TA_TFS_Extensibility_APIs.html
keywords: "integration, TFS, APIs, Team Foundation Server"
---

Lists supported API methods in ITAExecution.cs

The following table lists API methods of the ITAExecution.cs class.

This interface contains behaviors that are invoked to get or set execution information of TA.

|Name|Description|Parameter|Returned value|
|----|-----------|---------|--------------|
|ExecutionInfo\(\)|Get or set the current test execution environment.|A collection of key/value pairs:<br><br>-   Key: Name of the execution parameter in the dictionary.<br>-   Value: Value of the parameter in the dictionary.<br><br>|A dictionary containing all specified settings for the execution environment.|<br>
|Save\(\)|Save the execution environment.|None|-   1 if successful;<br>-   0 if unsuccessful.<br><br>|<br>
|FormatResultFilterString\(\)|List of result types to be uploaded|A comma-delimited list of TestResultType arguments. \{passed, failed, etc.\}|A formatted string used for selecting results to be uploaded.|




