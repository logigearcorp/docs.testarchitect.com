--- 
title: "get xml query result"
linktitle: "get xml query result"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_get_xml_query_result.html
keywords: get XML query
---

## Description

Query an XML string by XPath.

## Arguments

-   **xml**

    XML target string that the query runs against.

    **Tip:** To access content from an XML file, use the [get text file](get_text_file.html) action to load the XML document into a variable, then reference the variable in this argument.

-   **xpath**

    XPath query string.

-   **variable**

    \(Optional\) Variable to receive the returned query result.


## Notes

-   It is possible to insert an entire XML file's content into the xml argument; however, all whitespace and line breaks between XML nodes must be removed manually to avoid automation failure \(see example \#4 below\).
-   Depending upon the XPath query, some of the following notes for the variable argument may apply:
    -   The returned value may contain multiple XML nodes. To extract or check the content of a single line from variable, use the [get text line](get_text_line.html) or [check text line](check_text_line.html) actions. \(See example \#5.\)
    -   If the returned value contains multiple XML nodes, and is to be used in another XPath query, ensure that it is well-formed XML by adding a single root element at the top level \(see example \#6\).
-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   If your XML target string has a [namespace](http://www.w3schools.com/xml/xml_namespaces.asp) \(defined by the xmlns attribute in the start tag of an element\), yet no namespace is configured in the XPath expression, your query strings will not return any result. To resolve this namespace problem, you may use the [local-name\(\)](http://www.w3.org/TR/xpath-functions-30/#func-local-name) function. This function returns the query results as if no namespace is declared in the target string \(see example \#7 below\).
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example - Case 1: Using an XPath predicate in an XPath query

The following example retrieves the text from the title element of the first book element that is a child of a bookstore element.

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

![](/images//Images/bia_get_xml_querry_result_1_pgm.png)

**Result**

![](/images//Images/bia_get_xml_querry_result_1_res.png)

## Example - Case 2: Using an XPath function in an XPath query

The following example returns the sum of all price nodes.

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

![](/images//Images/bia_get_xml_querry_result_4_pgm.png)

**Result**

![](/images//Images/bia_get_xml_querry_result_4_res.png)

## Example - Case 3: Using a data set

The following example repetitively retrieves the text from the price element based on the title variable defined within a data set.

As an example, the first iteration of the use data set loop issues an XPath query of `//price[../title="Everyday Italian"]/text()`.

**Important:** To have TestArchitect parse a quotation mark, enter four consecutive quotation marks into the editor cell, that is, `""""`.

![](/images//Images/bia_get_xml_querry_result_2_aut.png)

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

![](/images//Images/bia_get_xml_querry_result_2_pgm.png)

**Result**

![](/images//Images/bia_get_xml_querry_result_2_res.png)

## Example - Case 4: Passing an entire XML file's content into the xml argument

The following example passes an entire well-formed XML string into the xml argument. Whitespace and line breaks between XML nodes within the document have been removed beforehand, as required.

**Action Lines**

![](/images//Images/bia_get_xml_querry_result_5_pgm.png)

**Result**

![](/images//Images/bia_get_xml_querry_result_5_res.png)

## Example - Case 5: Using get text line to extract content

The following example extracts a single XML line, <title lang="en"\>Harry Potter</title\>, from a variable holding multiple XML lines by using the get text line action.

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

![](/images//Images/bia_get_xml_querry_result_3_pgm.png)

**Result**

![](/images//Images/bia_get_xml_querry_result_3_res.png)

## Example - Case 6: Adding a single root element

The following example encloses the returned XML document in a single root element to ensure a well-formed XML document. The modified XML document is then used to calculate the sum of all price nodes.

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

![](/images//Images/bia_get_xml_querry_result_6_pgm.png)

**Result**

![](/images//Images/bia_get_xml_querry_result_6_res.png)

## Example - Case 7: Resolving the problem of namespaces

Let's see an example of an XML file with a namespace:

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

![](/images//Images/bia_check_xml_querry_result_7_pgm.png)

**Result**

![](/images//Images/bia_check_xml_querry_result_7_res.png)

**Parent topic:**[XML](/TA_Automation/Topics/bia_XML.html)

**Previous topic:**[check xml query result](/TA_Automation/Topics/bia_check_xml_query_result.html)

