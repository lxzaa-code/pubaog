
import { useMessage } from "naive-ui";


export const currentSeasonMessage = () => {

  const message = useMessage()
  const date = new Date();
  const month = date.getMonth();
  let seasonMessage = '';
  if (month >= 2 && month <= 4) {
    seasonMessage = '春天啦！，万物复苏！';
  } else if (month >= 5 && month <= 7) {
    seasonMessage = '夏天啦！，阳光明媚！';
  } else if (month >= 8 && month <= 10) {
    seasonMessage = '秋天啦！，果实累累！';
  } else {
    seasonMessage = '冬天啦！，白雪皑皑！';
  }
  message.success(seasonMessage)
};