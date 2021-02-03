package co.com.fdymendo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.com.fdymendo.entity.DataProcess;

@Repository
public interface IDataProcessRepo extends JpaRepository<DataProcess, Integer> {

}