package com.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="crud_opr")
public class MainEntity
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="pid")
	private int pid;
	
	@Column(name="brand")
	private String brand;
	
	@Column(name="model")
	private String model;
	
	@Column(name="price")
	private int price;
	
	@Column(name="series")
	private String series;
	
	@Column(name="uid")
	private int uid;

	public MainEntity(int pid, String brand, String model, int price, String series, int uid) {
		super();
		this.pid = pid;
		this.brand = brand;
		this.model = model;
		this.price = price;
		this.series = series;
		this.uid = uid;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public MainEntity() 
	{
		super();
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getSeries() {
		return series;
	}

	public void setSeries(String series) {
		this.series = series;
	}

	
	
}
