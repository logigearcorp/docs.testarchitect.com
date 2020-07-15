--- 
title: "Full-text search in desktop help"
linktitle: "Full-text search in desktop help"
description: "A basic search of topics consists of the word or phrase you want to find. You can use wildcard expressions, nested expressions, boolean operators, similar word matches, the previous results list, or topic titles to refine your search."
weight: 3
aliases: 
    - /TA_UsingHelpSystem/Topics/hs_CHM_full_text_search.html
keywords: "Compiled HTML Help, full-text search, CHM"
---

A basic search of topics consists of the word or phrase you want to find. You can use wildcard expressions, nested expressions, boolean operators, similar word matches, the previous results list, or topic titles to refine your search.

## Performing a full-text search

The full-text search is performed within the **Search** tab of the desktop CHM help viewer:

1.  Select the **Search** tab of the help viewer.
2.  Type the word or phrase you want to find.

    {{<tip>}} Use the right-arrow ![](/images/TA_Help/Images/btn.right_arrow.png)button to add boolean operators to your search \(see [Refining a full-text search](/using-the-testarchitect-help-system/desktop-help/full-text-search-in-desktop-help#section_ffh_4nh_cp) for details\).

3.  Press Enter or click the **List Topics** button. The viewer searches for topics that match the specified criteria and displays the found topics in the Search results panel.
4.  To view a topic, select it in the list of search results and then click **Display**, or simply double-click the topic in the list.

Rules applied during search:

-   Searches are case-insensitive, so you can type your search in uppercase or lowercase characters.
-   You can search for any combination of letters \(a…z\), numbers \(0…9\) and other characters.
-   The following items have special meaning in search expressions, and cannot be treated as normal strings when searching:

    -   Quotation marks \( " \), which are used to specify exact phrases \(see below\).
    -   The words and, or, not, and near, which serve as Boolean operators \(see
    [Refining a full-text search](/using-the-testarchitect-help-system/desktop-help/full-text-search-in-desktop-help#section_ffh_4nh_cp)\). Note however that these words can be searched for when included in quotation marks as part of a specific phrase \(see below\).

-   Punctuation marks such as the period \( . \), colon \( : \), semicolon \( ; \), comma \( , \) and hyphen \( - \) are ignored.
-   To search for a phrase, enclose it in quotation marks \( " \). For instance, if you specify "stop test" in the search expression, the search will only return those topics that contain this phrase. If you omit the quotes, for instance, stop test, the search will return topics containing both words stop and test.
-   You can also group the words and phrases with parentheses. Grouping is typically used with boolean operators \(see [Refining a full-text search](/using-the-testarchitect-help-system/desktop-help/full-text-search-in-desktop-help#section_ffh_4nh_cp)\).

## Highlighting words in searched topics

When searching for words in Help topics, you can specify that each occurrence of the word or phrase you search for is highlighted in the topics that are found.

-   On the help viewer’s toolbar, click the Option \(![](/images/TA_UsingHelpSystem/Images/btn_option.png)\) button and then click **Search Highlight On** to highlight all instances of the word or phrase.
-   On the help viewer’s toolbar, click the Option \(![](/images/TA_UsingHelpSystem/Images/btn_option.png)\) button and then click **Search Highlight Off** to turn off this feature.

## Refining a full-text search  

You can search only on the previous results list, request similar word matches, or search only the titles of topics in the table of contents.

-   After performing a full-text search, you may then narrow the results of that search by selecting the check box **Search previous results** before searching on a new word or phrase. This has the effect of limiting search domain of the new search to the existing set of displayed topics.
-   To match similar spellings in a full-text search, select the **Match similar words** check box. The help viewer matches minor grammatical variations of the word or phrase you entered, as well as the word or phrase itself. For example, if you enter export and selected this box, the viewer will find topics containing export, exported, exports, exporting and other similar word forms.
-   To restrict your search to only document titles, select the **Search titles only** check box.

In additional, you can also use wildcards, boolean operators and nested expressions to refine your search.

## Wildcards

|Wildcard|Description|
|--------|-----------|
|Question mark \( ? \)|Use the question mark as a substitute for a single character. For example, if you type gloss?, your search returns topics containing the phrase glossy.|
|Asterisk \( \* \)|Use the asterisk as a substitute for zero or more characters. For example, if you type Esc\*, your search returns topics containing the phrases ESC, escape, escalation, and so on.|

## Boolean operators

|Operator|Description|
|--------|-----------|
|AND|The AND operator is applied to two terms, the one preceding it and the one following it. Its effect is to return topics in which both terms appear..<br><br> For example, testANDautomation returns topics containing both the words test and automation.<br><br> {{<note>}} By default, if your search expression contains multiple words not separated by operators, the search engine applies the AND operator. For example, testANDautomation and test automation return the same results.<br><br>|<br>
|OR|As with AND, OR is a binary operator, and returns topics in which *either* or both of the search terms appears.<br><br> For instance, the search for test OR execution will return topics containing the words test or execution, or both.<br><br>|<br>
|NOT|NOR is applied only to the search term that follows it, but also requires that it be preceded by at least one other term. It excludes from the search results all topics that contain the term that follows it.<br><br> Hence, a search for   `"test module" NOT "test suite"` will return topics that contain the term test module but do not contain the term test suite.<br><br>|<br>
|NEAR|NEAR is applied to the search terms before and after it, returning topics in which the two terms appear physically close to each other.<br><br> For instance, the search for   `"test module" NEAR project` will return topics where the phrase test module is within eight words of the word project.<br><br>|<br>

{{<note>}} Boolean operators’ names are case-insensitive.

## Nested expressions

You can use parentheses to nest expressions within the search expression. For example, the search for "test module" NOT \(project OR assets\) will return topics that contain the phrase test module and do not contain either of the words project or assets.

{{<note>}} Nesting of expressions is limited to five levels deep.



