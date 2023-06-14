package com.example.service;

import com.example.model.LoginEntity;
import com.example.model.SignupEntity;

public interface SignupServiceInt
{	
	   public boolean addUser(SignupEntity data);
	   public boolean getUser(LoginEntity data);
	   public boolean checkMail(String mail);
	   public boolean changePass(String mail,String password);
	   public SignupEntity getOneUser(String name,String password);
}
