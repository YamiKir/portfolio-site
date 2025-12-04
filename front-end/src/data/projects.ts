export type Project = {
  name: string;
  slug: string;
  image: string;
  file: string;
  categories: string[];
  description: string;
};

export const projects:Project[] =[


   {
        "name": "Lotus Leaf",
        "slug":"ll",
        "image": "/lotus-bw.png",
        "file": "/downloads/lotusleaf-main.zip",
        "categories":["Python","Command-Line",'feats',"lotus-leaf"],
        "description":"A Peer to Peer File Sharing solution"

    },
    {
        "name": "PokeBot",
        "slug":"pbdc",
        "image": "/poked-bw.png",
        "file": "/downloads/The-People-Project-main.zip",
        "categories":["Java","GUI",'feats',"pb"],
        "description":"A Discord Bot that allows channel memembers to collect, level, and battle Pokemon"

    },
    {
        "name": "SongGuessr",
        "slug":"sgweb",
        "image": "/song-guessr-bw.png",
        "file": "/downloads/Songguessr-main.zip",
        "categories":["Python","JavaScript","Web",'feats',"Music","sg"],
        "description":"A site that challenges players ability to decipher the origin of a random song from around the world via Spotify previews."

    },



    {
        "name": "hi.cc",
        "slug":"hi-cc",
        "image": "/cpp_bw.png",
        "file": "/downloads/hi.cc",
        "categories":["Cpp","Command-Line",'tic-tac-toe'],
        "description":"A Hello World!"

    },
    {
        "name": "junk",
        "slug":"junk",
        "image": "/ruby_bw.png",
        "file": "/downloads/junk",
        "categories":["Cpp","Command-Line",'tic-tac-toe'],
        "description":"A Hello World!"

    },
    {
        "name": "stringCompare.cpp",
        "slug":"stringCmp-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/stringCompare.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"This program is used to validate if strings (20 char arrays) are basically the same as one another regardless of things like differences in casing."

    },
    {
        "name": "TicTacToe.cpp",
        "slug":"TicTacToe-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/TicTacToe.cpp",
        "categories":["Cpp","Command-Line",'tic-tac-toe'],
        "description":"This program is an interactive game of TicTacToe written when I was in highschool circa 2020. This verison has a better output than \'ttt.cpp\'"

    },
    {

       "name": "ttt.cpp",
        "slug":"ttt-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/ttt.cpp",
        "categories":["Cpp","Command-Line",'tic-tac-toe'],
        "description":"This program is an interactive game of TicTacToe written when I was in highschool circa 2020. This verison has a better internal style than \'TicTacToe.cpp\'"

    },

    {

       "name": "4.13.py",
        "slug":"413-py",
        "image": "/python_bw.png",
        "file": "/downloads/4.13.py",
        "categories":["Python","Command-Line", "HS"],
        "description":"This program illustrates how quickly populations can change given an interval time and rate of change."

    },
    {

       "name": "4.14.py",
        "slug":"414-py",
        "image": "/python_bw.png",
        "file": "/downloads/4.14.py",
        "categories":["Python","Command-Line", "HS"],
        "description":"This program illustrates a staircase pattern."

    },
    {

       "name": "4.15.py",
        "slug":"415-py",
        "image": "/python_bw.png",
        "file": "/downloads/4.15.py",
        "categories":["Python","Command-Line", "HS"],
        "description":"This program illustrates a staircase pattern."

    },
    {

       "name": "5.14.py",
        "slug":"514-py",
        "image": "/python_bw.png",
        "file": "/downloads/5.14.py",
        "categories":["Python","Command-Line", "HS"],
        "description":"This program calculates kinetic energy given mass and velocity of an object. This program was designed to test method declarations in Python."

    },
    {

       "name": "5.15.py",
        "slug":"515-py",
        "image": "/python_bw.png",
        "file": "/downloads/5.15.py",
        "categories":["Python","Command-Line", "HS"],
        "description":"This program calculates a overall course grade given 5 assignments of equal weight on a 10 point-grading scale"

    },
    {

       "name": "5.21.py",
        "slug":"521-py",
        "image": "/python_bw.png",
        "file": "/downloads/5.21.py",
        "categories":["Python","Command-Line", "HS","RPS"],
        "description":"This program is a simulated game of rock, paper, scissors. Use the command /'poison'/ to quit"

    },
    {

       "name": "6.78.py",
        "slug":"678-py",
        "image": "/python_bw.png",
        "file": "/downloads/5.15.py",
        "categories":["Python","Command-Line", "HS"],
        "description":"This program generates {x} random numbers and then writes them out a file with the name /'ranNum.txt/' and then reads the random numbers from the file. "

    },
    {
        "name": "Copy.cpp",
        "slug":"copy-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/Copy.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"This program was supposed to copy itself to how the system function worked. I don't think this is functional currently."

    },
    {
        "name": "EQ1.cpp",
        "slug":"EQ1-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/EQ1.cpp",
        "categories":["Cpp","Command-Line","Euler"],
        "description":"This program part of ProjectEuler.org's challenges. Problem 1. (Details ommited to avoid webscrapping answers)"

    },
    {
        "name": "EQ2.cpp",
        "slug":"EQ2-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/EQ1.cpp",
        "categories":["Cpp","Command-Line","Euler"],
        "description":"This program part of ProjectEuler.org's challenges. Problem 2. (Details ommited to avoid webscrapping answers)"

    },
    {
        "name": "EQ6.cpp",
        "slug":"EQ6-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/EQ6.cpp",
        "categories":["Cpp","Command-Line","Euler"],
        "description":"This program part of ProjectEuler.org's challenges. Problem 6. (Details ommited to avoid webscrapping answers)"

    },
    {
        "name": "EQ7.cpp",
        "slug":"EQ7-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/EQ7.cpp",
        "categories":["Cpp","Command-Line","Euler"],
        "description":"This program part of ProjectEuler.org's challenges. Problem 7. (Details ommited to avoid webscrapping answers)"

    },
    
     {
        "name": "EvenIntegersTo50000.cpp",
        "slug":"EvenIntegersTo50000-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/EvenIntegersTo50000.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"This program prints the sum of all evens from 2->500000."

    },
    {
        "name": "fibRecurrence.cpp",
        "slug":"fibrecurrence-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/fibRecurrence.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"This program recursively calls a fib function to calculate the next fibonacci number in sequence. Restricted to the first 19 numbers."

    },
    {
        "name": "HiVS.cpp",
        "slug":"HiVS-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/HiVS.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"Hello World for Visual Studio Code."

    },
    {
        "name": "INT CHECKER.cpp",
        "slug":"intCheck-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/INT CHECKER.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"Checks if the inputted number was an integer"

    },
    {
        "name": "isPrime.cpp",
        "slug":"isPrime-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/isPrime.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"Checks if the inputted number was prime"

    },
    {
        "name": "http.zip",
        "slug":"http-zip",
        "image": "/java_bw.png",
        "file": "/downloads/http.zip",
        "categories":["Java","Browser"],
        "description":"Java server that generates a page given a form response"

    },
    {
        "name": "bank_accounts.zip",
        "slug":"bank-accounts-zip",
        "image": "/cpp_bw.png",
        "file": "/downloads/bank_accounts.zip",
        "categories":["Cpp","Command-Line"],
        "description":"A bank sign-in simulation. Look in the .txt for accounts."

    },
    {
        "name": "carz.zip",
        "slug":"carz-zip",
        "image": "/cpp_bw.png",
        "file": "/downloads/Carz.zip",
        "categories":["Python","Graphics"],
        "description":"A car simulation with a simple gui menu"

    },
    
     {
        "name": "misc_python.zip",
        "slug":"miscpython-zip",
        "image": "/python_bw.png",
        "file": "/downloads/misc_python.zip",
        "categories":["Python","Command-Line"],
        "description":"An assortment of python files."

    },
    {
        "name": "misc_java_graphics.zip",
        "slug":"miscjavagraphics-zip",
        "image": "/java_bw.png",
        "file": "/downloads/misc_java_graphics.zip",
        "categories":["Java","Graphics"],
        "description":"An assortment of Java (ideally graphical) files."

    },


{
        "name": "my_string_check.cpp",
        "slug":"mystringcheck",
        "image": "/cpp_bw.png",
        "file": "/downloads/my_string_check.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"An assortment of a custom string checker for a string. Read the file for cooler things than just is visible"

    },

    {
        "name": "pascal.cpp",
        "slug":"pascal-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/pascal.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"Prints out a pascal triangle."

    },
    {
        "name": "pigGame.cpp",
        "slug":"pigGame-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/pigGame.cpp",
        "categories":["Cpp","Command-Line","Game"],
        "description":"This program is an integrative game of PIG!"

    },
    {
        "name": "Pointers.cpp",
        "slug":"Pointers-cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/Pointers.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"This program is to show the difference of pointers, values, addresses, and their relationship"

    },
   
    {
        "name": "prog1.py",
        "slug":"prog1-py",
        "image": "/python_bw.png",
        "file": "/downloads/prog1.py",
        "categories":["Python","Command-Line"],
        "description":"Writes the falling position over time to a file."

    },
     {
        "name": "prog2.py",
        "slug":"prog2-py",
        "image": "/python_bw.png",
        "file": "/downloads/prog2.py",
        "categories":["Python","Command-Line"],
        "description":"Golf file writing"

    },
    {
        "name": "prog22.py",
        "slug":"prog22-py",
        "image": "/python_bw.png",
        "file": "/downloads/prog22.2py",
        "categories":["Python","Command-Line"],
        "description":"Golf file writing?"

    },
    {
        "name": "Strings.zip",
        "slug":"strings-zip",
        "image": "/cpp_bw.png",
        "file": "/downloads/Strings.zip",
        "categories":["Cpp","Command-Line"],
        "description":"Custom Strings"

    },
    {
        "name": "RadixSort.cpp",
        "slug":"RadixSort.cpp",
        "image": "/cpp_bw.png",
        "file": "/downloads/RadixSort.cpp",
        "categories":["Cpp","Command-Line"],
        "description":"Radix Sort of 4 digit numbers."

    },


   
]

