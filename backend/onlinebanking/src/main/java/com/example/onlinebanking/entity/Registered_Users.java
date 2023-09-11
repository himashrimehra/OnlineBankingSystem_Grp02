package com.example.onlinebanking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

@Entity
@Table(name = "Registered_Users")

public class Registered_Users {
    private int UserID;
    private String Username;
    private String Password;

    public Registered_Users() {
        super();
    }

    public Registered_Users(int UserID, String Username, String Password) {
        super();
        this.UserID = UserID;
        this.Username = Username;
        this.Password = Password;
    }

    @Column(name = "UserID", nullable = false)
    public int getUserID() {
        return UserID;
    }

    public void setUserID(int UserID) {
        this.UserID = UserID;
    }

    @Column(name = "Username", nullable = false)
    public String getUsername() {
        return Username;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }

    @Column(name = "Password", nullable = false)
    public String getPassword() {
        return Password;
    }

    public void setPassword() {
        this.Password = Password;
    }

}
