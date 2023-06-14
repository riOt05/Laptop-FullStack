package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="signup")
public class SignupEntity 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="uid")
	private int uid;
	@Column(name="email")
	private String email;
//	@JsonIgnore
	@Column(name="password")
	private String password;
	@Column(name="username")
	private String username;
	@Column(name="phoneno")
	private int phoneno;	
	public SignupEntity() {
		super();
		
	}

	public SignupEntity(int uid, String email, String password, String username, int phoneno) {
		super();
		this.uid = uid;
		this.email = email;
		this.password = password;
		this.username = username;
		this.phoneno = phoneno;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(int phoneno) {
		this.phoneno = phoneno;
	}

	@Override
	public String toString() {
		return "SignupEntity [uid=" + uid + ", email=" + email + ", password=" + password + ", username=" + username
				+ ", phoneno=" + phoneno + "]";
	}

	
}
