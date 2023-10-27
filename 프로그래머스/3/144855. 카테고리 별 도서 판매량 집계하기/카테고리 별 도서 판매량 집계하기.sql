-- 코드를 입력하세요
SELECT CATEGORY, sum(SALES) as TOTAL_SALES
from BOOK, BOOK_SALES
where BOOK.BOOK_ID = BOOK_SALES.BOOK_ID and date_format(SALES_DATE, '%Y-%m-%d') 
between '2022-01-01'and '2022-01-31'
group by CATEGORY
order by CATEGORY