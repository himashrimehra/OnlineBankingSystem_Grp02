package com.wellsfargo.onlinebanking.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "User")
public class User {
	@GeneratedValue @Id
    private int userId;
    @Column( nullable = false)
    private String name;
    @Column( nullable = false)
    private String email;
    @Column( nullable = false)
    private String password;
    private String userName;
    private String phoneNumber;
    private String address;
    private String permanentAddress;
    private String aadhar;
    private String dateOfBirth;

     @OnDelete( action = OnDeleteAction.CASCADE)
    @OneToMany( cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn( name = "userId")
    private List<Account> transactions;

    public User() {
        super();
    }

    public User(int userId, String name, String email, String password, String userName, String phoneNumber, String address,
            String permanentAddress, String aadhar, String dateOfBirth) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.permanentAddress = permanentAddress;
        this.aadhar = aadhar;
        this.dateOfBirth = dateOfBirth;
    }




    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public String getPhoneNumber() {
        return phoneNumber;
    }


    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }


    public String getPermanentAddress() {
        return permanentAddress;
    }


    public void setPermanentAddress(String permanentAddress) {
        this.permanentAddress = permanentAddress;
    }


    public String getAadhar() {
        return aadhar;
    }


    public void setAadhar(String aadhar) {
        this.aadhar = aadhar;
    }


    public String getDateOfBirth() {
        return dateOfBirth;
    }


    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    
}