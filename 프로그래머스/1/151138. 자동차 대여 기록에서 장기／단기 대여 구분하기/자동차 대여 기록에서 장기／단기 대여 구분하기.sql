-- 코드를 입력하세요
SELECT
HISTORY_ID, 
CAR_ID,
date_format(START_DATE, '%Y-%m-%d') as START_DATE,
date_format(END_DATE, '%Y-%m-%d') as END_DATE,
case when DATEDIFF(END_DATE, START_DATE) + 1 < 30 
then '단기 대여' else '장기 대여' end as RENT_TYPE
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where date_format(START_DATE, '%Y-%m-%d') between '2022-09-01' and '2022-09-31'
order by HISTORY_ID DESC