package com.practice._1.product.dashboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.practice._1.product.dashboard.model.Product;
import com.practice._1.product.dashboard.service.service;

@RestController
public class frontController {

	
	@Autowired
	private service service;
	
	
	@GetMapping("/home")
	public ResponseEntity<List<Product>> home()
	
	{
		List<Product> l = service.showAllProducts();
		return new ResponseEntity<List<Product>>(l,HttpStatus.OK);
		
		
	}
	
	
	@PostMapping("/addProduct")
	public  void addProduct(@RequestBody Product p )
	{
		service.addProduct(p);
		
	}
	
	@DeleteMapping("/product/{id}")
	public void deleteProduct(@PathVariable  Integer id) {
		service.deleteProduct(id);
		
	}
	
	@PatchMapping("/product/{id}")
	public void editProduct(@PathVariable Integer id , @RequestBody Product p ){
		Product existing = service.findById(id);
		existing.setManufacturer(p.getManufacturer());
		existing.setProductName(p.getProductName());
		service.addProduct(existing);
		
	}
	
	@GetMapping("product/search")
	public List<Product> searchProduct(@RequestParam String name)
	{
		return service.searchProducts(name, name);
	}
	
	
}
