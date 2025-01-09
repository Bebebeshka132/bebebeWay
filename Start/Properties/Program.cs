Properties be = new("sosa2");
Console.WriteLine(be.Name);

    

public class Properties
{
    string name;

    public Properties(string name)
    {
        Name = name;
    }

    public string Name
    {
        //get
        //{
        //    return name;
        //}
        //set
        //{
        //    if(value != "Artyom")
        //    {
        //        Console.WriteLine("Иди нахуй чуркан, папочка это:");
        //    }
        //    else
        //    {
        //    name = value;
        //    }
        //}

        get { return name; }
        set { }

    } 
}
