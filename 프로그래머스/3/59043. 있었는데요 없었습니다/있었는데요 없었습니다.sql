-- 코드를 입력하세요
SELECT ANIMAL_INS.ANIMAL_ID, ANIMAL_INS.NAME
from ANIMAL_INS, ANIMAL_OUTS
where ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID and ANIMAL_INS.DATETIME > ANIMAL_OUTS.DATETIME
order by ANIMAL_INS.DATETIME