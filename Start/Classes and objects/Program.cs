using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes_and_objects
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Coords a = new Coords(5, 8, 3, 17);
            
            double result = a.Distance();
            Console.WriteLine(result);
        }
    }
}







