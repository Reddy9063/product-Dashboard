package com.practice._1.product.dashboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice._1.product.dashboard.dao.ProductRepo;
import com.practice._1.product.dashboard.model.Product;

@Service
public class service implements productService {
	
	@Autowired
	private ProductRepo repo ;

	@Override
	public void addProduct(Product p) {
		repo.save(p);
				
	}

	@Override
	public void deleteProduct(Integer  id ) {
		repo.deleteById(id);
	}

	@Override
	public List<Product> showAllProducts() {
		List<Product> l = repo.findAll();
		return l;
		
	}

	@Override
	public Product findById(Integer id) {
		return repo.findById(id).orElseThrow(()-> new RuntimeException("Product with id not found"));
	}

	@Override
	public List<Product> searchProducts(String product_name, String manufacturer) {
		return repo.findByProductNameContainingIgnoreCaseOrManufacturerContainingIgnoreCase(product_name, manufacturer);
	}
	
	

}
