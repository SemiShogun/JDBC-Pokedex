package ch.memes.jl.pokedex.Data.Entity;

import ch.memes.jl.pokedex.Data.DAO.DAO;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.Entity;
import java.util.ArrayList;

public class Pokedex {
    private ArrayList<Pokemon> pokedex;

    public Pokedex(DAO dao) {
        super();
        pokedex = new ArrayList<Pokemon>();
        dao.getPokedex(pokedex);
    }
}
