<template>
  <div>
    <header class="header">
      <symbol id="icon-cart" viewBox="0 0 38 32">
        <title>cart</title>
        <path class="path1"
          d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z">
        </path>
        <path class="path2"
          d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z">
        </path>
        <path class="path3"
          d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z">
        </path>
        <path class="path4"
          d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z">
        </path>
      </symbol>
      <div class="navbar">
        <div class="navbar-left-container">
          <!-- <a href="/">
              <img class="navbar-brand-logo" src="static/logo.png"></a> -->
        </div>
        <div class="navbar-right-container" style="display: flex;">
          <div class="navbar-menu-container">
            <!--<a href="/" class="navbar-link">我的账户</a>-->
            <span class="navbar-link"></span>
            <a href="javascript:void(0)" class="navbar-link">Login</a>
            <a href="javascript:void(0)" class="navbar-link">Logout</a>
            <div class="navbar-cart-container">
              <span class="navbar-cart-count"></span>
              <a class="navbar-link navbar-cart-link" href="/#/cart">
                <svg class="navbar-cart-logo">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="nav-breadcrumb-wrap">
      <div class="container">
        <nav class="nav-breadcrumb">
          <a href="/">Home</a>
          <span>Goods</span>
        </nav>
      </div>
    </div>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg></a>
          <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)">All</a></dd>
              <dd>
                <a href="javascript:void(0)">0 - 100</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">100 - 500</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">500 - 1000</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">1000 - 2000</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item, index) in goodsList" :key="index">
                  <div class="pic">
                    <a href="#"><img :src="item.productImg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{ item.productName }}</div>
                    <div class="price">￥{{ item.productPrice }}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__wrap">
        <div class="footer__secondary">
          <div class="footer__inner">
            <div class="footer__region">
              <span>Region</span>
              <select class="footer__region__select">
                <option value="en-US">USA</option>
                <option value="zh-CN">China</option>
                <option value="in">India</option>
              </select>
            </div>
            <div class="footer__secondary__nav">
              <span>Copyright © 2017 ic All Rights Reserved.</span>
              <a href="http://us.lemall.com/us/aboutUs.html">
                About Us
              </a>
              <a href="http://us.lemall.com/us/termsofUse.html">
                Terms &amp; Conditions
              </a>
              <a href="http://us.lemall.com/us/privacyPolicy.html">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
// vue3.2
// import axios from 'axios'
import { ref } from "vue";
import { handleGoodsList } from '../api/good'
import { GoodsListResp } from '../api/interface/good'

let goodsList: any = ref([])

async function handlerGoods() {
  try {
    let { data: data } = await handleGoodsList({
      pageSize: 10,
      page: 1,
      price: "",
      productName: ""
    })
    goodsList.value = data
    console.log(goodsList)

  } catch (e) {
    console.error(e)
  }
}

handlerGoods()


</script>

<style scoped>
@charset "UTF-8";

.accessory-list>ul:after {
  visibility: hidden;
  display: block;
  content: " ";
  clear: both;
}

.accessory-list>ul>li {
  float: left;
  width: 23.80952%;
  margin-right: 1.5873%;
  margin-bottom: 1.5873%;
  background: #fff;
  border: 2px solid #e9e9e9;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
}

.accessory-list>ul>li:hover {
  border-color: #ee7a23;
  -webkit-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
  -webkit-box-shadow: 0 0 10px #999;
  box-shadow: 0 0 10px #999;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
}

.accessory-list.col-4>ul>li {
  width: 23.80952%;
  margin-right: 1.5873%;
  margin-bottom: 1.5873%;
}

.accessory-list.col-4>ul>li:nth-child(4n) {
  margin-right: 0;
}

.accessory-list.col-5>ul>li {
  width: 18.73016%;
  margin-right: 1.5873%;
  margin-bottom: 1.5873%;
}

.accessory-list.col-5>ul>li:nth-child(5n) {
  margin-right: 0;
}

.accessory-list .pic {
  overflow: hidden;
}

