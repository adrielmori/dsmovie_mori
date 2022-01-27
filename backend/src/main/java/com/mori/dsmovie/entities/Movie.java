package com.mori.dsmovie.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Classe para implementação dos objetos relacionados aos atributos dos filmes
 * 
 * @author Adriel L. V. Mori & Nélio Alves
 */

@Entity
@Table(name = "tb_movie")

public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private Double score; // Tipo que são classe: aíusculo para aplicações em banco de dados
	private Integer count;
	private String image;

	@OneToMany(mappedBy = "id.movie")
	private Set<Score> scores = new HashSet<>();
	//Consegue acessar todas as avaliações do filme 
	//atraves do objeto de filme.

	public Movie() {

	}

	public Movie(Long id, String title, Double score, Integer count, String image) {
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Set<Score> getScores() {
		return scores;
	}

}
