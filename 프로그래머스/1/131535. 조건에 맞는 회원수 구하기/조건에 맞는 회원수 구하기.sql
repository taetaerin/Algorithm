-- 코드를 입력하세요
SELECT count(*) as USERS
FROM USER_INFO
WHERE YEAR(date_format(JOINED, '%Y-%m-%d')) = '2021' and AGE>=20 and AGE<30