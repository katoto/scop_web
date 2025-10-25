export const caseList = [
  {
    img: '/case/case-0.png',
    date: '2025-08-15',
    title: '「私はすべてが終わったと思っていた」——日本の乳がん患者が免疫介入を貫き抜いた逆転の物語と科学的検証',
    desc: '森田恵子（44歳、日本）「あのときに CP-101 を飲み続けることをやめていたら、あの日まで生きていられなかったかもしれません。それは奇跡ではありませんが、私に再びがんと闘う『力』を取り戻させてくれました。」彼女は絶望の淵で「がんと闘う力」を再び見出した。',
    type: 'realNew',
    link: '/jp/case/detail?id=1'
  },
]

export const caseNameList = [
  { label: 'すべて', value: 'all' },
  { label: '乳腺癌', value: 'breastCancer' },
  { label: '前列腺癌', value: 'prostateCancer' },
  { label: '胃癌', value: 'gastricCancer' },
  { label: '食道癌', value: 'esophagealCancer' },
  { label: '肺癌', value: 'lungCancer' },
  { label: '鼻咽癌', value: 'nasalCancer' },
  { label: '淋巴癌', value: 'lymphoma' },
  { label: '甲状腺癌', value: 'thyroidCancer' },
]

export const pillNameList = [
  { label: 'すべて', value: 'all' },
  { label: '患者の実話', value: 'realStory' },
  { label: '患者の回復フィードバック', value: 'recoveryFeedback' }
]

export const pillCaseList = [
  {
    img: '/case/case-1.png',
    date: '2025-10-15',
    title: '「もうダメだと思っていたが、今は彼女が全く違うと言う」——ある男性の健康回復の実話',
    desc: '李さん、42歳、南京の製造企業の部門マネージャー。長年の高圧生活で体調が悪化し、夫婦生活にも支障が出た。科学的な調整を通じて、男性としての自信と尊厳を取り戻した。',
    type: 'cp101_pill',
    subType: 'mensHealth',
    link: '/jp/case/detail?id=3'
  }
]

export const caseContact = {
  title: 'お問い合わせ',
  name: 'お名前',
  email: 'メールアドレス',
  submit: '送信',
  productInfo: {
    title: 'おすすめ製品',
    list: [
      {
        name: 'CP-101',
        img: '/images/pro-4.png',
        desc: '日本産アガリクスを核心とした免疫調節処方で、免疫力を高め、未病状態を改善します。'
      },
      {
        name: 'CP-101 Super',
        img: '/images/pro-2.png',
        desc: 'アガリクスに加え、多糖体の活性を強化し、免疫防御力と抗疲労能力を総合的に向上させます。'
      }
    ]
  }
}
