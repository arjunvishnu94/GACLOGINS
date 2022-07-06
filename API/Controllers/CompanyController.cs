using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CompanyController : BaseApiController
    {
        private readonly DataContext _context;
        private IConfiguration _config;

      

        public CompanyController(DataContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        [AllowAnonymous]

        [HttpGet]
        public ActionResult<IEnumerable<Company>> GetMasterCompany()
        {


            return _context.MasterCompany.ToList();
        }







    }
}
