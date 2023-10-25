-- 코드를 입력하세요
SELECT Hour(DATETIME) as HOUR, count(*) as COUNT
from ANIMAL_OUTS
where Hour(DATETIME) between '09:00' and '19:59'
group by HOUR
order by HOUR