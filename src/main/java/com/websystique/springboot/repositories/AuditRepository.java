package com.websystique.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.websystique.springboot.model.Audit;

@Repository
public interface AuditRepository extends JpaRepository<Audit, Long> {

    Audit findByAuditName(String name);

}
