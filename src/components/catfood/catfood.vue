<template>
    <div class="catfood-wrapper">
      <!--轮播图-->
      <div class="swiper">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <a href="">
             <img src="https://img2.epetbar.com/nowater/2017-08/08/17/e1cbb61b8ae1d2c41c39a0b49bb5f2be.jpg@!water">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="">
              <img src="https://img2.epetbar.com/nowater/2017-08/08/18/5efdcc9141ead917b42f4be253219ca8.jpg@!water">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="">
              <img src="https://img2.epetbar.com/nowater/2017-08/09/09/0d2762adea2d73ba0a37945f6915834e.jpg@!water">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="">
              <img src="https://img2.epetbar.com/nowater/2017-08/08/17/e1cbb61b8ae1d2c41c39a0b49bb5f2be.jpg@!water">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="">
              <img src="https://img2.epetbar.com/nowater/2017-08/08/18/5efdcc9141ead917b42f4be253219ca8.jpg@!water">
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="item-wrapper">
        <ul class="item-content">
          <li class="item">
            <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:722&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-04/11/10/3d1bf8fa122cb7ae9b909dabe41680af.png@!water">
            </a>
          </li>
          <li class="item">
            <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:3581|extends_str:5019&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-04/11/10/acf08d74caff5b8fe79a5f360ef9724e.png@!water">
            </a>
          </li>
          <li class="item">
            <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:3584|extends_str:6283&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-04/11/10/18d591aca671bcd8aa13bc883d26ba3b.png@!water">
            </a>
          </li>
          <li class="item">
            <a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:去毛球粮&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-04/11/10/8f375311125682db20ace86575196977.png@!water">
            </a>
          </li>
        </ul>
      </div>
      <split></split>
      <!--喜跃-->
      <div class="happy-wrapper">
        <div class="happy-text">
          <span class="text1">喜跃VS妙多乐</span>
          <span class="text2">1元换罐头</span>
        </div>
        <div class="happy-img">
          <a href="http://sale.epet.com/m/mould/activity/sMjA4NQ%3D%3D.html?tid=2085&amp;fw=0">
            <img src="https://img2.epetbar.com/nowater/2017-08/08/17/e1cbb61b8ae1d2c41c39a0b49bb5f2be.jpg@!water">
          </a>
        </div>
      </div>
      <!--安娜玛特-->
      <div class="anna-wrapper">
        <div class="anna-text">
          <span class="text1">安娜玛特</span>
          <span class="text2">增强免疫,美毛粮</span>
        </div>
        <div class="anna-img">
          <a href="http://sale.epet.com/m/mould/activity/ztMjAyNA%3D%3D.html?tid=2024&amp;fw=0">
            <img src="https://img2.epetbar.com/nowater/2017-08/08/16/26a1146a3c18ec810ac12334fe3b1b1f.jpg@!water">
          </a>
        </div>
      </div>
      <!--蓝氏-->
      <div class="blue-wrapper">
        <div class="blue-text">
          <span class="text1">蓝氏 天然营养</span>
          <span class="text2">调理肠胃,呵护被毛</span>
        </div>
        <div class="blue-img">
          <a href="http://sale.epet.com/m/mould/activity/dMjIwMA%3D%3D.html?tid=2200&amp;fw=0">
            <img src="https://img2.epetbar.com/nowater/2017-08/01/09/c45a12a89be62c75b0738f6a07d29b9e.jpg@!water">
          </a>
        </div>
      </div>
      <div class="catfood-list">
        <!--产品导航-->
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <span class="list-text active">进口猫粮</span>
          </mt-tab-item>
          <mt-tab-item id="2">
            <span class="list-text">国产猫粮</span>
          </mt-tab-item>
          <mt-tab-item id="3">
            <span class="list-text">拆零试吃</span>
          </mt-tab-item>
          <mt-tab-item id="4">
            <span class="list-text">处方猫粮</span>
          </mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-cell>
              <ul class="cat-type-list">
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-10/14/10/a78d5e324b3075a1dc8dfc63395663bd.png@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-03/22/10/d9f3440f49a79249498ebbf81f7cbb82.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2015-11/30/16/8582e47d3605f8de85deb744000618c4.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-06/04/10/d89f5b229b404d050a6db681ec546742.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2017-04/20/14/2c1b63013c352339445e6913e3c46269.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-08/03/10/6716112a179595212fe0e4732f1aa0d7.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-10/14/10/a78d5e324b3075a1dc8dfc63395663bd.png@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://img1.epetbar.com/2016-11/30/18/e3390a20bc7fa419bf6893a6010ba898.jpg@!300w-b" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell>
              <ul class="cat-type-list">
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2015-11/30/16/8582e47d3605f8de85deb744000618c4.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-03/22/10/d9f3440f49a79249498ebbf81f7cbb82.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://img1.epetbar.com/2015-03/21/0caa6b75da6c09e4b6b76723dada1fec.jpg@!300w-b" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2015-05/16/89031b62d0e9ad94a75ee2ac8d1cdda9.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2015-07/19/f6d7de27c07f60ea31cfd0dccdc6a112.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2015-05/16/bc9851420e80a84f1edb0eda35736c3a.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2015-10/18/00/e1ff87e42d56f79d13ca14ed44bac07d.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-10/14/10/a78d5e324b3075a1dc8dfc63395663bd.png@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://img1.epetbar.com/2016-11/30/18/e3390a20bc7fa419bf6893a6010ba898.jpg@!300w-b" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell>
              <ul class="cat-type-list">
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2014-05/27/85ca965e55f2d6f844b87a899302f8c2.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-03/22/10/d9f3440f49a79249498ebbf81f7cbb82.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2015-11/30/16/8582e47d3605f8de85deb744000618c4.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-06/04/10/d89f5b229b404d050a6db681ec546742.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2017-04/20/14/2c1b63013c352339445e6913e3c46269.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-08/03/10/6716112a179595212fe0e4732f1aa0d7.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-10/14/10/a78d5e324b3075a1dc8dfc63395663bd.png@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://img1.epetbar.com/2016-11/30/18/e3390a20bc7fa419bf6893a6010ba898.jpg@!300w-b" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <mt-cell>
              <ul class="cat-type-list">
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2015-08/26/18/f76880fe74b3b269c9a8d117cdc2b30d.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-03/22/10/d9f3440f49a79249498ebbf81f7cbb82.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2015-11/30/16/8582e47d3605f8de85deb744000618c4.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-06/04/10/d89f5b229b404d050a6db681ec546742.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2017-04/20/14/2c1b63013c352339445e6913e3c46269.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-08/03/10/6716112a179595212fe0e4732f1aa0d7.jpg@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/gtype_1.png?version=2016071303" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="https://img1.epetbar.com/2016-10/14/10/a78d5e324b3075a1dc8dfc63395663bd.png@!300w-b" alt="">
                  </div>
                  <div class="cat-detail">
                    <div class="cat-detail-top">
                      <img src="https://img1.epetbar.com/2016-11/30/18/e3390a20bc7fa419bf6893a6010ba898.jpg@!300w-b" alt="">
                      <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
                    </div>
                    <div class="cat-detail-bottom">
                      <span class="iconfont icon-rmb-copy"></span>
                      <span>328.00</span>
                      <s>24.29元/斤</s>
                      <p>
                        <span class="sating">互动:1725(94%好评)</span>
                        <span class="sell">售出:5758</span>
                      </p>
                      <p class="iconfont icon-shouye1">
                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" width="30" height="30">
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <!--<ul class="catfood-list">
        <li class="catfood-item">
          <div class="pro-block">
            <a href="javascript:;">进口猫粮</a>
          </div>
        </li>
        <li class="catfood-item">
          <div class="pro-block">
            <a href="javascript:;">国产猫粮</a>
          </div></li><li class="dscroll-li">
        <div class="pro-block">
          <a href="javascript:;" class="ft13 ftc">拆零试吃</a>
        </div>
      </li>
        <li class="catfood-item">
          <div class="pro-block">
            <a href="javascript:;" class="ft13 ftc">处方猫粮</a>
          </div>
        </li>
      </ul>-->
    </div>
