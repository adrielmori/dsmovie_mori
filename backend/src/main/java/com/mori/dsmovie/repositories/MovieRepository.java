package com.mori.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mori.dsmovie.entities.Movie;

/**
 * Classe implementada para manipulas a opções de acerca dos filmes localizados
 * no banco de dados
 * 
 * @author Adriel L. V. Mori e Nélio Alves*
 */

public interface MovieRepository extends JpaRepository<Movie, Long> {// tipo da entidade, tipo do Id da entidade

}
