package com.bsu.fpmi.ProfitApp;

import java.util.ArrayList;
import java.util.List;

public class FilterConfig {

    String from;
    String to;
    String vendor;
    List<String> tags;


    FilterConfig(String from, String to, String vendor, ArrayList<String> tags){
        this.from = from;
        this.to = to;
        this.vendor = vendor;
        this.tags = tags;
    }

    FilterConfig(){
        this(null,null,null,null);
    }

    public List<String> getTags() {
        return tags;
    }

    public String getFrom() {
        return from;
    }

    public String getTo() {
        return to;
    }

    public String getVendor() {
        return vendor;
    }
}
