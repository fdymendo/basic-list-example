package co.com.fdymendo.services;

import java.util.List;

import co.com.fdymendo.dto.DataProcessDTO;

public interface IDataProcessServices {

	List<DataProcessDTO> getAll();

	DataProcessDTO postDataProcess(DataProcessDTO dataProcessDTO);

	List<DataProcessDTO> execDataProcess(List<Integer> listData);
	
}