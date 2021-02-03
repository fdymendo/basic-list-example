package co.com.fdymendo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "dataprocess")
public class DataProcess {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "first_name", length = 255, nullable = false)
	private String firstName;

	@Column(name = "surname", length = 255, nullable = false)
	private String surname;

	@Column(name = "process", updatable = true)
	private Boolean process;
	
}