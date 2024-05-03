# Development Journal

## 5/3/2024

Alright, I realized that generating a post is far more urgent than manipulating the contents of a generated post (the egg must come before the omelet), so I added an event listener to the 'Chirp!' button, but it fires twice with each click. Also, I found that I needed to insert the code into my App.jsx instead of above the return in my Input.jsx. This must be due to scope. The element my event listener was trying to access didn't exist at the time it was being called. Putting that event listener in the App.jsx allowed the Input.jsx time to render, so the code was then accessible.

Next step is to remove the double firing.

## 5/1/2024

The Input component is designed well enough to permit me some sanity when working on its functionality (Thank you, Luke! https://github.com/przekwas)! Now I can work on making the textarea and username correspond to the correct values of the header and body of the Post component. After that, I'll make the "Chirp!" button create an instance of the Post component to the Feed component. Then, the scroll function in the Feed component.

## 4/30/2024

I've added a "Post" component to my project. In the future, I intend for this component to be called when a user writes and submits a post via the Input component. That may be what I work on next, but it seems a large task, so I'll need to study up on how I'll do that.

## 4/29/2024

I've written and added the most basic versions of the Feed and Input components into the App.jsx file. My next goals are to style the Input component and create the cards that will reside within the Feed component. After that, I will work on a continuous scroll functionality within the Feed component. I have a baby coming in approximately thirty days. We'll see how much progress I can make.

## 4/3/2024

Discussing with Higgs, I have determined a structure for my application. As it stands, I will need to create three different React components to make my project function the way I intend. **'App.jsx'** will exist as the foundational structure for my project, with **'Feed.jsx'** acting as the timeline of posts and **'Input.jsx'** acting as the user input and submission section of the project - with an absolute position at the bottom of the page. This location may change in the future.