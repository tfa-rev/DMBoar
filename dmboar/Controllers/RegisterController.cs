using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using dmboar.Models;

namespace dmboar.Controllers
{

    public class RegisterController : ApiController
    {

        public HttpResponseMessage GetByDeviceId(int device_id)
        {
            using (DMSEntities1 dbContext = new DMSEntities1())
            {


                var DeviceList = from x in dbContext.registers
                                 select new RegisterDto()
                                 {
                                     device_id = device_id,
                                     startTime = x.start_date,
                                     endTime = (DateTime)x.end_date
                                 };

                HttpResponseMessage response;
                response = Request.CreateResponse(HttpStatusCode.OK, DeviceList.ToList());
                return response;

            }


        }



        public class AssignInfo
        {
            public int device_id { set; get; }
            public string username { set; get; }
             
        }
        [Route("api/Register/PostAssign")]
        [HttpPost]
        public IHttpActionResult PostAssign( [FromBody]  AssignInfo info)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (DMSEntities1 dbContext = new DMSEntities1())
            {
                int user_id = dbContext
                .users
                .Where(u => u.Username == info.username)
                .Select(u => u.user_id)
                .SingleOrDefault();

                dbContext.registers.Add(new register()
                {

                    id_device = info.device_id,
                    id_user = user_id,
                    start_date = DateTime.Now,
                    end_date = DateTime.Now.AddDays(14),
                    permissions = "admin"
                });

                dbContext.SaveChanges();


            }

            return Ok();
        }
    }
}
