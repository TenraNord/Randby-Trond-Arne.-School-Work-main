using System;

namespace ExercisesC_
{
    public class Vehicle
    {
        public string Color { get; set; }
        public string Manufacturer { get; set; }
        public int GasLevel { get; set; }

        public bool isDriving = true;

        public Vehicle(string color, string maufacturer, int gassLevel)
        {
            Color = color;
            Manufacturer = maufacturer;
            GasLevel = gassLevel;
        }

        public virtual void Drive()
        {
            Console.WriteLine($"{Color} {Manufacturer}");
            Console.WriteLine("Motor is running, VROOOOM !");
            ContinueDriving();
        }

        public virtual void ContinueDriving()
        {
            while (isDriving)
            {
                Console.WriteLine("Continue driving? Yes (y) No (n)");
                string continueDrivingInput = Console.ReadLine();

                if (continueDrivingInput == "y")
                {
                    HitTheGas();
                }
                else if (continueDrivingInput == "n")
                {
                    Console.WriteLine($"You stop driving");
                    isDriving = false;
                }
                else
                {
                    Console.WriteLine("Invalid input.");
                }
            }
        }

        public virtual void HitTheGas()
        {
            if (GasLevel <= 0)
            {
                Console.WriteLine("Out of gas!");
                isDriving = false;
            }
            else
            {
                GasLevel--;
                Console.WriteLine($"Current gas level: {GasLevel}");
                Console.WriteLine("Vroooom!");
            }
        }
    }
}