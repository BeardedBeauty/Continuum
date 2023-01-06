# Continuum
Website built for Marty's Arts Continuum, a local artist in Twin Cities metro in Minnesota. The artist has been given a seperate private web app to upload art without the need for relying on a developer to change the website.
Continuum is built on the MERN stack, and Firebase.

Live: [Marty's Arts Continuum](https://artscontinuum.herokuapp.com)

## Usage
Entering the home page will land on art given by the artist. A scroll down button shows up to bring you to the list of mediums which this artist works with. Selecting one of these mediums (titled in the site "Galleries") will bring you to each of the catagorized works. Clicking on an image will show you a larger version of the artwork in a simple modal window.

## Further Implementation
The artist has requested a login system for purchasing art for the future. Until then, in order to upload artworks to the site without a login/admin function, the artist was given a separate web app for that functionality.

### Image Manager (Admin/Artist side)
This app comes with basic functionality that allows our artist to choose a catagory, write a title and description, and upload an image to the cloud server, [Firebase](https://firebase.google.com). The app also displays images previously uploaded. Firebase then returns a direct link to the image, which the app takes along with the description, title, medium, and runs a POST route to [MongoDB](https://www.mongodb.com/what-is-mongodb).
This app uses React on the front end.

![imageManager](https://firebasestorage.googleapis.com/v0/b/continuum-image-base.appspot.com/o/misc%2FScreen%20Shot%202020-02-27%20at%201.42.07%20PM.png?alt=media&token=a1e0dc00-000c-49d3-8ad6-385195bed47c)

### Continuum (Client/User side)
Main site for users to view and request art commissions. The entire site is mostly built on a single page, with the only exception being the different galleries for art mediums. This app takes advantage of React on the front end.

![Continuum](https://firebasestorage.googleapis.com/v0/b/continuum-image-base.appspot.com/o/misc%2FScreen%20Shot%202020-02-27%20at%201.49.24%20PM.png?alt=media&token=5f5eac62-df60-452d-ad35-c63978a4e022)

Nav links:
* Galleries: Within a gallery, will bring you to the page displaying all galleries.
* About: Auto-scrolls to the bottom, where a short bio is written about the artist.
* Contact: Opens an email link.

### Future Updates
* Scrolling landing image that shifts between images
* User login with cart system for available works to be purchased in original and digital mediums

## Built With
* [React](https://reactjs.org)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com)
* [MongoDB](https://www.mongodb.com/what-is-mongodb)
* [Firebase](https://firebase.google.com)

## Authors
* [John Ochs](https://github.com/BeardedBeauty)
