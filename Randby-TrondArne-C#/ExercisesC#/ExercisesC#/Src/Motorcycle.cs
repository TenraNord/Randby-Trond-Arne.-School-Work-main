using System;

namespace ExercisesC_
{
    public class Motorcycle : Vehicle
    {
        public Motorcycle(string color, string manufacturer, int gasLevel) : base(color, manufacturer,  gasLevel)
        {
        
        }

        public void PutHelmetOn()
        {
            Console.WriteLine("Helmet suits well,...");
            Console.WriteLine("Nice and safe!");
        }
    }
}