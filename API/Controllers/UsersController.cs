using System.Linq;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    
    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;
        private IConfiguration _config;

        // private IConfiguration _config;

        public UsersController(DataContext context , IConfiguration config)
        {
            _context = context;
            _config = config;
        }
        [AllowAnonymous]

        [HttpGet]
        public  ActionResult<IEnumerable<User>>GetUsers()
        {
            

            return _context.Users.ToList();
        }

        [Authorize]

         [HttpGet("{id}")]
        public ActionResult<User> GetUsers(int id)
        {
            

            return _context.Users.Find(id);
        }
    

     [AllowAnonymous]


   

    [HttpPost("LoginUser")]

    public IActionResult Login(Login user)

    {

       var userAvailable=_context.Users.Where(u=> u.Email == user.Email &&u.Pwd == user.Pwd).FirstOrDefault();
            
            if(userAvailable != null)
            {
                     return Ok("Sucess");


                  

            }
            
            return Ok("Failure");

            

    }
     
 }

}