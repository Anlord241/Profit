USE profit;
SELECT 
    *
FROM
    (SELECT 
        creators.user_id,
            creators.username,
            COUNT(creators.user_id) number_of_offers
    FROM
        ads
    LEFT JOIN (SELECT 
        username, id AS user_id
    FROM
        users) AS creators ON ads.creator_id = creators.user_id
    WHERE
        CURDATE() < ads.valid_until
    GROUP BY creators.user_id) AS active_users
WHERE
    number_of_offers > 3;
