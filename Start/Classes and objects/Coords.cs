using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes_and_objects
{
    internal class Coords
    {
        public int firstBodyX;
        public int firstBodyY;
        public int secondBodyX;
        public int secondBodyY;


        public double Distance()
        {
            int a = firstBodyX - secondBodyX;
            int b = firstBodyY - secondBodyY;
            double c;

            return c = Math.Sqrt((a * a) + (b * b));
        }

        public Coords (int firstBodyX, int firstBodyY, int secondBodyX, int secondBodyY)
        {
            this.firstBodyX = firstBodyX;
            this.firstBodyY = firstBodyY;
            this.secondBodyX = secondBodyX; 
            this.secondBodyY = secondBodyY; 
        }

    }
}
