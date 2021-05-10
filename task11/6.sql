SELECT 
    creators.creator, created_at, title
FROM
    ads
        LEFT JOIN
    (SELECT 
        username AS creator, id
    FROM
        users) AS creators ON ads.creator_id = creators.id
ORDER BY created_at;