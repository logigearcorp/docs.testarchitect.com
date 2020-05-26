--- 
title: "export command"
linktitle: "export command"
weight: 3
aliases: 
    - /TA_Help/Topics/TA_command_line_export.html
---
# export command {#TA_command_line_export .reference}

ta export is used to export Test Architect items such as repository, project, test folder, built-in actions, interface entities, test modules/test cases using the command-line interface.

-   A repository, project or test folder will be exported to a folder
-   A built-in action, interface entity, test module or test case will be exported to a csv file

**Note:** Applies to TestArchitect 8.4 Update 3 and higher

## Systax {#section_uzg_3kq_dgb .section}

ta export -rep <repository\> -u <username\> -p <password\>\[Optional arguments\]

## Arguments {#section_vvt_clq_dgb .section}

|Argument|Description|
|--------|-----------|
|-?,--help\(Optional\)

|Displays the help information for the export command|
|-rep\(Required\)

|Specifies the name or ID of the repositoryExample:

-   -rep "SampleRepository"
-   -rep "bkpzf0xoy9ku"

|
|-u\(Required\)

|Specifies the user name to log in to the repository|
|-p\(Required\)

|Specifies the password to log in to the repository.Example: -p "aeteyfghdt13"

**Tip:** you can exact the encrypted password of a given username from a test execution batch file.

|
|-rs\(Optional\)

|Specifies the IP address or machine name of the repository server. Example: -rs 192.168.167.134:53400

**Note:**

-   The port number must fall within a range of 53400 to 53499
-   The default machine name is localhost and port number is 53400.

|
|-prj\(Optional\)

|Specifies the name or ID of the project.Example:

-   -prj "Car Rental"
-   -prj "10jqmmcsw8"

|
|-src\(Optional\)

|Specifies the full path or ID of test module, data set, user-defined action or interface entity to be exportedExample:

-   Test module: -src "/Action-based Testing Basics/Action Based Testing"

|
|-dtn\(Optional\)

|Specifies full path of exported file/folder.**Note:**

-   Unless you defines this argument, TestArchitect will export to the current user's location.
-   If the path includes a file name, this name will be assigned to the exported file; otherwise, the name of the exported file/folder will be derived from that of the original item.
-   Network paths are supported.
-   If the path contains spaces, enclose it in double quotes\(""\).

|
|-tco\(Optional\)

|Determines whether to export either test cases or test modules.

Applicable values:-   yes: Export test cases only.
-   no: \(Default\) Export test modules only.

Example: -tco "yes"

|
|-fld\(Optional\)

|Determines whether to create a folder corresponding to each test module in order to hold its test cases. The folder is named after the corresponding test module.

Applicable values-   yes: Create folders
-   no: \(Default\) Do not create test folders

**Note:** This argument only works if the value of the tco argument is yes

 Example: -fld "yes"|
|-pre\(Optional\)

|Adds text or the value of user-defined field as a prefix to the names of .csv files.**Syntax**:

-   For text prefix: -pre "test"
-   For user-defined field prefix: -pre "<name of a user-defined field\>"

The name of user-defined field must be enclosed by angle brackets \(<\>\).


Example:

-   -pre "test"

Assuming that the name of the test case is TC01. The output would be testTC01.

-   -pre "<Source\>"

Assuming that the value of the **Source** field is sap; the name of the test case is TC01. The output would be sapTC01.


|
|-zip\(Optional\)

|Determines whether the items are exported into a compressed file \(.zip\) or a folder.

Applicable values:-   yes: Export into a compressed file.
-   no: \(Default\) Export into a folder.

Example: -zip "yes"

|
|-o\(Optional\)

|Determines whether to overwrite the file/folder if it already exists.

Applicable values:-   yes: Overwrite
-   no: \(Default\) Do not overwrite

Example: -o "yes"

|

**Parent topic:**[TestArchitect command line tool](../../TA_Help/Topics/TA_command_line_tool.html)

**Previous topic:**[execute command](../../TA_Help/Topics/TA_command_line_execute.html)

