using Coordes;
using LearnLibrary;

namespace Program
{
    internal class Test
    {
        static void Main(string[] args)
        {
            Coords a = new()
            {
                firstBodyX = 60,
                firstBodyY = 120,
                secondBodyX = 30,
                secondBodyY = 80,
            };

            double result = a.Distance();
            //Console.WriteLine(result);

            SpamMessage suck = new SpamMessage("Соси яйца)", 1000);
            suck.Spam();

        }

    }
}







