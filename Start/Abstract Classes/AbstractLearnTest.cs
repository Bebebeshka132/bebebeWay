Animals Rob = new Rabbit();

Rob.Move(30);

public abstract class Animals
{
    public abstract void Move(int km);
    public abstract void Reproduction();
    public abstract void Eat(int quantity);
    public abstract void Sleep(int time);
}

public class Rabbit : Animals
{
    public override void Move(int km)
    {
        Console.WriteLine($"Кролик бежит со скоростью {km} км/ч");

    }
    public override void Reproduction()
    {
        Console.WriteLine($"Кролик выебал 30 сучек");

    }
    public override void Eat(int quantity)
    {
        Console.WriteLine($"Кролик съел {quantity} киллограмм сена");
    }
    public override void Sleep(int time)
    {
        Console.WriteLine($"Кролик спал {time} часов");

    }
}

public class Horse : Animals
{
    public override void Move(int km)
    {
        Console.WriteLine($"Лошадь скачет со скоростью {km} км/ч");
    }
    public override void Reproduction()
    {
        Console.WriteLine($"Лошадь оприходовала 3-ёх жеребцов");
    }
    public override void Eat(int quantity)
    {
        Console.WriteLine($"Лошадь съела {quantity} киллограмм сена");
    }
    public override void Sleep(int time)
    {
        Console.WriteLine($"Лошадь спала {time} часов");
    }
}