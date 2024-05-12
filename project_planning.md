# Chirper App Changelog and Roadmap
Chirper is a lab from the Covalence online technical trade school of web development.
In the future, Chirper will be upgraded to be 'Yowler', a version of Chirper that is inspired by the Wizarding World.
***

### Structure Objectives - Completed 5/5/24
1. Need 'body' container covering central 60% of screen (20% margins either side)
	1. **(Completed 4/29/24)**: Rewrite 'App.jsx' for this purpose
1. Need 'submission' container for text and input on bottom 25% of screen
	1. **(Completed 4/29/24)**: Create 'Input.jsx' for this purpose
1. Need text input and submit button within 'submission' container
1. Need 'timeline' container within body container
	1. **(Completed 4/29/24)**: Create 'Timeline.jsx' for this purpose

*Note: Need to design in CSS **only to distinguish different parts of project**

### Function Objectives
1. Submit function takes input and pushes a card onto the screen containing the inputted text
	1. find correct term from previous lab - **state update & render**
	1. find a way to add a timestamp to the bottom corner - **npm package uuid**
1. Text field
	1. fixed size - **Complete 5/5/24**
	1. text-wrap overflow functionality **Complete 5/9/24**
	1. add scroll functionality to text-field **built into textarea attribute already**
	1. automatic scroll down when beyond text-box capacity - **Complete 5/5/24**
	1. character counter somewhere... somewhere

## Future State

1. Timestamps on Chirps via uuid in npm
1. Fake login screen requiring username and NO password
1. Pop-up modal for Input.jsx rather than being built into the visible App.jsx page 
1. CSS Overhaul
	1. Find design inspiration
	1. Plot out design, ensuring ubiquity of design across all components.
	1. Implement design

