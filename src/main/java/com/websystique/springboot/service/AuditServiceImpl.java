package com.websystique.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.websystique.springboot.model.Audit;
import com.websystique.springboot.repositories.AuditRepository;



@Service("auditService")
@Transactional
public class AuditServiceImpl implements AuditService{

	@Autowired
	private AuditRepository auditRepository;

	public Audit findById(Long id) {
		return auditRepository.findOne(id);
	}

	 public Audit findByAuditName(String name) {
		return auditRepository.findByAuditName(name);
	} 

	public void saveAudit(Audit audit) {
		auditRepository.save(audit);
	}

	public void updateAudit(Audit audit){
		saveAudit(audit);
	}

	public void deleteAuditById(Long id){
		auditRepository.delete(id);
	}

	public void deleteAllAudits(){
		auditRepository.deleteAll();
	}

	public List<Audit> findAllAudits(){
		return auditRepository.findAll();
	}

	public boolean isAuditExist(Audit audit) {
		return findByAuditName(audit.getAuditName()) != null;
	}


	 



}
