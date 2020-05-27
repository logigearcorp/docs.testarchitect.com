--- 
title: "WebHelp search engine"
linktitle: "WebHelp search engine"
weight: 3
url: "TA_UsingHelpSystem/Topics/hs_WebHelp_full_text_search.html"
---
# WebHelp search engine {#concept_cj3_jv3_cp .concept}

A basic search of topics consists of the word or phrase you want to find. You can use wildcard expressions, nested expressions, boolean operators, similar word matches, the previous results list, or topic titles to refine your search.

## Search rules { .section}

Rules that are applied during a search include:

-   You can use quotes to perform an exact search for multiple word phrases. For example, "automated tests" will only return results if both words are found consecutively and exactly as they are typed in the search field. This type of search is known as a phrase search.
-   Boolean Search is supported using the following operators: and, or, not. When there are two adjacent search terms without an operator, or is used as the default search operator. For example, automated tests is the same as automated or tests.
-   The space character separates keywords \(an expression such as automated tests counts as two separate keywords: automated and tests\).
-   Words composed by merging two or more words with colon \(":"\), minus \("-"\), underline \("\_"\), or dot \("."\) characters count as a single word.
-   Your search terms should contain two or more characters.

    **Important:**

    -   stop words will be ignored.
    -   Specifically, to improve performance, the Search feature excludes certain stop words. For example: a, an, and, are, as, at, be, but, by, for, if, in, into, is, it, no, not, of, on, or, such, that, the, their, then, there, these, they, this, to, was, will, with.

## Autocomplete suggestions {#section_r1s_31m_ndb .section}

When you are typing in the **Search** box, proposals are presented to help you to compute the search query.

![](../Images/search_autocomplete.png)

The information proposed when you are typing is collected from:

-   The search queries from the history of the previous searches.
-   The titles collected from your documentation.
-   Documentation index terms and keywords.

## Search results page {#section_op5_h5p_ndb .section}

When you enter search terms in the **Search** box, and then press Enter, the results are displayed in a results page.

![](../Images/search_page.png)

When you click on a result, the topic is opened and the search results are highlighted.

![](../Images/search_page_selected.png)

**Tip:** If you want to remove the colored highlights, click the **Toggle Highlights** \(![](../Images/toggle_btn.png)\) button at the top-right side of the page.

## 5-star rating mechanism and sorting {#section_qk3_h1q_ndb .section}

The Search feature is also enhanced with a rating mechanism that computes scores for every result that matches the search criteria. These scores are then translated into a 5-star rating scheme and the stars are displayed to the right of each result.

![](../Images/stars_sorting.png)

The search results are sorted depending on the following:

-   Search entries that satisfy the phrase search criterion are presented first.
-   The number of keywords found in a single page \(the higher the number, the better\).
-   The context. For example, a word found in a title scores better than a word found in unformatted text.
-   The search ranking order, sorted by relevance is as follows:
    -   The search term is included in a meta keyword
    -   The search term is in the title of the page
    -   The search term is in bold text in a paragraph
    -   The search term is in normal text in a paragraph

## Missing terms {#section_v3f_p1m_ndb .section}

If you enter multiple search terms \(other than stop words\), for any result that the search engine found at least one term but not one or more of the other terms, the **Missing** terms will be listed below each result.

![](../Images/missing_terms.png)

**Parent topic:**[WebHelp](../../TA_UsingHelpSystem/Topics/hs_WebHelp.html)

**Previous topic:**[Searching for information in TestArchitect web help](../../TA_UsingHelpSystem/Topics/hs_WebHelp_search.html)

