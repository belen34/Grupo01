﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace G01.Object
{
    public class OperadorLogicoObj
    {
        [Key]
        public int operadorlogicoId { get; set; }
        public string name { get; set; }

        public OperadorLogicoObj()
        {

        }

        public OperadorLogicoObj(int _operadorlogicoId, string _name)
        {
            this.operadorlogicoId = _operadorlogicoId;
            this.name = _name;

        }
    }
}
