package com.practice._1.product.dashboard.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {
	
	@Id
	private Integer productId;
	
	private String productName;
	
	private String manufacturer;

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", manufacturer=" + manufacturer
				+ "]";
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public Product(Integer productId, String productName, String manufacturer) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.manufacturer = manufacturer;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
}
