package com.example.service;

import java.util.List;
//import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.model.LoginEntity;
import com.example.model.SignupEntity;
import com.example.repository.SignupRepo;
@Service
public class SignupService{

	@Autowired
	private SignupRepo sr;
	
	public SignupEntity getOneUser(String name,String password) {
		return sr.getOneUser(name,password);
	}
	
	public boolean checkMail(String mail) {
		try {
			SignupEntity usrs = sr.getByEmail(mail);
			return usrs.getEmail().equals(mail);
		}
		catch(Exception err) {
			return false;
		}
	}
	
	public boolean changePass(String mail,String password) {
		try {
			sr.changePass(password, mail);
			return true;
		}
		catch(Exception err) {
			return false;
		}
	}
	
	 public boolean createUser(SignupEntity data){

        
              sr.save(data);
              return true;
         
         
    }
    public boolean verifyUser(LoginEntity data){
         
           List<SignupEntity> usrData =  sr.getUser(data.getUsername(),data.getPassword());
           try {
        	   if(usrData.get(0).getUsername().equals(data.getUsername())) {
            	   return true;
               }
               return false; 
           }
           catch (Exception e) {
			return false;
		}
           
    }
}
