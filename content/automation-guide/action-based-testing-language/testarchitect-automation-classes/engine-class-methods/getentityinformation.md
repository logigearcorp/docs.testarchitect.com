--- 
title: "getEntityInformation"
linktitle: "getEntityInformation"
description: "Syntax string GetEntityInformation(string itemID) Description Return metadata information of a project item specified by an item ID. Parameters itemID Project item ID. (See Notes below.) Return Value ..."
weight: 45
aliases: 
    - /TA_Automation/Topics/abtf_getEntityInformation.html
keywords: "ABT Library Functions, getEntityInformation, getEntityInformation (ABT library function)"
---

## {{< expand >}} Syntax

`string GetEntityInformation(string itemID)`

## {{< expand >}} Description

Return metadata information of a project item specified by an item ID.

## {{< expand >}} Parameters

-   **itemID**

    Project item ID. \(See **Notes** below.\)


## {{< expand >}} Return Value

A string value containing JSON data. The returned string includes all possible values of the specified project item, such as name, location, status, recent result, url, assigned user, and priority. \(See **Notes** below.\)

## {{< expand >}} Notes

-   For a project item, you have the option of obtaining the item ID from within your [user-scripted action](/user-guide/support/glossary-of-terms/action-user-scripted), using the TestArchitect Engine class method [getCurrentEntityID\(\)](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/getcurrententityid).
-   Since the returned string value is JSON-compliant, it is highly recommended that you parse this string to a JSON object. You may then use TestArchitect's [Assign](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/assign) method to get the individual values of the returned JSON object. \(See example below.\)

## {{< expand >}} Example

Let's say you want your user-scripted action to retrieve the **Location** field of the current test module. The test module's ID may first be obtained from [getCurrentEntityID\(\)](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/getcurrententityid). Subsequently, you would pass the ID to the GetEntityInformation\(\) method, which returns a JSON-structured string. Parse this string and use TestArchitect's [Assign\(\)](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/assign) method with a key value of “location” to obtain **Location** value.

The code for this example for each of the Python, and C\# harnesses is presented below. Note that, for the Python script, the location value is assigned to a variable named \_location; in the case of the C\# scripts, that variable has the name entLocation.

**For Python harness**: Your snippet of code might resemble the following:

```
#Get ID of the test module
tmID = LIBRARY.getCurrentEntityID("testmodule")

#Get metadata information
tmInformation = LIBRARY.GetEntityInformation(tmID)

#Parse the JSON object
tmInformation = json.loads(tmInformation)

#Get values of **Location** field
LIBRARY.Assign(_location, tmInformation["location"])
```



**For C\# harness**: Your snippet of code might resemble the following:

```
//Get ID of the test module
string tmID = Interpreter.AbtLibrary.getCurrentEntityID("testmodule");

//Get metadata information
string entityInfo = Interpreter.AbtLibrary.GetEntityInformation(tmID);

//Parse the JSON object
Dictionary<string, object> entObject = fastJSON.JSON.Parse(entityInfo) as Dictionary<string, object>;
            
foreach (var entField in entObject)
{
   string value = entField.Value != null ? (string) entField.Value:"";
                
   if (entField.Key.Equals("location"))
      Interpreter.AbtLibrary.Assign(entLocation, value);
}
```




