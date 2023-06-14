package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.FrpassEntity;
//import com.example.demo.shopping.entity.LoginEnt;
//import com.example.demo.shopping.entity.userEntity;
import com.example.model.LoginEntity;
import com.example.model.SignupEntity;
import com.example.service.SignupService;

@RestController
@CrossOrigin("*")
public class SignupController
{
    @Autowired
    private SignupService ss;
    
    @PostMapping("/getOneUser")
    public SignupEntity j(@RequestBody LoginEntity data) {
    	return ss.getOneUser(data.getUsername(),data.getPassword());
    }
    
    @PostMapping("/addUser")
    public boolean a(@RequestBody SignupEntity data){
        
         return  ss.createUser(data);
    }
    
    @PostMapping("/getUser")
    public boolean b(@RequestBody LoginEntity data){
    	System.out.println(data.getPassword());
         return ss.verifyUser(data);
//    	return true;
    }
    @PostMapping("/frpass")
    public boolean c(@RequestBody FrpassEntity data)
    {
    	if(data.getPassword().length() ==0) {
    	   return ss.checkMail(data.getEmail());
    	}
    	
    	return ss.changePass(data.getEmail(), data.getPassword());
    }
}
