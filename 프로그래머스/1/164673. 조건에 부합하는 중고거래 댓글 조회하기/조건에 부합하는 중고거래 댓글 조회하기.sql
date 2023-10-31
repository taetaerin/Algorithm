-- 코드를 입력하세요
select
USED_GOODS_BOARD.TITLE,
USED_GOODS_BOARD.BOARD_ID,
USED_GOODS_REPLY.REPLY_ID,
USED_GOODS_REPLY.WRITER_ID,
USED_GOODS_REPLY.CONTENTS,
date_format(USED_GOODS_REPLY.CREATED_DATE, '%Y-%m-%d') as CREATED_DATE
from USED_GOODS_BOARD, USED_GOODS_REPLY
where USED_GOODS_BOARD.BOARD_ID = USED_GOODS_REPLY.BOARD_ID
and 
USED_GOODS_BOARD.CREATED_DATE like '2022-10%'
order by USED_GOODS_REPLY.CREATED_DATE, USED_GOODS_BOARD.TITLE 

# SELECT
# USED_GOODS_BOARD.TITLE,
# USED_GOODS_BOARD.BOARD_ID,
# USED_GOODS_REPLY.REPLY_ID,
# USED_GOODS_REPLY.WRITER_ID,
# USED_GOODS_REPLY.CONTENTS,
# date_format(USED_GOODS_REPLY.CREATED_DATE, '%Y-%m-%d') as CREATED_DATE
# from USED_GOODS_BOARD, USED_GOODS_REPLY
# where USED_GOODS_BOARD.BOARD_ID = USED_GOODS_REPLY.BOARD_ID and
# date_format(USED_GOODS_BOARD.CREATED_DATE, '%Y-%m') = '2022-10'
# order by USED_GOODS_REPLY.CREATED_DATE, USED_GOODS_BOARD.TITLE