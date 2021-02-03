package co.com.fdymendo.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.fdymendo.dto.DataProcessDTO;
import co.com.fdymendo.entity.DataProcess;
import co.com.fdymendo.repo.IDataProcessRepo;
import co.com.fdymendo.services.IDataProcessServices;

@Service
public class DataProcessServicesImpl implements IDataProcessServices {

	@Autowired
	private IDataProcessRepo iDataRepo;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<DataProcessDTO> getAll() {
		return iDataRepo.findAll().stream().map(n -> modelMapper.map(n, DataProcessDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public DataProcessDTO postDataProcess(DataProcessDTO dataProcessDTO) {

		dataProcessDTO.setId(null);
		dataProcessDTO.setProcess(false);

		DataProcess dataProcess = modelMapper.map(dataProcessDTO, DataProcess.class);
		iDataRepo.save(dataProcess);

		return modelMapper.map(dataProcess, DataProcessDTO.class);
	}

	@Override
	public List<DataProcessDTO> execDataProcess(List<Integer> listData) {
		List<DataProcess> listDataProcess = new ArrayList<>();
		for (Integer id : listData) {
			DataProcess tmp = iDataRepo.findById(id).orElse(null);
			if (tmp != null) {
				tmp.setProcess(true);
				listDataProcess.add(tmp);
			}
		}
		iDataRepo.saveAll(listDataProcess);
		return listDataProcess.stream().map(n -> modelMapper.map(n, DataProcessDTO.class)).collect(Collectors.toList());
	}

}
