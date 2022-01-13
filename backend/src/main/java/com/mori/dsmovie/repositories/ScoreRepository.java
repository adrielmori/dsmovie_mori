package com.mori.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mori.dsmovie.entities.Score;
import com.mori.dsmovie.entities.ScorePK;

/**
 * Classe implementada para manipulas a opções de acerca dos filmes localizados
 * no banco de dados
 * 
 * @author Adriel L. V. Mori e Nélio Alves*
 */

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {// tipo da entidade, tipo do Id da entidade

	
}
