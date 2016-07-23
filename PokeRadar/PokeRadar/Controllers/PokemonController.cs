using Carfinance.PokeRadar.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJSWebApiEmpty.Controllers {

    public class PokemonController : ApiController {
        IPokemonService pokemonService;
        public PokemonController() {

        }

        public PokemonController(IPokemonService pokemonService) {
            this.pokemonService = pokemonService;

        }
        [HttpGet]
        [Route("")]
        public IHttpActionResult Get(int id) {
            return Json(pokemonService.GetById(id));
        }
    }
}
