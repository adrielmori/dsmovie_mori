package com.mori.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mori.dsmovie.dto.MovieDTO;
import com.mori.dsmovie.entities.Movie;
import com.mori.dsmovie.repositories.MovieRepository;

@Service // Registro de componente
public class MovieService {

	// Composição de componentes
	@Autowired // instancia os novos objetos
	private MovieRepository repository;

	@Transactional(readOnly = true) // somente para Leitura
	public Page<MovieDTO> findAll(Pageable pageable) {// Busca de todos os caracteres
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}

	@Transactional(readOnly = true) // somente para Leitura
	public MovieDTO findById(Long id) {// busca individual de componentes
		Movie result = repository.findById(id).get();// Deve haver verificação
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}

}
