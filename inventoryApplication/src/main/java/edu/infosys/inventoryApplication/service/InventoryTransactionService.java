package edu.infosys.inventoryApplication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.infosys.inventoryApplication.bean.Product;
import edu.infosys.inventoryApplication.bean.Transaction;
import edu.infosys.inventoryApplication.dao.ProductDao;
import edu.infosys.inventoryApplication.dao.TransactionDao;

/**
 * Wraps "record a transaction" + "update the resulting product stock" in a
 * single atomic operation, so the two can never drift out of sync (e.g. if
 * the app fails between the two writes).
 *
 * flag: 1 = stock IN (purchase), 2 = stock OUT (sale)
 */
@Service
public class InventoryTransactionService {

	@Autowired
	private TransactionDao transactionDao;

	@Autowired
	private ProductDao productDao;

	@Autowired
	private ProductService productService;

	@Transactional
	public Transaction processTransaction(Transaction transaction, int flag) {
		if (transaction.getTransactionId() == null) {
			transaction.setTransactionId(transactionDao.generateTransactionId());
		}

		Product product = productDao.findProductById(transaction.getProductId());
		Product updatedProduct = productService.stockEdit(product, transaction.getQuantity(), flag);
		productDao.save(updatedProduct);

		transactionDao.saveTransaction(transaction);
		return transaction;
	}
}