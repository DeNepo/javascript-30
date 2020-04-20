# JavaScript 30

[The JavaScript 30](https://javascript30.com/) is an outstanding series of 30 video tutorials by Wes Bos.  Each tutorial builds a small, interesting project from scratch using plain JS, CSS & HTML.

You'll be using these tutorials as a chance to practice collaborative development. Using his tutorials as a starting point, you will work in teams of 2-3 to build each group project in a _new_ repository to practice collaborative development.

The first couple challenges you try to build as a group will be difficult.  You'll have many merge conflicts, difficulty dividing the work, and will certainly feel like it's much more work than just building the project.  And it will be more work!  But worth it.  Learning how to collaborate with forks, branches, milestones & issues on small projects you understand completely will help you understand the big picture of project management.

### Index

- [Helping Each Other](#helping-each-other)
- [The Challenges](#the-challenges)
  - [For Group Study](#for-group-study)
  - [For Solo Study](#for-solo-study)
- [Examples to Study](./examples-to-study)
- [Collaborative Development](#collaborative-development)
  - [0. Independent Study](#0-Independent-study)
  - [1. New Repository](#1-new-repository)
  - [2. New Features](#2-new-features)
  - [3. Project Planning](#3-project-planning)
  - [4. Project Management](#4-project-management)
  - [5. Developing](#5-developing)
  - [6. Documenting](#6-documenting)
  - [Repeat!](#repeat)
- [Helpful Links](#helpful-links)

---

## Helping Each Other

Got a question? Got a tip? Use the issues in [HackYourFutureBelgium's fork](https://github.com/hackyourfuturebelgium/javascript-30/issues)!

Some guidelines for using the issues:

- Attach a label with the challenge name in kebab case -> `drum-kit`, or `slide-in-on-a-scroll`
- Let us know if it's a question or a helpful tip -> `question`, `tip`
- @mention someone if you know they have the same question, or think they could help you
- If you create a `question` issue and your question has been answered, please close the issue
- Be nice and have fun!

[TOP](#javascript-30)

---

## The Challenges

Like the title says, there are 30 challenges.  Most of them are full projects with HTML, CSS & JavaScript - these are for group study.  But a few of them are more focused on a specific JS skill - these are for you to study independently in your own repository.

As you work your way through the 30 challenges you should check them off in the lists below and provide a link to the repository with your solution. If it's a group project link to the main group repository, not your fork.

### For Group Study

Each time you finish one of these group challenges, check it off (`- [x]`) and provide a link to the new repository your group used to collaborate on this challenge.

- [ ] 01 - [drum kit]()
- [ ] 02 - [clock]()
- [ ] 03 - [css variables]()
- [ ] 05 - [flex panel gallery]()
- [ ] 06 - [type ahead]()
- [ ] 08 - [fun with html5 canvas]()
- [ ] 10 - [Hold Shift and Check Checkboxes]()
- [ ] 11 - [Custom Video Player]()
- [ ] 12 - [Key Sequence Detection]()
- [ ] 13 - [Slide in on a Scroll]()
- [ ] 15 - [LocalStorage]()
- [ ] 16 - [Mouse Move Shadow]()
- [ ] 17 - [Sort Without Articles]()
- [ ] 19 - [Webcam Fun]()
- [ ] 20 - [Speech Detection]()
- [ ] 21 - [Geolocation]()
- [ ] 22 - [Follow Along Link Highlighter]()
- [ ] 23 - [Speech Synthesis]()
- [ ] 24 - [Sticky Nav]()
- [ ] 26 - [Stripe Follow Along Nav]()
- [ ] 27 - [Click & Drag]()
- [ ] 28 - [Video Speed Controller]()
- [ ] 29 - [Countdown timer]()
- [ ] 30 - [Whack a Mole]()

[TOP](#javascript-30)

---

### For Solo Study

These exercises are to study at your own pace. Because these are challenges without a full user interface, you don't need to do any of the extra steps with development strategies, new repositories, user stories or branches.  You can put your finished code and notes directly in the [./solo-study](./solo-study) folder on your fork of this repository.

Looking for a little more workflow practice?  Try using a project board and issues in your fork of this repo to track your progress through these exercises.

- [ ] 04 - array cardio day 1
- [ ] 06 - array cardio day 2
- [ ] 09 - dev tools domination
- [ ] 14 - javascript reverences vs copying
- [ ] 18 - Adding Up Times with Reduce
- [ ] 25 - Event Capture, Propagation, Bubbling

[TOP](#javascript-30)

---

## Collaborative Development

Your main objective with these exercises is to practice working with others on one shared code base.  For each of the group challenges you should work in a group of 2-3 to break down the project into user stories and create a full project repository one step at a time.  A finished project repository will have:

- A `development-strategy.md` breaking down the finished project into steps.
- One milestone per user story
- One issue per task, labeled by concern
- A project board to organize the issues.
- One branch per user story, each merged into _master_
- The finished code for your project separated into multiple folders and files according to separation of concerns.
- A live demo on GitHub pages
- A complete README.md to document your project.

After finding a team and picking a challenge,  you should ...

### 0. Independent Study

Each person in your group should study the challenge independently, following the video tutorial and studying Wes Bos' finished example code.

### 1. New Repository

Choose one of your team members to be the Repository Owner, they will create __a new repository__ on their account named after the challenge. (not a fork, a new empty repository!)  You will use this repository for everything, the project board, issues, development strategy, branches, code and demo.

Add the other team members as collaborators so they can manage issues on the main repository's project board.  Each team member should now fork the main repository.

Before moving on, take a moment to add a link to your team's repo in the README of your fork of `javascript-30` (this file).


### 2. New Features

As a team discus the finished tutorial code come up with one new feature for each team member to develop.

### 3. Project Planning

Work together to write a `development-strategy.md`:

- How do you want to break this project into user stories? (including your new user stories!)
- What's a good way to organize the code for this project? What folders & files make sense to have?
- What code do you need to write for each user story? Which folders and files will you need to work on?
- Include a wireframe for your finished project in the strategy file.

Using Pull Requests, make sure each team member has a copy of the complete `development-strategy.md` on their fork of the project.

### 4. Project Management

1. Create one milestone for each user story.
1. Create one issue for each task that needs to be completed (ie. one piece of code: a single listener, a single handler, a logic function, a style class, ...)
    - Assign it to the correct User Story milestone.
    - Label the issue based on it's concern (ie. handler, logic, listener, style, ..)
    - Assign each issue to one of your team members
1. Create a new project board in the new project repository and move all of your issues onto the board (the _Basic Kanban_ template project will do)

### 5. Developing

Get coding!

- Develop each user story on a separate branch, merging to master only when it is complete.
- Each person should complete their tasks (write their code) on their fork.
  - When a task/issue is complete, they should send a pull request with their code to the main group repo.  Assign all group members to review the pull request.
  - After each member has approved the pull request, it can be merged with the main repo
- By the time a user story is finished, each team member should have the same code on their fork & branch as the main repository.
- When a user story is fully merged onto it's branch of the main group repository, merge it to the master branch and move on to the next!

### 6. Documenting

After all user stories are complete & merged to mast, and after all of your issues are closed, it's time to put on the finishing touches.

Fill out a complete README.md to document your project and turn on GitHub pages to share a live demo.

### Repeat!

There are 24 group projects, keep working your way through them all until you can collaborate in your sleep.

[TOP](#javascript-30)

---

## Helpful Links

- [Finished code to study & many helpful guides](https://github.com/wesbos/JavaScript30)

### Git Workflows

- [Atlassian: comparison](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### General References

- [study.hackyourfuture.be](https:study.hackyourfuture.be)

[TOP](#javascript-30)

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>