</template>
<script>
  import split from '../split/split.vue'

  export default {
    data() {
      return {
        selected: '1'
      }
    },
    components: {
      split
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .catfood-wrapper
    width 100%
    height 667px
    .swiper
      width 100%
      height 165px
      img
        width 100%
        height 100%
    .item-wrapper
      width 100%
      height 95px
      margin 10px 0
      .item-content
        width 100%
        height 100%
        display flex
        .item
          width 0
          flex 1
          img
            width 100%
            height 100%
    .happy-wrapper,.anna-wrapper,.blue-wrapper
      width 100%
      height 210px
      .happy-text,.anna-text,.blue-text
        padding 10px
        .text1
          font-size 16px
        .text2
          font-size 12px
          color #999
      .happy-img,.anna-img,.blue-img
        width 100%
        height 165px
        img
          width 100%
          height 100%

    .catfood-list
      width: 100%
      overflow: hidden
      border-1px(#e7e7e7)
      padding 12px 0
      .mint-tab-item
        display block
        width: 25%
        border-radius 5px
        padding: 4px 2px;
        margin: 0 20px;
        background-color: #f5f5f5;
        color:#333
        font-size 13px
        font-weight 400
      .is-selected
        border:none
        background-color: red
        color:#fff
      .tab-content
        width: 100%
        .tab-item
          width: 100%
          background-color: #fff
          li
            width 100%
            a
              display block
              /*height: 45px*/
              img
                width: 100%
                height 100%
                border 0
  .cat-type-list
    overflow hidden
    li
      float left
      width 100%
      display flex
      /*border-1px(#e7e7e7)*/
      .img
        flex 3
        padding-top 12px
        img
          width: 100%
      .cat-detail
        flex 7
        .cat-detail-top
          padding 8px
          img
            width auto
            height 17px
            margin-right 3px
            vertical-align -4px
          span
            font-weight 400
            font-size 14px
            line-height 16px
            color #333
        .cat-detail-bottom
          margin-top 15px
          font-size 12px
          color #999
          line-height 1.4
          position relative
          span
            color #ff4c41
            font-size 14px
          .sating
            color #999
          .sell
            color #999
          .icon-shouye1
            position absolute
            right 0
            bottom 0
            margin-right 5px
            /*font-size 20px
            padding 0 6px
            color red
            border 1px solid red
            text-align center*/
            width 32px
            height 30px


</style>
