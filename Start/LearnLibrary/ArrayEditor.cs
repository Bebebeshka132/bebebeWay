namespace LearnLibrary
{   
        public class ArrayEditor<T> where T : class
        {
            public T[] Array { get; set; }
            public ArrayEditor(T[] Array)
            {
                this.Array = Array;
            }

            public void PrintArray()
            {
                foreach (T i in Array)
                {
                    Console.WriteLine(i);
                }
            }

            public void ArrayLength()
            {
                Console.WriteLine(Array.Length);
            }

            public void ArrayGetIndex(int index)
            {
                Console.WriteLine(Array[index]);
            }

            public T[] ArrayPush(T value)
            {
                T[] ArrayClone = new T[Array.Length + 1];

                for (int i = 0; i < Array.Length; i++)
                {
                    ArrayClone[i] = Array[i];
                }
                ArrayClone[Array.Length] = value;

                return Array = ArrayClone;
            }

            public T[] ArrayPop(int index)
            {

                T[] ArrayClone = new T[Array.Length - 1];

                int newIndex = 0;

                for (int i = 0; i < Array.Length; i++)
                {
                    if (i == index) continue;

                    ArrayClone[newIndex] = Array[i];
                    newIndex++;
                }

                return Array = ArrayClone;
            }
        }
}
