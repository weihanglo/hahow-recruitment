# Issues and notes

> Disclaimer: This documentation is only for answering questions of Hahow Frontend recruitment project.

## 1. 如何執行完成的 package

請參考專案最上層的 [README.md](../README.md#-quick-start) 的 Quick Start 一節。如果需要從原始碼建構，請參考 [CONTRIBUTING.md](CONTRIBUTING.md#build-from-source) Build from Source 一節。

## 2. 專案的架構，Web 的架構邏輯

請參考 [architecture.md](architecture.md) 文件。該文件目前僅紀錄部分次項目邏輯。

## 3. 對於第三方 library 的理解及功能簡介

為了達成要求，目前 dependencies 非常之多，先挑幾個 devDependencies 介紹。

- [Babel][babel]：將 ES6+ 的語法轉為所設定的瀏覽器環境，相關生態圈的轉譯器非常盛行，有些 plugin 會實作 [TC39][tc39-proposals] 都還沒到 stage 4 的 proposal，讓開發者可以未來的 ECMAScript 開發 App。本專案導入 preset-env，與以往的 preset-2015 不同的是，開發者可利用 browserslist 相容的語法指定轉譯的多寡程度。另外，目前導入最 beta 版的 Babel，是使用 NPM 的 scope package 如 `@babel/core`、`@babel/preset-env`，導入模組或撰寫 `.babelrc`（現在可以用 `.babelrc.js`）要注意新的寫法。
- [ESLint][eslint]：最通用，客製化程度最高的靜態語法檢查器，在本專案中僅僅用來作為 [Standard][standardjs] style 的 interface。因為 coding styleing 吵也吵不完。還好我都用 Vim。
- [Webpack][webpack]：最熱門的 JavaScript 構建工具，生態圈異常豐富，唯一的缺點就是常常設定一堆 config，過幾天後就看不懂自己當初怎麼設定的。未來 Webpack 4 會支援 WebAssembly，[用 Rust 寫前端][yew]的日子來臨了！
- [Jest][jest]：Facebook 出品的測試框架，基本使用上幾乎算 zero configuration，不過最強的 snapshot testing 還沒有機會親身體驗。
- [Husky][husky]：簡單的 Git hook 小工具，本專案只作為 commit 時的 coding style 檢查。

再來介紹原始碼相關，會包進 production code 的 dependencies。

- [Core.js][core-js]：用在不支援 ES6+ 環境下的 polyfill，本專案僅導入 shims，以支援 IE 11 等無 Promise、Map 和 Set 的瀏覽器環境。與 Babel 的差異是，Babel 專注於轉譯程式碼，而 Core.js 補齊該環境下缺乏的 API 與 Object。 
- [React][react]：React 是近幾年最熱門的前端框架，利用 JSX 和宣告式的程式撰寫 component-based 的 web app，讓開發網頁的概念更貼近其他平台（iOS、Android、Desktop）常見的設計模式。
- [Redux][redux]：本專案導入 Redux 管理 React Component 的 state，透過 Redux 的單向資料流，讓狀態改變更容易掌握。由於 Redux 是一個 general 的狀態管理框架，我們導入 [React-Redux][react-redux] 協助我們做更進一步的整合，區分計算 state 的 container component 與純呈現的 presentational component。
- [Reselect][reselect]：當專案導入 Redux 之後，常常會遇到每個 container component 在計算一樣的 props，徒增負擔。Reselect 這個模組提供有記憶性的 state 計算選擇器，減少重複計算的成本。除此之外，Reselect 最大的優點是將 state 的形狀（shape）與 container component 解耦合，container 僅需導入對應的 selector，不需要知道需要的資料在 `state.heores[0].image`，就可以取得需要的資料，也讓最貼近 presentational component 的 props 可以被測試。
- [Redux Observable][redux-observable]：有些時候，Redux 並不總是能寫出無 side effect 的 action，例如 web app 最常見網路請求就很難維持 pure function。於是我們需要透過一些 middleware 替我們處理非同步，有 side effect 的 action。我們選擇 Redux-Observable，藉由 [RxJS][rxjs] 方便 observable composition 與強大的 operator 們，我們可以很輕易發送各種 action。
- [React Router][react-router]：為了使 Single Page Application 能夠善加利用瀏覽器的 history 功能，許多 SPA 的 router 陸續開發出來，React Router 是 React 生態圈最熱門的 Routing Framework，特色是利用 React 的宣告式寫法，撰寫 `Route` component 來定義 routing rules，並因此能夠達到 **Dynamic Routing** 的效果。本專案使用 React Router 的 DOM 版本，並透過 [React-Router-Redux][react-router-redux] 與 Redux store 整合，使任何 Routing 都不脫離 time travel，讓 Redux Devtool 發揮所長。
- [Blueprint][blueprint]：一個用 TypeScript 寫的 React Component UI library，適合開發資料為主的網站。開發商 Palantir 另一個知名的專案叫做 [TSLint][tslint]。

[babel]: https://babeljs.io/
[blueprint]: http://blueprintjs.com/
[core-js]: https://github.com/zloirock/core-js
[eslint]: https://eslint.org/
[husky]: https://github.com/typicode/husky
[jest]: https://facebook.github.io/jest/
[react-redux]: https://github.com/reactjs/react-redux
[react-router-redux]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
[react-router]: https://reacttraining.com/react-router/
[react]: https://facebook.github.io/react/
[redux-observable]: https://redux-observable.js.org/
[redux]: http://redux.js.org/
[reselect]: https://github.com/reactjs/reselect
[rxjs]: http://reactivex.io/rxjs/
[standardjs]: https://standardjs.com
[tc39-proposals]: https://github.com/tc39/proposals
[tslint]: https://palantir.github.io/tslint/
[webpack]: https://webpack.js.org/
[yew]: https://github.com/DenisKolodin/yew

## 4. 寫註解的原則，什麼狀況下會寫註解

請參考 [CONTRIBUTING.md](CONTRIBUTING.md#commentary) Commentary 一節。原則上原始碼應該要照著 contributing rules 撰寫，實際上這只是自嗨的 guideline。

## 5. 遇到的困難、問題，以及解決的方法

### Q：為什麼 GitHub Page 上的 React Router 不能運行？

這個問題我找了非常久，久到可以一條條列出來到底幹了什麼好事。

1. 懷疑 Webpack production build 的 webpack 設定有誤：直接 serve `dist/` 資料夾，可以正常開啟。排除。
2. 懷疑 GitHub custom domain name 導致 script 存取失敗：開另一個新的 repository，隨便寫個 script，可以正常從 https://weihanglo.tw/repo-name 運行 GitHub Page。排除。
3. 懷疑 DNS server 惡搞：Cloudflare 會將所有 JavaScript 透過 Rocker Loader 轉換為自家的 script type，加速載入，我們去它的 dashboard 上，選擇 Speed > Rocket Loader，把這個 loader 關掉，讓 JavaScript 正常載入，但依舊毫無幫助。
4. 部署到其他平台試試：我決定部署到 [Netlify][netlify] 試試看，結果可以正常運作！真是嚇死我阿嬤了。於是我開始比較兩者的差異，這才領悟到我的 GitHub Page 是在 subpath 之下，可能 React Router 以為自己在 base URL 運行這個 App。
5. React Router 的 browser router 有提供 [`basename`][browser-router-basename] prop，可以動態設置 app 的 base URL。終於找到了！不過我們是使用 React-Router-Redux 的 `ConnectedRouter`，細讀 source code 後發現沒有任何 prop 可以設定 basename，簡直整人。
6. 最後[這個 issue][history-basename-issue] 解救了我，原來 `basename` 這個死小孩躲在 `history` 模組裡面。完成。

[browser-router-basename]: https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string
[netlify]: https://www.netlify.com/
[history-basename-issue]: https://github.com/ReactTraining/react-router/issues/4801

### Q：到底什麼是 Redux Observable 的 Epic？

以前用 [Redux Thunk][redux-thunk] 可以很明確地知道其原理，當 Action creator 回傳一個 function，thunk middleware 就會把 `dispatch` 與 `store` 傳給 action creator，讓其可以派發更多 action 或取得當前的 store state。

Redux Observable 其實蠻燒腦的，本來就跟 RxJS 沒有很熟，畢竟太多 operator 了，這次甚至多了叫 Epic 的鬼東西，還要跟 reducers 一樣先 combine 成 rootEpic，再傳入 `applyMiddleware`。一開始其實不太能理解背後的原理，也沒有太多時間 trace source code，不過官網講得非常清楚：**Action in, action out**。而且是在 reducer 接受 action 之後才會觸發 epic，其實就將 epic 想成用 RxJS 的方式寫 Thunk 就好（事實上也是這樣，我覺得好廢話）。

比較麻煩的點是 RxJS 一整包其實不小，所有我們目前是用 on-demand import 的方式導入 operators，這讓開發流程常常往返在忘記 import operator 與導入該 operator 之間。

[redux-thunk]: https://github.com/gaearon/redux-thunk

### Q：哪一個第三方 React UI Library 比較好用？

我覺得這個是大哉問，[Bootstrap][react-bootstrap] 有它的擁護者，喜歡 Material Design 又有 [React Toolbox][react-toolbox] 和 [Material UI][material-ui] 可以選擇，當然少不了老牌的 [Semantic UI][react-semantic-ui]。React 的 UI library 也是百家爭鳴。我認為選擇 React UI Lirary 有幾個值得關注的點，供各位參考：

- **構建方式**：使用該模組是否需求特殊的構建系統，例如 React Toolbox 需要 [CSS Modules][css-modules] ，如果能和 Webpack 配合更好。構建方式會直接影響到是否能使用該模組。否則可能有命名衝突等 undefined behavior。不可不慎。
- **Code Splitting 程度**：有些模組是叫你 import 一整包 CSS 檔，就和傳統 Bootstrap 一樣，React-Bootstrap 就是這樣，本專案使用的 Blueprint 也是如此。這的確很大一包，但讓使用者方便 toggle class。如果你的頁面同時有非 React 和 React 的 bootstrap，也許同一份 CSS 就夠你用了。
- **Styling 撰寫方式**：為了解決 CSS 沒有 scope 和 namespace 的問題，JavaScript 社群提供了許多解決方案，例如上面提到的 CSS Modules，也有全部寫在 JavaScript 裡面的 [JSS][jss]，或是動態生成 style tag 的 [styled components][styled-components]，各有優缺點，因專案需求和開發者喜好而異。這裡整理了[各大解決方案的特色][styling-comparison]，有空可以瞧瞧。

其實上述三個 checkpoint 互相有耦合關係，例如以 CSS modules 寫 styling 就一定會影響構建方式等等。本專案選擇 Blueprint 只是一個衝動，並沒什麼特別之處，或是恭維貶低哪個方案。

再次聲明，**請衡量專案需求與團隊喜好決定你的 React UI Library**，切勿人云亦云。

[react-bootstrap]: https://react-bootstrap.github.io
[material-ui]: https://material-ui-next.com
[react-toolbox]: http://react-toolbox.io/
[react-semantic-ui]: https://react.semantic-ui.com/
[css-modules]: https://github.com/css-modules/css-modules
[styled-components]: https://www.styled-components.com/
[styling-comparison]: https://github.com/styled-components/comparison
[jss]: https://github.com/cssinjs/jss

### Q：怎麼實作 flexbox 的 last item alignment？

flexbox 是非常好用的一維流式排版解決方案，除了 IE 11 僅支援舊的 spec 之外，主流瀏覽器幾年前就陸續支援。不過行為常常不符合大家對 grid system 的預期。這次要排序四位英雄，我希望當第一個 row 有三個 item 時，剩餘一個 item 應該靠左對齊。但當你用 `justify-content: center` 時最後一個 item 會水平置中；當改用 `justify-content: space-between` 時，若第一個 row 有三個 item，最後一個 row 有兩個 item，則最後一個 row 中間的位置會空出來，就像[這個連結][align-last-row] 所描述的狀況。

幸好，我們的小專案只有四個英雄，我直接用 media query，在特定的寬度下改變 `flex-basis`，直接讓各個狀況對應到一個 row 有4、2、1 個 item（也就是 25%、50%、100% 的 flex-basis）。如果還有其他 flexbox 的問題，可以參考這個人整理 [stackoverflow flexbox 問題大全][flex-box-last-row-questions]。再有更好的解決方案之前，只能等 spec 繼續演進了。

[align-last-row]: https://stackoverflow.com/questions/18744164/
[flex-box-last-row-questions]: https://stackoverflow.com/questions/42176419/
