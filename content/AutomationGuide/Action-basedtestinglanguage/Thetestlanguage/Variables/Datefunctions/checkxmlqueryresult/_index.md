--- 
title: "check xml query result"
linktitle: "check xml query result"
aliases: 
    - /TA_Automation/Topics/bia_check_xml_query_result.html
---
# check xml query result {#bia_check_xml_query_result .reference}

## Description { .section}

Check an XPath query result against an expected string.Result is Passed ifthe strings match; otherwise Failed.

## Arguments { .section}

xml
:   XML target string that the query runs against.

:   **Tip:** To access content from an XML file, use the [get text file](bia_get_text_file.html) action to load the XML document into a variable, then reference the variable in this argument.

xpath
:   XPath query string.

expected
:   \(Optional\) Expected query result.

## Notes { .section}

-   An empty expected argument results in Pass if the returned XML is indeed empty; otherwise Fail.
-   It is possible to insert an entire XML file's content into the xml argument; however, all whitespace and line breaks between XML nodes must be removed manually to avoid automation failure \(see example \#4 below\).
-   If your XML target string has a [namespace](http://www.w3schools.com/xml/xml_namespaces.asp) \(defined by the xmlns attribute in the start tag of an element\), yet no namespace is configured in the XPath expression, your query strings will not return any result. To resolve this namespace problem, you may use the [local-name\(\)](http://www.w3.org/TR/xpath-functions-30/#func-local-name) function. This function returns the query results as if no namespace is declared in the target string \(see example \#5 below\).
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Applicable Controls { .section}

This action is applicable to the following controls:none

## Example - Case 1: Using an XPath predicate in an XPath query { .section}

The following example retrieves the text from the **title** element of the first **book** element that is a child of a **bookstore** element and then compares the retrieved text against an expected value, `Everyday Italian`.

```
<?xml version="1.0"?>
<bookstore>
  <book id="bk101" category="COOKING">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30</price>
  </book>
  <book id="bk102" category="CHILDREN">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>35</price>
  </book>
</bookstore>
```

**Action Lines**

![](../Images/bia_check_xml_querry_result_1_pgm.png)

**Result**

![](../Images/bia_check_xml_querry_result_1_res.png)

## Example - Case 2: Using an XPath function in an XPath query { .section}

The following example calculates the sum of all **price** nodes and then compares the returned sum against an expected value, `65`.

```
<?xml version="1.0"?>
<bookstore>
  <book id="bk101" category="COOKING">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30</price>
  </book>
  <book id="bk102" category="CHILDREN">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>35</price>
  </book>
</bookstore>
```

**Test Lines**

![](../Images/bia_check_xml_querry_result_2_pgm.png)

**Result**

![](../Images/bia_check_xml_querry_result_2_res.png)

## Example - Case 3: Using a data set { .section}

The following example iteratively retrieves the contents of the **price** element based on the title variable defined within a data set and then compares it against the expected value, **price**, also defined within the data set.

As an example, the first iteration of the use data set loop issues an XPath query of `//price[../title="Everyday Italian"]/text()`.

**Important:** To have TestArchitect parse a quotation mark, enter four consecutive quotation marks into the editor cell, that is, `""""`.

```
<?xml version="1.0"?>
<bookstore>
  <book id="bk101" category="COOKING">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book id="bk102" category="CHILDREN">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>35</price>
  </book>
</bookstore>
```

![](../Images/bia_check_xml_querry_result_3_aut.png)

**Action Lines**

![](../Images/bia_check_xml_querry_result_3_pgm.png)

**Result**

![](../Images/bia_check_xml_querry_result_3_res.png)

## Example - Case 4: Passing an entire XML file's content into the xml argument { .section}

The following example passes an entire well-formed XML string into the xml argument. Whitespace and line breaks between XML nodes within the document have been removed beforehand, as required.

**Action Lines**

![](../Images/bia_check_xml_querry_result_4_pgm.png)

**Result**

![](../Images/bia_check_xml_querry_result_4_res.png)

## Example - Case 5: Resolving the problem of namespaces { .section}

In this example, an XPath query is run against the following XML file with a namespace:

```
<cr:cricketers xmlns:cr="http://www.example.com/">
   <cr:cricketer type="righty">
	<name>MS Dhoni</name>
	<role>Captain</role>
	<position>Wicket-Keeper</position>
   </cr:cricketer>
</cr:cricketers>
```

Use the local-name\(\) function for your XPath, in order to retrieve the content of the <name\> element of the **cricketer** node despite its enclosure in a namespace. For example, //\*\[local-name\(\)='cricketer'\]/name/text\(\):

**Test Lines**

![](../Images/bia_check_xml_querry_result_5_pgm.png)

**Result**

![](../Images/bia_check_xml_querry_result_5_res.png)

**Parent topic:**[XML](../../TA_Automation/Topics/bia_XML.html)

**Next topic:**[get xml query result](../../TA_Automation/Topics/bia_get_xml_query_result.html)

