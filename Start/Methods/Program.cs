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

            //=======================================================================================================

            int ArraySum(params int[] bebebeNums)
            {
                int result = 0;
                foreach(int i in bebebeNums)
                {
                    result += i;
                }
                return result; 
            }

            int[] nums = {1, 2, 3, 4, 5};

            Console.WriteLine(ArraySum(nums));

            //========================================================================================================

            void Compare(int[] array1, int[] array2)
            {
                int arraySum1 = 0;
                int arraySum2 = 0;

                int Sum(ref int sum, int[] array)
                {
                    foreach(int i in array)
                    {
                        sum += i;
                    };

                    return sum;
                };

                Sum(ref arraySum1, array1);
                Sum(ref arraySum2, array2);


                if (arraySum1 > arraySum2)
                {
                    Console.WriteLine($"Сумма элементов array1 больше, чем у array2");
                }
                else if (arraySum1 < arraySum2)
                {
                    Console.WriteLine($"Сумма элементов array2 больше, чем у array1");
                }
                else
                {
                    Console.WriteLine($"Сумма элементов array1 равна сумме array2");
                };
            };

            int[] d = { 1, 2, 3, 4, 5 };
            int[] e = { 1, 2, 3, 4, 5, 6, 7 };


            Compare(d, e);

        }
    }
}
