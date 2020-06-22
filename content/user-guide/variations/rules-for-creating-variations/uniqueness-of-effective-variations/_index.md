--- 
title: "Uniqueness of effective variations"
linktitle: "Uniqueness of effective variations"
description: "For each effective variation of a given project item, the combination of version signature and keyword signature must be unique. TestArchitect enforces that uniqueness when you create new variations."
weight: 4
aliases: 
    - /TA_Help/Topics/Variations_rules_4.html
keywords: "variations, creation rules, unique keywords"
---

For each effective variation of a given project item, the combination of version signature and keyword signature must be unique. TestArchitect enforces that uniqueness when you create new variations.

Recall that a given [explicit variation](/TA_Glossary/Topics/glossaryExplicitVariation.html) may be defined with multiple nodes of a given system, as well as complex [keyterms](/TA_Glossary/Topics/glossaryKeyterm.html) – that is, ones having multiple `OR`'d keywords. TestArchitect factors such variations out to produce [effective variations](/TA_Glossary/Topics/glossaryEffectiveVariation.html), each of which has only a single version node and no complex keyterms. So if, for example, should an explicit variation should be created with the following signature:

```
login {Car Rental: 1.1, 2.0} {Spanish|French, Home}
```

, we can regard that as equivalent to the following four variations:

```
login {Car Rental: 1.1} {Spanish, Home}
login {Car Rental: 2.0} {Spanish, Home}
login {Car Rental: 1.1} {French, Home}
login {Car Rental: 2.0} {French, Home}
```

Given this fact, the following variations are/are not allowed to coexist with the above variation:

|Variation|Allowed?|Why?|
|---------|--------|----|
|login \{Car Rental: 1.1\} \{Spanish\}|Yes|A login effective variation with signature \{Car Rental: 1.1\}\{Spanish\} does not yet exist|
|login \{Car Rental: 2.0\} \{Spanish, Home\}|No|A login effective variation with this signature already exists|
|login \{Car Rental: 2.0\}|Yes|A login effective variation with system signature \{Car Rental: 2.0\} and no keyword signature does not yet exist.|
|login \{Spanish, Home\}|Yes|A login effective variation with keyword signature \{Spanish, Home\} and no system signature does not yet exist.|

Note that if you attempt to create a variation which conflicts with an existing variation's signature, an error message is displayed:

![](/images/TA_Help/Images/Variations_set_of_keyword_error.png)



