package com.websystique.springboot.service;


import java.util.List;

import com.websystique.springboot.model.Audit;

public interface AuditService {
	
	Audit findById(Long id);

//	Audit findByName(String name);

	void saveAudit(Audit audit);

	void updateAudit(Audit user);

	void deleteAuditById(Long id);

	void deleteAllAudits();

	List<Audit> findAllAudits();

	boolean isAuditExist(Audit audit);
}