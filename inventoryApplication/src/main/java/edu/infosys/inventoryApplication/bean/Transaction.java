package edu.infosys.inventoryApplication.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

@Entity
public class Transaction {

    @Id
    private Long transactionId;

    @NotBlank(message = "transactionType is required")
    private String transactionType;

    @NotBlank(message = "productId is required")
    private String productId;

    @PositiveOrZero(message = "rate cannot be negative")
    private Double rate;

    @Positive(message = "quantity must be greater than zero")
    private Double quantity;
    
    private Double transactionValue;
    private String userId;
    private String transactionDate;

    public Transaction() {
        super();
    }
    
    public Transaction(Long transactionId, String transactionType, String productId, Double rate, Double quantity,
			Double transactionValue, String userId, String transactionDate) {
		super();
		this.transactionId = transactionId;
		this.transactionType = transactionType;
		this.productId = productId;
		this.rate = rate;
		this.quantity = quantity;
		this.transactionValue = transactionValue;
		this.userId = userId;
		this.transactionDate = transactionDate;
	}


    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public Double getRate() {
        return rate;
    }

    public void setRate(Double rate) {
        this.rate = rate;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public Double getTransactionValue() {
        return transactionValue;
    }

    public void setTransactionValue(Double transactionValue) {
        this.transactionValue = transactionValue;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
    }
}
