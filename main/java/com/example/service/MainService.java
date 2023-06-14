package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.MainEntity;
import com.example.repository.MainRepo;

@Service
public class MainService implements MainServiceInt{

	@Autowired
	private MainRepo mri;
	
	@Override
	public List<MainEntity> getdata() 
	{
		return mri.findAll();
	}
	
	@Override
	public List<MainEntity> getbyuid(int uid) {

		return mri.getbyuid(uid);
	}

	
	@Override
	public MainEntity getbyid(int pid) 
	{
		return mri.findById(pid).get();
	}
	
	@Override
	public void saveData(MainEntity me) 
	{
		mri.save(me);
	}

	@Override
	public void updateData(MainEntity me) 
	{
		mri.save(me);
	}

	@Override
	public boolean deleteData(int pid) 
	{
		mri.deleteById(pid);
		return true;
	}

}
