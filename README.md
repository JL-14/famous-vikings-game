![The Viking Kings Quiz](/documentation/images/viking-quiz-header.png)
---
# *The Viking Kings Quiz*

The Viking Kings Quiz website lets users play a quiz about famous Viking kings. The quiz presents short biographies of a selection of Viking kings, with a question about each king. The user then selects a tile from a grid of 9 options, and is awarded a point for each correct answer. The quiz is educational, in teaching the user about the Viking kings, and fun with interactive functionalities. The quiz currently consists of five Viking kings.

The website can be accessed [here](https://jl-14.github.io/famous-vikings-game/)

![Responsive Mockup](/documentation/images/vikingexperience-mockup.png)

---
## User Stories

### First Time Visitor Goals:

* On my first visit, I want to easily find out what The Viking Kings Quiz is about.
* On my first visit, I want to be able to easily navigate through the site, and find instructions on how to play the game.
* On my first visit, I want to easily be able to play the game.
* On my first visit, I want to see my score after completing the game.

### Returning Visitor Goals:

* On my return visit, I want to be able to easily start a new game.
* On my return visit, I want to be able to play the game to see if I can get all questions right.

### Frequent Visitor Goals:

* As a frequent visitor to the site, I want to see whether there is new content and new Viking kings to learn about.
* As a frequent visitor, I want to play the game again, to see if I can still get the answers right.

---

## Features

### Navbar

- Positioned at the top of the page.

- Contains the name of The Viking Kings Quiz in the center of the header bar. There is a Viking shield on the top left to provide balance to the bar.

- Contains navigation links on the right hand side:

    * Home - leads to the Home Page where the user can launch a new game.

    * Instructions - leads to a popup with instructions on how to play the game.

    * E-mail link - opens the user's chosen e-mail client so the user can contact us (with comments, questions, or suggestions).

- The links have an animation whereby each link is underlined when hovered over, and the cursor becomes a pointer.

- The navigation bar is simply and clearly set out, giving a good first impression for the user.

![Navbar](/documentation/images/viking-quiz-navbar.png)

- The navigation bar is responsive:

* On tablets (in portrait mode) and mobile phones: 

- The shield image and subtitle ('-How well do you know your Vikings?') are removed to prevent the narrower navbar from being cluttered.

![Navbar Smaller screens](/documentation/images/viking-quiz-navbar-narrow.png)

---

### Home Page

- The Home Page introduces the user to the concept of the game, providing a little bit of background about the Vikings, and a start button to begin the game.

#### General background and Cover Text

- The general background is a cartoon image of a Viking ship in a bay.

- The background image is fixed, so that the sections appear to scroll over the image.

- On the Home Page there is a cover text box with a semi-transparent background, with the welcome message motivating visitors to explore more.

![Front Page](/documentation/images/viking-quiz-front-page.png)

#### Introduction

- The introduction sets out a little of the history of the Vikings and how their histories were recorded, and introduces the game.

#### Start Button

- There is a clearly coloured yellow start button, which starts the game.

#### Footer

- The Footer is at the base of each page, in a fixed position.

- The Footer has links to the Home Page, Social Media, the creator's GitHub home page, and Copyright information.

- The links have animations in the form of a colour change and a bottom line under the relevant link when hovered over.

---

### Game Page

- The Game page, which is a modal activated by the Start Button on the Home Page, has the same navbar, background image, and footer as the Home Page.

![Game Page](/documentation/images/viking-quiz-game-page.png)

- The page consists of a biography of one of five Viking kings, a question relating to that king, a grid of nine possible answers, and a score box with a quit button.

#### Viking Biographies:

![Viking Biography](/documentation/images/rollo-biography.png)

- Each Viking biography shows the name and date of birth and death of the Viking, an image of the Viking from historical or artistic sources, and a short description of the main achievements of the Viking.

- The Viking biography changes to the next Viking when the Next Question button is clicked.

- There are five questions in total.

#### Question

![Question](/documentation/images/question-screenshot.png)

- Each Viking biography is accompanied by a question relating to the text in the biography.

- The question changes when the Next Question button is clicked, in tandem with the Viking biography changing.

#### Answer Grid

![Answer Grid](/documentation/images/answer-grid.png)

- On the right hand side of the screen there is a grid of 9 tiles, each with a possible answer to the question.

- In this version of the game the tiles are static, and do not change as the Vikings and Questions change. A different tile has the correct answer for each Viking.

- On clicking on a tile, a modal/ popup appears with either feedback that the answer is correct or incorrect.

##### Answer Feedback popups

![Correct Answer](/documentation/images/correct-answer-popup.png)

- The modal consists of feedback that the answer was correct, an animated gif image of a Viking giving the thumbs up, a button for Next Question and a Quit Button.

![Incorrect Answer](/documentation/images/incorrect-answer-popup.png)

- As for the Correct Answers, the modal consists of feedback that the answer was incorrect, an animated gif image of a Viking being hit by lightning, a button for Next Question and a Quit Button.

- Clicking on Next Question opens up a new question window with a new Viking, a new Question, and the same options.

- Clicking on the Quit button brings up a confirmation popup asking the user to confirm that they want to quit the game. If they confirm they are returned to the front page, and if they cancel they are returned to the modal, where they can click Next Question to continue.

![Quit confirmation](/documentation/images/quit-confirmation.png)

- The final, fifth, question brings up a slightly different modal both for the correct and incorrect answers.

![Final Correct Answer](/documentation/images/final-correct-answer.png)

![Final Incorrect Answer](/documentation/images/final-incorrect-answer.png)

- The final modals inform the user that it was the final question, and provides a Finish button which takes the user to the final score page. There is also a button to quit.

#### Score Area

![Score Area](/documentation/images/score-area.png)

- The Score Area consists of a tally of right answers, wrong answers, and a Quit button.

- The scores are updated dynamically when answers are clicked, according to whether the answer is correct or incorrect.

- Correct answers are displayed in green, wrong answers in red.

#### Final Score Screens

- After the final answer has been answered and the user clicks on the Finish button, a final result modal appears with the final score and feedback and an animated git image depending on whether they were successful in the game or not.

- The score threshold set in this game is 3 out of 5 to be successful, so scores between 3 and 5 gives a success final screen whilst scores between 0 and 2 gives the unsuccessful final screen.

![Final Screen -Success](/documentation/images/final-screen-success.png)

![Final Screen -Fail](/documentation/images/final-screen-fail.png)

- From the final screen there is a button to Return to Main Page, returning to the front page where the user can start a new game if they so wish.

---

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) - was used for the formatting and layout of the site.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - was used to programme interactive elements of the site.
- [Balsamiq](https://balsamiq.com/) was used to make wireframes for the website.
- [Gitpod](https://gitpod.io/) was used as a backup IDE tool for writing code and editing.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.
- [GitHub Pages](https://pages.github.com/) was used to deploy the website on the internet.
- [iStock](https://www.istockphoto.com/) was used to source the images on the website.
- [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html) was used to edit and size images on the website.

---

## Design

### Colour Scheme

![Color Palette](/documentation/images/colour-palette.png)

- A soft light brown colour was chosen as the main background colour, as psychologically it is associated with warmth, nature, earthiness, reliability, and support. These properties match the theme of the website, which provides outdoor experiences and work with natural materials.

- A warm medium brown colour was used for the title and logo, for the same reasons as the main background colour, providing a middle contrast between the background and font colours.

- A darker brown colour was used for fonts, headings and borders, chosen as it matches and provides good contrast against the background colour.

- A slightly brighter light brown colour was chosen for the contact form boxes, to make the boxes stand out clearly against the background colour, and encourage action for these sections.

### Typography

![Main Font](/documentation/images/font-sourcesanspro.png)

- Source Sans Pro was used as the main font for the website as it provides good readability and works well with the header font.

![Title font](/documentation/images/font-josefinsans.png)

- Josefin Sans was used for titles and headers as it has a Nordic appearance (with sharper edges than the main font), is legible and goes well with the theme of the website.

### Wireframe

![Wireframe for website](/documentation/images/wireframe.png)

- The wireframe for the website was greated using the Balsamiq wireframe tool, creating an initial outline of the website. The initial design was further developed as the website was realised, but the core concept and design remains consistent.

The full wireframe document can be found [here](/documentation/images/balsamiq-wireframes.pdf)
---

## Testing

In order to confirm the functionality, responsiveness and presentation of the website, it was tested on a range of screen types and screen sizes, across Chrome, Firefox, and Edge browsers.

The website displays correctly across the different browsers, and also across different screen sizes. The responsiveness of the website was tested on several screens (different width monitors, iPhone 14 Max, and other displays used by other users), and also through the [Responsive Viewer add-in](https://responsiveviewer.org/) on Google Chrome:

![Responsive Viewer](/documentation/images/responsive-viewer.png)

### Manual testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Navbar | | | | | |
| Home | Click on the "Home" link | The user is redirected to the main page | Yes | Yes | - |
| Packages | Click on the "Packages" link | The user is redirected to the Packages page | Yes | Yes | - |
| Contact | Click on the "Contact" link | The user is redirected to the contact page | Yes | Yes | - |
| Logo | Click on the logo | User is redirected to Home page | Yes | Yes | - | - |
| Footer | | | | | |
| Facebook link in the footer | Click on the Facebook link | The user is redirected to the Facebook page | Yes | Yes | - |
| Twitter link in the footer | Click on the Twitter link | The user is redirected to the Twitter page | Yes | Yes | - |
| Instagram link in the footer | Click on the Instagram link | The user is redirected to the Instagram page | Yes | Yes | - |
| Contact Us link in the footer | Click on the Contact Us link | The user is redirected to the Contact/ Booking page | Yes | Yes | - |
| Home page | | | | | |
| Seafaring package link on Home Page | Click on the Seafaring package link | The user is redirected to the Seafaring package on the Packages page | Yes | Yes | - |
| Camp package link on Home Page | Click on the Camp package link | The user is redirected to the Camp package on the Packages page | Yes | Yes | - |
| Arts and Crafts package link on Home Page | Click on the Arts and Crafts package link | The user is redirected to the Arts and Crafts package on the Packages page | Yes | Yes | - |
| E-mail link in Location section | Click on the E-mail link | The user is redirected to the an e-mail client | Yes | Yes | - |
| Packages page | | | | | |
| "Go to Contact/ Booking" button under Seafaring package description | Click on the "Go to Contact/ Booking" button | The user is redirected to the contact page | Yes | Yes | - |
| "Return to Home Page" link under Seafaring package description | Click on the "Return to Home Page" link | The user is redirected to the Home page | Yes | Yes | - |
| "Return to Top" link under Seafaring package description | Click on the "Return to Top" link | The user is redirected to the top of the Packages page | Yes | Yes | - |
 "Go to Contact/ Booking" button under Camp package description | Click on the "Go to Contact/ Booking" button | The user is redirected to the contact page | Yes | Yes | - |
| "Return to Home Page" link under Camp package description | Click on the "Return to Home Page" link | The user is redirected to the Home page | Yes | Yes | - |
| "Return to Top" link under Camp package description | Click on the "Return to Top" link | The user is redirected to the top of the Packages page | Yes | Yes | - |
| "Go to Contact/ Booking" button under Arts and Crafts package description | Click on the "Go to Contact/ Booking" button | The user is redirected to the Contact page | Yes | Yes | - |
| "Return to Home Page" link under Arts and Crafts package description | Click on the "Return to Home Page" link | The user is redirected to the Home page | Yes | Yes | - |
| "Return to Top" link under Arts and Crafts package description | Click on the "Return to Top" link | The user is redirected to the top of the Packages page | Yes | Yes | - |
| Contact/ Booking page | | | | | |
| Name input | Enter name | Name is entered and box changes colour from red to brown | Yes | Yes | If user does not enter a name, an error message appears on pressing the "Send !!!" button |
| Email input | Enter email address | Email is entered and box changes colour from red to brown | Yes | Yes | If user does not enter an email address, an error message appears on pressing the "Send !!!" button |
| Telephone input | Enter telephone number | Telephone number is entered | Yes | Yes | - |
| Booking section checkboxes | Click on the checkboxes | The box is selected and displays a tick when clicked | Yes | Yes | - |
| Booking section date selector (dropbox) | Click on the "Available Seafaring Dates" box (or Camp Dates or Arts and Crafts Dates) | A list of available dates drops down and a date can be selected | Yes | Yes | - |
| Open text query field | Enter text | Text is entered | Yes | Yes | - |
| Terms and Conditions link | Click on link | Terms and Conditions are loaded in a new window | Yes | Yes | - |
| Preferred contact type radio boxes | Click on preferred radio box | Preferred radio box is marked | Yes | Yes | If user does not select a preferred contact type, an error message appears on pressing the "Send !!!" button |
| "Send !!!" button | Click on the "Send !!!" button | The user is redirected to the Thank You page | Yes | Yes | If any of the required fields (name, email, preferred contact type) have not been completed, an error message appears |
| E-mail link in Location section | Click on the E-mail link | The user is redirected to the an e-mail client | Yes | Yes | - |

---

### Validator Testing

### HTML
#### Home Page
- No errors or warnings were found when W3C Validator was employed.

![Home Page HTML Validator](/documentation/images/w3c-validator-home-100623.png)

#### Packages Page
- No errors or warnings were found when W3C Validator was employed.

![Packages Page HTML Validator](/documentation/images/w3c-validator-packages-100623.png)

#### Contact Page

- No errors or warnings were found when W3C Validator was employed.

![Contact Page HTML Validator](/documentation/images/w3c-validator-contact-100623.png)

#### Terms and Conditions Page

- No errors or warnings were found when W3C Validator was employed.

![Terms and Conditions Page HTML Validator](/documentation/images/w3c-validator-t-and-c-100623.png)

#### Thank You Page

- No errors or warnings were found when W3C Validator was employed.

![Thank You Page HTML Validator](/documentation/images/w3c-validator-thankyou-100623.png)

### CSS

- No errors were found when the W3C CSS Validator was employed.

![CSS Page Validator](/documentation/images/w3c-css-validator-100623.png)

- There were 5 warnings when the W3C CSS Validator was run.

![CSS Page Validator Warnings](/documentation/images/w3c-css-validator-warnings-100623.png)

- The warnings all relate to embedded content on the website, and on testing with Firefox and Chrome browsers were not found to affect performance.

---

### Performance
- Using Lighthouse in DevTools on the Chrome browser I checked the performance of the website, which was very good across the board. The only flagged area was linked to the use of anchors for internal links which had no text attached and so were perceived by the Validator as affecting Search Engine Optimization (SEO).

#### Home Page

![Home Page Lighthouse](/documentation/images/lighthouse-home.png)

#### Packages Page

![Packages Page Lighthouse](/documentation/images/lighthouse-packages.png)

#### Contact Page

![Contact Page Lighthouse](/documentation/images/lighthouse-contact.png)

#### Terms and Conditions Page

![Terms and Conditions Page Lighthouse](/documentation/images/lighthouse-tandc.png)

#### Thank You Page

![Thank You Page Lighthouse](/documentation/images/lighthouse-thankyou.png)

---

### Accessibility Testing

- The accessibility of the website for visitors with assistive technologies or other impairments was tested using the Google WAVE extension. 

- After making some adjustments to increase contrast, there were no accessibility errors, with some warnings about the length of some ARIA-label descriptions (the descriptions being on the long side) which I decided do not impair the accessibility of the website.

![Home Page WAVE](/documentation/images/wave-home.png)

#### Packages Page

![Packages Page WAVE](/documentation/images/wave-packages.png)

#### Contact Page

![Contact Page WAVE](/documentation/images/wave-contact.png)

#### Terms and Conditions Page

![Terms and Conditions Page WAVE](/documentation/images/wave-tandc.png)

#### Thank You Page

![Thank You Page WAVE](/documentation/images/wave-thankyou.png)

---

## Deployment

- The website was deployed to GitHub Pages.

- In order to deploy, the following process was followed:
    1. Select the [GitHub repository](https://github.com/JL-14/viking-experience-uk) and go to Settings.
    2. Select the **Main Branch** from the Source Dropdown menu, and click Save.
    3. The page will be refreshed automatically with a detailed report showing successful deployment.

- The live link can be found [here](https://jl-14.github.io/viking-experience-uk/)

## Local Deployment

- The Viking Experience UK website can be cloned in your IDE, creating a local copy. The following command will create the clone:

- `git clone https://github.com/JL-14/viking-experience-uk'

- In Gitpod you can open the workspace [here](https://gitpod.io/#https://github.com/JL-14/viking-experience-uk)

---

## Bugs

### Existing Bugs

1. There is a warning in DevTools on Chrome and Firefox browsers stating that: 

"DevTools failed to load source map: Could not load content for chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/sourceMap/chrome/scripts/content_autoplay_detection.js.map: System error: net::ERR_BLOCKED_BY_CLIENT"

- The warning relates to the embedded Google Map in the Location section on the Home Page, and does not affect performance.

2. The W3C CSS Validator returned five warnings relating to external third-party content in the code, none of which affect the user experience.

3. On the very smallest screen sizes the word 'experiences' in the semi-transparent cover text box exceeds the background container, with the 'e' and the 's' appearing on or just outside the edge. 

- The issue does not disrupt user experience, and will be addressed in future versions.

4. At the smallest screen sizes (<400px) the edges of the header bar and footer bar are cropped -outside the on-screen display so does not affect user experience.

- The issue will be addressed in future versions.

### Solved Bugs
- A number of bugs were solved throughout the design of the website, on a running basis.

- The greatest number of bugs related to the use of flex-boxes, and were resolved through changing display types and layouts.

- There were also bugs related to the use of fixed heights affecting the responsivity of the website, solved through replacing with relative values.

---

## Future Improvements
* add Favicon with [Favicon Generator](https://realfavicongenerator.net/)
* further refine responsive design elements to improve appearance on the smallest screens (especially small mobiles)
* refine the images used, both in terms of file-types and placement on the Packages page
* add an up-to-date availability checker and the ability to book and pay online on the website
* add a custom 404 Error page
* add a gallery page
* add feedback functionality

---

## Credits

+ #### Content

- The idea, concept, and content for the website came from me (Jorgen Lovbakke).

- In developing the idea and concept, I consulted "Viking Britain -A History" by Thomas Williams, published in 2017 by William Collins Publishers.

- Inspiration for the use of a fixed background image came from the Code Institute's 'Love Running' project.

+ #### Media

- Most of the images on the website were downloaded from [iStock](https://www.istockphoto.com/).

-The images not from iStock were:
* Reception image on Home Page: Clive Perrin / The Viking Longhouse Ancient Technology Centre Cranborne Dorset / CC BY-SA 2.0
* Shipbuilding image on Packages page: Photo illustration: NDLA.no
* Viking ship with rowers on Packages page: From 	Viking archive, Jarmeryk (archiwum własne wikingów, Jarmeryk)
* Viking in bow of Viking ship on Packages page: From pl.pinterest.com
* Viking cook on Packages page: GEOGRAPHY PHOTOS / UNIVERSAL IMAGES GROUP / GETTY IMAGES
* Viking tent by the seaside on Packages page: Marcos Lima Silveira
* Viking craftsman working with reeds on Packages page: https://www.northlincs.gov.uk/ Visit the Vikings site
* Viking jewellery on Packages page: https://laptrinhx.com/
* Carved dragon head on Packages page: Thorvald-Rhys Bjørnson

+ #### Tools

- [coolors](https//:coolors.co) was used to create the colour palette
- [Am I Responsive](https://ui.dev/amiresponsive) was used to create the multi-screen mockup for the README.md document
- [WAVE Accessibility evaluator](https://wave.webaim.org/) was used to test the accessibility of the website

---

## Acknowledgements

- [Juliia Konovalova](https://github.com/IuliiaKonovalova) for her support as Code Institute mentor for the project, for her invaluable insights and suggestions.
- [Code Institute](https://codeinstitute.net/) and Slack community members for the teaching, tutor support, and resources for the project.
- My wife, Joanne Lovbakke, for her patience with me whilst doing the project, and her amazing insights into design and layouts.
- Coders across the world offering their time and support on forums such as [Stack Overflow](https://stackoverflow.com/) and [Reddit](https://www.reddit.com/r/programming/).

