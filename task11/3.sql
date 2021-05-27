SELECT 
    ads.id,
    creators.creator,
    title,
    description,
    link,
    discount,
    photo_link,
    created_at,
    valid_until
FROM
    ads
        LEFT JOIN
    (SELECT 
        username AS creator, id
    FROM
        users) AS creators ON ads.creator_id = creators.id
WHERE
    creators.creator = 'Андрей'
        AND ads.created_at BETWEEN '2021-05-01 00:00:00' AND '2021-05-01 23:59:59';