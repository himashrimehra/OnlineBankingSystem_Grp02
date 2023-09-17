package com.wellsfargo.onlinebanking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

@Entity
@Table(name="Transaction")
public class Transaction {
	
	private int refId;
	
	@Pattern(regexp = "^[0-9]{5}$")
	private String fromAccount;
	
	@Pattern(regexp = "^[0-9]{5}$")
	private String toAccount;
	
	@Min(value = 1)
	private int amount;
	
	@Pattern(regexp = "^(ntfs|rtgs|imps|withdraw)$")
	private String mode;
	
	private String timestamp;
	private String remark;
	
	public Transaction() {
		super();
	}
	
	public Transaction(int refId, String fromAccount, String toAccount, int amount, String mode, String timestamp, String remark) {
		super();
		setRefId(refId);
		setFromAccount(fromAccount);
		setToAccount(toAccount);
		setAmount(amount);
		setMode(mode);
		setTimestamp(timestamp);
		setRemark(remark);
	}

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	public int getRefId() {
		return refId;
	}
	public void setRefId(int refId) {
		this.refId = refId;
	}
	
	
	@Column(name = "fromAccount", nullable = false)
	public String getFromAccount() {
		return fromAccount;
	}

	public void setFromAccount(String fromAccount) {
		this.fromAccount = fromAccount;
	}
	

	@Column(name = "toAccount", nullable = false)
	public String getToAccount() {
		return toAccount;
	}

	public void setToAccount(String toAccount) {
		this.toAccount = toAccount;
	}	

	@Column(name = "amount", nullable = false)
	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}	

	@Column(name = "timestamp", nullable = false)
	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}
	

	@Column(name = "remark")
	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	@Column(name = "mode", nullable = false)
	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}
}






// package com.wellsfargo.onlinebanking.entity;

// import java.util.Date;

// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.Id;

// @Entity
// public class Transaction {
//     @GeneratedValue @Id
//     private Integer id;
//     private Integer accountId;
//     private String transactionType;
//     private String amount;
//     private Date date;
//     private String description;
//     public Integer getId() {
//         return id;
//     }
//     public void setId(Integer id) {
//         this.id = id;
//     }
//     public Integer getAccountId() {
//         return accountId;
//     }
//     public void setAccountId(Integer accountId) {
//         this.accountId = accountId;
//     }
//     public String getTransactionType() {
//         return transactionType;
//     }
//     public void setTransactionType(String transactionType) {
//         this.transactionType = transactionType;
//     }
//     public String getAmount() {
//         return amount;
//     }
//     public void setAmount(String amount) {
//         this.amount = amount;
//     }
//     public Date getDate() {
//         return date;
//     }
//     public void setDate(Date date) {
//         this.date = date;
//     }
//     public String getDescription() {
//         return description;
//     }
//     public void setDescription(String description) {
//         this.description = description;
//     }
//     public Transaction(Integer id, Integer accountId, String transactionType, String amount, Date date,
//             String description) {
//         this.id = id;
//         this.accountId = accountId;
//         this.transactionType = transactionType;
//         this.amount = amount;
//         this.date = date;
//         this.description = description;
//     }
    
    
// }
