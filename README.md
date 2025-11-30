# Image-Gallery

Week 2 Assignment

Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

---

For testing purposes I am using three photographs from https://unsplash.com/@fenghua1975

---

Have successfuly used the DOM to add thumbnails on page load and fullscreen images on click to their respective containers. I decided to do this without building a function from addEventListener and instead reading the HTML element reference that is passed to the eventHandler when clicked. In the eventHandler I am able to get reference to the class of the image, look up the array of objects to get a list of src locations for each size and then pick the desired size by the user which is currently determined by a global variable (I'll be implementing a callback function later).

EDIT: Just realised HTML element implementation does NOT work on published github page. Curious to learn why.

At time of writing, unable to figure out why grid centering with place-items breaks flex-shrink so have opted not to use grid (not for centering image containers at least).

Have implemented object-fit: cover for fullscreen images. Currenly width of fullscreen image is 100% which kind of defeats the purpose of using cover instead of fill. I want larger images to maintain their size and just be cut-off by the container borders and implement a way to move the image with user input so the whole image is viewable.
