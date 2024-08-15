
    int n = 8;
List<int> listResult = fibList(n);
Console.WriteLine(string.Join(", ", listResult));

static List<int> fibList(int n)
{
    List<int> fiblist = new List<int>(n);
    int a = 0;
    int b = 1;
    for (int i = 0; i < n; i++)
    {
        fiblist.Add(a);
        int temp = b;
        b = a + b;
        a = temp;
    }
    return fiblist;
}