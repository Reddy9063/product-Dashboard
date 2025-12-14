package com.practice._1.product.dashboard.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice._1.product.dashboard.model.Product;


@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
	
List<Product>findByProductNameContainingIgnoreCaseOrManufacturerContainingIgnoreCase(String productName , String manufacturer);
	

}
