# The Lucky App

## Getting Up and Running
1. This project was built using `yarn` as the dependency manager. To ensure that the correct packages are installed, please ensure you have `yarn` installed.
2. The backend and frontend are separated and must be started separately. This was done to avoid muddling together of the two projects and to keep the two codebases more organised.
3. **Backend**
   1. To get the backend up and running, start by opening `CMD` or `Terminal` window in the `backend` folder of the project (ie, `cd ./backend`).
   2. Install the application dependencies using `yarn install`.
   3. Start the server by running `yarn start:dev`.
   4. The frontend can be accessed in a deployed environment [here](https://light-capris-lion.cyclic.app/)
4. **Frontend**
   1. Without closing the terminal where the backend server is running, open a new `CMD` or `Terminal` window in the `frontend` folder of the project (ie, `cd ./frontend`).
   2. Install the application dependencies using `yarn install`.
   3. Start the server by running `yarn start`.
   4. The frontend can be accessed in a deployed environment [here](https://lucky-beard-assessment-bay.vercel.app/)

## Unit Tests
5. Clear instructions on how to run the unit tests

## CSS and Build Philosophy
Due to the size of this project, being a landing/informational page, I opted to not use a framework. In general, I prefer to do the CSS for a project myself as that gives much more control over the styles for that project. It oftens comes down to a case of investing effort into getting an external library (like Bootstrap or Tailwind) to look how the designs look or investing the same amount of effort into building those things myself. For a project of this size, there is less wasted code and wasted effort doing the CSS myself.

For this project, I choose to use vanilla CSS with CSS Modules. This means that the styling is being written in a way the browser understands, out of the box. It also means that all the styles are processed and parsed at build time (as opposed to something like styled-components). I am using CSS variables for style variables and for SEO and page performance, I have integrated [React-Snap](https://www.npmjs.com/package/react-snap) to create a pre-rendered build of the production ready site.

## Issues Experienced/Feedback
1. I found an issue with the logo colour on the landing page. The colour contrast was not very good against the background. In real world circumstances, I would work hand-in-hand with the designers to explore solutions to the issue. In this case, I used intuition and applied an inversion filter to the logo to make it a lighter colour for this screen. As there is not a CI/Branding guide, I do not know if this goes against the brand identity. I have done what would typically be my response to this kind of situation - I have coded a suggested solution that can be shown to a designer so that we can collaborate on a final solution.
2. There was also some weirdness with the placement of the logos (it was very far left and closer to the top on the home screen, and then further right but pushed down on the request a demo screen). In the early stages of coding up the project, I sent and email to Tania (though in the real world this would be to the designer for the project) to confirm whether or not this was the intended design. In looking at this, I also noticed that the logo was slightly clipped on the left and right. This is typically unusual for logos, as most brands want their logo to be shown fully and as designed. I used the fully exported logo and insured it wasn't clipped and made sure the positioning of the logo was consistent across the pages.
3. I could not find validation colours in the designs, so I took the blue colour (which seems to be primary) and created a success green and error red that fit with its saturation and lightness.
4. No loader states where give in the designs for the articles, nor was an error state given. I created a very simple skeleton loader component to display when the articles are loading and made sure a message is shown if an error is returned. 
5. No designs were given for the inputs' focus, validation and value states. I took my best guess with the interaction of the input labels and the input values adding a slight animation to the label on focus (taking inspiration from Material design) and adding colour changes to indicate user interaction. I also added a label that indicates what the particular error on a field is (if applicable).
6. I found that sometimes the email service I am using would fail to send the email which would cause the front-end to crash. To remedy this, I created a toast component that allows an error message to be displayed so that the user can be made aware of the problem and will know to try again.
7. In creating the validators for the contact form, I found that the spec asked for the email field to only cater for alpha characters. However, being aware that many emails include numbers as well as some special characters (ie `.`), I set the field up to use a Regular Expression ([from here](https://regexpattern.com/email-address/)) that would check the validity of the email address.

## Extras/Wishlist
1. If this were going to be a longer lasting project that would grow and have more pages, I would definitely look at moving the inputs to being components. I would also create a wrapped `<FormController />` component that would be able to handle the error states for a form field automatically, rather than having to wire it up on each field. However, where the form fields are being used on one page, it would not make sense to spend so much effort to make these components right now.
