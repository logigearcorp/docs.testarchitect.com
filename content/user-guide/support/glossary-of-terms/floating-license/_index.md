--- 
title: "floating license"
linktitle: "floating license"
description: ""
weight: 55
aliases: 
    - /TA_Glossary/Topics/glossaryFloatingLicense.html
keywords: "glossary, floating license"
---

[Floating licenses](/TA_Administration/Topics/LS_TA_license_conversion.html) comprise a license granting system that applies to both TestArchitect [Universal](/TA_Administration/Topics/TA_Editions.html#entry_ta.editions.universal)-level usage rights as well [Agent](/TA_Administration/Topics/TA_Editions.html#p.ta_editions.agent) usage rights. Floating licenses are available to any machine in an organization with TestArchitect installed. In its unused state, a floating license resides on a license server in a finite pool of floating licenses of the given type \(Universal or Agent\). When, for example, TestArchitect Client is launched on a machine that has been designated as qualifying for a floating Universal license, a request is submitted for an Universal license from the pool and, if granted, the pool of Universal licenses is reduced by one. Licenses are automatically returned to the pool when not required. When the server's floating license pool for a given license type is empty, further requests for that type of floating license are denied.

