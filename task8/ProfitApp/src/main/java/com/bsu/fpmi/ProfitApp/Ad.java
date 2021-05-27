package com.bsu.fpmi.ProfitApp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

public class Ad {

    private String id;
    private String description;
    private String createdAt;
    private String link;
    private String vendor;
    private String photoLink;
    private List<String> hashTags;
    private String discount;
    private String validUntil;
    private Double rating;
    private List<String>reviews;

    private boolean isDateCorrect(String date) {
        SimpleDateFormat df = new SimpleDateFormat("dd.MM.yyyy");
        df.setLenient(false);
        try {
            df.parse(date);
            return true;

        } catch (ParseException e) {
            return false;
        }
    }

    Ad(String id, String description, String createdAt, String link, String vendor, String photoLink, List<String> hashTags, String discount,
       String validUntil, double rating, List<String>reviews) {
        this.id = id;
        this.description = description;


        if (!isDateCorrect(createdAt)) {
            throw new IllegalArgumentException("Illegal date or date format: " + createdAt);
        }
        if (!isDateCorrect(validUntil)) {
            throw new IllegalArgumentException("Illegal date or date format: " + validUntil);
        }
        this.createdAt = createdAt;
        this.link = link;
        this.vendor = vendor;
        this.photoLink=photoLink;
        this.hashTags = hashTags;
        this.discount = discount;
        this.validUntil=validUntil;
        this.rating = rating;
        this.reviews=reviews;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public String getLink() {
        return link;
    }

    public String getVendor() {
        return vendor;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public String getDiscount() {
        return discount;
    }

    public String getValidUntil() {
        return validUntil;
    }

    public Double getRating() {
        return rating;
    }

    public List<String> getReviews() {
        return reviews;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public void setValidUntil(String validUntil) {
        this.validUntil = validUntil;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public void setReviews(List<String> reviews) {
        this.reviews = reviews;
    }

    @Override
    public String toString() {
        return "Ad{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", createdAt='" + createdAt + '\'' +
                ", link='" + link + '\'' +
                ", vendor='" + vendor + '\'' +
                ", photoLink='" + photoLink + '\'' +
                ", hashTags=" + hashTags +
                ", discount='" + discount + '\'' +
                ", validUntil='" + validUntil + '\'' +
                ", rating=" + rating +
                ", reviews=" + reviews +
                '}';
    }
}
