using System;
using System.Collections.Generic;
using System.IO;
using static ExercisesC_.Program;

namespace ExercisesC_
// --------------------------------------- Task 4 --------------------------------------
{
    internal static class Program
    {
        private static void Main(string[] args)
        {
            Car Car_1 = new Car("Red", "BMW", 4);
            Car_1.RadioOn();
            Car_1.OpenWindow();
            Car_1.Drive();

            //Motorcycle moto_1 = new Motorcycle("Black", "Harly Davidson", 3);
            //moto_1.PutHelmetOn();
            //moto_1.Drive();

            //ECar ECar_1 = new ECar("White", "Nissan ARIYA", 4);
            //ECar_1.Drive();
        }
    }
}
