using System;
using Microsoft.Data.SqlClient;
using System.Text;
// --------------------------------------- Task 5 --------------------------------------
namespace sqltest
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.DataSource = "nordtenra.database.windows.net";
                builder.UserID = "Tenra";
                builder.Password = "!W3r5y7i9p";
                builder.InitialCatalog = "BikeStores";

                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("-------------");
                    Console.WriteLine("---Brands---");
                    Console.WriteLine("-------------");

                    String sql = "SELECT brand_name FROM production.brands";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        connection.Open();
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Console.WriteLine("{0}", reader.GetString(0));
                            }
                        }
                    }
                }
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }
            Console.ReadLine();
        }
    }
}