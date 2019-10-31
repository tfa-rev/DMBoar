using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dmboar.Models
{
    public class DeviceDto
    {
        public int device_id { get; set; }
        public string name { get; set; }
        public string manufacturer { get; set; }
        public string model { get; set; }
        public string OS { get; set; }
        public string OS_version { get; set; }
        public string CPU { get; set; }
        public Nullable<int> RAM { get; set; }
        public string Assignee { get; set; }
    }
}