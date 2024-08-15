using System;

// --------------------------------------- Task 1 --------------------------------------
Console.Write("Input the number of lines to the middle of the diamond.");
string inputvalue = Console.ReadLine();
int size;
bool result = Int32.TryParse(inputvalue, out size);
int j;
if (!result) { Console.WriteLine("That is not a number"); }
else
{
    for (int i = 0; i <= size; i++)
    {
        for (j = 1; j <= size - i; j++) { Console.Write(" "); }
        for (j = 1; j <= 2 * i - 1; j++) { Console.Write("*"); }
        Console.WriteLine();
    }
    for (int i = size - 1; i >= 1; i--)
    {
        for (j = 1; j <= size - i; j++) { Console.Write(" "); }
        for (j = 1; j <= 2 * i - 1; j++) { Console.Write("*"); }
        Console.WriteLine();
    }
}