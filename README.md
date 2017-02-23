Group Showcase App:

Welcome to the Node/Express group showcase challenge!

Yesterday, we covered Node modules. And today we’ve learned all about the magic of Express. We will be using all of these things, fun!

App Details:
You'll be building an application that showcases you and your group member's lovely faces (or other appropriate images) and brief biographies. In addition, users of the app will be able to Like each bio if they find them pleasing. The following sections describe how we'd like you to proceed with creating this application.

Setup:
1. Start a new Node project (i.e. use npm init and proceed as shown in lecture).
2. Install express with npm install express --save. Then, install body-parser in the same manner.
3. Create your server--using Express--in an app.js file. Use 3000 for your port.
4. Create a routes folder/directory to store your Express routes.
5. Create a public folder with subdirectories for assets, and scripts.
6. Create an images directory under the assets directory created in the previous step.
7. Place photos of each team member in the images directory.
8. Create a vendors directory under the assets directory and place a copy of jQuery in it.

Functionality:
1. This page will be the first page that users see when they visit localhost:3000. When your website loads, we should see a page that displays a heading with your group's name.
2. Create the index.html file in your public directory.
3. The rest of the page will be populated via AJAX calls to the server.

On page load, you will make two requests:
Request 1:
1. Make a GET request to a /bios route. This route will return an array of objects. You'll have as many objects as you have team members. Each object will include

    a. the name of a team member
    b. a 1-2 sentence bio of the team member
    c. the relative url for the team member's image
    d. Append each object's data to the DOM. And under each image include a Like button.

Request 2
1. Make a GET request to a /likes route. This route will return an object. The object will have the team member's name as a property with their like count as a value.

Like Button:
1. When users click on the Like button, update a server route that keeps track of the number of likes received per person. For example, if you have a team member named Kris, you might have a server route that takes POST requests to the url /likes/kris. Thus, you'll need each button to trigger an AJAX call to each specific route. Upon success of your AJAX call, make another request to GET /likes to update the like count. Display this like count on, next to, or near the Like button.

Submission:
1. Use the assignment app to submit one repo URL per team. Include each team member's name in the comments. Other team members may submit the same repo, or they may submit the names of their team members (so that we can find it).
