package com.mori.dsmovie.entities;


import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ScorePK implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@ManyToOne //Para configurar as diferentes chaves estrangieras
	@JoinColumn(name = "movie_id")
	private Movie movie;//User_id e Movie_id são chaves estrangeiras
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public ScorePK() {
		
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
