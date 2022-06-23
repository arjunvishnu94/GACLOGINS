// using System.IdentityModel.Tokens.Jwt;
// using System.Security.Claims;
// using System.Text;
// using Microsoft.IdentityModel.Tokens;

// namespace API.Entities
// {
//     public class JwtService
//     {
//         public string SecretKey {get; set;}

//         public int TokenDuration {get; set;}

//         private readonly IConfiguration config;

//         public JwtService(IConfiguration _config)

//         {
//                   config=_config;
//                this.SecretKey = config.GetSection("jwtConfig").GetSection("Key").Value;
//                   this.TokenDuration =Int32.Parse(config.GetSection("jwtConfig").GetSection("Duratiom").Value);

//         }

// public string GenerateToken(string id,string UserName,string PassWord,string Email,string Pwd)

// {                var key=new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.SecretKey));
//                 var signature = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

// var payload =new[]
// {
// new  Claim("id",id),
// new  Claim("UserName",UserName),
// new  Claim("PassWord",PassWord),
// new  Claim("Email",Email),
// new  Claim("Pwd",Pwd)

// };
// var jwtToken = new JwtSecurityToken(
//     issuer:"localhost",
//     audience:"localhost",
//     claims:payload,
//     expires :DateTime.Now.AddMinutes(TokenDuration),
//     signingCredentials:signature
    
// );

//     return new JwtSecurityTokenHandler().WriteToken(jwtToken);
// }

//     }
// }