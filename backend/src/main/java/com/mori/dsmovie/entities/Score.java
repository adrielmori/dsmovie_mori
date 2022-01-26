package com.mori.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Classe para implementação da cahve primária para relacionar os dados do
 * usuário e do filme classificado de forma úninca.
 * 
 * @author Adriel L. V. Mori & Nélio Alves
 */

/*
 * Usando a JPA, a chave primária (identificador) deve ser somente um atributo
 * juntando as duas chaves estrangeiras.
 */

@Entity
@Table(name = "tb_score")
public class Score {

	@EmbeddedId
	private ScorePK id = new ScorePK();//Chave primária

	private Double value;

	public Score() {

	}

	public void setMovie(Movie movie) {// Recebe um certo filme
		id.setMovie(movie);// id é do tipo scorePK, entao deve ser setado
		/* Setendo o score ao filme selecionado */
	}

	public void setUser(User user) {// Recebe um certo usuário
		id.setUser(user);// id é do tipo scorePK, entao deve ser setado
		/* Setendo o score ao usuário */
	}

	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

}
