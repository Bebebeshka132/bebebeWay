using System.Security.Cryptography.X509Certificates;

BeSecurity Artyom = new("Фимоз");
Artyom.BebebeAnswer();


BeSecurityClone Chlen = new("Члэн");
Chlen.BebebeAnswer();
public class BeSecurity
{
    public string Answer = "Да";
    public string Bebebe { get; set; } = "Beeee";



    public BeSecurity (string Phrase)
    {
        Bebebe = Phrase;
    }

    public void BebebeAnswer()
    {
        Console.WriteLine("Отвечай только 'Да' или 'Нет' ");
        Console.WriteLine("Ты настоящая Бебебешка?");

        Answer = Console.ReadLine();
        if(Answer == "Да")
        {
            Console.WriteLine("Сейчас проверим!");
            if(Bebebe == "Бебебешка")
            {
                Console.WriteLine("Ты прошёл проверку");
            }
            else
            {
                Console.WriteLine("Съебала на парашу дура");
            }
        }
        else
        {
            Console.WriteLine("Ну и пиздуй отсюда нахуй");
        }

    }
}


public class BeSecurityClone : BeSecurity
{
    public new string Answer = "Члэээээн";
    public new string Bebebe { get; set; } = "ЧлЭн";

    public BeSecurityClone(string Phrase) : base(Phrase)
    {

    }

    public new void BebebeAnswer()
    {
        Console.WriteLine("Отвечай только 'Да' или 'Нет' ");
        Console.WriteLine("Ты настоящий ЧлЭн?");

        Answer = Console.ReadLine();
        if (Answer == "Да")
        {
            Console.WriteLine("Сейчас проверим!");
            if (Bebebe == "ЧлЭН")
            {
                Console.WriteLine("Ты прошёл проверку");
            }
            else
            {
                Console.WriteLine("Съебала на парашу дура");
            }
        }
        else
        {
            Console.WriteLine("Ну и пиздуй отсюда нахуй");
        }
    }
        
}