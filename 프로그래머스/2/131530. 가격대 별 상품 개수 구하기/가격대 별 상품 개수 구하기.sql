-- 코드를 입력하세요
SELECT floor(PRICE*0.0001)* 10000 as PRICE_GROUP, count(*) as PRODUCTS
from PRODUCT
group by PRICE_GROUP
order by PRICE_GROUP