import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

import LinkGood from "./img/LinkGood.png";
import zelda_Title from "./img/zelda_Title.png";
import mainCharacters from "./img/mainCharacters.jpg";
import metaScore from "./img/metaScore.png";
import popup_store from "./img/popup_store.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_content_id: 1,
      subject:{title:'THE LEGEND OF ZELDA', sub:'Greatest Game of All Time!!!'},
      welcome:{title:'Welcome', desc:'This is Link!', image: LinkGood},
      contents:[
        {id:1, title:'THE LEGEND OF ZELDA', desc:'《젤다의 전설》은 일본의 비디오 게임 개발자들 미야모토 시게루와 테즈카 타카시가 기획한 액션 어드벤처 게임 시리즈이다.《젤다의 전설》의 주무대는 중세 서유럽의 영향을 받은 가상의 판타지 세계 "하이랄 왕국"이다. 작중의 하이랄 왕국에 대한 모습은 《신들의 트라이포스》, 《시간의 오카리나》, 《바람의 지휘봉》, 《황혼의 공주》, 《스카이워드 소드》 등 시리즈가 전개됨에 따라 다양한 지역과 심도있는 역사가 추가됐다. 하이랄의 주요인구는 엘프같은 뾰족한 귀를 지닌 인간체 하일리아인이며 플레이어 캐릭터 링크와 공주 주역 젤다 또한 하일리아인이다.《젤다의 전설》의 가상 세계관은 각 게임마다 다르다. 대체적인 역사시간선에서 가논이 여러 번 침략을 해왔고 왕가의 공주와 마스터 소드에게 선택받은 용사가 가논돌프 또는 가논을 물리쳤다.', image: zelda_Title},
        {id:2, title:'Main Character', desc:'링크는 《젤다의 전설》 게임들의 주인공이 공유하는 이름이다. 각 작품의 "링크"는 대체적으로 뾰족한 녹색 모자를 쓰고 용기의 트라이포스를 사용하는 소년 남자의 하일리아인이라는 특징이 있다. 대부분의 게임에서 플레이어는 모험 시작 전 링크에게 별개의 이름을 지어줄 수 있으며 이 경우 논플레이어 캐릭터는 해당 이름으로 링크를 지칭한다. 각 작품의 링크는 별명을 가지고 있는데, 예를 들어 《시간의 오카리나》와 《무쥬라의 가면》의 링크는 "시간의 용사"라고 불린다. 비디오 게임의 과묵한 주인공으로서 링크는 직접 말을 하지 않고 단말마같은 짧은 음성만 낸다. 젤다는 하이랄의 공주이자 지혜의 트라이포스의 수호자이다. 《젤다의 전설》 시리즈의 "젤다"들은 서로가 조상 혹은 자손인 혈연관계를 가졌다. 대부분의 게임에서 젤다는 링크가 가논으로부터 구출해야하는 대상이지만, 일부에서 마법과 무기를 사용해 전투에 참여하거나 보조하는 역할도 맡는다.가논, 정식명칭 가논돌프는 《젤다의 전설》 시리즈 전체에서 최종악역을 맡는 인물이다. 가논은 사막 도적민족 겔드의 지도자이다. 링크, 젤다같은 시리즈 내 고정출연 인물들과는 달리 모든 작품에 등장하는 가논은 동일인물이라는 특징이 있다.', image: mainCharacters},
        {id:3, title:'Metacritic Score', desc:'발매되는 시리즈마다 평점이 항상 최상~상위권에 머무르는 닌텐도 대표 걸작 시리즈 중의 하나로, 패미통 평점 만점을 받은 몇 안 되는 게임 목록 중에 유일하게 다섯 개의 게임을 올려놓은 시리즈이기도 하며, 역대 최고의 게임 랭킹에서 신들의 트라이포스, 시간의 오카리나, 브레스 오브 더 와일드 등은 항상 최상위권을 고수하고 있다. 특히 젤다의 전설 시간의 오카리나는 메타크리틱에서 무려 99점이라는 가장 높은 점수를 보유하고 있으며, 현재도 브레스 오브 더 와일드와 1, 2위를 나눠가지고 있다.', image: metaScore},
        {id:4, title:'POP-UP STORE', desc:'기간 : 2023년 10월 20일 ~ 11월 26일, 장소 : 용산 아이파크몰 (서울특별시 용산구 한강대로23길 55 아이파크몰 리빙파크), 마리오, 동물의 숲, 젤다의 전설, 별의 커비, 스플래툰 등의 다양한 굿즈를 만날 수 있다.(직접 찍은 사진)', image: popup_store}
      ]
    }
  }
  render() {    
    var _title, _desc, _image = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }      
    }
    console.log("render", this);
    return (
      <div className='App'>        
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode: 'welcome'});
          }.bind(this)}></Subject>        
        <TOC onChangePage={function(id){
          debugger;
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });          
        }.bind(this)}
        data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc} img={_image}></Content>
      </div>
    );
  }  
}

export default App; 