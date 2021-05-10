USE profit;
SELECT 
    (username),
    IF(is_creator, 'Creator', 'Not Creator') AS status
FROM
    users