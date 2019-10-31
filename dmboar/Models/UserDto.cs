using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dmboar.Models
{
    public class UserDto
    {
        public int user_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string role { get; set; }
        public string location { get; set; }
        public string mail { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}