--- 
title: "Configuring user-defined help"
linktitle: "Configuring user-defined help"
weight: 1
aliases: 
    - /TA_Help/Topics/Additional_features_Help_extensibility_configuration.html
---

To make use of Help-system extensibility for custom actions, you must modify the mapping file user\_defined\_help.ini, along with the corresponding commands.

By default, the file user\_defined\_help.ini is installed to the following directory when TestArchitect is installed:

-   Windows: C:/Users/Public/LogiGear/TestArchitect
-   Linux:/usr/local/logigear/testarchitect/data
-   macOS: /Applications/TestArchitect/data

**Tip:** During installation, the location of user\_defined\_help.ini can be modified in the TestArchitect Installation dialog box. Following installation, the location can also be modified using [TestArchitect Preferences](/TA_Help/Topics/Additional_features_preferences.html).

![](/images//Images/installer_1.png)

The mapping file contains pairs of custom actions and their corresponding commands. The command for each custom action varies based on your operating system. The command conventions are as follows:

-   Windows: `<custom_action> = start + <absolute _path_to_HTML_page>`. For example:
    -   check login = start D:\\data\_folder\\check\_login.html
-   Linux: `<custom_action> = xdg-open + <absolute _path_to_HTML_page>`. For example:
    -   check login\[Linux\] = xdg-open /usr/data\_folder/check\_login.html
-   macOS: `<custom_action> = open + <absolute _path_to_HTML_page>`. For example:
    -   check login\[MAC\] = open /Users/John.Doe/Desktop/data\_folder/check\_login.html

**Tip:**

-   In user\_defined\_help.ini, the pound sign \(\#\) is used for commenting-out purposes.
-   To include whitespace characters on Linux or macOS, place a backslash \(\\\) before each whitespace. For example:
    -   check login\[Linux\] = xdg-open /usr/data\\ folder/check\\ login.html
-   TestArchitect also supports both standard quotation marks and single quotation marks for path locations. For example:
    -   check login\[MAC\] = open "/Users/John.Doe/Desktop/data\_folder/check\_login.html"
    -   check login\[MAC\] = open '/Users/John.Doe/Desktop/data\_folder/check\_login.html'

**Parent topic:**[Help system extensibility](/TA_Help/Topics/Additional_features_Help_extensibility.html)

**Next topic:**[Displaying action descriptions](/TA_Help/Topics/Additional_features_Help_extensibility_sensitive_help.html)

