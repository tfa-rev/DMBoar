using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using dmboar.Models;

namespace dmboar.Controllers
{
    public class UsersController : ApiController
    {
        public HttpResponseMessage Get()
        {
            using (DMSEntities dbContext = new DMSEntities())
            {
                //return dbContext.devices.ToList();
                var UserList = from x in dbContext.users
                               select new UserDto()
                               {
                                   user_id = x.user_id,
                                   first_name = x.first_name,
                                   last_name = x.last_name,
                                   role = x.role,
                                   location = x.role,
                                   username = x.Username,
                                   mail = x.Mail,
                                   password = x.Password,

                               };

                HttpResponseMessage response;
                response = Request.CreateResponse(HttpStatusCode.OK, UserList.ToList());
                return response;

            }


        }

        [Route("api/Users/GetById")]
        [HttpGet]
        public HttpResponseMessage GetById(int user_id)
        {
            using (DMSEntities dbContext = new DMSEntities())
            {
                //return dbContext.devices.ToList();
                var user = dbContext.users.FirstOrDefault(e => e.user_id == user_id);
                HttpResponseMessage response;

                if (user != null)
                {
                    var userDto = new UserDto()
                    {
                        user_id = user.user_id,
                        first_name = user.first_name,
                        last_name = user.last_name,
                        role = user.role,
                        location = user.role,
                        username = user.Username,
                        mail = user.Mail,
                        password = user.Password,
                    };



                    response = Request.CreateResponse(HttpStatusCode.OK, userDto);
                }
                else
                    response = Request.CreateResponse(HttpStatusCode.BadRequest, "No matching data found.");

                return response;

            }


        }

        [Route("api/Users/Login")]
        [HttpGet]
        public HttpResponseMessage Login(string mail, string password)
        {
            using (DMSEntities dbContext = new DMSEntities())
            {
                //return dbContext.devices.ToList();
                var user = dbContext.users.FirstOrDefault(e => e.Mail == mail && e.Password == password);
                HttpResponseMessage response;

                if (user != null)
                {
                    var userDto = new UserDto()
                    {
                        user_id = user.user_id,
                        first_name = user.first_name,
                        last_name = user.last_name,
                        role = user.role,
                        location = user.role,
                        username = user.Username,
                        mail = user.Mail,
                        password = user.Password,
                    };



                    response = Request.CreateResponse(HttpStatusCode.OK, userDto);
                }
                else
                    response = Request.CreateResponse(HttpStatusCode.BadRequest, "No matching data found.");

                return response;
            
            }


        }


        public IHttpActionResult Put(UserDto userDto)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            using (DMSEntities dbContext = new DMSEntities())
            {
                var existingUser = dbContext.users.Where(e => e.user_id == userDto.user_id)
                                                        .FirstOrDefault<user>();

                if (existingUser != null)
                {
                    if (userDto.last_name != null) existingUser.last_name = userDto.last_name;
                    if (userDto.first_name != null) existingUser.first_name = userDto.first_name;
                    if (userDto.role != null) existingUser.role = userDto.role;
                    if (userDto.location != null) existingUser.location = userDto.location;
                    if (userDto.username != null) existingUser.Username = userDto.username;
                    if (userDto.mail != null) existingUser.Mail = userDto.mail;
                    if (userDto.password != null) existingUser.Password = userDto.password;                          

                    dbContext.SaveChanges();
                }
                else
                {
                    return NotFound();
                }
            }

            return Ok();
        }

        [Route("api/Users/PostUser")]
        [HttpPost]
        public IHttpActionResult PostUser(UserDto user)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (DMSEntities dbContext = new DMSEntities())
            {
                dbContext.users.Add(new user()
                {
                    
                    //user_id = user.user_id,
                    first_name = user.first_name,
                    last_name = user.last_name,
                    role = user.role,
                    location = user.role,
                    Username = user.username,
                    Mail = user.mail,
                    Password = user.password,
                });

                

                    dbContext.SaveChanges();
              

            }

            return Ok();
        }

        public IHttpActionResult Delete(string username)
        {
            if (username != null)
                return BadRequest("Not a valid student id");

            using (DMSEntities dbContext = new DMSEntities())
            {
                var student = dbContext.users
                    .Where(s => s.Username == username)
                    .FirstOrDefault();

                dbContext.Entry(student).State = System.Data.Entity.EntityState.Deleted;
                dbContext.SaveChanges();
            }

            return Ok();
        }
    }
}
