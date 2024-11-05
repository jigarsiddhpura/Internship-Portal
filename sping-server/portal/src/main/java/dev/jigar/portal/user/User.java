package dev.jigar.portal.user;

import java.io.Serializable;
import javax.persistence.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Table;

import jakarta.validation.constraints.Email;

@Table("users")
public class User implements Persistable<String> {

    @Id
    @Column(unique=true)
    private String sapId;

    private String firstName;
    private String lastName;

    @Email
    private String email;

    private String contact;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Transient
    private boolean isNew;

    // Default constructor (used by Spring Data JDBC)
    public User() {
        this.isNew = false;
    }

    // Constructor for new users (sign-up)
    public User(String sapId, String firstName, String lastName, String email, String contact, String password, Role role) {
        this.sapId = sapId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contact = contact;
        this.password = password;
        this.role = role;
        this.isNew = true; // Indicate that this is a new entity
    }

    @Override
    public String getId() {
        return sapId;
    }

    @Override
    public boolean isNew() {
        return isNew;
    }

    // Optionally, you can set isNew to false after saving the entity
    public void setIsNew(boolean isNew) {
        this.isNew = isNew;
    }

    public String getSapId() {
        return sapId;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getContact() {
        return contact;
    }

    public Role getRole() {
        return role;
    }

}

