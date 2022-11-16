package com.bsu.fpmi.ProfitApp;

public class Review {

    private String id;
    private String username;
    private double rating;
    public String text;

    public Review(String id, String username, double rating, String text) {
        this.id = id;
        this.username = username;
        this.rating = rating;
        this.text = text;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public double getRating() {
        return rating;
    }

    public String getText() {
        return text;
    }
}
