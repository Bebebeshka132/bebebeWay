namespace Coordes
{
    public class Coords
    {
        public int firstBodyX;
        public int firstBodyY;
        public int secondBodyX;
        public int secondBodyY;


        internal double Distance()
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
        public Coords ()
        {
            firstBodyX = 60;
            firstBodyY = 120;
            secondBodyX = 30;
            secondBodyY = 80;

        }

    }
}
