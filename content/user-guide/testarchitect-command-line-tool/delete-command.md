--- 
title: "delete command"
linktitle: "delete command"
description: "ta delete is used to remove local test results from the command-line interface."
weight: 1
aliases: 
    - /TA_Help/Topics/TA_command_line_delete.html
keywords: "test results, delete, delete items using command line tool"
---

ta delete is used to remove local test results from the command-line interface.

{{<note>}} Applies to TestArchitect 8.4 Update 2 and higher

## Syntax

ta delete -rep <repository\> -proj <project\> -u <username\> -p <password\> \[Optional arguments\]

## Arguments

|Argument|Description|
|--------|-----------|
|-?,--help\(Optional\)<br><br>|Displays the help information for the delete command|<br>
|-rep\(Required\)<br><br>|Specifies the name or ID of the repositoryExample:<br><br>-   -rep "SampleRepository"<br>-   -rep "bkpzf0xoy9ku"<br><br>|<br>
|-prj\(Required\)<br><br>|Specifies the name or ID of the project.Example:<br><br>-   -prj "Car Rental"<br>-   -prj "10jqmmcsw8"<br><br>|<br>
|-u\(Required\)<br><br>|Specifies the user name to log in to the repository|<br>
|-p\(Required\)<br><br>|Specifies the encrypted password associated with the username.Example: -p "aeteyfghdt13"<br><br>{{<tip>}} you can exact the encrypted password of a given username from a test execution batch file.<br><br>|<br>
|-rs\(Optional\)<br><br>|Specifies the IP address or machine name of the repository server. Example: -rs "192.168.167.134:53400"<br><br>{{<note>}}<br><br>-   The port number must fall within a range of 53400 to 53499<br>-   The default machine name is localhost and port number is 53400. It means -rs "localhost:53400"<br><br>|<br>
|-path\(Optional\)<br><br>|Specifies the path \(in the TestArchitect explorer tree\) from the project node to the destination.Example: -path "Results/localresults/Login Validation \(2018-11-22 14.25.53\) - 8088"<br><br>{{<note>}} The default destination is localresults<br><br>|<br>
|-rststatus\(Optional\)<br><br>|Specifies the statuses with which items will be deleted.Example: -rststatus "Passed, Failed"<br><br>{{<note>}} Unless the argument is specified, TestArchitect will remove items regardless of their status<br><br>|<br>
|-older\(Optional\)<br><br>|Specifies the numbers of days after which items will be deleted.Example: -older 7<br><br>{{<note>}} Unless the argument is specified, TestArchitect will remove items regardless of their age.<br><br>|<br>



