namespace LearnLibrary
{
    public class SpamMessage
    {
        public string message;
        public int iterations;

        public SpamMessage(string message = "Hello World!", int iterations = 10)
        {
            if(iterations > 1000)
            {
                Console.WriteLine("Упс! Слишком большое кол-во итераций, введите число меньше 1000");
                return;
            }

            this.message = message;
            this.iterations = iterations;
        }

        public void Spam()
        {
            while(iterations > 0)
            {
                Console.WriteLine(message);
                iterations--;
            }
        }
    }
}
