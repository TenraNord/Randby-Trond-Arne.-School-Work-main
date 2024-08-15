using System;

// --------------------------------------- Task 2 --------------------------------------
string originalString = ("Rock`n roll is good for your soul");
string searchString = "roll is good";

Console.WriteLine();

Console.WriteLine("Check wether a given substring is present in the given string:");
Console.WriteLine("Rock`n roll is good for your soul");

Console.WriteLine();

Console.WriteLine("does string contain substring: {0}?:", searchString);
if (originalString.Contains(searchString)) { Console.WriteLine("The substring exists in the string."); }
else { Console.WriteLine("The substrin does not exist in the string."); }