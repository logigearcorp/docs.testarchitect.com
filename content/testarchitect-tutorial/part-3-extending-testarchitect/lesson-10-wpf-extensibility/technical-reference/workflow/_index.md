--- 
title: "Workflow"
linktitle: "Workflow"
description: "This section describes workflow activities of the WPF Extensibility."
weight: 2
aliases: 
    - /TA_Tutorials/Topics/WPF_extensibility_techinical_reference_work_flow.html
keywords: "WPF extensibility, technical reference, workflow, technical reference, WPF extensibility, workflow"
---

This section describes workflow activities of the WPF Extensibility.

1.  Loading Extensions, Handlers and Methods:
    -   ExtensionLoader loads all Extensions \(\*.DLL\) in the specified location.
    -   For each Extension, HandlerManager manages all the handlers of the extension.
    -   For each Handler, MethodsStorage:
        -   gets all methods of the extension,
        -   stores methods in methodCache, and
        -   classifies \(mapping\) type of a request with list of methods. When executing a request, MethodsStorage chooses the best method with the highest support level in this list to execute.
2.  Executing a request:
    -   MessageHandler receives a request from TAPM and processes that request. Particularly, MessageHandler:
        -   creates a request,
        -   based on the request, get Method or list of Methods classified when loading extensions,
        -   looks for the method with the highest support level, and
        -   executes this request in its Handler.



