To begin just run npm install then npm start

# Would you rather

This is a udacity project about choosing your best option from two options

The main page first checks if there is a user by checking **currentUser** in the store:

if **null** the page render a sign in page.

when the user choose an account we **dispatch** the **currentuser** and makes the page render *home*

--------------------------------------------------------------------------------------------------------
In *home* first we added a list to navigate the site

then we have **Routes** to *home*, *questions* (*vote*), *add* and *leaderboard* 

the nav is in all pages of the site

the *home* page have a checker boolean that changes on click of answered and unanswered buttons and the page renders the content based on the checker value

the questions have a button that navigate to the *voting* page or the *voting details*

----------------------------------------------------------------------------------------------------------
In *voting* page the user have two options to choose and it **dispatch** the new choice and render the *voting details* 

-----------------------------------------------------------------------------------------------------------
In *add* it allows the user to create the question and **dispatch** the new question by taking the value of the two inputs field

and then it redirect to the *home* page

----------------------------------------------------------------------------------------------------------
In *leaderboard*  it shows all the users with their information and ordered from best to worst

-----------------------------------------------------------------------------------------------------------

all of this while having a sign out button all the time
