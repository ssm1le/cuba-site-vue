<template>
  <div class="v-header">
    <div class="logo-block">
      <a href="/" class="logo_wrappery">
        <div class="first">
          <div class="second">
            <div class="third">
                <img src="../../public/logo_cuba.svg" class="logo" alt="logo"/>
            </div>
          </div>
        </div>
      </a>
    </div>
    <ul class="navbar">
      <div class="one">
        <li class="item1"><a class="link1" href="/">События</a></li>
        <li class="item2"><a class="link2" href="/">Меню</a></li>
      </div>
      <div class="center"></div>
      <div class="last">
        <li class="item3"><a class="link3" href="/">Контакты</a></li>
        <li class="item4"><div>
          <select class="locale-select">
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select></div></li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-header {
  margin: -88px 0 -50px;
  font-size: 0.8rem;
  position: relative;
  font-family: Podkova, serif;
}

.v-header:before {
  content: "";
  position: absolute;
  background-image: url(../../public/lines.svg);
  background-position: top calc(50% + 154px) center;
  background-size: calc(100% + 67px) auto;
  width: 100vw;
  height: calc(100% - 67px);
  top: 0;
  margin-left: calc((100vw - 100%) / 2 * -1);
  z-index: -1;
}
.logo-block {
  height: 100%;
  padding-top: 15rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  top: 0;
  color: #fff;
}

.logo_wrappery {
  position: relative;
  z-index: 99;
}

a {
  color: #6b1808;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
.first {
  border-radius: 50%;
  border: 3px solid #222d5b;
  box-sizing: border-box;
}

.second {
  border-radius: 50%;
  border: 3px solid #fff;
}

.third {
  border-radius: 50%;
  border: 3px solid #222d5b;
}

.logo {
  border-radius: 50%;
  border-width: 3px;
  border-style: solid;
  border-color: #6b1808;
  background-color: #fff;
  display: block;
  width: 100px;
  height: 100px;
  padding: 8px;
}
.navbar {
  position: absolute;
  z-index: 9;
  bottom: 2.5rem;
  width: 100%;
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  color: #222d5b;
  margin: 0;
}
.one {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.center {
  width: 118px;
}
.one,
.last {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: calc((100% - 118px - 1rem) / 2);
}
.last {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.item1,
.item2,
.item3,
.item4 {
  font-family: Podkova, serif;
  font-size: 1.1618rem;
  margin: 0;
  transition: all 0.15s;
}
.link1,
.link2,
.link3 {
  text-decoration: none;
  color: currentColor;
  position: relative;
}

.item2,
.item4 {
  margin-left: 50%;
}
.item4 .locale-select {
  outline-color: currentColor;
  border: none;
  background-color: transparent;
  color: inherit;
}

@media (max-width: 1023px) {
  .v-header:before {
    background-position: top calc(50% + 109px) center;
  }
  .logo-block {
    padding-top: 10rem;
  }
}
@media (max-width: 767px) {
  .v-header:before {
    background-position: top calc(50% + 52px) center;
    height: calc(100% - 90px);
  }
  .v-header {
    margin-top: 0;
    margin-bottom: 0;
  }
  .navbar {
    position: static;
    z-index: 9;
    bottom: 2.5rem;
    width: 100%;
  }
  .logo-block {
    padding: 2.5rem 16px 0;
  }
}
</style>