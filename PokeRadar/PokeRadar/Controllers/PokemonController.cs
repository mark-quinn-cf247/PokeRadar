using Carfinance.PokeRadar.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;

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
    }
}
