SELECT 
    DATEDIFF(CURDATE(), MIN(created_at)) AS days_number
FROM
    ads;