using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJSWebApiEmpty.Controllers {

    public class PokemonController : ApiController {
        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult Get(int id) {
            return Json(new Object());
        }
    }
}
