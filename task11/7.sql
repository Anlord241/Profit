SELECT 
    creators.id AS creator_id, creators.creator, created_at
FROM
    ads
        LEFT JOIN
    (SELECT 
        username AS creator, id
    FROM
        users) AS creators ON ads.creator_id = creators.id
WHERE
    CHAR_LENGTH(description) > 100;