.accessory-list .pic a {
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.accessory-list .pic img {
  width: 100%;
}

.accessory-list .main {
  padding: 20px 10px 10px 10px;
}

.accessory-list .main .name {
  height: 4em;
  line-height: 1.25em;
  padding-bottom: 10px;
  font-family: "moderat", sans-serif;
  font-weight: bold;
  overflow: hidden;
}

.accessory-list .main .price {
  float: left;
  line-height: 30px;
  color: #d1434a;
  font-size: 1.25em;
}

.accessory-list .main .quantity {
  float: right;
}

.accessory-list .main .btn-area {
  clear: both;
  padding-top: 10px;
}

.accessory-list .main .btn-area .btn {
  width: 100%;
}

@media only screen and (max-width: 991px) {
  .accessory-list.col-4>ul>li {
    width: 32.27513%;
    margin-right: 1.5873%;
    margin-bottom: 1.5873%;
  }

  .accessory-list.col-4>ul>li:nth-child(4n) {
    margin-right: 1.5873%;
  }

  .accessory-list.col-4>ul>li:nth-child(3n) {
    margin-right: 0;
  }

  .accessory-list.col-5>ul>li {
    width: 23.80952%;
    margin-right: 1.5873%;
    margin-bottom: 1.5873%;
  }

  .accessory-list.col-5>ul>li:nth-child(5n) {
    margin-right: 20px;
  }

  .accessory-list.col-5>ul>li:nth-child(4n) {
    margin-right: 0;
  }

  .accessory-list .main .name {
    font-size: 1.3rem;
  }

  .accessory-list .main .btn-area .btn {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 767px) {
  .accessory-list {
    font-size: 1.2rem;
  }

  .accessory-list.col-4>ul>li,
  .accessory-list.col-5>ul>li {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
  }

  .accessory-list.col-4>ul>li:hover,
  .accessory-list.col-5>ul>li:hover {
    border-color: none;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: none .5s ease-out;
    transition: none .5s ease-out;
  }

  .accessory-list .pic {
    float: left;
    width: 110px;
    height: 110px;
    border: 1px solid #e9e9e9;
  }

  .accessory-list .pic a {
    display: block;
    width: 100%;
    height: 100%;
    padding-bottom: 0;
  }

  .accessory-list .main {
    padding: 0 0 0 125px;
  }

  .accessory-list .main:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .accessory-list .main .price {
    float: none;
  }

  .accessory-list .main .quantity {
    float: left;
  }

  .accessory-list .main .name {
    height: auto;
    min-height: 50px;
  }

  .accessory-list .main .btn-area {
    padding: 0;
    clear: none;
    float: right;
  }

  .accessory-list .main .btn-area .btn {
    height: 30px;
    line-height: 30px;
    padding-left: .8em;
    padding-right: .8em;
    font-size: 1rem;
    letter-spacing: .1em;
  }
}

.filter {
  width: 230px;
  padding: 0 20px 0 20px;
  color: #605F5F;
  -webkit-transition: right .5s ease-out;
  transition: right .5s ease-out;
}

.filter dl {
  min-height: 180px;
  margin-bottom: 50px;
}

.filter dt {
  margin-bottom: 30px;
  font-family: "moderat", sans-serif;
  letter-spacing: .25em;
  text-transform: uppercase;
  font-weight: bold;
}

.filter dd {
  line-height: 1.2em;
  margin: 20px 0;
}

.filter dd a {
  display: block;
  padding: 5px 0;
  -webkit-transition: padding-left .3s ease-out;
  transition: padding-left .3s ease-out;
}

.filter dd a:hover,
.filter dd .cur {
  color: #ee7a23;
}

.filter .filter-category ul {
  display: none;
  padding-left: 20px;
}

.filter .filter-category li {
  line-height: 1.2em;
  margin: 10px 0;
}

.filter .filter-category ul>li>ul {
  margin-bottom: 20px;
}

.filter .filter-category ul>li>ul .icon-arrow-down {
  display: none;
}

.filter .filter-category a:hover .icon-arrow-down {
  fill: #ee7a23;
  -webkit-transition: -webkit-transform .3s ease-out;
  transition: -webkit-transform .3s ease-out;
  transition: transform .3s ease-out;
  transition: transform .3s ease-out, -webkit-transform .3s ease-out;
}

.filter .filter-category .icon-arrow-down {
  width: 11px;
  height: 11px;
  fill: #605F5F;
  vertical-align: middle;
  margin-left: 3px;
  -webkit-transition: -webkit-transform .3s ease-out;
  transition: -webkit-transform .3s ease-out;
  transition: transform .3s ease-out;
  transition: transform .3s ease-out, -webkit-transform .3s ease-out;
}

.filter .filter-category .open~ul {
  display: block;
}

.filter .filter-category .open .icon-arrow-down {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.filter .filter-price dd a:hover,
.filter .filter-price dd .cur {
  -webkit-transition: padding-left .3s ease-out;
  transition: padding-left .3s ease-out;
  border-left: 2px solid #ee7a23;
  padding-left: 15px;
}

.filter .filter-price dd .cur {
  font-weight: bold;
}

.filter.filterby-show {
  right: 0;
  -webkit-transition: right .5s ease-out;
  transition: right .5s ease-out;
}

@media only screen and (max-width: 767px) {
  .filter {
    position: fixed;
    right: -230px;
    top: 0;
    z-index: 201;
    height: 100%;
    background: #fff;
    padding: 0;
    margin: 0;
    overflow: auto;
  }

  .filter dl {
    min-height: 0;
    margin: 0;
  }

  .filter dt {
    background: #f0f0f0;
    height: 55px;
    line-height: 55px;
    margin: 0;
    padding-left: 20px;
  }

  .filter dd {
    margin: 0;
  }

  .filter dd a {
    padding: 12px 10px 12px 15px;
    border-bottom: 1px solid #e9e9e9;
  }

  .filter dd li {
    margin: 0;
  }

  .filter .filter-category ul {
    padding-left: 0;
  }

  .filter .filter-category ul li>a {
    padding-left: 30px;
  }

  .filter .filter-category ul li>ul a {
    padding-left: 45px;
  }

  .filter .filter-category .icon-arrow-down {
    float: right;
  }
}

/** search resule **/
/** 搜索结果页 **/
.search-result-wrap {
  background: #f0f0f0;
}

.search-result-wrap .search-result-num {
  padding: 10px 0;
  line-height: 25px;
}

.search-result-wrap .search-result-num strong {
  color: #d1434a;
}

.accessory-result {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.accessory-result .filter {
  margin-right: 25px;
}

.accessory-result .accessory-list-wrap {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.filter-nav {
  height: 55px;
  line-height: 55px;
  margin: 60px 0 30px 0;
  padding: 0 20px;
  background: #fff;
  text-align: right;
  overflow: hidden;
}

.filter-nav a {
  margin: 0 10px;
}

.filter-nav a.cur,
.filter-nav a:hover {
  color: #ee7a23;
}

.filter-nav .sort-up .icon-arrow-short {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.filter-nav .filterby {
  display: none;
  letter-spacing: .25em;
  text-transform: uppercase;
  font-size: 12px;
}

@media only screen and (max-width: 767px) {
  .search-result-wrap {
    background: none;
    padding: 0 10px;
  }

  .filter-nav {
    margin: 0;
    padding: 0 10px;
    background: #f0f0f0;
    border-top: 1px solid #e9e9e9;
    text-align: left;
  }

  .filter-nav:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .filter-nav a {
    float: left;
  }

  .filter-nav .filterby {
    display: block;
    float: right;
  }

  .filter-nav .sortby {
    display: none;
  }

  .accessory-result .filter {
    margin: 0;
  }
}

.icon-arrow-short {
  width: 11px;
  height: 11px;
}

.page-title-accessory {
  display: none;
}

.accessory-title:after {
  visibility: hidden;
  display: block;
  content: " ";
  clear: both;
}

.accessory-title h2 {
  float: left;
}

.accessory-title .accessory-more-link {
  float: right;
  line-height: 30px;
}

.accessory-title .accessory-more-link .icon-arrow-short {
  margin-left: 15px;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.accessory-title .accessory-more-link:hover {
  color: #ee7a23;
}

.accessory-title .accessory-more-link:hover .icon-arrow-short {
  fill: #ee7a23;
}

.accessory-classify {
  position: relative;
}

.accessory-result-page .view-more-normal {
  height: 120px;
  margin-top: 40px;
}

.accessory-result-page .view-more-normal .view-more-btn {
  top: 0;
  padding-top: 40px;
}

@media only screen and (max-width: 767px) {
  .page-title-accessory {
    display: block;
  }

  .accessory-classify {
    padding-bottom: 55px;
  }

  .accessory-title {
    padding-left: 10px;
    padding-right: 10px;
    border: none;
  }

  .accessory-title .accessory-more-link {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
  }

  .accessory-result-page {
    font-size: 1.2rem;
  }

  .accessory-result-page .btn-wrap {
    margin: 0;
  }

  .accessory-result-page .btn-wrap .btn {
    /*line-height: 1.2em;*/
    white-space: normal;
  }

  .accessory-result-page .view-more-normal {
    height: 60px;
    margin-top: 10px;
  }

  .accessory-result-page .view-more-normal .view-more-btn {
    top: 0;
    padding-top: 20px;
  }
}
</style>
