using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExercisesC_
{
    public class Car : Vehicle
    {
        public Car(string color, string manufacturer, int gasLevel) : base(color, manufacturer, gasLevel) 
        { 

        }
        public void OpenWindow()
        {
            Console.WriteLine("Car window is open,");
            Console.WriteLine("Ahh,... fresh air!");
        }
        public void RadioOn()
        {
            Console.WriteLine("Radio turns on,...");
            Console.WriteLine("Jeee, rock`n roll!");
        }
    }
}
