package com.bsu.fpmi.ProfitApp;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.stream.Collectors;

public class AdCollection {

    List<Ad> ads;

    AdCollection() {
        ads = new ArrayList<>();
    }

    public Ad get(String id) {
        return ads.stream().filter(a -> a.getId().equals(id)).findAny().orElse(null);
    }

    public boolean remove(String id) {
        return ads.removeIf(a -> a.getId().equals(id));
    }

    private boolean containsTags(List <String> first, List <String> second) {
        AtomicBoolean ok = new AtomicBoolean(false);
        first.forEach((itemA) -> {
        if (second.indexOf(itemA) != -1) {
            ok.set(true);
        }
      });
        return ok.get();
    }

    public List<Ad> getPage(int skip, int top, FilterConfig fc, String sortType) {

        ads.forEach((item) -> {
            if (item.getReviews().size()!=0) {
                double rating = item.getReviews().stream().mapToDouble(Review::getRating).sum() / item.getReviews().size();
                item.setRating(rating);
            }

        });
        List<Ad> toReturn = ads;
        SimpleDateFormat df = new SimpleDateFormat("dd.MM.yyyy");
        if (sortType.equalsIgnoreCase("Rating")) {
            toReturn = toReturn.stream().sorted((a, b) -> Double.compare(b.getRating(), a.getRating())).collect(Collectors.toList());
        } else {
            toReturn = toReturn.stream().sorted((a, b) ->
                    {
                        try {
                            return df.parse(b.getCreatedAt()).compareTo(df.parse(a.getCreatedAt()));
                        } catch (ParseException e) {
                            e.printStackTrace();
                        }
                        return 0;
                    }
            ).collect(Collectors.toList());
        }
        if (fc.getTags()!=null) {
            if (fc.getTags().size() != 0) {
                toReturn = toReturn.stream().filter((item) -> this.containsTags(item.getHashTags(), fc.getTags())).collect(Collectors.toList());
            }
        }
        if (fc.getFrom() != null) {
            toReturn = toReturn.stream().filter(a -> {
                try {
                    return df.parse(a.getCreatedAt()).after(df.parse(fc.getFrom()));
                } catch (ParseException e) {
                }
                return false;
            }).collect(Collectors.toList());
        }

        if (fc.getTo() != null) {
            toReturn = toReturn.stream().filter(a -> {
                try {
                    return df.parse(a.getCreatedAt()).before(df.parse(fc.getTo()));
                } catch (ParseException e) {
                }
                return false;
            }).collect(Collectors.toList());
        }
        if (fc.getVendor() != null) {
            toReturn = toReturn.stream().filter(a -> a.getVendor().equals(fc.getVendor())).collect(Collectors.toList());
        }
        if (skip >= toReturn.size()) {
            toReturn.clear();
        } else if (skip + top > toReturn.size()) {
            top = toReturn.size() - skip;
        }
        if (toReturn.size() != 0) {
            toReturn = toReturn.subList(skip, top);
        }

        return toReturn;
    }


    public boolean add(Ad ad) {
        if (ads.stream().filter(a -> a.getId().equals(ad.getId())).count() !=0){
            return false;
        }
        boolean validate = Ad.validate(ad);
        if (validate) {
            ads.add(ad);
        }
        return validate;
    }

    public boolean edit(String id, Ad ad) {
        Ad previous = get(id);
        Ad temp = previous;

        if (previous == null) {
            return false;
        }
        if ((ad.getId() != null) && !ad.getId().equals(previous.getId())) {

            return false;
        }

        if ((ad.getVendor() != null) && !ad.getVendor().equals(previous.getVendor())) {
            return false;
        }

        if (ad.getTitle() != null) {
            temp.setTitle(ad.getTitle());
        }
        if (ad.getDescription() != null) {
            temp.setDescription(ad.getDescription());
        }

        if (ad.getLink() != null) {
            temp.setLink(ad.getLink());
        }
            temp.setPhotoLink(ad.getPhotoLink());
        if (ad.getHashTags() != null) {
            temp.setHashTags(ad.getHashTags());
        }
        if (ad.getDiscount() != null) {
            temp.setDiscount(ad.getDiscount());
        }

        if (ad.getValidUntil() != null) {
            temp.setValidUntil(ad.getValidUntil());
        }

        if (ad.getRating() != null) {
            temp.setRating(ad.getRating());
        }

        if (ad.getReviews() != null) {
            temp.setReviews(ad.getReviews());
        }
        if (Ad.validate(temp)) {
            ads.remove(previous);
            ads.add(temp);
            return true;
        }
        return false;
    }

    public void removeAll() {
        ads.clear();
    }
}