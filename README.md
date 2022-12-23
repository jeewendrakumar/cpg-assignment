# cpg-assignment

## General description

```
The application is a single page application which is divided in three sections. On the first section, the user can create a poll with up to 10 options.
In the central one, the user can vote by selecting one of the options and pressing the "vote" button. On the right, the chart will update based on the questions created and the votes that each question got.
```

## Use cases Implemented

```
• As the owner, I want to change my poll question.
    User can update the question by tying in question text field
• As the owner, I want to add, edit or remove the options of my poll.
    User can edit/update/delete options of the poll
• As the owner, I want to reset the whole form, including answers.
    User can Reset Whole form by clicking the Reset Button
• As the user, I want to see the UI refresh automatically when something changes.
    User can see the UI changes when something change like button click, add new poll, remove poll, update poll
• As the respondent, I want to send several answers.
    User can submit several answer for a poll and changes can be seen on the chart
• As the respondent, I want to see the changes in real time.
    User can see all changes
```

## Non-functional requirements implemented

```
• All fields have a limit of 80 characters.
    All fields has maxlength model which can be configured from store
• When the limit is reached, fields should be disabled.
• There should be always at least 2 options.
    Until 2 options are added VOTE button is disabled
• The user can vote as many times as possible.
    User can add multiple vote
• The chart needs to adapt to the changes in the amount of answers or labels without missing values.
    Chart reflects realtime changes in data
• The reset button should reset the whole UI: question, options and answers.
• It is mandatory to provide a deployment URL and source code.
    Deployed App URL : https://jeewendrakumar.github.io/cpg-assignment/
    Source Code Attached in Email
• You can use 3rd party libraries or frameworks to develop this assignment.
    Third Party Library Used:
        1. vue-charts : Bar Charts
        2. vuex : State Management
        3. vue-Bootstrap: CSS Framework / could also be done without using any framework with custom flexbox
        4. vue-jest: Unit Testing Framework
• Writing automated tests is a plus.
    Jest Testing is added for few components which can be run by command npm run test:unit
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Unit Test for Dev

```
npm run test:unit
```

### Deploy build to Production

```
npm run deploy
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
