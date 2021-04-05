package com.bsu.fpmi.ProfitApp;

public class FilterConfig {

    String from;
    String to;
    String vendor;

    FilterConfig(String from, String to, String vendor){
        this.from = from;
        this.to = to;
        this.vendor = vendor;
    }

    FilterConfig(){
        this(null,null,null);
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
