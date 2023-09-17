import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footerlogo">
        <img src="./img/拾月菓logo.png" alt="" width="200" height="100" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="footer-item">
              <h4>品牌故事</h4>
              <nav>
                <a href="#">品牌介紹</a>
              </nav>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-item">
              <h4>門市據點</h4>
              <nav>
                <a href="#">地址:宜蘭縣大同區菓子路10巷4號</a>
                <a href="#">電話 : 03-2232-1010</a>
                <a href="#">Email : octmoon@octmoon.com</a>
              </nav>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-item">
              <h4>顧客服務</h4>
              <nav>
                <a href="#">所有商品</a>
                <a href="#">最新消息</a>
                <a href="#">購物須知</a>
              </nav>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-item footer-subs">
              <h4>訂閱電子報</h4>
              <form>
                <input type="text" name="" />
                <input type="submit" value="訂閱" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        copyright &copy;2023 拾月菓
      </div>
    </footer>
  );
}

export default Footer;