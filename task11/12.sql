USE profit;

SELECT 
    users.id,
    IFNULL(active_users.number_of_reviews, 0) AS reviews_number
FROM
    users
        LEFT JOIN
    (SELECT 
        user_id, COUNT(user_id) AS number_of_reviews
    FROM
        reviews
    WHERE
        DAY(reviews.created_at) = 9
            AND MONTH(reviews.created_at) = 5
    GROUP BY reviews.user_id) AS active_users ON active_users.user_id = users.id;
