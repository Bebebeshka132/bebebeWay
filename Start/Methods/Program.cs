using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Methods
{
    internal class Program
    {
        static void Main(string[] args)
        {
            void BebebeText()
            {
                Console.WriteLine("Hello, Bebebe");
            }

            BebebeText();

            //=================================================================

            double c = 0;
            string operand;

            Console.WriteLine("CALCULATOR");

            Console.WriteLine("Первое число");
            double a = int.Parse(Console.ReadLine());

            Console.WriteLine("Действие");
            operand = Console.ReadLine();

            Console.WriteLine("Второе число");
            double b = int.Parse(Console.ReadLine());

            void Calc(double f, double k, ref double be, string op)
            {
                
                switch (op)
                {
                    case "+":
                        {
                            be = f + k;
                        }
                        break;

                    case "-":
                        {
                            be = f + k;
                        }
                        break;

                    case "*":
                        {
                            be = f * k;
                        }
                        break;

                    case "/":
                        {
                            be = f / k;
                        }
                        break;
                }
            }

            Calc(a, b, ref c, operand);
            Console.WriteLine(c);
        }
    }
}
