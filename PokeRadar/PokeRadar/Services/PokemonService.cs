using Carfinance.PokeRadar.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Carfinance.PokeRadar.Services {
    public class PokemonService : IPokemonService {
        private static JObject pokemonJson;
        private object jsonLock = new object();

        public PokemonService(string pokeJsonPath) {
            InitPokemonJson(pokeJsonPath);
        }

        public Pokemon GetByNumber(int id) {
            Pokemon pokemon = null;
            string pokemonNumber = id.ToString("000");
            JToken pokemonToken = pokemonJson.SelectToken(
                $"$.Pokemons[?(@.Number == '{pokemonNumber}')]"
            );
  
            pokemon = JsonConvert.DeserializeObject<Pokemon>(pokemonToken.ToString());
            return pokemon;
        }

        #region Private Members
        private void InitPokemonJson(string pokeJsonPath) {
            if (pokemonJson == null) {
                lock (jsonLock)
                if (pokemonJson == null) {
                    pokemonJson = JObject.Parse(File.ReadAllText(pokeJsonPath));
                }
            }
        }

        #endregion
    }
}