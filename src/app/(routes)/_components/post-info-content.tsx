import { Descriptions, DescriptionsProps, Tag } from "antd";
import {
  LinkOutlined,
  CommentOutlined,
  HeartOutlined,
  PictureOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React from "react";
import "../_lib/styles/post-info-content.css";

interface PostInfoContentProps {}

const PostInfoContent: React.FC<PostInfoContentProps> = () => {
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "등록일",
      children: "24.14.14",
      span: 1,
      style: {
        width: "110px",
      },
    },
    {
      key: "2",
      label: "댓글/공감/사진/글자",
      children: (
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "5px",
          }}
        >
          <div>
            <CommentOutlined /> 14
          </div>
          <div>
            <HeartOutlined /> 231
          </div>
          <div>
            <PictureOutlined /> 12
          </div>
          <div>
            <EditOutlined /> 412
          </div>
        </div>
      ),
      span: 2,
      style: {
        width: "250px",
      },
    },
    {
      key: "3",
      label: "태그",
      children:
        "#따식갈비파스타망원 #따식갈비파스타 #망원동파스타 #망원파스타 #망원동맛집 #망원동데이트 #망원역맛집 #서이추 #소통 #일상 #맛집블로그 #후기블로그 #지빵도리",
      span: 2,
    },
    {
      key: "4",
      label: "본문",
      children: (
        <div className="break-all whitespace-pre-wrap">
          {`잇님들 안녕하세요~지빵도리입니다!어제쯤부터해서 이제 벚꽃들이활짝
          만개하고 있던데요~!오늘 아침에도 부슬부슬 내리는비와 함께 보는 벚꽃이
          너무 예쁘더라구요 🌸날씨도 점점 봄날씨가 되어가서오랜만에 망원동
          데이트를 하러떠나보았습니당 💨💨망원동은 제가 좋아하는서울 지역들 중
          한 곳인데요한강도 가깝고 시장도 있고은근 놀거리가 많아서 종종
          가봤어요오랜만에 가보는 망원동에맛있는 망원동 파스타 맛집을
          발견해버려서소개해드리려고 가져왔어요 ❣바로 따식갈비파스타입니다망원역
          맛집으로 꽤 유명하고리뷰도 좋아서 방문해보았는데요소개 바로 들어갑니당
          👉👈 따식갈비파스타 서울 마포구 월드컵로23길 12 1층 ⏰ 영업시간
          ⏰월~금: 11:30 ~ 21:00주말: 12:00 ~ 21:00* 연중무휴* 재료 조진 시
          임시휴무📞 전화번호 📞0507-1399-1517🪧 위치 🪧🔹️ 서울 마포구
          월드컵로23길 12 1층🚶‍♀️🚶 망원역 2번출구, 도보 4분 소개 순서 1.
          따식갈비파스타 내, 외부 소개2. 메뉴 소개3. 주변 주차장 소개4. 관련
          링크 소개5. 따식갈비파스타 한줄리뷰 1. 따식갈비파스타 내, 외부 소개
          따식갈비파스타는 망원역 2번출구에서도보 약 4분거리에 위치한한식과
          양식의 조화가 완벽한망원역 맛집이에요 🍝 그리고 따식갈비파스타의
          "따식"은"따뜻한 식사"라는 뜻으로부르스타로 끝까지 따뜻하게파스타를
          즐길 수 있는 망원역 맛집이에요~뚝배기 파스타는 종종 봤어도부르스타에
          준비되어 나오는파스타는 처음봐서 신기하기도 하고계속 따뜻하게 먹을 수
          있어서 좋았어요 🙃 매장 내부는 플랜테리어로꾸며져 있어서 망원동
          데이트하기에도정말 좋은 매장이었어요 🌱 이렇게 곳곳이
          식물스타일로꾸며져있는 망원동 데이트 맛집인데요각 자리끼리도 꽤 넓게
          떨어져 있어서데이트하기에도 너무 좋았던 것 같아요~ 따식갈비파스타 내에
          화장실도 있었구요 요렇게 귀여운 소품들도 있었답니다:)이제 메뉴
          소개해드릴게요~! 2. 메뉴 소개 따식갈비파스타 메뉴판입니다 📃저희는
          따순이갈비파스타 2인짜리 하나와이후 따밥(볶음밥)을 주문했어요~!
          레스토랑처럼 와인잔에 물을 주시더라구요! 기본 접시와 식기류도준비되어
          있었는데요접시도 귀여운데 숟가락, 나이프도너무 귀여운것 보이시나요 😏
          파스타가 나오기 전에체리에이드와 기본 반찬이 나왔어요!소스랑 초콜릿
          같이 나온것도되게 귀엽더라구요 ❤ 드디어 따순갈비파스타가
          나왔습니당~!각 테이블마다 버너가 있어서보자마자 신기했는데먹으면서
          식지 않게 하기 위해버너에서 계속 데워가면서먹을 수 있게 하기 위함이라
          하더라구요!갈비도 엄청 커서 놀랬어요 🥩가위로 한참 잘라 먹었답니다
          ㅎㅎ매장 쉐프님이 부부쉐프님이신데직접 개발하신 메뉴들이라고
          하시더라구요!대표메뉴답게 갈비파스타는완벽했습니다 ✪ ω ✪ 3. 주변
          주차장 소개 망원역에서 도보 4분거리이지만차를 이용하시는 분들을
          위해근처 주차장 몇군데도 소개해드릴게요 🚗1. 월드컵시장 노상
          공영주차장 💸 30분: 1,500원 💸💸 1시간: 3,000원 💸💸 4시간: 12,000원
          💸🚶‍♂️ 도보 약 3분 (224m) 🚶‍♀️2. 마포로얄프라자 민영 주차장 💸 30분:
          6,000원 💸💸 1시간: 12,000원 💸💸 4시간: 48,000원 💸🚶‍♂️ 도보 약 2분
          (147m) 🚶‍♀️ 월드컵시장 노상 공영주차장 서울특별시 마포구 망원동 480-5
          마포로얄프라자 민영 주차장 서울특별시 마포구 월드컵로 87 따식
          갈비파스타 망원 서울특별시 마포구 월드컵로23길 12 1층 이 블로그의
          체크인 역시 서울이라 그런지주차비도 생각보다 비싸더라구요 😰[추천]:
          월드컵시장 노상 공영 주차장 4. 관련 링크 소개 [인스타그램] 따식
          갈비파스타(@_dda.sik) • Instagram 사진 및 동영상 팔로워 1,354명,
          팔로잉 793명, 게시물 951개 - 따식 갈비파스타(@_dda.sik)님의 Instagram
          사진 및 동영상 보기 www.instagram.com 망원역 맛집,따식갈비파스타
          인스타그램이에요 🔗이미 유명한 망원역 파스타
          맛집이어서인지연예인분들도 많이 다녀가셨더라구요 😮분위기도 좋아서
          망원 데이트 코스로도추천드리는 맛집이니 한 번 구경해보세요 👀 5.
          따식갈비파스타 망원 한줄리뷰 데이트 코스로도 너무 좋았던망원역 파스타
          맛집,따식갈비파스타 어떠셨나요 ❤망원역 맛집으로도 유명하고망원동
          데이트코스로도 유명해서연예인들도 많이 방문하더라구요~!망원동에서 가장
          오랫동안 운영되고 있는파스타 맛집답게 매장 내 분위기도 너무
          좋고무엇보다도 부르스타와 그릴드에서계속 데워가며 먹을 수 있어서다
          먹을때까지도 따뜻하게 먹을 수 있었어요이웃님들도 망원동에서데이트
          계획이 있으시거나방문계획이 있으시다면한번쯤 방문해보시는
          것을강추드립니다 👍그럼 오늘의 리뷰는 여기까지 할게요 😉 "이 글은
          리뷰노트를 통하여 본 업체에서제품 또는 서비스를 제공받아 작성된
          글입니다." 따식 갈비파스타 망원 서울특별시 마포구 월드컵로23길 12 1층
          이 블로그의 체크인 이 장소의 다른 글 #따식갈비파스타망원
          #따식갈비파스타 #망원동파스타 #망원파스타 #망원동맛집 #망원동데이트
          #망원역맛집 #서이추 #소통 #일상 #맛집블로그 #후기블로그 #지빵도리`.slice(
            0,
            300
          ) + "..."}
          <button className="text-blue-500 underline">더보기</button>
        </div>
      ),
      span: 5,
      contentStyle: {
        overflow: "auto",
        maxHeight: "300px",
      },
      style: {
        overflow: "auto",
        maxHeight: "300px",
      },
    },
    {
      key: "5",
      label: "링크",
      children: (
        <ul>
          {[
            "https://www.instagram.com/_dda.sik/",
            "https://www.instagram.com/_dda.sik/",
          ].map((link, index) => (
            <li key={index} className="list-disc list-inside ">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 underline hover:text-gray-600 hover:underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      ),
      span: 5,
    },
    {
      key: "6",
      label: "반복 키워드",
      children: (
        <div className="flex flex-wrap gap-2">
          {[
            "망원역",
            "망원동",
            "맛집",
            "망원",
            "파스타",
            "망원동맛집",
            "망원역맛집",
            "망원동데이트",
            "서이추",
            "소통",
            "일상",
            "맛집블로그",
            "후기블로그",
            "지빵도리",
          ].map((keyword, index) => (
            <Tag
              color="geekblue"
              key={index}
              style={{
                fontSize: "14px",
              }}
            >
              {keyword} - {index}
            </Tag>
          ))}
        </div>
      ),
      span: 5,
    },
  ];
  return (
    <div>
      <Descriptions
        bordered
        size="small"
        title={
          <div className="flex flex-col gap-1 mt-2">
            <a href="link" target="_blank" rel="noreferrer">
              <span className="text-lg font-bold break-all whitespace-pre-wrap text-gray-700 hover:underline">
                [망원역 맛집] 망원역 데이트하기 좋고 한식과 양식의 완벽한 조화,
                따식갈비파스타 망원
              </span>
              <span className="ml-2">
                <LinkOutlined />
              </span>
            </a>
          </div>
        }
        items={items}
        layout="vertical"
        column={5}
      />
    </div>
  );
};

export default PostInfoContent;
