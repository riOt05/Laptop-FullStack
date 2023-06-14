package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.MainEntity;

import jakarta.transaction.Transactional;

@Repository
public interface MainRepo extends JpaRepository<MainEntity,Integer>
{
	@Transactional
	@Query(value="select * from crud_opr where uid = ?",nativeQuery=true)
	public List<MainEntity>getbyuid(int uid);
}
