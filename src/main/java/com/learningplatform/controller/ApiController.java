package com.learningplatform.controller;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/status")
    public Map<String, String> getStatus() {
        Map<String, String> res = new HashMap<>();
        res.put("status", "Backend is running!");
        return res;
    }
}