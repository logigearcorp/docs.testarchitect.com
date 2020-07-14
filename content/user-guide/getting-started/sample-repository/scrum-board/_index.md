--- 
title: "Scrum Board"
linktitle: "Scrum Board"
description: "The Scrum Board application, a part of the TestArchitect's automation sample test suite, is a web application that manages software development based on Scrum methodology."
weight: 4
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Scrum_Board_def.html
keywords: "Scrum Board"
---

The Scrum Board application, a part of the TestArchitect's automation sample test suite, is a web application that manages software development based on Scrum methodology.

After logging into Scrum Board you will see three main display panels: **To Do**, **In Progress**, and **Done**, which correspond to the status of the tasks on the Scrum Board. You can add task cards to the Scrum Board, edit existing task cards, or delete task cards. You can move cards between different panels to change their status. Each task card consists of a title, description, priority, component, estimate, spent, and assignee, and you can update the task’s properties at any time.

Scrum Board supports Internet Explorer, Google Chrome, and Mozilla Firefox web browsers and has both English and Spanish languages.

{{<note>}}

If you'd like to manually launch the Scrum Board sample application and log in to it, perform the following:

1.  Double-click the file index.html, located at:

    -   Windows platform: TA\_INSTALL\_DIR\\samples\\ScrumBoard.
    -   Linux platform: /usr/local/logigear/testarchitect/samples/ScrumBoard.
    {{<restriction>}} macOS platform: Scrum Board is not currently supported on Safari running on macOS.

2.  In the **Username** box, enter John.
3.  In the **Password** box, enter tester.
4.  Click the **Log in** button.

1.  [Preparing web browsers](/user-guide/getting-started/sample-repository/scrum-board/preparing-web-browsers/)  
TestArchitect supports automated testing of web applications on Internet Explorer, Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. Before beginning testing, you must configure the target browser to ensure that TestArchitect Automation Agent \(a browser extension\), TAWebPlugin \(a plug-in\), remote debugging mode, WebDriver, and/or GeckoDriver are installed and enabled.
2.  [Testing Scrum Board](/user-guide/getting-started/sample-repository/scrum-board/testing-scrum-board)  
TestArchitect provides sample test modules that demonstrate automated testing of the Scrum Board web application.



