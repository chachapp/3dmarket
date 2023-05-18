import React from "react";
import "../SCSS/Nav.scss";

function Nav() {
  return (
    <div className="nav-container">
      <input class="search__input" type="text" placeholder="Search" />
      <div>
        {/* DB에서 현재 상위인 키워드들 5개 가져오기 ?
          동물, 식물, 사람, 자동차, 건축 이런식으로.. 아이콘으로 보여주기
          
        */}
      </div>
    </div>
  );
}

export default Nav;
