package com.example.service;

import java.util.List;

import com.example.model.MainEntity;

public interface MainServiceInt 
{
	public List<MainEntity> getdata();
	
	public List<MainEntity> getbyuid(int uid);

	public MainEntity getbyid(int pid);
	
	public void saveData(MainEntity me);

	public void updateData(MainEntity me);

	public boolean deleteData(int pid);
	
}
