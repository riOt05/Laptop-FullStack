package com.example.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.SignupEntity;

import jakarta.transaction.Transactional;
@Repository
public interface SignupRepo extends JpaRepository<SignupEntity,Integer>{
//    @Query(value="select * from user",nativeQuery = true)
//    public List<SignupEntity> getAllUsers();
//    @Query(value="insert into laptops.user(username,email,phoneno,password) values(?,?,?,?);",nativeQuery = true)
//    public List<SignupEntity> addUser(String name,String email,int number,String password);
//    @Query(value="select * from user where username=? and password=?",nativeQuery = true)
//    public List<SignupEntity> getUser(String username,String password);
	
	@Transactional
	@Query(value = "select * from signup where username = ? and password = ?",nativeQuery = true)
	public SignupEntity getOneUser(String username,String password);
	
	@Modifying
    @Transactional
    @Query(value="select * from signup where username=? and password=?",nativeQuery = true)
    public List<SignupEntity> getUser(String username,String password);
	
	@Modifying
    @Transactional
    @Query(value="update signup set password=? where email=?",nativeQuery = true)
    public void changePass(String password,String email);
	
	public SignupEntity getByEmail(String email);
}
 