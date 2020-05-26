--- 
title: "get json query result"
linktitle: "get json query result"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_get_json_query_result.html
---
# get json query result {#bia_get_json_query_result .reference}

## Description {#section_iyg_dsd_1y .section}

Query a JSON document by JSONPath.

## Arguments {#section_jyg_dsd_1y .section}

json
:   JSON target document that the query runs against.

jsonpath
:   JSONPath query string

variable
:   \(Optional\) Variable to receive the returned query result.

## Valid contexts {#section_kyg_dsd_1y .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_lyg_dsd_1y .section}

-   JSONPath of REST Assured, a Java framework for simplifying testing of REST based services and currently employed in TestArchitect, uses [Groovy GPath](https://blog.jayway.com/2013/04/12/whats-new-in-rest-assured-1-8/) expressions. A tutorial on GPath is beyond the scope of this help system. For more information on GPath, you can refer to this [site](http://groovy-lang.org/processing-xml.html#_gpath).
-   To insert an entire JSON document's content into the json argument, all whitespaces must be removed manually to avoid automation failure.

    **Tip:** You can use various tools to compact JSON data to remove all whitepsaces. For example: [JSON Editor Online](http://www.jsoneditoronline.org/).

-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings {#section_cjy_3z2_1y .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example {#section_pyg_dsd_1y .section}

Given the following JSON document:

```
{
  "store": {
    "book": [
      {
        "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "price": 8.95
      },
      {
        "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "price": 12.99
      },
      {
        "category": "fiction",
        "author": "Herman Melville",
        "title": "Moby Dick",
        "isbn": "0-553-21311-3",
        "price": 8.99
      },
      {
        "category": "fiction",
        "author": "J. R. R. Tolkien",
        "title": "The Lord of the Rings",
        "isbn": "0-395-19395-8",
        "price": 22.99
      }
    ],
    "bicycle": {
      "color": "red",
      "price": 19.95
    }
  }
}
```

To insert the entire JSON document's content above into the json argument, for example, use [JSON Editor Online](http://www.jsoneditoronline.org/) to remove all white spaces. The returned JSON document resembles the following.

\{"store":\{"book":\[\{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95\},\{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","price":12.99\},\{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99\},\{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the Rings","isbn":"0-395-19395-8","price":22.99\}\],"bicycle":\{"color":"red","price":19.95\}\}\}

**Action Lines**

The following example retrieves the category of the first book element.

![](../Images/bia_get_json_query_result_pgm.png)

**Result**

![](../Images/bia_get_json_query_result_res.png)

**Parent topic:**[JSON](../../TA_Automation/Topics/bia_JSON.html)

**Previous topic:**[check json query result](../../TA_Automation/Topics/bia_check_json_query_result.html)

