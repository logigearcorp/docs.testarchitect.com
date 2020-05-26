--- 
title: "Deploying a Windows build agent - TFBuild"
linktitle: "Deploying a Windows build agent - TFBuild"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_deploy_windows_build_agent.html
---
# Deploying a Windows build agent - TFBuild {#task_x1n_nwj_4v .task}

For TFBuild build definitions, to build Visual Studio solutions, you'll need at least one Windows build agent.

To deploy the agent, do the following:

1.  Create an agent pool, a collection of build agents. \([Learn more](https://msdn.microsoft.com/library/vs/alm/build/agents/admin#agent-pools).\)

    Agent pools are used to organize and define permission boundaries around your agents. You can share your pool across multiple team project collections.

    **Remember:** When you create a new pool, in most cases you should leave **Auto-Provision Queue in Project Collections** selected. This setting ensures all collections have a queue to access the pool. The system creates a queue for existing collections and whenever a collection is created.

    ![](../Images/agent_pool.png)

    The agent pool is created and queued.

    ![](../Images/ug_MTM_agent_pool.png)

2.  On the machine on which you plan to run the Windows build agent, deploy the build agent \(see the [Deploy the agent](https://msdn.microsoft.com/library/vs/alm/build/agents/windows) section.\)

    **Remember:** As you are responding to the prompts, deploy the agent to run as a Windows service.

    The deployed build agent is registered to the dedicated agent pool.

    ![](../Images/ug_MTM_agent_pool_deployed.png)


**Parent topic:**[Deploying and configuring a build agent for TFS-MTM integration](../../TA_Help/Topics/ug_MTM_build_agent.html)

