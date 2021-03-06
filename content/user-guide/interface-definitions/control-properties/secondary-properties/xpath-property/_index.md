--- 
title: "XPath property"
linktitle: "XPath property"
weight: 8
aliases: 
    - /TA_Help/Topics/prop_xpath.html
---

TestArchitect uses a special TA property, called XPath and derived from the XPath language, to uniquely locate UI controls within tested web applications. [XPath](https://www.w3schools.com/xml/xpath_syntax.asp) is the query language used for searching XML documents, which are hierarchical representations of data. Similarly, TestArchitect depicts the UI controls running on web applications as a hierarchical representation of elements and provides the XPath TA property for each control to uniquely identify it within that hierarchy.

**Important:** In identifying a control within an application, TestArchitect normally allows for any combination of valid TA properties \(and their respective values\) to be specified. The XPath property is an exception. When it is used to identify a control \(such as in an [interface element](/TA_Glossary/Topics/glossaryInterfaceElement.html) or [dynamic identifier](/TA_Glossary/Topics/glossaryDynamicIdentifier.html)\), no other property-value pairs may accompany it.

## Applicable platforms

The XPath TA property is currently available on the following platforms:

-   [Desktop web applications](/TA_Automation/Topics/Web_automation.html), including:
    -   Internet Explorer
    -   Mozilla Firefox
    -   Google Chrome
    -   Safari
    -   Microsoft Edge
-   [Mobile web applications](/TA_Automation/Topics/aut_app_testing_mobile_web.html), including:
    -   Safari on iOS
    -   Chrome on Android

        **Restriction:** XPath is not supported on WebView.


## Synopsis

It is generally the case that, for any given element in an XML or HTML document, more than one XPath expression can be used to identify it. When TestArchitect conducts a [window intake](/TA_Glossary/Topics/glossaryWindowIntake.html) on a web page, in which it establishes values for the properties of all controls, it strives to come up with an optimal value for each XPath property. "Optimal" here basically means the simplest value that guarantees unique identification of that control. Syntactically, in its most basic form, an XPath TA property value contains an XPath path expression of the form `//Adapter[@Attribute='Value']`.

-   **Adapter**

    Specifies the type of the UI web control.

    For example, image, input, paragraph, etc.

-   **Attribute**

    Specifies a selected attribute of the UI web control.

    For example, id, name, class, value, etc.

-   **Value**

    Specifies the value of the given attribute.


For instance, consider the following HTML page source:

```
<html>
 <body>
  <form id="loginForm">
   <input name="username" type="text"/>
   <input name="password" type="password"/>
   <input name="continue" type="submit" value="Login" id="Login"/>
   <input name="continue" type="button" value="Clear"/>
  </form>
</body>
<html>
```

Based on the algorithm applied by TestArchitect, the XPath property assigned to the **Login** input-submit control is `//input[@id='Login']`. The **Username** input-button control, by contrast, lacks an id attribute, and so requires a somewhat longer XPath expression to ensure uniqueness. In this case, TestArchitect assigns its XPath property a value of `//form[@id='loginForm']/input[@name='username']`.

**Parent topic:**[Secondary properties](/TA_Help/Topics/Interface_def_derived_properties.html)

