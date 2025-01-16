using LearnLibrary;

string[] Be = new string[5] {"a","b","c","d","e"};
Random Random = new Random();

ArrayEditor<string> ArrayPop = new ArrayEditor<string>(Be);

ArrayPop.PrintArray();
ArrayPop.ArrayLength();
ArrayPop.ArrayGetIndex(2);

ArrayPop.ArrayPush("Chleen");
ArrayPop.PrintArray();

ArrayPop.ArrayPop(4);
ArrayPop.PrintArray();

