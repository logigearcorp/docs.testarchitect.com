--- 
title: "export command"
linktitle: "export command"
weight: 3
aliases: 
    - /TA_Help/Topics/TA_command_line_export.html
---

ta export is used to export Test Architect items such as repository, project, test folder, built-in actions, interface entities, test modules/test cases using the command-line interface.

-   A repository, project or test folder will be exported to a folder
-   A built-in action, interface entity, test module or test case will be exported to a csv file

**Note:** Applies to TestArchitect 8.4 Update 3 and higher

## Systax

ta export -rep <repository\> -u <username\> -p <password\>\[Optional arguments\]

## Arguments

|Argument|Description|
|--------|-----------|
|-?,--help\(Optional\)<br>|Displays the help information for the export command|
|-rep\(Required\)<br>|Specifies the name or ID of the repositoryExample:<br>-   -rep "SampleRepository"<br>-   -rep "bkpzf0xoy9ku"<br><br>|
|-u\(Required\)<br>|Specifies the user name to log in to the repository|
|-p\(Required\)<br>|Specifies the password to log in to the repository.Example: -p "aeteyfghdt13"<br>**Tip:** you can exact the encrypted password of a given username from a test execution batch file.<br><br>|
|-rs\(Optional\)<br>|Specifies the IP address or machine name of the repository server. Example: -rs 192.168.167.134:53400<br>**Note:**<br><br>-   The port number must fall within a range of 53400 to 53499<br>-   The default machine name is localhost and port number is 53400.<br><br>|
|-prj\(Optional\)<br>|Specifies the name or ID of the project.Example:<br>-   -prj "Car Rental"<br>-   -prj "10jqmmcsw8"<br><br>|
|-src\(Optional\)<br>|Specifies the full path or ID of test module, data set, user-defined action or interface entity to be exportedExample:<br>-   Test module: -src "/Action-based Testing Basics/Action Based Testing"<br><br>|
|-dtn\(Optional\)<br>|Specifies full path of exported file/folder.**Note:**<br>-   Unless you defines this argument, TestArchitect will export to the current user's location.<br>-   If the path includes a file name, this name will be assigned to the exported file; otherwise, the name of the exported file/folder will be derived from that of the original item.<br>-   Network paths are supported.<br>-   If the path contains spaces, enclose it in double quotes\(""\).<br><br>|
|-tco\(Optional\)<br>|Determines whether to export either test cases or test modules.<br>Applicable values:-   yes: Export test cases only.<br>-   no: \(Default\) Export test modules only.<br><br>Example: -tco "yes"<br><br>|
|-fld\(Optional\)<br>|Determines whether to create a folder corresponding to each test module in order to hold its test cases. The folder is named after the corresponding test module.<br>Applicable values-   yes: Create folders<br>-   no: \(Default\) Do not create test folders<br><br>**Note:** This argument only works if the value of the tco argument is yes<br><br> Example: -fld "yes"|
|-pre\(Optional\)<br>|Adds text or the value of user-defined field as a prefix to the names of .csv files.**Syntax**:<br>-   For text prefix: -pre "test"<br>-   For user-defined field prefix: -pre "<name of a user-defined field\>"<br><br>The name of user-defined field must be enclosed by angle brackets \(<\>\).<br><br><br>Example:<br><br>-   -pre "test"<br><br>Assuming that the name of the test case is TC01. The output would be testTC01.<br><br>-   -pre "<Source\>"<br><br>Assuming that the value of the **Source** field is sap; the name of the test case is TC01. The output would be sapTC01.<br><br><br>|
|-zip\(Optional\)<br>|Determines whether the items are exported into a compressed file \(.zip\) or a folder.<br>Applicable values:-   yes: Export into a compressed file.<br>-   no: \(Default\) Export into a folder.<br><br>Example: -zip "yes"<br><br>|
|-o\(Optional\)<br>|Determines whether to overwrite the file/folder if it already exists.<br>Applicable values:-   yes: Overwrite<br>-   no: \(Default\) Do not overwrite<br><br>Example: -o "yes"<br><br>|

**Parent topic:**[TestArchitect command line tool](/TA_Help/Topics/TA_command_line_tool.html)

**Previous topic:**[execute command](/TA_Help/Topics/TA_command_line_execute.html)

