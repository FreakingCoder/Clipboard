# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Tables:---------
[Facility]
|id|name|address|shifts|facilityId|agentId|

[Agents]
|id|customId|name|workShift|facilityId|

[Shift]
|id|name|Hours|

1) **createAgent(name, facility, shift)**
   Create Agent record  in  the database by calling => createAgent(name, facility, shift)
   This should create an agent record in the Agents Table by taking agent name , facility where agent is going to work and shift that agent is    assigned to.
   This should return AgentID.
   Acceptance:
   a) Call the rest api for createAgent(name,facility,shift) and check it returned AgentID.
   b) Check the above returned AgentID existing in the database table.
   Estimate:
   Implementing backend - 2 days of work for coding and writing test cases.
   FrontEnd - 2 days of effort to implement form component and writing its unit tests and  linting and selenium or protractor testing.
2) **getShiftsByFacility(facilityId)** 
   Implement to return all the agents by facilityId. Return array of objects ( each object with facilityId, AgentId, shiftId)
   Acceptance:
   a) Call the rest api for getShiftsByFacility(facilityId) and check it returned array of shifts with agentIds.
   Estimate:
   Implementing backend - 1 day of work for coding and writing test cases.
   FrontEnd - 2 days of effort to implement to display the shifts and agents by facility and writing its unit tests and  linting and selenium    or protractor testing.
3) **updateAgentByCustomId(agentId, facilityId, customId)** 
   Implement to update the Agent table with customId for an agent.
   Acceptance:
   a) Call the rest api for updateAgentByCustomId(agentId, facilityId, customId) and check it returned success or failute  to update with a      message if agent customId is already existing or not.
   Estimate:
   Implementing backend - 1 day of work for coding and writing test cases.
   FrontEnd - 2 days of effort to implement update component with agent info and field to enter customID and writing its unit tests and          linting and selenium    or protractor testing.   
4) **generateReport(shifts, facilityId)**
   Implement the rest API to retrive the shifts and with all agents info associated with it.
   Implement conversion to pdf in the backend and then send it to fronend to download or view as pdf.
   Acceptance:
   a) Call the rest api for generateReport(shifts, facilityId) and check it returned a blob and its meta info with pdf etension.
   Estimate:
   Implementing backend - 2 day of work for coding and writing test cases.
   FrontEnd - 1 days of effort to implement download component with shifts and facilityId and writing its unit tests and          linting and    selenium    or protractor testing.  
   







