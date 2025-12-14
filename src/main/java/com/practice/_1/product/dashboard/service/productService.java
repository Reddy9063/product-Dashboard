package com.practice._1.product.dashboard.service;

import java.util.List;
import java.util.Optional;

import com.practice._1.product.dashboard.model.Product;

public interface productService {
	
	List<Product> searchProducts(String product_name, String manufacturer);
    Product findById(Integer id );
	void addProduct(Product p);
	
	void deleteProduct(Integer id );
	
	List<Product> showAllProducts();
}
