// import 和 require 的识别格式不同
const axios = require("axios");
const source = require("./i18n/locales/zh.json");

const fs = require("fs");
const path = require("path");
// 引入不了因为node是用的commonjs 识别不了es modules的js
const langOptions = [
  {
    text: "英语",
    value: "en",
  },
  {
    text: "日语",
    value: "ja",
  },
];
async function translate() {
  for (let lang of langOptions) {
    const res = await axios.post(
      "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
      {
        model: "qwen-plus",
        messages: [
          {
            role: "system",
            content: `你现在是一个json数据多语言转换工具 会接收到用户的json数据 请你把用户要求的值 从中文转换成所需的语言 替换掉里面对应的值 只需要返回数据不需要多余的回答且不需要已任何形式包裹`,
          },
          {
            role: "user",
            content: `我想把下面的值 转换成${
              lang.text
            } 这是我的json数据 ${JSON.stringify(source)}`,
          },
        ],
      },
      {
        headers: {
          Authorization: "Bearer 输入你的APIKEY",
          "Content-Type": "application/json",
        },
      }
    );
    if (res && res.status == 200) {
      let result = res.data.choices[0].message.content;
      fs.writeFileSync(
        path.join(__dirname, `./i18n/locales/${lang.value}.json`),
        result
      );
      console.log(`生成语言包${lang.text}/${lang.value}.json成功`);
    }
  }
}

translate();
