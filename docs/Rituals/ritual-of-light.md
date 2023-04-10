# Ritual of Light

##### Current Stage of Development

- [ ] Unimplemented
- [ ] Manual
- [x] Systemetized
- [ ] Partially Automated
- [ ] Fully Automated/Passive

## Essence

Ritual of Light is a proportional compensation system for projects. It allows the team full visibility into how much work each team member is doing, how long it is taking, and ensures that everyone is paid in proportion to the amount of work they have done.

## Current Implementation

**Beginning of project:**

- Team lead creates a project DAO
- Team lead deploys a Ritual of Light contract and adds it to the project DAO
- Team Lead deploys project DAO app using the Ritual of Light app template.
- Optionally, the team may decide on a **Value Rubric** that awards differing percentages of shares

**During project:**

- The team meets together at a regular interval (weekly, bi-weekly, etc.)
- Each team member makes a claim for the work they have done since the last meeting.
- The team decides whether or not to accept the claim. In DAO Masons, usually this decision is delegated to a team lead. However, it is completely possible to do this as a group.
- Each team member adds their claim to the app, and they are rewarded with shares in the project DAO.
- The claims are automatically displayed in a timeline feed on the project DAO's app.

**End of project:**

- If this is a client project, and the client is happy with the work, the funds can be pulled from escrow
- DAO Masons (or other parent DAO) receives its share of the funds.
- Then the funds are sent to the project DAO, and each team member can pull their proportion of the funds.
- The team simply uses the `ragequit` function on the project DAO to pull. This will burn the shares they have earned, and they will receive funds in direct proportion to the amount of work they have done.

## Why?

Working remote feels like working in the dark. We don't get the inspiration boost from seeing others make progress on difficult tasks. We don't have the accountability of having to show up to a physical location and demonstrate that work is being done.

Moreover, in any organization, it's really hard to reward people based on the quantity and quality of the work they've done. In the past, teams have delegated this task to managers and HR departments who assign salary levels based on arbitrary factors like experience, education, and seniority -- when none of this has anything to do with how much work someone is actually doing.

DAOs have a unique opportunity to solve this problem. We can create a system where the team is able to decide what is valuable, and then pay those contributors based on the amount of time they have applied to a task times the value of that task. It's important that 'value' is subjective and should be defined by the organization doing the work.

### What problems are we solving

**Opacity**

- With remote work, it is difficult to tell who is doing the work and spending how much time on it.
- While Kanban boards are great for tracking progress on tasks, they don't account well for how long they should take. If someone does assign a time estimate, it is often arbitrary and not based on any real data.
- Most teams work in the dark, they don't know how much their teammates are contributing, and clients have no real way to track progress on the job they paid for.

**Incentives**

- Kanban-based compensation (DeWork) incentivizes contributors to finish a task as quickly as possible, even if that means they are not doing the best work they can.
- Value is extremely subjective and can be hard to assign. We need a system where small groups of people are able to decide on what is valuable and what isn't.
- Most importantly, we need a compensation system that is directly proportional to the amount of work done.

### Why is this a good solution?

Ritual of Light is a fully transparent, open system where a small group of contributors are able to decide what is valuable, then pay those contributors based on the amount of work they have done.

**Transparency**

- With every claim a team member makes, we get an update on the progress they are making.
- We have a 'leaderboard' that shows the amount of work each team member has done, encouraging friendly competition.
- Clients now have a window into the progress of the project.

**Accountability**

- The only way to earn is to make contributions.
- If a team member wishes to make a claim, they must first tell the DAO what they've done and for how long. The app, combined with synchronous communication tools like Discord, allows the team to use social dynamics to hold each other accountable -- without risking funds.

**Fluid**

- Far faster than proposals and voting, the team can make track progress and contributions on the fly.
- The contract assigns shares optimistically. While this is trustful, it allows the team to greatly minimize governance overhead for trusted actors, while still adding friction to those try to maliciously game the system.

### Downsides/Risks

**Trust**

- The ROL contract allows contributors to optimistically add their claims to the contract. This means that if a contributor is dishonest, they can add a claim for work they didn't do.
- This would require the team or a team lead to adjust the claim using a DAO proposal
- For this reason, **Funds should be escrowed or held by the Core DAO** until the project is complete. This ensures that the team is not able to pull funds before the project is complete and the timeline has been audited.

**Time-Based Compensation**

- With every time based compensation system, there an incentive to take more time to finish tasks.
- This is why we have a **Value Rubric** that allows the team to assign different values to different tasks. Speed of progress could be a metric the team uses to determine the value of a task.

## Roadmap

### Automation phase 1.

- Build a summoner app that makes it easy to get all the project Data + the the necessary parameters for the Ritual of Light contract.
- Record a video of how to add a project DAO to the ROL app template, and how to deploy to vercel

### Automation phase 2.

- Write a factory contract that summons a project DAO + ROL contract in the same TX
- New factory contract needs to take in a parent DAO field so we can build interfaces that organize projects based on the parent DAO
- Build an interface that allows DAOs to see all their current and past projects, and their own ROL apps that each team is using.

### Automation phase 3 (V3).

- Write a new Ownable 1155 standard that takes only the moloch functionality that we need (member list, shares, ragequit or proportional disperse)
- Combine that contract with an escrow contract that automates the payment form the client, to the project DAO and Core DAO.
- Build a new interface that allows DAOs to see all their current and past projects, and their own ROL apps that each team is using.
- Build the app so that it can be used by any DAO, not just DAO Masons.

### Endgame

- Fully automated is a clean, simple, and easy to use interface that allows DAOs to create projects, and manage them all in one place.
- The interface allows DAOs to see all their current and past projects, and their own ROL apps that each team is using.
- The contract is minimal and has an extremely surface area for attacks.
- Anyone can easily spin up a new project DAO and start using it.
