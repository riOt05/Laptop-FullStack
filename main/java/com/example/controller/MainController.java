package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.MainEntity;
import com.example.service.MainService;

@RestController
@CrossOrigin("*")
public class MainController 
{
    @Autowired
    private MainService ms;

    @GetMapping({"/1","/getall"})
    public List<MainEntity> getdetails()
    {
    	return ms.getdata();
    }

    @GetMapping("/getbyuid")
    public List<MainEntity> getbyuid(@RequestParam int uid)
    {
    	return ms.getbyuid(uid);
    }
    
    @GetMapping({"/2","/getbyid"})
    public MainEntity getbyid(int pid)
    {
    	return ms.getbyid(pid);
    }
    
    @PostMapping({"/3","/insert"})
    public void saveDetails(@RequestBody MainEntity me)
    {
    	ms.saveData(me);
    }
    @PutMapping({"/4","/update"})
    public void updateDetails(@RequestBody MainEntity me,@RequestParam int pid)
    {
    	me.setPid(pid);
    	ms.updateData(me);
    }
//    @RequestMapping(path = "/delete",method = RequestMethod.DELETE)
    @DeleteMapping("/delete")
    public boolean deleteDetails(@RequestParam int pid)
    {
    	ms.deleteData(pid);
    	return true;
    }
}
