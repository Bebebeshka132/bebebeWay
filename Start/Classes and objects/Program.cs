using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes_and_objects
{
    class Person
    {
        public string name = "Undefined";   // имя
        public int age;                     // возраст

        public void Print()
        {
            Console.WriteLine($"Имя: {name}  Возраст: {age}");
        }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            Person a = new Person();

            string name = a.name;
            Console.WriteLine(name);

        }
    }
}







