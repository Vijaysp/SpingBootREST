package com.websystique.springboot.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="APP_AUDIT")
public class Audit implements Serializable{

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;

	@NotEmpty
	@Column(name="NAME", nullable=false)
	private String auditName;

	@Column(name="COUNT", nullable=false)
	private Integer count;

	@Column(name="AMOUNT", nullable=false)
	private double amount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuditName() {
		return auditName;
	}

	public void setAuditName(String auditName) {
		this.auditName = auditName;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Audit user = (Audit) o;

		if (Double.compare(user.amount, amount) != 0) return false;
		if (id != null ? !id.equals(user.id) : user.id != null) return false;
		if (auditName != null ? !auditName.equals(user.auditName) : user.auditName != null) return false;
		return count != null ? count.equals(user.count) : user.count == null;
	}

	@Override
	public int hashCode() {
		int result;
		long temp;
		result = id != null ? id.hashCode() : 0;
		result = 31 * result + (auditName != null ? auditName.hashCode() : 0);
		result = 31 * result + (count != null ? count.hashCode() : 0);
		temp = Double.doubleToLongBits(amount);
		result = 31 * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	@Override
	public String toString() {
		return "Audit [id=" + id + ", name=" + auditName + ", count=" + count
				+ ", amount=" + amount + "]";
	}


}
