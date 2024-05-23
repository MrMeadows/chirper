# Development Journal

## 5/22/2024

Today I began converting the form within the Input component into a pop-up modal. So far, I have coded the functionality and some of the styling for the pop-up modal, but I am struggling to get the pop-up to display directly in the center of my webpage.

I feel like the issue is that the Input component wants to center at its location relative to its placement within the parent App. This means that I will have to somehow change the styling of this pop-up from within the parent App.

## 5/21/2024

Wow. Okay. I got the username to pull from the Login component but I'm not entirely sure how I did it becauase it took an hour of experimenting. I, of course, wish that I could simply know the logic and then apply the logic to the program - but this is learning, so please take pity on me.

In the App component, I created an addLogin function to take one argument, a 'login' variable, and use it to create a 'newLogin' const. Perhaps this is redundant, but I copied the 'addChirp' function as much as possible, simply because that is what I have learned thus far.

With the 'newLogin' const created, I used a useState hook in the App component, 'setUsername', to take the 'newLogin' variable and set it as the 'username'. Then I added the 'addLogin' function as a property to the Login component, and fed the 'username' variable from the Login component to the 'addLogin' function via a replica of the 'handleSubmit' function in my Input component. It should also be noted that I removed the 'e.preventDefault' command from the 'handleSubmit' function in the Login component, since I *do*, in fact, want the default function of the submit button to refresh my page after capturing the username.

The next step is to correctly feed the 'username' property into the 'addChirp' function.

** Edit: I did it. That was punishing! My wife asked how I figured it out, and my only answer was, "Um... I tested everything." It turns out my creation of the newLogin const out of the 'login' variable resulted in my 'username' variable being of the 'object' type. My app was very angry that I was trying to pass an object, with no keys, to my child components. Once I removed the unnecessary step of creating the newLogin const and instead just attributed the 'login' variable directly to my 'setUsername' function, and after I had already previously fixed the condition upon which my page re-renders by means of another useState hook to identify when a user is logged in, my posts on 'Chirper' now correctly display a session-specific username to each post. Yay! This took two hours.

Tomorrow, my objective is to begin planning how I'll make the pop-up modal work for posting to Chirper. That shouldn't be too hard!

Which is exactly what I said about the login page...

## 5/20/2024

The plan for today was to set the 'username' variable to a constant value in App.jsx so that every post will have the same username. I did this, and I removed the "username" input field from the Input component.

The next step is to shift the source of the 'username' variable from App to the Login component.

After trying to get the username to be sourced from the Login component, I am stuck trying to get the conditional render to operate based off of the 'username' variable as it would come from the Login component. I will have to try again tomorrow.

## 5/19/2024

After attempting to shift the origin of the username prop from Input to Login, but still generate the Post correctly, I found myself very confused and thus requiring a reversion back to my project's snapshot on 5/18.

After this, I went back to Covalence to rewatch the lecture on props, as I think my struggle exists in an insufficient understanding of how props pass between child components. I've also requested from Higgs a summary of how props pass between child components.

One final note. 5/18 was a Saturday, and so it was my only day where I can devote a substantial amount of time to code. The day felt wasted because I had to not only revert my project to a previous snapshot, but I also was unable to give more time to my home and my wife. We had decided that, since our mutual presence proves difficult for either of us to abstain from conversation, it would be necessary to establish some way for my wife to know how much and for how long she must ignore my presence so that I may focus.

This has resulted in my creation of five categories that define what kind of work I will be doing.

### The Five Categories, Ordered by Focus Required

1. Design - Unfocused, conversation is welcome
1. Code - Low focus, conversation will be distracted
1. Plan - Medium focus, sporadically capable of conversation
1. Research - High focus, minimal interruption please
1. Logic - Unbroken focus, disturb only if urgent

## 5/18/2024

I have setup my Login component and shall now ensure that the user input name will be accepted as a value by the React useState in App.jsx. After that, I will being the CSS / Bootstrap Power Hour and learn as much as I can designing the aesthetics of this project.

## 5/14/2024

I re-implemented day.js so the timestamp is only created as a post is generated, thereby eliminating the universal timestamp issue (UTI). I resolved this issue by removing the generative origin code of the timestamp from the Post component and adding the timestamp as a property of the Chirp object, with the generative origin code of the timestamp residing within handleSubmit function of the Input component. This also meant that I had to add the timestamp property in each components reference to the Chirp object, ensuring that each component had all necessary props and values to correctly receive and display the timestamp in each Chirp.

Alright, my next step is to create a faux login page so that users can Chirp under a continuous alias, rather than input an alias with each Chirp (fake, lame). I've already been advised about this by Luke. I'm going to need to create a conditional render in my App component, and I'll probably create a Login component just to keep the App to a minimal number of lines.

## 5/13/2024

day.js is now added to and running within this project. Each post now has a date-and-timestamp, which is perfect. However, the fact that they update each time I submit a post to the app is less than perfect.

I'm thinking this might be due to each post's continued existence as a live component in my Feed. Therefore, if I can instead create a timestamp at the conception of each post *at and only during the exact moment I **submit** the post*, then perhaps this issue will be resolved. This is most certainly an issue of **scope**, so I do not believe there's any chance of successfully creating an immutable timestamp within the Post component.

The next step is to move the day.js code into the Input component and have it create a new variable each time a post is submitted.

## 5/12/2024

Happy Mother's day, all y'all mothers.

I added the UUID but I have yet to add the timestamp. In the UUID npm read-me, there was no instruction on how to apply a UUID, which was good because it forced me to figure it out. I'm unsure if it was necessary, but I decided to generate a UUID per chirp and *assign it to a variable* rather than generate it directly into the chirp itself. I figured it was cleaner and safer, should something go awry.

Next, I need to add that timestamp. Almost to the CSS power-hour! That will be where I learn a lot of what I've felt I was lacking.

## 5/9/2024

Well that was easier than I thought it would be. CSS overflow was all I needed. Admittedly, I expected I would need to do something special in React to solve this problem.

Next, per a conversation with Luke @ Covalence, I will add UUID's and a timestamp to each Chirp.

## 5/5/2024

I'm sick today, so I relied on Higgs quite a bit for my education and guidance in this update. Basically, I asked Higgs how to solve these problems, and he gave me coding examples that I was able to translate into my own project. I am unsure if I relied too heavily on Higgs for this, but I figured that my manual typing out of the code plus my inquiries to Higgs for elaboration on the logic and purpose of these code bytes would make for satisfactory learning. Now I need to ensure I apply these concepts again, and I expect that I will.

Next is to give the Feed an overflow functionality.

## 5/4/2024

Just kidding. Higgs, the online AI tutor from Covalence, informed me that directly manipulating the DOM in React is not a recommended approach. After some tutoring from Higgs, I implemented the Synthetic Events method in React. I also learned this in Covalence but I needed a refresher as it's been some time.

So now that the Chirp! button in my Input component fires correctly, I can make it generate a post to the Feed component.

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