# A Practise Tech Test
This is an attempt at a companies tech test. Mostly using this is a as a vehicle to practise node.js. What I'm specifically interested in is getting better at TDD with node.js as well as modelling JavaScript apps. I'll be doing this over a few hours and then have someone do a code review with me to let me know where there are flaws in my logic.

This project is not intended to be cloned and so there are no install instructions.


# Approach
The tech test calls for a developer to build an API endpoint. To me that sounds like one entry point into the program and then an unprompted output of an object ready to bes consumed by another program or maybe sent somewhere else by parsing it into JSON. So a main thought is that there needs to be logical calls to action so that the data is sorted and spat out in a formatted way.

My next thought was how to pass the data around and I decided to wrap the data in JS class functions. This will provide me with some separation of concerns as well as make it more clear to another developer what is going on and where those functions exist. My end goal is to make the code as clear and expandable as possible.  
