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
|-?,--help\(Optional\)<br>|Displays the help information for the delete command|
|-rep\(Required\)<br>|Specifies the name or ID of the repositoryExample:<br>-   -rep "SampleRepository"<br>-   -rep "bkpzf0xoy9ku"<br><br>|
|-prj\(Required\)<br>|Specifies the name or ID of the project.Example:<br>-   -prj "Car Rental"<br>-   -prj "10jqmmcsw8"<br><br>|
|-u\(Required\)<br>|Specifies the user name to log in to the repository|
|-p\(Required\)<br>|Specifies the encrypted password associated with the username.Example: -p "aeteyfghdt13"<br>**Tip:** you can exact the encrypted password of a given username from a test execution batch file.<br><br>|
|-rs\(Optional\)<br>|Specifies the IP address or machine name of the repository server. Example: -rs "192.168.167.134:53400"<br>**Note:**<br><br>-   The port number must fall within a range of 53400 to 53499<br>-   The default machine name is localhost and port number is 53400. It means -rs "localhost:53400"<br><br>|
|-path\(Optional\)<br>|Specifies the path \(in the TestArchitect explorer tree\) from the project node to the destination.Example: -path "Results/localresults/Login Validation \(2018-11-22 14.25.53\) - 8088"<br>**Note:** The default destination is localresults<br><br>|
|-rststatus\(Optional\)<br>|Specifies the statuses with which items will be deleted.Example: -rststatus "Passed, Failed"<br>**Note:** Unless the argument is specified, TestArchitect will remove items regardless of their status<br><br>|
|-older\(Optional\)<br>|Specifies the numbers of days after which items will be deleted.Example: -older 7<br>**Note:** Unless the argument is specified, TestArchitect will remove items regardless of their age.<br><br>|

**Parent topic:**[TestArchitect command line tool](/TA_Help/Topics/TA_command_line_tool.html)

**Next topic:**[execute command](/TA_Help/Topics/TA_command_line_execute.html)

