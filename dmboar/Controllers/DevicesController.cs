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
    public class DevicesController : ApiController
    {
        public HttpResponseMessage Get()
        {
            using (DMSEntities1 dbContext = new DMSEntities1())
            {
                //return dbContext.devices.ToList();
                var DeviceList = from x in dbContext.devices
                                 select new DeviceDto()
                                 {
                                     device_id = x.device_id,
                                     name = x.name,
                                     manufacturer = x.manufacturer,
                                     model = x.model,
                                     OS = x.OS,
                                     OS_version = x.OS_version,
                                     CPU = x.CPU,
                                     RAM = x.RAM
                                 };

                HttpResponseMessage response;
                response = Request.CreateResponse(HttpStatusCode.OK, DeviceList.ToList());
                return response;

            }


        }

 

        public HttpResponseMessage GetByName(string name)
        {
            using (DMSEntities1 dbContext = new DMSEntities1())
            {
                //return dbContext.devices.ToList();
                var Device = from x in dbContext.devices
                                 where (x.name == name)
                                 select new DeviceDto()
                                 {
                                     device_id = x.device_id,
                                     name = x.name,
                                     manufacturer = x.manufacturer,
                                     model = x.model,
                                     OS = x.OS,
                                     OS_version = x.OS_version,
                                     CPU = x.CPU,
                                     RAM = x.RAM                                   
                                     
                                 };



                HttpResponseMessage response;
                response = Request.CreateResponse(HttpStatusCode.OK, Device );
                return response;

            }
        }

        [ResponseType(typeof(DeviceDto))]
        public async Task<IHttpActionResult> PostDevice(device device)
        {

            using (DMSEntities1 dbContext = new DMSEntities1())
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                dbContext.devices.Add(device);
                await dbContext.SaveChangesAsync();

              
                

                var dto = new DeviceDto()
                {
                    device_id = device.device_id,
                    name = device.name,
                    manufacturer = device.manufacturer,
                    model = device.model,
                    OS = device.OS,
                    OS_version = device.OS_version,
                    CPU = device.CPU,
                    RAM = device.RAM
                };

                return CreatedAtRoute("DefaultApi", new { id = device.device_id }, dto);
            }
        }

    
    }

    
}
