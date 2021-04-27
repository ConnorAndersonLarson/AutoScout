<h1 align="left">AutoScout</h1>

<p align="center">
    <img src="https://media.giphy.com/media/gHQxuYpgykXW5rxewl/giphy.gif" alt="Age of Empires II Cavalry Unit entering and exiting the screen" width="200" height='auto'>
  </p>

## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Functionality](#functionality)
* [User Feedback](#user-feedback)
* [Learning Goals](#learning-goals)
* [Future Iterations](#future-iterations)
* [Technologies Used](#technologies-used)
* [Contributors](#contributors)
* [Contact](#contact)


## About the Project

AutoScout is an app designed to help people view playable civilizations in Age of Empires II easier than the standard in-game UI. It is currently running off the Age of Empires II API [(view documentation)](https://github.com/aalises/age-of-empires-II-api) to receive civilization data; this data is not currently up to date with most recent game updates. Users of the app are able to view all civilization names and crests on one page. Clicking a civilization crest will then show the basic bonuses and focus of play style. Users can then inspect the selected civ, showing potential civilization matchups that either create a well rounded team (Complimentary) or stack bonuses for a more focused style of play (Stacking). Users can choose to inspect these civilizations as well as favorite the inspected civ from this screen. Favorites are shown on all screens for easy returning to selected civs. This project was a 7 day sprint with the goal of creating an app for a niche audience, implementing user personas and fashioning functionality around those personas. The project specs and rubic are from the Turing School of Software and Design and can be seen [here](https://frontend.turing.edu/projects/module-3/niche-audience.html).

This site is currently not deployed due to API issues. I will need to create a proxy server before deployment which was outside the original scope/timeframe of this project.

## Installation

1. Fork this repository (if you want to edit/expand, otherwise you can skip this step).
2. Clone it down to your local machine via the green `Code` button to get your link and then  `git clone <your SSH Key>` in your terminal.
3. If SSH is not set up you can instead clone using `git clone <your HTTP code>`.
4. Navigate into this directory with `cd autoscout`.
5. Run `npm install` to compile the React application.
6. Run `npm start` to see the app running locally (to simply use this app you can end here).
7. Run `<your text editor> .` to see the code in your text editor.
8. Run `npm run cypress` to open Cypress and see all the tests.


## Functionality
* [Main Page View](#main-page-view)
* [Civilization Info](#civilization-info)
* [Responsive Design](#responsive-design)
* [Accessibility](#accessibility)

#### Main Page View
  - When a user visits the site they should be able to see all civilizations on the main screen.
<img src="https://media.giphy.com/media/WtdLWVyrlK19c0VYAB/giphy.gif" width="1440">

#### Civilization Info
  - When a user clicks on a civilization crest they will see details of the civilization displayed onscreen, along with the option to inspect that civilization.
<img src="https://media.giphy.com/media/mKPoqMhjV0CsonF7Np/giphy.gif" width="1440">

#### Civilization Matchups
  - When a user clicks to inspect a civilization they will see potential matches for that civilization.
<img src="https://media.giphy.com/media/jpVzX1zoRajFIQCgbE/giphy.gif" width="1440">

#### Responsive Design
 - Responsiveness was a consideration while designing this application. The application viewed from a mobile device:
 <img src="https://media.giphy.com/media/PrwNn7IMm077NX31Lm/giphy.gif" width="500" align="center">

#### Accessibility
 - Accessibility was a focus on this app. Passes Lighthouse and wave testing with high marks.
<img src="https://media.giphy.com/media/CKTb0GiOBvIIzuja6v/giphy.gif" width="500" align="center">


## Learning Goals

- Design and Implement an app based on personal ideas for targeting a niche audience.
- Create an accessible app that has a clean UI and simple UX.
- Create a multi-page UX using React Router.
- Testing User Flows via `Cypress`.
- Design app around user personas.

## Future Iterations

- Add more civilizations that are currently missing from API
- Improve civilization matchups based on user feedback and game data.


## Technologies Used

- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![ReactRouter](https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465)
- ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)
- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Contributors
* [Connor Anderson-Larson](https://github.com/ConnorAndersonLarson) - Application Creator


## Contact

[<img src="https://img.shields.io/badge/LinkedIn-connor--andersonlarson-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin1]
[<img src="https://img.shields.io/badge/Github-ConnorAndersonLarson-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github1]


<!-- Personal Definitions  -->

[linkedin1]: https://www.linkedin.com/in/connor-anderson-larson/
[github1]: https://github.com/ConnorAndersonLarson
