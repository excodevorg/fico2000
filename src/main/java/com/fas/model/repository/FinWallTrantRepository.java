package com.fas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fas.model.fin.domain.FinWallTrantDomain;

public interface FinWallTrantRepository  extends JpaRepository<FinWallTrantDomain, String> {

}
