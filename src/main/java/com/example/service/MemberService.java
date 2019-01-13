package com.example.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.example.dto.GetContentVO;
import com.example.dto.HomeContentVO;
import com.example.dto.MemberVO;

public interface MemberService {
	
	public List<HomeContentVO> selectContent() throws Exception;
	public void inserting(HttpServletRequest request) throws Exception;
	public void writing(HttpServletRequest request) throws Exception;
	public void memberjoining(HttpServletRequest request) throws Exception;
	public void updating(HttpServletRequest request) throws Exception;
	public void deleting(HttpServletRequest request) throws Exception;
	public boolean logining(HttpServletRequest request) throws Exception;
	public List<GetContentVO> getcontent(String num) throws Exception;
	

}
