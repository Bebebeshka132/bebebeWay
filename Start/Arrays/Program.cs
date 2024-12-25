using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[,,] mas = { { { 1, 2 },{ 3, 4 } },
                { { 4, 5 }, { 6, 7 } },
                { { 7, 8 }, { 9, 10 } },
                { { 10, 11 }, { 12, 13 } }
              };

            int x = mas.GetUpperBound(0);
            int y = mas.GetUpperBound(1);
            int z = mas.GetUpperBound(2);

            Console.Write("{");

            for (int i = 0; i <= x; i++)
            {
                    Console.Write("{");
                    for (int a = 0; a <= y; a++)
                    {
                    Console.Write("{");

                            for (int b = 0; b <= z; b++)
                            {
                                Console.Write(mas[i, a, b]);
                                if (b < z)
                                {
                                    Console.Write(",");
                                }
                            }

                    Console.Write("}");
                    if (a < y)
                        {
                            Console.Write(",");
                        }
                    }

                Console.Write("}");
                if (i < x)
                {
                    Console.Write(",");
                }
            }

            Console.Write("}");


        }
    }
}
