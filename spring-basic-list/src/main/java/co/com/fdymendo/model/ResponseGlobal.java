package co.com.fdymendo.model;

import lombok.Data;

@Data
public class ResponseGlobal {

	private int statusCode;
	private String message;

	public ResponseGlobal(int statusCode, String message) {
		this.statusCode = statusCode;
		this.message = message;
	}
	
}