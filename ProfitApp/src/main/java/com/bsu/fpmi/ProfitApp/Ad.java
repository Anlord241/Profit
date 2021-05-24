package com.bsu.fpmi.ProfitApp;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

public class Ad {

    private String id;
    private String title;
    private String description;
    private String createdAt;
    private String link;
    private String vendor;
    private String photoLink;
    private List<String> hashTags;
    private String discount;
    private String validUntil;
    private Double rating;
    private List<Review> reviews;

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

    private Ad() {

    }

    public void addReview(Review review){
        this.reviews.add(0, review);
    }
    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
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

    public List<Review> getReviews() {
        return reviews;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    static public boolean validate(Ad ad) {
        if (ad.getId() == null) {
            return false;
        }

        if (ad.getTitle() == null) {
            return false;
        }

        if (ad.getDescription() == null) {
            return false;
        } else {
            if (ad.getDescription().length() > 199) {
                return false;
            }
        }
        if (ad.getCreatedAt() == null) {
            return false;
        }

        if (ad.getLink() == null) {
            return false;
        }
        if (ad.getVendor() == null) {
            return false;
        } else {
            if (ad.getVendor().length() == 0) {
                return false;
            }
        }
        if (ad.getHashTags() == null) {
            return false;
        }
        if (ad.getDiscount() == null) {
            return false;
        }
        if (ad.getValidUntil() == null) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Ad{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
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

    public static Builder builder() {
        return new Ad().new Builder();
    }

    public class Builder {


        private Builder() {
        }

        public Builder setId(String id) {
            Ad.this.id = id;
            return this;
        }

        public Builder setTitle(String title) {
            Ad.this.title = title;
            return this;
        }

        public Builder setDescription(String description) {
            Ad.this.description = description;
            return this;
        }

        public Builder setCreatedAt(String createdAt) {
            try {
                if (!isDateCorrect(createdAt)) {
                    throw new IllegalArgumentException("Illegal date or date format: " + createdAt);
                }

            } catch (IllegalArgumentException e) {
                System.err.println(e.getMessage());
            }
            Ad.this.createdAt = createdAt;
            return this;
        }

        public Builder setLink(String link) {
            Ad.this.link = link;
            return this;
        }

        public Builder setVendor(String vendor) {
            Ad.this.vendor = vendor;
            return this;
        }

        public Builder setPhotoLink(String photoLink) {
            Ad.this.photoLink = photoLink;
            return this;
        }

        public Builder setHashTags(List<String> hashTags) {
            Ad.this.hashTags = hashTags;
            return this;
        }

        public Builder setDiscount(String discount) {
            Ad.this.discount = discount;
            return this;
        }

        public Builder setValidUntil(String validUntil) {
            try {
                if (!isDateCorrect(validUntil)) {
                    throw new IllegalArgumentException("Illegal date or date format: " + validUntil);
                }

            } catch (IllegalArgumentException e) {
                System.err.println(e.getMessage());
            }
            Ad.this.validUntil = validUntil;
            return this;
        }

        public Builder setRating(Double rating) {
            Ad.this.rating = rating;
            return this;
        }

        public Builder setReviews(List<Review> reviews) {
            Ad.this.reviews = reviews;
            return this;
        }

        public Ad build() {
            return Ad.this;
        }
    }
}
