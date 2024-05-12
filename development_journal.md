# Development Journal

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