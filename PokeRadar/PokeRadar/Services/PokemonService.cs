using Carfinance.PokeRadar.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Carfinance.PokeRadar.Services {
    public class PokemonService : IPokemonService {
        private static JObject pokemonJson;
        private object jsonLock = new object();


        public PokemonService() {
            InitPokemonJson();
        }

        public PokemonService(string pokeJson) {
            pokemonJson = JObject.Parse(pokeJson);
        }

        public Pokemon GetById(int id) {
            Pokemon pokemon = null;
            string pokemonNumber = id.ToString("000");
            JToken pokemonToken = pokemonJson.SelectToken(
                $"$.Pokemons[?(@.Number == '{pokemonNumber}')]"
            );
  
            pokemon = JsonConvert.DeserializeObject<Pokemon>(pokemonToken.ToString());
            return pokemon;
        }

        #region Private Members
        private void InitPokemonJson() {
            if (pokemonJson == null) {
                lock (jsonLock)
                if (pokemonJson == null) {
                    pokemonJson = JObject.Parse(File.ReadAllText("~Resources\\pokemons.json"));
                }
            }
        }

        #endregion
    }
}