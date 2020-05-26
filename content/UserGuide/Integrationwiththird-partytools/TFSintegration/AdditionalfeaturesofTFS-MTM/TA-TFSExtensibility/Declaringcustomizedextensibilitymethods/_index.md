--- 
title: "How to declare customized extensibility methods"
linktitle: "Declaring customized extensibility methods"
weight: 3
aliases: 
    - /TA_Help/Topics/ug_TA_TFS_Extensibility_declaration.html
---
# How to declare customized extensibility methods {#reference_nfp_kyy_zbb .reference}

This topic describes about ways to declare customized extensibility methods.

All the customized extensibility methods above must be declared within the TAIntegrationExtensibility class in accordance with the Attribute Method technique.\([Learn more](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/).\)

**Note:** By default, some of the supported extensibility methods above, such as ClassInitialized\(\), ClassCleaning\(\), and TestInitialized\(\), are automatically generated in advance in the TAIntegrationExtensibility class, for your ease of use.

The following example depicts declarations of two methods:

-   the extensibility ClassInitialized\(\) method. Any code appearing within the curly brackets is invoked right after the ClassInitialize\(\) method is executed, and
-   the extensibility ClassCleaning\(\) method. Any code appearing within the curly brackets is invoked right before the ClassCleanup\(\) method is executed.

```
/// <summary>
/// Code to be run after ClassInitialize
/// </summary>        
[TAExtensibilityMethod(LoaderConstant.ClassInitialized)]
 public void ClassInitialized(TAExecutionArguments args)
{
   //Code implementation						
}


/// <summary>
/// Code to be run before ClassCleanup
/// </summary>
[TAExtensibilityMethod(LoaderConstant.ClassCleaning)]
public void ClassCleaning(TAExecutionArguments args)
{
    //Code implementation
}
```

**Parent topic:**[TestArchitect-Team Foundation Server Extensibility](../../TA_Help/Topics/ug_MTM_Extensibility.html)

**Previous topic:**[Supported extensibility methods offered by TAIntegrationExtensibility.cs](../../TA_Help/Topics/ug_TA_TFS_Extensibility_supported_methods.html)

**Next topic:**[Supported API methods in ITAExecution.cs](../../TA_Help/Topics/ug_TA_TFS_Extensibility_APIs.html)

