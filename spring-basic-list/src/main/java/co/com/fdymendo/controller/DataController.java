package co.com.fdymendo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.fdymendo.dto.DataProcessDTO;
import co.com.fdymendo.services.IDataProcessServices;

@RestController
@RequestMapping("/v1/data")
public class DataController {

	@Autowired
	private IDataProcessServices iDataServices;

	@GetMapping(produces = "application/json")
	public List<DataProcessDTO> getAll() {
		return iDataServices.getAll();
	}

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public DataProcessDTO postDataProcess(@RequestBody DataProcessDTO dataProcessDTO) {
		return iDataServices.postDataProcess(dataProcessDTO);
	}

	@PostMapping(value = "/process", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<DataProcessDTO> postDataProcess(@RequestBody ArrayList<Integer> listData) {
		return iDataServices.execDataProcess(listData);
	}
	
}