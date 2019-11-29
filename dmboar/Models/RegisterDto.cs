using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dmboar.Models
{
    public class RegisterDto
    {


        public int device_id { get; set; }
        public DateTime startTime { get; set; }
        public DateTime endTime { get; set; }

    }
}