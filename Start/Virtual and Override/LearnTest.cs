Penis pencil = new(21);

PenisWeight weight = new PenisWeight(15, 4);

weight.Combination();
weight.PenisPrint();
public class Penis
{
    public int Length { get; set; }

    public Penis(int length)
    {
        Length = length;
    }

    public virtual void PenisPrint()
    {
        if (Length < 10)
        {
            Console.WriteLine("Tiny Penis!");
        }
        else if (Length < 20)
        {
            Console.WriteLine("Medium Penis!");
        }
        else
        {
            Console.WriteLine("Big Penis!");
        }
    }
}

public class PenisWeight : Penis
{
    public int Weight { get; set; }

    public PenisWeight(int length, int weight)
        : base(length)

    {
        Weight = weight;
    }

    public override void PenisPrint()
    {
        Console.WriteLine($"Длина вашего пениса {Length} см");
    }
    public void Combination()
    {
        if (Length > 14 && Weight > 3)
        {
            Console.WriteLine("Годный хуец!");
        }
        else
        {
            Console.WriteLine("Недостойно внимания...");
        }
    }
}
