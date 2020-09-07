package ch.memes.jl.pokedex.Data.DAO.CRUD;

import ch.memes.jl.pokedex.Data.Entity.Pokemon;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CRUDSQLite {
    public static Pokemon createPokemon(ResultSet entry) throws SQLException {
        Pokemon pokemon = new Pokemon();
        pokemon.setPokemonID(entry.getLong("pokemonID"));
        pokemon.setPokemon(entry.getString("pokemon"));
        pokemon.setName(entry.getString("name"));
        pokemon.setAge(entry.getInt("age"));
        return pokemon;
    }
}
