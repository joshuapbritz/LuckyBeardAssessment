# The Lucky App

## Getting Up and Running
1. This project was built using `yarn` as the dependency manager. To ensure that the correct packages are installed, please ensure you have `yarn` installed.
2. The backend and frontend are separated and must be started separately. This was done to avoid muddling together of the two projects and to keep the two codebases more organised.
3. **Backend**
   1. To get the backend up and running, start by opening `CMD` or `Terminal` window in the `backend` folder of the project (ie, `cd ./backend`).
   2. Install the application dependencies using `yarn install`.
   3. Start the server by running `yarn start:dev`.
   4. _Detailed Backend instructions can be found [here](/backend/README.md)_
4. **Frontend**
   1. Without closing the terminal where the backend server is running, open a new `CMD` or `Terminal` window in the `frontend` folder of the project (ie, `cd ./frontend`).
   2. Install the application dependencies using `yarn install`.
   3. Start the server by running `yarn start`.
   4. _Detailed Frontend instructions can be found [here](/frontend/README.md)_

## Unit Tests
5. Clear instructions on how to run the unit tests

## CSS and Build Philosophy
Due to the size of this project, being a landing/informational page, I opted to not use a framework. In general, I prefer to do the CSS for a project myself as that gives much more control over the styles for that project. It oftens comes down to a case of investing effort into getting an external library (like Bootstrap or Tailwind) to look how the designs look or investing the same amount of effort into building those things myself. For a project of this size, there is less wasted code and wasted effort doing the CSS myself.

For this project, I choose to use vanilla CSS with CSS Modules. This means that the styling is being written in a way the browser understands, out of the box. It also means that all the styles are processed and parsed at build time (as opposed to something like styled-components). I am using CSS variables for style variables and for SEO and page performance, I have integrated React-Snap to create a pre-rendered build of the production ready site.

## Issues Experienced
7. Any issues experienced as well as solutions put in place

## Extras/Wishlist
8. Anything you would do differently if you had additional time
