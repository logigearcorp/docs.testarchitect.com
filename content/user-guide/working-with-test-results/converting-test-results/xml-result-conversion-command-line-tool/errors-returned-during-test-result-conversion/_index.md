--- 
title: "Errors returned during test result conversion"
linktitle: "Errors returned during test result conversion"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_results_conversion_error_code.html
---

Explain all errors that might be encountered during XML result conversion.

## Troubleshooting failure status of XML result conversion

The XML result log file tracks all conversion processes. It can be helpful in interpreting events and problems.

To open and view the XML result log file, go the location below. This location, established during TestArchitect installation, defaults to the following:

-   Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\RS\\logging
-   Linux: /usr/local/logigear/testarchitect/data/rs/logging
-   macOS: /Application/TestArchitect/data/rs/logging

The XML result conversion tool creates a single log file for each repository. Each log file's name consists of:

1.  Result status including Pass or Fail;

    **Note:** If no status is prefixed the log file's name, user authentication fails.

2.  ConvertResultXML;
3.  testModuleName;
4.  conversion timestamp, in the format: \(yyyy-mm-dd hh.nn.ss\), where nn=minutes;
5.  process id of the test module's run, received from the OS.

For example: \[Pass\]ConvertResultXML\_Sperry\_MaxSurvey\_2016\_12\_28\_09\_41\_57\_941

|Error code|Message|Description|
|----------|-------|-----------|
|`0x88104001L`|Unable to convert test results, since the given .DAT *<itemID\>* file could not be found in the repository server. Error details: File path is null or empty.|This happens because the folder\(s\) containing source file\(s\) do not exist.|
|Unable to convert test results, since the given .DAT *<itemID\>* file could not be found in the repository server. Error details: The result file is missing|This error is commonly encountered because source file\(s\) do not exist.|
|Unable to convert test results, since the given .DAT *<itemID\>* file could not be found in the repository server. Error details: The file path *<filePath\>* is not found on repository.|Often caused when the folder\(s\) containing source file\(s\) do not exist.|
|`0x88104003L`|Unable to convert test results, since the given zip .DAT \[%1\] failed. Error details: Cannot unzip file *<filePath\>*

|An attempt to extract source file\(s\) was not successful.|
|`0x88104004L`|Unable to convert test results, since checksum could not be updated in the repository server.

|This issue might happen when XML result files are corrupted.|
|`0x88104008L`|Unable to convert test result ID *<resultID\>* to XML format. Error detail: Input result\(s\) is null or empty.|This error is commonly encountered when source file\(s\) no longer exist.|
|Unable to convert test result ID *<resultID\>* to XML format. Error details: XML result is null, please get the .DAT file at <resultPath\>.|This error happens when XML result files could not be generated. Please double-check the original result file at the given location.|
|Unable to convert test result ID *<resultID\>* to XML format. Error detaisl: Cannot zip the file <resultPath\>.|After converting test results into XML, the XML files will be compressed. This issue might occur when your hard drive does not have enough space.|
|Unable to convert test result ID *<resultID\>* to XML format. Error details: <detailedException\>.|An error not recognized by TestArchitect has been returned from XML Result Conversion, the tool which TestArchitect calls to perform the XML conversion. The exception thrown by the tool is displayed in the message.|
|`0x88104009L`|Conversion of test results into XML format is not supported for result files of TestArchitect versions earlier than 7.3.|You will not be able to convert test result belonging to TestArchitect versions earlier than [7.3](/TA_ReleaseNotes/DITA_source/Whats_New_7.3.html) into XML.|
|`0x8810400AL`|Unable to convert the test result. Error details: *<detailedException\>*.|An error not recognized by TestArchitect has been returned from XML Result Conversion, the tool which TestArchitect calls to perform the XML conversion. The exception thrown by the tool is displayed in the message.|
|`0x8810400BL`|Unable to export test result\(s\). Error details: *<detailedException\>*.|Your machine is running out of memory. Please close unnecessary programs to free up memory, and then try again.|

**Parent topic:**[XML Result Conversion command line tool](/TA_Help/Topics/ug_XML_result_conversion_tool.html)

**Previous topic:**[Running ConvertResults command \(XML Result Conversion tool\)](/TA_Help/Topics/ug_XML_result_conversion_tool_example.html)

