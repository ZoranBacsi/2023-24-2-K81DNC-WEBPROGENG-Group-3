# PHP Group Test

You got your practice leader's history from YouTube. You would like to create a nice display to visualize and manage the data you aquired.

Display:
    [] Load the data.json JSON file (1 point) OR use the embedded array below. ( 0.5 point )
    [] Display all the songs in a table ordered by year ascending( 1 point )
    [] In the last row of the table count the "Total play time" with a custom function and display it with leading zeros in the following format: 'mm:ss' ( 1.5 point )
    [] Under the "Retro Songs" section display all songs released before 1990. ( 1 point )

Form Handling and Validation:
    [] If the Form is a stateful one (inserted values must be keep until successful saving) ( 1 point )
    [] Implement the following validations: 
        [] All fields are required ( 1 point )
        [] Artist must be minimum 2 characters long and title must be at least 1 character long ( 0.5 point )
        [] Length must be a valid timestamp ( 1 point )
        [] Year must be between 1860 and 2023 ( 1 point )
        [] User could save the song if no errors appears with the following condition:
            [] After saving the song appears in the table, and the Total play time automatically updates and if the year is under 1990, song added to the retro songs list ( 0.5 point)
            [] Song saved in the data.json file after addition ( 0.5 point )
            [] All the fields and storages emptied after addition ( 0.5 point )
        [] All errors displayed correctly after each input field


RULES:
1. You have 45 minutes< to solve each task
2. You have more 5 minutes to upload your solution. After the 50 minutes exceed you have no opportunity to upload your solution
3. You have to upload your solution via Canvas in the specified task as a compressed folder with the following format: '<neptun_id>-<name>-phpGroupTest.zip'. 
4. Any human or AI help is forbidden!
5. The solutions undergo a strict plagiarism check — the authors of strikingly similar solutions may be excluded from the evaluation!
6. A total of 10 points can be obtained in this test, a perfect solution of each partial task is worth one point! There is no minimum score to be achieved.

Fill out the following statement:
<Name>
<Neptun ID>
This solution was submitted and prepared by the student stated above for the assignment of the Web programming course. 
I declare that this solution is my own work. 
I have not copied or used third party solutions. 
I have not passed my solution to my classmates, neither  made it public. 
Students’ regulation of Eötvös Loránd University (ELTE Regulations Vol. II. 74/C. § ) states 
that as long as a student presents another student’s work - or at least the significant part of it - 
as his/her own performance, it will count as a disciplinary fault. The most serious consequence of a 
disciplinary fault can be dismissal of the student from the University.

Sample Array:

[
    [
        "artist" => "Bon Jovi",
        "title" => "It's my life",
        "length" => "3:44",
        "year" => "2000",
    ],
    [
        "artist" => "Bon Jovi",
        "title" => "Livin' on a prayer",
        "length" => "4:11",
        "year" => "1986"
    ],
    [
        "artist" => "AC/DC",
        "title" => "Thunderstruck",
        "length" => "4:52",
        "year" => "1990"
    ],
    [
        "artist" => "AC/DC",
        "title" => "Back in black",
        "length" => "4:14",
        "year" => "1980"
    ],
    [
        "artist" => "AC/DC",
        "title" => "Highway to hell",
        "length" => "3:29",
        "year" => "1979"
    ],
    [
        "artist" => "John Denver",
        "title" => "Take me home, country roads",
        "length" => "3:17",
        "year" => "1971"
    ]
]
