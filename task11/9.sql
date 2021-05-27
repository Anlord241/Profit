USE profit;
SELECT 
    *
FROM
    (SELECT 
        creators.id AS creator_id,
            creators.username AS creator_name,
            advertisements.id AS ad_id,
            advertisements.title,
            advertisements.description,
            advertisements.link,
            advertisements.discount,
            advertisements.created_at,
            advertisements.valid_until,
            COUNT(ad_id) AS number_of_reviews
    FROM
        reviews
    LEFT JOIN (SELECT 
        *
    FROM
        ads) AS advertisements ON ad_id = advertisements.id
    LEFT JOIN (SELECT 
        *
    FROM
        users) AS creators ON creators.id = advertisements.creator_id
    GROUP BY ad_id) AS popular_ads
WHERE
    number_of_reviews > 3;