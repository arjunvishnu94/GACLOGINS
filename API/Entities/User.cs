namespace API.Entities
{
    public class User
    {
       
        
        public string  FirstName { get; set; }
        public string  LastName { get; set; }

        public string  UserName { get; set; }

         public string  PassWord { get; set; }

         public string  Email { get; set; }

          public string  Pwd { get; set; }

        // public byte[] PassWordHash { get; set;}

        // public byte[] PassWordSalt { get; set;}
        public string  Role { get; set; }
        public string  Office { get; set; }
        public string  Active { get; set; }
        // public string  ExchangeUser { get; set; }

 public int Id { get; set; }



    }
}  