using Carfinance.PokeRadar.Services;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace AngularJSWebApiEmpty.Controllers {
    [RoutePrefix("")]

    public class PokemonController : ApiController {
        IPokemonService pokemonService;
        public PokemonController() {
            pokemonService = new PokemonService(HostingEnvironment.MapPath("~/Resources/pokemons.json"));
        }

        public PokemonController(IPokemonService pokemonService) {
            this.pokemonService = pokemonService;

        }
        [HttpGet]
        public IHttpActionResult Get(int id) {
            return Json(pokemonService.GetByNumber(id));
        }
        [HttpPost]
        public IHttpActionResult Get(int[] ids) {
            return Json(pokemonService.GetByNumbers(ids));
        }

        [Route("token")]
        [HttpGet]
        public IHttpActionResult Get([FromUri] string latitude, [FromUri] string longitude)
        {
            RestClient client = new RestClient("http://www.pokevision.com/map");
            RestRequest request = new RestRequest("scan/{lat}/{long}", Method.GET);
            request.AddUrlSegment("lat", latitude);
            request.AddUrlSegment("long", longitude);

            var response = client.Execute(request);
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            var data = serializer.Deserialize<object>(response.Content);

            return ResponseMessage(Request.CreateResponse(HttpStatusCode.OK, data));
        }

        [Route("external-pokemon")]
        [HttpGet]
        public IHttpActionResult Get([FromUri] string latitude, [FromUri] string longitude, [FromUri] string jobId)
        {
            RestClient client = new RestClient("http://www.pokevision.com/map");
            RestRequest request = new RestRequest("data/{lat}/{long}/{jobId}", Method.GET);
            request.AddUrlSegment("lat", latitude);
            request.AddUrlSegment("long", longitude);
            request.AddUrlSegment("jobId", jobId);

            var response = client.Execute(request);
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            var data = serializer.Deserialize<object>(response.Content);
            return ResponseMessage(Request.CreateResponse(HttpStatusCode.OK, data));
        }
    }
}
