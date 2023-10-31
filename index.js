// const team3data = require('./data/data.js')
// const team5data = require('./data/data.js')

const express = require('express')
const app = express()

app.use(express.json())
app.post('/team3/register', (req, res) => {
  console.log(req.body)
  team3data.forEach(element => {
    if (element.user_id === req.body.user_id) {
      res.send("이미 존재하는 아이디입니다.")
    }
  })
  team3data.push(req.body)
  res.send("확인이요")
})

app.post("/team3/log", (req, res) => {
  team3data.forEach(element => {
    if (element.user_id === req.body.user_id) {
      element.log.push(req.body)
    }
  });
  console.log(team3data)
})

app.post("/team3/getlog", (req, res) => {
  team3data.forEach(element => {
    if (element.user_id === req.body.user_id) {
      console.log("getlog")
      res.send(element.log)
    }
  })
})

app.get('/team3/login', (req, res) => {
  console.log("team3 login data:", team3data)
  res.send(team3data)
})

app.post('/team5/register', (req, res) => {
  console.log(req.body)
  team5data.forEach(element => {
    if (element.user_id === req.body.user_id) {
      res.send("이미 존재하는 아이디입니다.")
    }
  })
  team5data.push(req.body)
  res.send("확인이요")
})

app.get('/team5/login', (req, res) => {
  console.log("team5 login data:", team5data)
  res.send(team5data)
})

app.listen(3000)

let team3data = [
  {
    "user_id": "test",
    "user_pw": "test",
    "user_name": "test",
    "log": [["김치볶음밥",`밥: 1인분 기준으로 1컵
    김치: 1컵 정도 (적당히 다진 김치)
    돼지고기: 100g (다진 돼지고기, 선택사항)
    양파: 1개 (작게 다진 양파)
    달걀: 2개
    식용유: 2~3 큰 숟가락
    간장: 2~3 큰 숟가락
    참기름: 1 큰 숟가락 (선택사항)
    소금: 맛에 따라
    후추: 맛에 따라`, `먼저 밥을 미리 짓고 식혀둡니다. 한두 시간 정도 식히면 좋습니다.

    돼지고기가 있다면 먼저 잘게 다져서 기름이 녹을 때까지 볶아줍니다.
    
    기름이 나오면 다진 양파를 넣고 양파가 투명해질 때까지 볶아줍니다.
    
    김치를 넣고 함께 볶아줍니다. 김치가 볶음밥의 맛을 살려줍니다.
    
    밥을 넣고 김치와 밥이 잘 섞일 때까지 볶아줍니다.
    
    간장을 더해 볶음밥에 감칠맛을 더합니다.
    
    후추와 소금을 맛에 따라 조절합니다.
    
    볶음밥을 중약불에서 조금 더 볶아줍니다.
    
    계란을 풀어 볶음밥에 넣고 잘 섞어줍니다.
    
    볶음밥이 고루 섞이고 계란이 익으면 불을 끕니다.
    
    볶음밥을 그릇에 담고 참기름을 뿌린 뒤 바로 먹습니다.`],["까르보나라", `스파게티: 200g
    베이컨 또는 팬치오: 100g (작게 썬다)
    계란: 2개
    파슬리: 다진 것으로 장식용 (선택 사항)
    파미지아노 치즈: 1/2컵 (다진 것)
    소금: 맛에 따라
    후추: 맛에 따라
    올리브 오일: 2큰술
    마늘: 1~2개 (다진 것, 선택 사항)`, `먼저 스파게티를 물과 소금을 넣고 끓는 물에 삶아줍니다. 스파게티가 "알 데 뢰"로 삶아야 하며, 이는 스파게티가 미끄러지지 않고 입에 달라붙을 정도로 익은 상태입니다. 그리고 스파게티를 건져내어 물을 건져냅니다.

    팬에 올리브 오일과 베이컨 또는 팬치오를 중약불로 예열한 후 볶아줍니다. 베이컨이 노릇노릇하게 익을 때까지 볶습니다. (만약 마늘을 사용한다면 마늘을 다져서 함께 볶아줍니다.)
    
    계란을 볼에 깨고 파미지아노 치즈와 후추를 넣어 섞은 후 스파게티에 조금식 더해줍니다. (올바로 만들기 위해서 스파게티가 아주 약간 미지근한 상태여야 합니다.)
    
    계란 혼합물이 모든 스파게티와 베이컨과 골고루 섞이도록 잘 섞어줍니다.
    
    파미지아노 치즈와 식용유를 곁들여 먹습니다. 더 많은 치즈를 넣어줘도 좋습니다.
    
    파슬리로 장식하고 더 많은 후추를 뿌려 먹습니다.`]]
  }
];

let team5data = [
  {
    "user_id": "test",
    "user_pw": "test",
    "user_name": "test",
    "log": []
  }
];