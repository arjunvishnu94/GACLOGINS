using System.Linq;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    
    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;
        private IConfiguration _config;

       

        public UsersController(DataContext context , IConfiguration config)
        {
            _context = context;
            _config = config;
        }
       
       
       
    ///----------GET ALL USERS -----------////
       
        [AllowAnonymous]
        [Authorize]
        [HttpGet(Name = "UserMaster")]
        public  ActionResult<IEnumerable<User>>GetUsers()
        {
            

            return _context.Users.ToList();
        }

        
        
///----------GET SELECTED USERS -----------////
        
      
         [Authorize]
         [AllowAnonymous]

         [HttpGet("{id}")]
        public ActionResult<User> GetUsers(int id)
        {
            

            return _context.Users.Find(id);
        }
    

///----------POST LOGIN-----------////

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

 ///----------PUT-----------////

       
         [HttpPut("{id}")]
          public async Task<IActionResult> editEmployees(int id, User user)
          {
             if (id != user.Id)
             {
                 return BadRequest();
            }

           _context.Entry(user).State = EntityState.Modified;

              try
             {
                await _context.SaveChangesAsync();
             }
             catch (DbUpdateConcurrencyException)
              {
                 if (!UserExists(id))
                  {
                      return NotFound();
                  }
                   else
                  {
                      throw;
                  }
              }

             return NoContent();
       }

     
    
    
    ///----------POST-----------////
    
    
    [HttpPost("InsertTableRow")]

public IActionResult InsertTableRow(User data)
     
{

_context.Users.Add(data);
_context.SaveChanges();
return Ok("{\"sucess\":true}");


}


  ///----------Delete-----------////

        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteEmployees(int id)
        {
            var deleteDetail = await _context.Users.FindAsync(id);
            if (deleteDetail == null)
            {
                return NotFound();
            }

            _context.Users.Remove(deleteDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }
 
 
 
 
private bool UserExists(int id)
        {
            
            return _context.Users.Any(e => e.Id == id);
        }




}
}