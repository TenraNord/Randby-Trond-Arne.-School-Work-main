using System;

namespace ExercisesC_
{
    public class ECar : Vehicle
    {
        public ECar(string color, string manufacturer,int gasLevel) : base(color, manufacturer, gasLevel) 
        { 
        
        }
        public override void Drive()
        {
            Console.WriteLine($"{Color} {Manufacturer}");
            Console.WriteLine("Motor is running, ssshhh...");
            ContinueDriving();
        }
        public override void HitTheGas()
        {
            if (GasLevel <= 0)
            {
                Console.WriteLine("Out of power!");
                isDriving = false;
            }
            else
            {
                GasLevel--;
                Console.WriteLine($"Current electricity level: {GasLevel}");
                Console.WriteLine("sssssshhhhhhhhhh!");
            }
        }
    }
}