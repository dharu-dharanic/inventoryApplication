package edu.infosys.inventoryApplication.service;

import org.springframework.stereotype.Service;

import edu.infosys.inventoryApplication.bean.Product;

@Service
public class ProductService {

	
	public Product stockEdit(Product product,Double qty, int flag) {
		double stock=product.getStock();
		boolean status=product.getStatus();
		double rol=product.getReorderLevel();
		if(flag==2) {
			stock=stock-qty;
			if(stock<=rol)
				status=false;
		  }
		else if(flag==1) {
		  stock=stock+qty;
		  if(stock>rol)
			  status=true;
		}
		product.setStock(stock);
		product.setStatus(status);
		return product;
	}
	
	public Product setSalesPrice(Product product) {
		double purchasePrice=product.getPurchasePrice();
		double salesPrice=purchasePrice+purchasePrice*0.20;
		product.setSalesPrice(salesPrice);
		return product;
	}

	
}
