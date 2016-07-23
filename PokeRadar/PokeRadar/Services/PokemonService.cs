using Carfinance.PokeRadar.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Carfinance.PokeRadar.Services {
    public class PokemonService {
        private static JObject pokemonJson;
        private object jsonLock = new object();


        public PokemonService() {
            InitPokeonJson();
        }

        public PokemonService(string pokeJson) {
            pokemonJson = JObject.Parse(pokeJson);
        }

        public Pokemon GetById(int id) {
            Pokemon pokemon = null;
            string pokemonNumber = id.ToString("000");

            var result = pokemonJson.Descendants().Where(p => p.ToString() == pokemonNumber).Select(
                t => (string)t);

            return pokemon;
        }

        #region Private Members
        private void InitPokeonJson() {
            if (pokemonJson == null) {
                lock (jsonLock) ;
                if (pokemonJson == null) {
                    pokemonJson = JObject.Parse(File.ReadAllText("~Resources\\pokemon.json"));
                }
            }
        }

        #endregion
    }
}