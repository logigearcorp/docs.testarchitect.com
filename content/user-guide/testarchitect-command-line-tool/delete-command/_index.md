--- 
title: "delete command"
linktitle: "delete command"
weight: 1
aliases: 
    - /TA_Help/Topics/TA_command_line_delete.html
---

ta delete is used to remove local test results from the command-line interface.

**Note:** Applies to TestArchitect 8.4 Update 2 and higher

## Syntax

ta delete -rep <repository\> -proj <project\> -u <username\> -p <password\> \[Optional arguments\]

## Arguments

|Argument|Description|
|--------|-----------|
|-?,--help\(Optional\)

|Displays the help information for the delete command|
|-rep\(Required\)

|Specifies the name or ID of the repositoryExample:

-   -rep "SampleRepository"
-   -rep "bkpzf0xoy9ku"

|
|-prj\(Required\)

|Specifies the name or ID of the project.Example:

-   -prj "Car Rental"
-   -prj "10jqmmcsw8"

|
|-u\(Required\)

|Specifies the user name to log in to the repository|
|-p\(Required\)

|Specifies the encrypted password associated with the username.Example: -p "aeteyfghdt13"

**Tip:** you can exact the encrypted password of a given username from a test execution batch file.

|
|-rs\(Optional\)

|Specifies the IP address or machine name of the repository server. Example: -rs "192.168.167.134:53400"

**Note:**

-   The port number must fall within a range of 53400 to 53499
-   The default machine name is localhost and port number is 53400. It means -rs "localhost:53400"

|
|-path\(Optional\)

|Specifies the path \(in the TestArchitect explorer tree\) from the project node to the destination.Example: -path "Results/localresults/Login Validation \(2018-11-22 14.25.53\) - 8088"

**Note:** The default destination is localresults

|
|-rststatus\(Optional\)

|Specifies the statuses with which items will be deleted.Example: -rststatus "Passed, Failed"

**Note:** Unless the argument is specified, TestArchitect will remove items regardless of their status

|
|-older\(Optional\)

|Specifies the numbers of days after which items will be deleted.Example: -older 7

**Note:** Unless the argument is specified, TestArchitect will remove items regardless of their age.

|

**Parent topic:**[TestArchitect command line tool](/TA_Help/Topics/TA_command_line_tool.html)

**Next topic:**[execute command](/TA_Help/Topics/TA_command_line_execute.html)

