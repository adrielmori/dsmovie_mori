package com.mori.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mori.dsmovie.dto.MovieDTO;
import com.mori.dsmovie.dto.ScoreDTO;
import com.mori.dsmovie.services.ScoreService;

/**
 * Classe que implemetna o EndPoint; Tratamento de casos para as entradas dos
 * usuários
 * 
 * @author Adriel L. V. Mori & Nélio Alves
 */

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

	@Autowired
	private ScoreService service;

	@PutMapping
	public MovieDTO SaveScore(@RequestBody ScoreDTO dto) { // corpo da requisição
		MovieDTO movieDTO = service.saveScore(dto);
		return movieDTO;
	}
}
