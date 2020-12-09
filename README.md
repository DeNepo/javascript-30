# JavaScript 30

[The JavaScript 30](https://javascript30.com/) is an outstanding series of 30 video tutorials by Wes Bos. Each tutorial builds a small, interesting project from scratch using plain JS, CSS & HTML. You'll be using these tutorials as a chance to practice refactoring code from one file to many, and to practice collaborative development.

The first couple challenges you try to refactor will be very difficult, you will certainly feel like it's much more work than just building the project in one file. And it will be more work! But worth it. Learning how to separate projects by concern early will help you build the right habits from the start.

### Index

- [The Challenges](#the-challenges)
  - [Projects](#projects)
  - [Practice](#practice)
- [Refactoring the Projects](#refactoring-the-projects)
  - [All Alone](#all-alone)
  - [In a Group](#in-a-group)
- [JS 30 Gallery](#js-30-gallery)
- [Helpful Links](#helpful-links)

---

## The Challenges

Like the title says, there are 30 challenges. Most of them are full projects with HTML, CSS & JavaScript. But a few of them are for practicing a specific JS skill. To help guide your study the projects have been sorted out by project and practice.

### Projects

JS 30 Projects are complete websites with full user interactions. To practice separation of concerns, you will be refactoring the finished code from these tutorials into separate folders and files. You will never need to change the HTML/CSS, just the JavaScript!

Each time you finish one of these projects, check it off (`- [x]`) and provide a link to the refactored code. If you completed it all alone you can link to your code in this repo. If you completed it as a group project you can link to the repostory.

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

### Practice

These are for individual study. Because these are challenges without a full user interface, you don't need to do any extra refactoring or project planning. You can put your finished code and notes directly in the [./practice](./practice) folder of this repo.

- [ ] 04 - [array cardio day 1]()
- [ ] 06 - [array cardio day 2]()
- [ ] 09 - [dev tools domination]()
- [ ] 14 - [javascript reverences vs copying]()
- [ ] 18 - [Adding Up Times with Reduce]()
- [ ] 25 - [Event Capture, Propagation, Bubbling]()

[TOP](#javascript-30)

---

## Refactoring the Projects

So you're ready to get started? After picking the challenge you want to study, the next step is deciding ... all alone, or in a group?

### All Alone

If you are studying a project independently you can refactor your code into the [/projects](./projects) directory of your fork. Each time you start a new challenge you can copy-paste the starter code provided.

### In a Group

One enormous benefit of separating your code is to help many people work on the same project. You are encouraged to work in small groups for as many of the JS 30 challenges as you can. When working together you can take a little extra time to practice full collaboration workflows. Using the [javascript-30-starter](https://github.com/HackYourFutureBelgium/javascript-30-starter) repo, you and your group can create finished project repository with:

- A backlog and development strategy breaking down the finished project into clear steps.
- One milestone per user story
- One issue per task (file of code, bug, improvement, ...), labeled by concern.
- A project board to organize the issues.
- One branch per task, each merged into _master_
- The finished code for your project should separated into multiple folders and files according to separation of concerns.
- A live demo on GitHub pages
- Project documentation including a complete README, and clear JSDocs for each piece of code.

After finding a team and picking a challenge, you should ...

#### 0. Independent Study

Each person in your group should study the challenge independently, following the video tutorial and studying Wes Bos' finished example code. After following the tutorial spend some time figuring out how you would separate his code by concern.

#### 1. New Repository

Choose one of your team members to be the Repository Owner, they will create a new repository using the [javascript-30-starter](https://github.com/HackYourFutureBelgium/javascript-30-starter) and rename it after the project you're building. You will use this repository for everything, the project board, issues, development strategy, branches, code and demo.

- Add the other team members as collaborators on the main repo.
- Turn on GitHub Pages, your most recent work should always be live!

Before moving on, take a moment to add a link to your team's repo in the README of your fork of `javascript-30` (this file).

#### 2. New Feature

As a team discus the finished tutorial code come up with one new feature you would like to add, beyond what Wes Bos has implemented. This can be anything!

#### 3. Project Planning

Work together to write a `development-strategy.md`:

- How do you want to break this project into user stories? (including your new user story!)
- What's a good way to organize the code for this project? What folders & files make sense to have?
- What code do you need to write for each user story? Which folders and files will you need to work on?
- Include a wireframe or figma document for your finished project.
- How much work/time do you expect each task to be?

#### 4. Project Management

1. Create one milestone for each user story.
1. Create one issue for each task that needs to be completed (ie. one piece of code: a single listener, a single handler, a logic function, a style class, ...)
   - Assign it to the correct User Story milestone.
   - Label the issue based on it's concern (ie. handler, logic, listener, style, ..)
   - Assign each issue to one of your team members
1. Create a new project board in the new project repository and move all of your issues onto the board.

#### 5. Developing

Get coding!

- Develop each task on a separate branch, merging to master only when it is complete.
- Each person should complete their tasks (write their code) a new branch.
  - When a task/issue is complete, they should send a pull request with their code to the master branch. Assign group members to review the pull request.
  - Careful! There should be one pull request per issue, each PR should be one unit of work.
  - After all assigned group member has approved the pull request, it can be merged to the main/master branch

#### 6. Documenting

After all user stories are complete & merged to master, and after all of your issues are closed, it's time to put on the finishing touches.

Fill out a complete README.md to document your project and take a last look over your project's documentation.

#### Repeat!

[TOP](#javascript-30)

---

## JS 30 Gallery

Are you proud of the work you've done? Keen to show it off for the world to see? Build a gallery website to showcase all of your projects!

In the [/docs](./docs) folder of this repo you can build a static site with a thumbnail for each of the projects you've completed, including links to the source code and live demos. A nice chance to practice your CSS and design skills : )

> Hint: you will need to set GitHub Pages to build from the `/docs` folder.

[TOP](#javascript-30)

---

## Helpful Links

Got a question? Got a tip? Use the issues in [HackYourFutureBelgium's fork](https://github.com/hackyourfuturebelgium/javascript-30/issues)!

Some guidelines for using the issues:

- Attach a label with the challenge name in kebab case -> `drum-kit`, or `slide-in-on-a-scroll`
- Let us know if it's a question or a helpful tip -> `question`, `tip`
- @mention someone if you know they have the same question, or think they could help you
- If you create a `question` issue and your question has been answered, please close the issue
- Be nice and have fun!

### More Links

- [/wesbos/JavaScript30](https://github.com/wesbos/JavaScript30)
- [study.hackyourfuture.be](https:study.hackyourfuture.be)
- [Separation of Concerns](https://github.com/hackyourfuturebelgium/separation-of-conerns)
  - the HYF module where these projects are used

[TOP](#javascript-30)
